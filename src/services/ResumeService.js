import axios from "axios";


export default class ResumeService {
    getResumes(){
     axios.get("http://localhost:8080/api/resumes/getAll")
    }
    getResumeCandidateId(){
        axios.get("http://localhost:8080/api/resumes/findAllByCandidateUserId?id="+id)
    }
    
   
}
