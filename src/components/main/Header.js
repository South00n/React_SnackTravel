import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
/*
        1. 메모리 할당
        2. componentWillMount()
        3. componentDidMount() = mount : 가상 메모리 (가상돔)
        ================================================== 데이터를 서버로부터 읽기 => render로 넣어서 화면출력
            => 이 부분이 useEffect()로 바뀜 좀 더 쉽게!
        4. render() => 화면 출력을 할때 사용
        5. componentWillUpdate
        6. componentDidUpdate()
            => setXxx로 바뀜 좀 더 쉽게!
            따라서 useEffect()와 setXxx를 쓰면 변경된사항을 출력할 수 있음
        6-1. render() 수정한 내용을 다시 화면에 출력
        7. componentWillDestroy()
        8. componentDidDestory()
        
        ==> props / state : 변경이 가능한 데이터
            ===== 호출시 전송 : 불변
        ==> 데이터 상태 관리 프로그램
        ==> class / function => 지역변수 => 유지하는 변수 (useState()) => Hooks
            ===== 멤버변수 설정이 가능
 */
// <Header /> => return값을 읽어서 => index.html
function Header(props){
    return(
        <div className="wrapper row1">
            <header id="header" className="hoc clear">
                <div id="logo" className="fl_left">
                    <h1 style={{fontSize:"36px"}}><NavLink to={"/"}><strong><span>과자여행</span></strong></NavLink></h1>
                </div>
                <nav id="mainav" className="fl_right">
                    <ul className="clear">
                        <li><NavLink to={"/"}><strong>홈</strong></NavLink></li>
                        <li><NavLink to={"/snack/snack_list"}><strong>과자</strong></NavLink></li>
                        <li><NavLink to={"/snack/snack2_list"}><strong>사탕&초콜릿</strong></NavLink></li>
                        <li><NavLink to={"/snack/snack3_list"}><strong>인스턴트</strong></NavLink></li>
                        <li><NavLink to={"/snack/snack_find"}><strong>과자 검색</strong></NavLink></li>
                        <li><NavLink to={"/news/news_list"}><strong>뉴스 검색</strong></NavLink></li>


                        {/*<li><a className="drop" href="#"><strong>제주</strong></a>
                            <ul>
                                <li><NavLink to={"/jeju/food_list"}>맛집</NavLink></li>
                                <li><NavLink to={"/jeju/event_list"}>행사&이벤트</NavLink></li>
                            </ul>
                        </li>

                        <li><a className="drop" href="#"><strong>레시피</strong></a>
                            <ul>
                                <li><NavLink to={"/recipe/recipe_list"}>레시피</NavLink></li>
                                <li><a href="pages/full-width.html">쉐프</a></li>
                            </ul>
                        </li>*/}

                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Header;
