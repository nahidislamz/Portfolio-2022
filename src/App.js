import React,{ useState, useEffect } from 'react'
import { About, Contact, Header, Footer, Portfolio, Skills,Spinner,Analyst_Projects } from './components'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from './firebase'

const db = getFirestore(app);

function App() {
  const [about, setAbout] = useState();
  const [project, setProject] = useState([])
  const [a_project, set_a_Project] = useState([])
  const [cv_link, setCV] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getCvLink = async () => {
      var data;
      const querySnapshot = await getDocs(collection(db, "resume"));
      querySnapshot.forEach((doc) => {
        data = doc.data().cv_link
      });
      setCV(data);
      if (data) {
        setLoading(false);
      }
    }
    const getAbout = async () => {
      var data;
      const querySnapshot = await getDocs(collection(db, "about"));
      querySnapshot.forEach((doc) => {
        data = doc.data().descriptions
      });
      setAbout(data);
      if (data) {
        setLoading(false);
      }
    }
    const getProjects = async () => {
      const data = [];  
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
        data.push(
          {
            title: doc.data().title,
            subtitle:doc.data().subtitle,
            image:doc.data().front_image,
            about:doc.data().about,
            features:doc.data().features,
            tech:doc.data().used_technology,
            github: doc.data().github,
            live_demo: doc.data().live_demo
          }
        )
      });
      if (data) {
        setProject(data)
        setLoading(false);
      }
    }

    const get_a_Projects = async () => {
      const data = [];  
      const querySnapshot = await getDocs(collection(db, "analyst_projects"));
      querySnapshot.forEach((doc) => {
        data.push(
          {
            title: doc.data().title,
            image:doc.data().banner,
            notebook:doc.data().notebook,
            colab: doc.data().colab,
          }
        )
      });
      if (data) {
        set_a_Project(data)
        setLoading(false);
      }
    }

    getCvLink();
    getAbout();
    getProjects();
    get_a_Projects();
  }, [about]);




  return (
    <div className="App">
      {
        loading ? <Spinner/> : 
        <>
          <Header cv_link={cv_link}/>
          <About about={about} />
          <Skills />
          <Portfolio data={project}/>
          <Analyst_Projects data={a_project}/>
          <Contact />
          <Footer />
        </>
      }
      
    </div>
  );
}

export default App;
