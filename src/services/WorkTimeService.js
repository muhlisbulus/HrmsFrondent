import axios from "./axios/axios";


export default class WorkTimeService {
    getWorkTimes(){
        axios.get("http://localhost:8080/api/worktimes/getAll")
    }
    
}
