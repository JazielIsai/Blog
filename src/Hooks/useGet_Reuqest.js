import {useState, useEffect} from 'react'
import {baseUrl} from '../shared/baseUrl';
import axios from 'axios'

export function useGet_Request(nameService) {
    
    const [getData, setGetData] = useState({
        error: null,
        data: null,
        success: null
    });

    useEffect( () => {
        axios.get(baseUrl + nameService)
        .then(response => {
            console.log('response', response);
            setGetData({
                error: null,
                data: response.data.articles !== undefined ? response.data.articles : response.data.article,
                success: true
            })
        })
        .catch(err=>{
            setGetData({
                error: null,
                data: null,
                success: false
            })
        })
    },[nameService])

    return getData;
}

