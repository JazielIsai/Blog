
import {baseUrl} from '../shared/baseUrl';

export async function requestPost(nameService, formData) {

    let responsePost = null;

    responsePost = await fetch(baseUrl + '')
        .then(response => response)
        .catch(err => err.message)
    

    return responsePost;
}

