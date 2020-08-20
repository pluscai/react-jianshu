import React, { Component } from "react";
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreators';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from "react-router-dom";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button

} from './style'

class Header extends Component {

    getListArea() {
        const { focused,page, mouseIn, totalPage, list, handleChangePage, handleMouseEnter, handleMouseLeave }  = this.props;
        // 将immutable对象转成普通js对象，
        // 方便下面的取值操作，如 newList[i]
        const newList = list.toJS();
        const pageList = [];
       if(newList.length) {
           for(let i = (page-1) * 10; i < page * 10; i++) {
               pageList.push(
                   <SearchInfoItem key={newList[i]}>{ newList[i] }</SearchInfoItem>
               )
           }
       }



        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }

    }

    render() {
        const { focused, list, handleInputFocus, handleInputBlur, login, logout }  = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ?
                            <NavItem className='right' onClick={logout}>退出</NavItem> :
                            <Link to='/login'> <NavItem className='right'>登录</NavItem></Link>
                    }

                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={ focused ? 'focused' : '' }
                                onFocus={ () => {handleInputFocus(list)} }
                                onBlur={ handleInputBlur }
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={ focused ? 'iconfont focused zoom' : 'iconfont zoom'}>
                            &#xe614;
                        </i>

                        {this.getListArea()}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //focused: state.header.focused
        focused: state.get('header').get('focused'),
        // 等价写法
        //focused: state.getIn(['header','focused'])
        mouseIn: state.getIn(['header','mouseIn']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';

            if(page < totalPage) {
                dispatch(actionCreators.changePage((page + 1)))
            }else {
                dispatch(actionCreators.changePage(1))
            }
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);