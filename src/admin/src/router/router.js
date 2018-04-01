import Loadable from 'react-loadable'
import Loading from '../components/Loading';

const Home = Loadable({loader:() => import('../pages/Home/index'),loading:Loading});
const Login = Loadable({loader:() => import('../pages/Login/index'),loading:Loading});


export default [
    {path: '/', exact: true, component: Home},
    {path: '/login', exact: true, component: Login},

]