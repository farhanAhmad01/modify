import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async() => {
    setLoading(true)
    try {
      let response = await axios.get("https://course-api.com/react-tours-project");
      setTour(response.data);
      setLoading(false)
    } catch (err) {
      console.log("err", err);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  if(loading){
    return(
      <>
      <Loading/>
      </>
    )
  }



  return <div className="App">
    <Tours tour={tour}/>
  </div>;
}

export default App;
