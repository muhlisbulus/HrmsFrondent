import axios from "axios";


export default class ResumeService {
    getResumes(){
     return axios.get("http://localhost:8080/api/resumes/getAll")
    }
    getResumeCandidateId(){
        return axios.get("http://localhost:8080/api/resumes/findAllByCandidateUserId?id="+id)
    }
    
   
}
