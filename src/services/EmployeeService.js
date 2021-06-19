import axios from "axios";


export default class EmployeeService {
    getEmployees(){
        axios.get("http://localhost:8080/api/employees/getall")
    }
   
}
