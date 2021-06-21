import axios from "axios";


export default class JobTitleService {

    getJobTitles(){
       return axios.get( "http://localhost:8080/api/titles/getAll" );
    }
}
