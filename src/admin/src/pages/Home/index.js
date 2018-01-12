import BaseComponent from '../../components/BaseComponent'
import {Link,withRouter} from  'react-router-dom'
import {Carousel,Row,Col,Tabs} from 'antd'
import React from 'react'
import './index.css'
import * as indexImages from '../../resources/index'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Player,BigPlayButton,LoadingSpinner,ControlBar} from  'video-react';
import Request from '../../utils/Request'
import {connect} from 'react-redux'
import CommonUtil from '../../utils/CommonUtil'
import * as blogAction from '../../redux/actions/blogAction';


const TabPane = Tabs.TabPane;
class Home extends BaseComponent {
    constructor(props,context) {
        super(props,context);
        this.state = {
            templateTotal:null,
            sceneTotal:null,
            topFiveHotTemplate:null,
            topCategory:null,
            topFourArticle:null
        };
        this.getData = this.getData.bind(this);
        this.formatTopCategory = this.formatTopCategory.bind(this);
        this.goTemplate = this.goTemplate.bind(this);
        this.goBlogDetail = this.goBlogDetail.bind(this);
    }

    async componentDidMount(){
        await this.getData()
    }

    async getData(){
        let ret = await Request.homeList();
        if(ret.status === 0){
            let data = ret.data;
            data.topCategory = this.formatTopCategory(data.topCategory);
            this.setState({
                templateTotal:data.templateTotal,
                sceneTotal:data.sceneTotal,
                topFiveHotTemplate:data.topFiveHotTemplate,
                topCategory:data.topCategory,
                topFourArticle:data.topFourArticle,
            })
        }else {
            return CommonUtil.toast(ret.msg);
        }

    }


    goBlogDetail(item) {
        this.props.dispatch({type:blogAction.BLOG_DETAIL,payload:item});
        this.props.history.push(`/blog/blog-detail`);
        CommonUtil.windowScrollTop();
    }


    formatTopCategory(data){
        let temp = [];
        for(let i=0;i<data.length;i+=4){
            temp.push(data.slice(i,i+4));
        }


        for(let i=0;i<temp.length;i++){
            let innerTemp = [];
            for(let j=0;j<temp[i].length;j+=2){
                innerTemp.push(temp[i].slice(j,j+2))
            }
            temp[i] = innerTemp;
        }

        return temp
    }

    goTemplate(item){
        let category = item.val;
        this.props.history.push(`/template?category=${encodeURIComponent(category)}`);
        CommonUtil.windowScrollTop();
    }




