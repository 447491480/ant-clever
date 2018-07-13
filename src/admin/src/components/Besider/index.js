import 'rc-drawer-menu/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer-menu';
import SiderMenu from './SiderMenu';
import BaseComponent from '../Base/BaseComponent';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Img from "../../resources";
import styles from './index.module.css'

class Besider extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        return this.props.isMobile ? (
            <DrawerMenu
                parent={null}
                level={null}
                iconChild={null}
                open={!this.props.collapsed}
                onMaskClick={() => {
                    this.onSetValueToStore(['root', 'app', 'collapsed'], true);
                }}
                onHandleClick={()=>{
                    this.onSetValueToStore(['root', 'app', 'collapsed'], !this.props.collapsed);
                }}
                width="256px"
            >
                <div className="logo flex-box" style={{borderBottom:'1px solid #eee'}}>
                    <div className={styles.logoInfor}>
                        <img className="logo-img" src={Img.Logo} style={{margin: '0 0.2rem'}}/>
                        <h2 className="logo-text" style={{marginTop:'.1rem'}}>亚太名典</h2>
                    </div>
                </div>

                <SiderMenu {...this.props} collapsed={false} />
            </DrawerMenu>
        ) : (
            <SiderMenu {...this.props} />
        )
    }
}

export default withRouter(connect(state=>({
    collapsed: state.root.app.get('collapsed'),
    isMobile: state.root.app.get('isMobile'),
}))(Besider));
