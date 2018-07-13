import Loadable from 'react-loadable'
import Loading from '../components/Loading';
import _ from 'lodash';
import * as Img from '../resources/index';

const Login = Loadable({loader: () => import('../pages/Login/index'), loading: Loading});
const NotFound = Loadable({loader: () => import('../pages/NotFound/index'), loading: Loading});

// 首页
const HomeMain = Loadable({loader: () => import('../pages/Home/index'), loading: Loading});
const SystemJournal = Loadable({loader: () => import('../pages/Home/System/SystemJournal'), loading: Loading});
const ModelTool = Loadable({loader: () => import('../pages/Home/System/ModelTool'), loading: Loading});

const AdminUser = Loadable({loader: () => import('../pages/Home/System/AdminUser'), loading: Loading});
const OperaLog = Loadable({loader: () => import('../pages/Home/System/OperaLog'), loading: Loading});


export const SystemConfig = {
    systemName: '通用后台 模板',
    systemShortName: '通用后台',
    systemLogo: Img.Logo,

    // 默认页
    index: {path: '/', name: '工作台', exact: true, component: ModelTool},
    model: 1, // 0=简单导航模式，1=高级导航模式

    menu: [
        {
            path: '/system/', name: '首页', exact: true, component: ModelTool, subMenu: [
                {path: '/system/system-journal', name: '登录日志', exact: true, component: SystemJournal},
                {path: '/system/model-tool', name: '模型工具', exact: true, component: ModelTool},
                {path: '/system/admin-user', name: '顾问管理', exact: true, component: AdminUser},
                {path: '/system/opera-log', name: '操作日志', exact: true, component: OperaLog},
            ]
        },
    ]
};

export function getMainNav() {
    return _.take(SystemConfig.menu, SystemConfig.menu.length).map(nav => (
        {
            path: nav.path,
            exact: !!nav.exact,
            name: nav.name,
        }
    )).filter(f => f.path)
}

export function genRouter() {
    let routeBase = [
        {path: '/login', name: '登录页', exact: true, component: Login},
        {
            // 系统主页
            path: '/', name: '首页', component: HomeMain, routes: []
        },
        {path: '*', exact: true, component: NotFound},
    ];

    let homeIndex = routeBase.findIndex(r => r.path === '/');
    routeBase[homeIndex].routes.push(SystemConfig.index);

    let stack = _.take(SystemConfig.menu, SystemConfig.menu.length);

    while (stack.length > 0) {
        let nav = stack.shift();

        if (nav.path && !~nav.path.indexOf('http')) {
            routeBase[homeIndex].routes.push({
                path: nav.path,
                exact: !!nav.exact,
                name: nav.name,
                component: nav.component
            })
        }

        if (nav.subMenu && nav.subMenu.length > 0) {
            stack.push(...nav.subMenu);
        }
    }

    routeBase[homeIndex].routes.push({path: '*', exact: true, component: NotFound});
    return routeBase;
}
