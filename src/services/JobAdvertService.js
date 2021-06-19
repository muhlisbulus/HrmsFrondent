import axios from "axios";



export default class JobAdvertService {
    getJobActive(){
        return axios.get("http://localhost:8080/api/jobs/findByActiveTrue")
    }
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobs/getall")
    }
    getPassiveAdvertisements() {
        return axios.get("/adversitements/getAllPassive")
    };
    getJobAdds(values){
        return axios.post("http://localhost:8080/api/jobs/add",values)
    }

  getPassiveJobActive(id,active){
      return axios.put("http://localhost:8080/api/jobs/updateActive?active=true&id="+active+"&id="+id)
  }
}
