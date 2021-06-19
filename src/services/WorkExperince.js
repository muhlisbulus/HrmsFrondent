import axios from "axios";


export default class WorkExperince {
    getWorkExperiences(){
        axios.get("http://localhost:8080/api/works/getAll")
    }
  
}