    render() {

        const videoSrc = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
        const TabPlayer = (
            <div>
                <Player ref="player" poster={indexImages.VIDEW_START_BG}>
                    <BigPlayButton position="center" />
                    <source src={videoSrc} />
                    <LoadingSpinner/>
                </Player>
            </div>
        );


        return (
            <div>
                {/*head start*/}
                <Header/>
                {/*head end*/}
                {/*banner start*/}
                <div className="bannerAll">
                    <Row className="banner">
                        {/*<Col xs={24} sm={24} md={24}>*/}
                            {/*<Carousel>*/}
                                {/*<div>*/}
                                    {/*<img className="banner-img" src={indexImages.BANNER_IMAGE}></img>*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                    {/*<img className="banner-img" src={indexImages.BANNER_IMAGE}></img>*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                    {/*<img className="banner-img" src={indexImages.BANNER_IMAGE}></img>*/}
                                {/*</div>*/}
                             {/*</Carousel>*/}
                        {/*</Col>*/}
                        <Col xs={24} sm={24} md={24}>
                            <img className="banner-img" src={indexImages.BANNER_IMAGE}></img>
                        </Col>
                    </Row>
                    <Row className="bannerContent">
                        <Col xs={24} sm={24} md={24} className="bannerHead" >视频制作从未如此简单</Col>
                        <Col xs={24} sm={24} md={24} className="bannerSubHead">红蜂巢为您提供最专业的视频制作服务，红蜂巢为您提供最专业的视频制作服务</Col>
                        <Col xs={12} sm={12} md={12} className=""><Link to="/feature" className="about">了解更多</Link></Col>
                        <Col xs={12} sm={12} md={12} className=""><Link to="/register" className="free">免费注册</Link></Col>
                    </Row>
                </div>

                {/*banner end*/}
                {/*nav start*/}
                <Row className="nav">
                    <Col xs={12} sm={8} md={4}><img src={indexImages.NAV_ONE}></img></Col>
                    <Col xs={12} sm={8} md={4}><img src={indexImages.NAV_TWO}></img></Col>
                    <Col xs={12} sm={8} md={4}><img src={indexImages.NAV_THREE}></img></Col>
                    <Col xs={12} sm={8} md={4}><img src={indexImages.NAV_FOUR}></img></Col>
                    <Col xs={12} sm={8} md={4}><img src={indexImages.NAV_FIVE}></img></Col>
                    <Col xs={12} sm={8} md={4}><img src={indexImages.NAV_SIX}></img></Col>
                </Row>
                {/*nav end*/}
                {/*introduce start*/}
                <Row className="introduce" style={{zIndex:5}}>
                    <Col xs={24} sm={24} md={11} className="introduceLeft">
                        <p className="introduceHead">为什么是红蜂巢</p>
                        <p className="introduceSubHead">用时尚的液体飞溅显示您的标志。 使用这个创意，美丽和艺术的标志模板，以
                            丰富多彩和富有表现力的方式展示您的公司标志。 非常适合介绍和旅行视频，
                            作为大厅背景，或作为开始演示的方式。 只需将您的徽标上传到透明背景上，
                            我们就会负责其余的事情。 今天免费试用。</p>
                        <p className="introduceSubHead">
                            用时尚的液体飞溅显示您的标志。 使用这个创意，美丽和艺术的标志模板，以
                            丰富多彩和富有表现力的等丰富的广告费都好好感受更好方
                        </p>
                    </Col>
                    <Col xs={24} sm={24} md={{span:12,push:1}} className="introduceRight">
                        {TabPlayer}
                    </Col>

                </Row>
                {/*introduce end*/}
                {/*design start*/}
                <Row className="design">
                    <Col xs={24} sm={24} md={24} className="designHead">
                        <p>为各类应用场景而设计</p>
                    </Col>
                </Row>
                <Row className="design">
                    <Col xs={24} sm={24} md={24} className="designSubHead">
                        <p>超过百款专业团队精心设计的视频模板，使用它们您也可以立刻做出惊艳的视频</p>
                    </Col>
                </Row>

                {
                    this.state.topCategory && this.state.topCategory.map((firstItem,index) => {

                        return (
                            <Row className='design' key={index}>
                                {
                                    index === 0 ? (
                                        <div>
                                            <Col xs={24} sm={11} md={11} className="designRightStyle">
                                                <img src={indexImages.RED_BG} className="designLeftImage" alt=""/>
                                                <div className="redBgTop">
                                                    <div>
                                                        <p className="designLeftTopHead">{this.state.templateTotal}</p>
                                                        <p className="designLeftTopSubHead">个模板</p>
                                                    </div>
                                                    <div>
                                                        <p className="designLeftTopHead">{this.state.sceneTotal}</p>
                                                        <p className="designLeftTopSubHead">种场景</p>
                                                    </div>
                                                </div>
                                                <div className="hotVideo">
                                                    <p>热门视频</p>
                                                </div>
                                                <div className="hotVideoStyleAll">
                                                    {
                                                        this.state.topFiveHotTemplate && this.state.topFiveHotTemplate.map( (item) => {
                                                            return (
                                                                <p key={item.id} className="hotVideoStyle">{item.title}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </Col>
                                            <Col xs={24} sm={12} md={12}>
                                                {
                                                    firstItem.map((secondItem,idx) => {
                                                        return (
                                                            <Row key={idx} style={{marginBottom: '7.5%'}}>
                                                                {
                                                                    secondItem.map((subItem ,subIndex) =>{
                                                                        let xs = subIndex === 0 ? {span:11}:{span:11,push:2};
                                                                        let sm = subIndex === 0 ? {span:10,push:2}:{span:10,push:4};
                                                                        let md = subIndex === 0 ? {span:10,push:2}:{span:10,push:4};
                                                                        let className = subIndex === 0 ? 'designRight2':'designRight';
                                                                        let img = subIndex === 0 ? indexImages.SCENE_ONE :indexImages.SCENE_TWO;
                                                                        return (
                                                                            <Col  key={subIndex}
                                                                                  xs={xs} sm={sm} md={md}
                                                                                  className={className}
                                                                                  onClick={this.goTemplate.bind(this,subItem)}>
                                                                                <img src={img} className="designRightImage" alt=""/>
                                                                                <p className="designRightText">{subItem.val}</p>
                                                                            </Col>
                                                                        )

                                                                    })
                                                                }
                                                            </Row>
                                                        )
                                                    })
                                                }
                                            </Col>
                                        </div>


                                    ):(
                                        <div>
                                            <Col xs={24} sm={12} md={12}>
                                                {
                                                    firstItem.map((secondItem,idx) => {
                                                        return (
                                                            <Row key={idx} style={{marginBottom: '7.5%'}}>
                                                                {
                                                                    secondItem.map((subItem ,subIndex) =>{
                                                                        let xs = subIndex === 0 ? {span:11}:{span:11,push:2};
                                                                        let sm = subIndex === 0 ? {span:10,push:2}:{span:10,push:4};
                                                                        let md = subIndex === 0 ? {span:10,push:2}:{span:10,push:4};
                                                                        let className = subIndex === 0 ? 'designRight2':'designRight';
                                                                        let img = subIndex === 0 ? indexImages.SCENE_ONE :indexImages.SCENE_TWO;
                                                                        return (
                                                                            <Col key={subIndex}
                                                                                 xs={xs} sm={sm} md={md}
                                                                                 className={className}
                                                                                 onClick={this.goTemplate.bind(this,subItem)}>
                                                                                <img src={img} className="designRightImage" alt=""/>
                                                                                <p className="designRightText">{subItem.val}</p>
                                                                            </Col>
                                                                        )

                                                                    })
                                                                }
                                                            </Row>
                                                        )
                                                    })
                                                }
                                            </Col>
                                        </div>
                                    )
                                }
                            </Row>
                        )
                    })
                }
                {/*design end*/}




                {/*fashion start*/}
                <Row className="fashion">
                    <Col xs={24} sm={24} md={24} className="designHead">
                        <p>最近流行视频素材尽在红蜂巢</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} className="designSubHead">
                        <p>超过百款专业团队精心设计的视频模板，使用它们您也可以立刻做出惊艳的视频</p>
                    </Col>
                </Row>
                <Row className="fashionNav">
                    <Col xs={0} sm={0} md={0} lg={24}>
                        <Tabs defaultActiveKey="1" onChange={() => {
                            this.refs.player.pause()
                        }}>

                            {
                                this.state.topFiveHotTemplate && this.state.topFiveHotTemplate.map((item,index) => {
                                     return (
                                         <TabPane tab={item.title} key={index+1}>
                                             {/*read start*/}
                                             <Row className="read2">
                                                 <Col xs={24} sm={11} md={11} className="introduceLeft">
                                                     <p className="introduceHead">{item.title}</p>
                                                     <p className="introduceSubHead">用时尚的液体飞溅显示您的标志。 使用这个创意，美丽和艺术的标志模板，
                                                         和富有表现力的方式展示您的公司标志。 非常适合介绍和旅行视频，作为大
                                                         作为开始演示的方式。 只需将您的徽标上传到透明背景上，我们就会负责其
                                                         今天免费试用。</p>
                                                     <Row>
                                                         <Col xs={12} sm={8} md={8} className="blogMainRight">
                                                             <Link to="/create" className="watchMake footerList">开始制作</Link>
                                                         </Col>
                                                     </Row>
                                                 </Col>
                                                 <Col xs={24} sm={9} md={9} className="introduceRight">
                                                     {TabPlayer}
                                                 </Col>
                                             </Row>
                                             {/*read end*/}
                                         </TabPane>
                                     )
                                })
                            }
                        </Tabs>
                    </Col>
                </Row>
                {/*fashion end*/}

                {/*read start*/}
                <Row className="read">
                    <Col xs={24} sm={24} md={24} lg={0} className="introduceLeft">
                        <p className="introduceHead">{this.state.topFiveHotTemplate && this.state.topFiveHotTemplate[0].title }</p>
                        <p className="introduceSubHead">用时尚的液体飞溅显示您的标志。 使用这个创意，美丽和艺术的标志模板，
                            和富有表现力的方式展示您的公司标志。 非常适合介绍和旅行视频，作为大
                            作为开始演示的方式。 只需将您的徽标上传到透明背景上，我们就会负责其
                            今天免费试用。</p>
                        <Row>
                            <Col xs={12} sm={8} md={8} lg={0} className="blogMainRight">
                                <Link to="/create" className="watchMake footerList">开始制作</Link>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={0} className="introduceRight">
                        {TabPlayer}
                    </Col>
                </Row>
                {/*read end*/}
                {/*blog start*/}
                <Row className="blog">
                    <Col  xs={0} sm={0} md={0} lg={24}  className="BLOG_BG">
                        <img src={indexImages.BLOG_BG} className="blogBgImg" alt=""/>
                    </Col>
                    <Row className="blogMain">
                        <Col xs={24} sm={20} md={20} className="blogMainLeft">
                            <p className="blogHeadMain">欢迎阅读我们的博客文章</p>
                            <p  className="blogSubHeadMain">超过百款专业团队设计</p>
                        </Col>
                        <Col xs={12} sm={4} md={4} className="blogMainRight">
                            <div onClick={()=> {
                               this.props.history.push('/blog');
                               this.scrollTop();
                            }} className="watchMake footerList">查看更多</div>
                        </Col>
                    </Row>
                    <Col className="blogContent">
                        {
                            this.state.topFourArticle && this.state.topFourArticle.map((item,index) => {
                                return (
                                    <Col  key={item.id} xs={24} sm={5} md={5} className={index === 3 ? 'blogContentPublic2':'blogContentPublic' }>
                                        <div onClick={this.goBlogDetail.bind(this,item)} style={{cursor:"pointer"}}>
                                            <img src={item.preview_url}
                                                 className="blogImage"
                                                 alt=""/>
                                            <p className="blogHead">{item.title}</p>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Col>
                </Row>

                {/*blog end*/}
                {/*footer start*/}
                    <Footer/>
                {/*footer end*/}
            </div>


        )
    }
}

export default withRouter(connect()(Home))

