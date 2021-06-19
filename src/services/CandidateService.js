import axios from 'axios'
import React from 'react'

export default class CandidateService {
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }
   
}
