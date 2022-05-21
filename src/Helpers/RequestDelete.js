import axios from 'axios'
import {baseUrl} from '../shared/baseUrl';

export async function requestDelete(nameService) {
    
    let response = await axios.delete(baseUrl + nameService)
        .then(response =>{
            return 'delete'
        })
        .catch(error =>{
            return 'error'
        })

    return response;
}
