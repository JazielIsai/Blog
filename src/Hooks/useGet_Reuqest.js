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
            setGetData({
                error: null,
                data: response.data.articles,
                success: true
            })
        })
    },[nameService])

    return getData;
}

