import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import {navPath} from './path';
import Error from "../components/Error";
import Article from '../components/Article';
import Search from '../components/Search';
import RedirectSearch from './RedirectSearch';
import CreatedArticle from '../components/CreatedArticle';
import EditArticle from '../components/EditArticle';

function RoutesNav() {
    return (
        <Routes>
            {
                navPath.map( (route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                ))
            }
            <Route path="/blog/article/:id" element={<Article />}/>
            <Route path="/blog/searching/:search" element={<Search />}/>
            <Route path="/blog/create" element={<CreatedArticle/>}/>
            <Route path="/blog/edit/:id" element={<EditArticle/>}/>
            <Route path="/redirect/:search" element={<RedirectSearch/> }/>
            <Route element={Error} />
        </Routes>
    )
}

export default RoutesNav;
