import React from 'react'
import {useParams, Navigate} from 'react-router-dom';


function RedirectSearch() {
    const {search} = useParams();
    return (
        <>
            <Navigate
                to={'/blog/searching/' + search}
                replace
            />
        </>
    )
}

export default RedirectSearch
