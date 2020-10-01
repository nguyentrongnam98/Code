import axios from 'axios';
import * as config from '../contanst/config';

export default function callApi(endpoint,method='get',data){
  return  axios({
    method:method,
    url:`${config.API_URL}/${endpoint}`,
    data:data
})
.catch(err=>{
  console.log(err)
})
}