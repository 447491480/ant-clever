import BaseComponent from '../../components/BaseComponent'
import {Link,withRouter} from  'react-router-dom'
import {Row,Col,Icon,Form,Button,Checkbox,Input,Menu,Dropdown,Tabs} from 'antd'
import React from 'react'
import styles from './index.module.css'
import Request from '../../utils/Request'
import {connect} from 'react-redux'
import CommonUtil from '../../utils/CommonUtil'
import * as publicImages from '../../resources/index'
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">基本资料</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">安全设置</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">退出</a>
        </Menu.Item>
    </Menu>
);


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Home extends BaseComponent {
    constructor() {
        super();

        this.state = {
            open:true,
            mini:false,
            collapsed: false,
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div>
                {/*头部*/}
                {/*移动端端当蒙层显示时,headerSelect*/}
                {/*PC端切换 headerSelectPc*/}
                <div className={this.state.open?styles.headerSelect:styles.headerSelectPc}>
                    <div className={styles.headerLeft}>
                        {/*PC端侧边栏切换按钮*/}
                        <div className={styles.morePc}><img src={publicImages.MORE} onClick={this.toggleCollapsed} alt=""/></div>
                        {/*移动端切换按钮*/}
                        <div className={styles.moreMobile}><img src={publicImages.MORE} alt=""/></div>
                    </div>
                    <div className={styles.headerRight}>
                        <div><img src={publicImages.INFORMATION} alt=""/></div>
                        <div><img src={publicImages.DRAW} alt=""/></div>
                        <div>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" href="#">
                                    贤心 <Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>


                {/*侧边栏完整*/}
                {/*移动端端当蒙层显示时,sideSelect*/}
                {/*PC端切换 让side diplay:'none'*/}
                {/*<div className={this.state.mini?styles.side:styles.sideSelect} >*/}
                    {/*<div className={styles.sideScroll}>*/}
                        {/*<div className={styles.sideHead}> <span>layuiAdmin Pro</span> </div>*/}
                    {/*</div>*/}
                    {/*<Menu*/}
                        {/*defaultSelectedKeys={['1']}*/}
                        {/*defaultOpenKeys={['sub1']}*/}
                        {/*mode="inline"*/}
                        {/*style={{backgroundColor:'#20222a'}}*/}
                        {/*theme="dark"*/}
                    {/*>*/}
                        {/*<SubMenu key="sub1" title={<span><Icon type="mail" /><span onClick={this.add}>Navigation One</span></span>}>*/}
                            {/*<MenuItemGroup key="g1" title="Item 1">*/}
                                {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
                                {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                            {/*</MenuItemGroup>*/}
                            {/*<MenuItemGroup key="g2" title="Item 2">*/}
                                {/*<Menu.Item key="3">Option 3</Menu.Item>*/}
                                {/*<Menu.Item key="4">Option 4</Menu.Item>*/}
                            {/*</MenuItemGroup>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>*/}
                            {/*<Menu.Item key="5">Option 5</Menu.Item>*/}
                            {/*<Menu.Item key="6">Option 6</Menu.Item>*/}
                            {/*<SubMenu key="sub3" title="Submenu">*/}
                                {/*<Menu.Item key="7">Option 7</Menu.Item>*/}
                                {/*<Menu.Item key="8">Option 8</Menu.Item>*/}
                            {/*</SubMenu>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>*/}
                            {/*<Menu.Item key="9">Option 9</Menu.Item>*/}
                            {/*<Menu.Item key="10">Option 10</Menu.Item>*/}
                            {/*<Menu.Item key="11">Option 11</Menu.Item>*/}
                            {/*<Menu.Item key="12">Option 12</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub5" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>*/}
                            {/*<MenuItemGroup key="g3" title="Item 1">*/}
                                {/*<Menu.Item key="13">Option 1</Menu.Item>*/}
                                {/*<Menu.Item key="14">Option 2</Menu.Item>*/}
                            {/*</MenuItemGroup>*/}
                            {/*<MenuItemGroup key="15" title="Item 2">*/}
                                {/*<Menu.Item key="16">Option 3</Menu.Item>*/}
                                {/*<Menu.Item key="17">Option 4</Menu.Item>*/}
                            {/*</MenuItemGroup>*/}
                        {/*</SubMenu>*/}
                    {/*</Menu>*/}
                {/*</div>*/}


                {/*侧边栏部分*/}
                {/*PC端切换 让side diplay:'block'*/}
                {/*{*/}
                    {/*this.state.mini?(*/}
                        {/*<div className={styles.sidePortion} >*/}
                            {/*<div className={styles.sideScrollPortion}>*/}
                                {/*<div className={styles.sideHeadPortion}><img src={publicImages.LITTLE_LOGO} alt=""/></div>*/}
                            {/*</div>*/}
                            {/*<Menu style={{backgroundColor:'#20222a',width:'61px'}} theme="dark">*/}
                                {/*<SubMenu key="sub1" title={<span><Icon type="mail" /></span>}>*/}
                                    {/*<Menu.Item key="1">组件</Menu.Item>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu key="sub2" title={<span><Icon type="appstore" /></span>}>*/}
                                    {/*<Menu.Item key="2">模板</Menu.Item>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu key="sub3" title={<span><Icon type="setting" /></span>}>*/}
                                    {/*<Menu.Item key="3">应用</Menu.Item>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu key="sub4" title={<span><Icon type="mail" /></span>}>*/}
                                    {/*<Menu.Item key="4">高级</Menu.Item>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu key="sub5" title={<span><Icon type="appstore" /></span>}>*/}
                                    {/*<Menu.Item key="5">用户</Menu.Item>*/}
                                {/*</SubMenu>*/}
                                {/*<SubMenu key="sub6" title={<span><Icon type="setting" /></span>}>*/}
                                    {/*<Menu.Item key="6">设置</Menu.Item>*/}
                                {/*</SubMenu>*/}
                            {/*</Menu>*/}
                        {/*</div>*/}
                    {/*):null*/}
                {/*}*/}
                {/*<div className={styles.side}>*/}
                    {/*<div className={styles.sideScroll}>*/}
                        {/*<div className={styles.sideHead}>*/}
                            {/*/!*<img src={publicImages.LOGO} alt=""/>*!/*/}
                            {/*<img src={publicImages.LITTLE_LOGO} alt=""/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className={styles.sideMenu}>
                        <div>
                            <Menu
                                defaultSelectedKeys={['2']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >
                                <Menu.Item key="1" style={{height:'70px',lineHeight:'70px'}}>
                                    <div style={{height:'70px',lineHeight:'70px'}}>
                                        <img src={publicImages.LITTLE_LOGO} alt="" className={styles.littleLogoImg}/>
                                        <span>红蜂巢</span>
                                    </div>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="desktop" />
                                    <span>Option 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="inbox" />
                                    <span>Option 3</span>
                                </Menu.Item>
                                <SubMenu key="sub1" title={<span><Icon type="mail" /><span className={styles.mrThree}>Navigation One</span></span>}>
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span className={styles.mrThree}>Navigation Two</span></span>}>
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="appstore" /><span className={styles.mrThree}>Navigation Three</span></span>}>
                                    <Menu.Item key="13">Option 9</Menu.Item>
                                    <Menu.Item key="14">Option 10</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="15">Option 11</Menu.Item>
                                        <Menu.Item key="16">Option 12</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </Menu>
                        </div>
                    </div>
                {/*</div>*/}
                {/*页面标签*/}
                {/*移动端端当蒙层显示时,headerLabelSelect*/}
                {/*PC端切换 headerLabelSelectPc*/}
                <div className={this.state.open?styles.headerLabelSelect:styles.headerLabelSelectPc}>
                        <Row>
                            <Col xs={24} sm={24} md={24}>
                                <p>一直以来，layui 秉承无偿开源的初心，虔诚致力于服务各层次前后端 Web 开发者，在商业横飞的当今时代，这一信念从未动摇。即便身单力薄，仍然重拾决心，埋头造轮，以尽可能地填补产品本身的缺口。</p>
                                <p>在过去的一段的时间，我一直在寻求持久之道，已维持你眼前所见的一切。而 layuiAdmin 是我们尝试解决的手段之一。我相信真正有爱于 layui 生态的你，定然不会错过这一拥抱吧。</p>
                                <p>子曰：君子不用防，小人防不住。请务必通过官网正规渠</p>
                                <p>一直以来，layui 秉承无偿开源的初心，虔诚致力于服务各层次前后端 Web 开发者，在商业横飞的当今时代，这一信念从未动摇。即便身单力薄，仍然重拾决心，埋头造轮，以尽可能地填补产品本身的缺口。</p>
                                <p>在过去的一段的时间，我一直在寻求持久之道，已维持你眼前所见的一切。而 layuiAdmin 是我们尝试解决的手段之一。我相信真正有爱于 layui 生态的你，定然不会错过这一拥抱吧。</p>
                                <p>子曰：君子不用防，小人防不住。请务必通过官网正规渠</p>
                                <p>一直以来，layui 秉承无偿开源的初心，虔诚致力于服务各层次前后端 Web 开发者，在商业横飞的当今时代，这一信念从未动摇。即便身单力薄，仍然重拾决心，埋头造轮，以尽可能地填补产品本身的缺口。</p>
                                <p>在过去的一段的时间，我一直在寻求持久之道，已维持你眼前所见的一切。而 layuiAdmin 是我们尝试解决的手段之一。我相信真正有爱于 layui 生态的你，定然不会错过这一拥抱吧。</p>
                                <p>子曰：君子不用防，小人防不住。请务必通过官网正规渠</p> <p>一直以来，layui 秉承无偿开源的初心，虔诚致力于服务各层次前后端 Web 开发者，在商业横飞的当今时代，这一信念从未动摇。即便身单力薄，仍然重拾决心，埋头造轮，以尽可能地填补产品本身的缺口。</p>
                                <p>在过去的一段的时间，我一直在寻求持久之道，已维持你眼前所见的一切。而 layuiAdmin 是我们尝试解决的手段之一。我相信真正有爱于 layui 生态的你，定然不会错过这一拥抱吧。</p>
                                <p>子曰：君子不用防，小人防不住。请务必通过官网正规渠</p> <p>一直以来，layui 秉承无偿开源的初心，虔诚致力于服务各层次前后端 Web 开发者，在商业横飞的当今时代，这一信念从未动摇。即便身单力薄，仍然重拾决心，埋头造轮，以尽可能地填补产品本身的缺口。</p>
                                <p>在过去的一段的时间，我一直在寻求持久之道，已维持你眼前所见的一切。而 layuiAdmin 是我们尝试解决的手段之一。我相信真正有爱于 layui 生态的你，定然不会错过这一拥抱吧。</p>
                                <p>子曰：君子不用防，小人防不住。请务必通过官网正规渠</p> <p>一直以来，layui 秉承无偿开源的初心，虔诚致力于服务各层次前后端 Web 开发者，在商业横飞的当今时代，这一信念从未动摇。即便身单力薄，仍然重拾决心，埋头造轮，以尽可能地填补产品本身的缺口。</p>
                                <p>在过去的一段的时间，我一直在寻求持久之道，已维持你眼前所见的一切。而 layuiAdmin 是我们尝试解决的手段之一。我相信真正有爱于 layui 生态的你，定然不会错过这一拥抱吧。</p>
                                <p>子曰：君子不用防，小人防不住。请务必通过官网正规渠</p> <p>一直以来，layui 秉承无偿开源的初心，虔诚致力于服务各层次前后端 Web 开发者，在商业横飞的当今时代，这一信念从未动摇。即便身单力薄，仍然重拾决心，埋头造轮，以尽可能地填补产品本身的缺口。</p>
                                <p>在过去的一段的时间，我一直在寻求持久之道，已维持你眼前所见的一切。而 layuiAdmin 是我们尝试解决的手段之一。我相信真正有爱于 layui 生态的你，定然不会错过这一拥抱吧。</p>
                                <p>子曰：君子不用防，小人防不住。请务必通过官网正规渠</p>
                            </Col>
                        </Row>
                </div>

                {/*弹框*/}
                {
                    this.state.open?null: (
                        <div className={styles.bodyShade} style={{display:'block'}}>

                        </div>
                    )
                }

            </div>


        )
    }
}

export default withRouter(connect()(Home))

