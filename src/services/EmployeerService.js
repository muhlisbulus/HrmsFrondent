import axios from "axios";


export default class EmployeerService {
    getEmployers(){
        return axios.get( "http://localhost:8080/api/employers/getall" )
    }
    
}
