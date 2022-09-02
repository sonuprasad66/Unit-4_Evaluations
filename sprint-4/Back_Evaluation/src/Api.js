import axios from "axios";

export function addHospital(data) {
  //   console.log(data, "dstgagh");
  return axios.post(`http://localhost:3004/posts`, data);
}
// get hospital data
export function getHospital() {
  return axios.get(`http://localhost:3004/posts`);
}
// doctors post
export function postDoctors(doc) {
  return axios.post(`http://localhost:3004/doctors`, doc);
}
//doc fetch
export function fetchdoctors() {
  return axios(`http://localhost:3004/doctors`);
}

///single person
export function singledoc({id}){
    return axios.get(`http://localhost:3004/doctors/${id}`)
}


// patch data
export function Updatedata(id,newdata){
    console.log(newdata,"unique")
    return axios.patch(`http://localhost:3004/doctors/${id}`,{
        name:newdata.name,
        hospital:newdata.hospital,
        spec:newdata.spec,
        salary:newdata.salary
    })
}
