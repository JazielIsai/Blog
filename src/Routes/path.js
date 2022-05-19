import Home from '../components/Home';
import Blog from '../components/Blog';
import Formulario from '../components/Formulario';

export const navPath = [
    {
        to: '/',
        path: '/',
        name: 'Inicio',
        component: <Home/>
    },
    {
        to: '/blog',
        path: '/blog',
        name: 'Blog',
        component: <Blog />
    },
    {
        to: '/form',
        path: '/form',
        name: 'Formulario',
        component: <Formulario/>
    },
    {
        to: '/page1',
        path: '/page1',
        name: 'Pagina 1',
        component: ''
    },
    {
        to: '/page2',
        path: '/page2',
        name: 'Pagina 2',
        component: ''
    },
    
]