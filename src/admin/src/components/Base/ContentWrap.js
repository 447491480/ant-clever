import React from 'react';
import BaseComponent from '../Base/BaseComponent';
import { Breadcrumb } from 'antd';



class ContentWrap extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{padding: '0px 20px'}} className="content-info">
                 <div className="breadcumb-box">
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="">首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item>系统首页</Breadcrumb.Item>
                    </Breadcrumb>       
                </div>    

                <div className="margin-top-10">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ContentWrap;