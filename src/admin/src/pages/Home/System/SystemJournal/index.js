import React from 'react'
import {withRouter} from 'react-router-dom'
import {Layout, Menu, Breadcrumb, Table, Icon, Divider, Input} from 'antd'
import {connect} from 'react-redux'
import Screen from "../../../../components/Base/Screen";
import ContentWrap from "../../../../components/Base/ContentWrap";
import Immutable from 'immutable';

const columns = [{
    title: '时间',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '地区',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '浏览器',
    dataIndex: 'address',
    key: 'address',
}];

const data = [
    {
        key: '1',
        name: ' 2018-12-12 14:36:21',
        age: "安徽省合肥市",
        address: 'Safari ',
    },
    {
        key: '2',
        name: ' 2018-12-12 14:36:21',
        age: "安徽省合肥市",
        address: 'Safari ',
    }
    ,
    {
        key: '3',
        name: ' 2018-12-12 14:36:21',
        age: "安徽省合肥市",
        address: 'Safari ',
    }
];

class SystemJournal extends Screen {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ContentWrap>
                <div className="white-bg ">
                    <div className="journal-infor">
                        <Table columns={columns} dataSource={data} bordered={true}/>
                    </div>
                 </div>   
            </ContentWrap>
        )
    }
}

export default withRouter(connect()(SystemJournal))

