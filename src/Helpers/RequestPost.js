import axios from 'axios';
import {baseUrl} from '../shared/baseUrl';

export async function requestPost(nameService, article, uploadImage=null) {

    let responsePost = await axios.post(baseUrl + nameService, article)
        .then(response => {
            // console.log(response.data);
            if(uploadImage !== null) {
                //get id of the article
                let articleId = response.data.article._id;
                // console.log('articleId', articleId, response);

                //create formDara and add the file
                const formData =  new FormData();
                formData.append('file0',uploadImage, uploadImage.name);

                //peticion ajax
                return axios.post(baseUrl + 'upload-image/' + articleId, formData)
                    .then(res => {
                        return "succes";
                    })
                    .catch(err => {
                        console.log(err);
                        return "succes";
                    })
                    
            } else {
                return "succes";
            }
        })
        .catch(err => {
            // console.log(err);
            // responsePost = err.message;
        })
    

    return responsePost;
}

