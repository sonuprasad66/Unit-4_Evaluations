import {Button} from "@chakra-ui/react";
import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import {addHospital, fetchdoctors, getHospital, postDoctors} from "../Api";
import {AddDoctor} from "./AddDoctorModal";
import {Hospital} from "./AddHospitalModal";

function Home() {
  const [data, setdata] = useState([]);

const [doctors,setdoctors]=useState([])

  function handleHospitaldata(form) {
    // console.log(form);


    addHospital(form).then((res) => console.log(res));
  }
  useEffect(() => {
    fetchHospitals();
    getDoctors()
  }, []);

  const fetchHospitals = () => {
    getHospital().then((res) => setdata(res.data));
  };


  function handleSave(datasave){
    postDoctors(datasave).then(res=>console.log(res))

  }
//fetch all doctors
function getDoctors(){
    fetchdoctors().then(res=>{setdoctors(res.data)
    console.log(res.data)
    
    })

}
  return (
    <div>
      <Hospital handleHospitaldata={handleHospitaldata} />
      <AddDoctor data ={data} handleSave={handleSave} />
    </div>
  );
}

export default Home;
