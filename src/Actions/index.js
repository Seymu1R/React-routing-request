import axios from "axios";
export class HpttRequest {
  baseUrl;
 
  constructor(url){
    this.baseUrl=url
  }

  async get(endPoint){  
     return await axios.get(`${this.baseUrl}/${endPoint}`)
  }
  async post (endPoint,data){
    return await axios.post(`${this.baseUrl}/${endPoint}`,data)
  }  
  async put (endPoint,data,id){
    return await axios.put(`${this.baseUrl}/${endPoint}/${id}`,data)
  } 
  async patch (endPoint,data,id){
    return await axios.patch(`${this.baseUrl}/${endPoint}/${id}`,data)
  } 
}