import Dynamic from '../components/Dynamic';

const Home = Dynamic(() => import('../pages/Home/index'));


const Login = Dynamic(() => import('../pages/Login/index'));
const NotFound = Dynamic(() => import('../pages/NotFound/index'));

export default [
    {path: '/', exact: true, component: Home},

    {path: '/login', exact: true, component: Login},

    {path: '*', component: NotFound},

]