import React, { Component } from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from 'react-redux';
import { actionCreators } from './store'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData() {
            const action = actionCreators.getHomeInfo();
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatch)(Home);