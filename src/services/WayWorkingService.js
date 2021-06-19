import axios from "./axios/axios";


export default class WayWorkingService {
getAllWorkings(){
     return axios.get( "http://localhost:8080/api/workings/getAll" )
}
    
}
