import {useState, useEffect, Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
function Home(){
    const [snackTop,setSnackTop]=useState([])
    const [snack2Top,setSnack2Top]=useState([])
    const [snack3Top,setSnack3Top]=useState([])
    const [snack4Top,setSnack4Top]=useState([])
    const [snack5Top,setSnack5Top]=useState([])
    const [snack6Top,setSnack6Top]=useState([])
    const [snack7Top,setSnack7Top]=useState([])
    // 서버연결후 데이터 읽기
    useEffect(()=>{
        axios.get("http://localhost/snack/snack1_top3").then(response=>{
            console.log(response.data)
            setSnackTop(response.data)
        })
    },[])
    let html = snackTop.map((snack,index)=>
        <li className={index%3==0?'one_third first':'one_third'}>
            <figure><NavLink to={"/snack/snack_detail/"+snack.no} className="imgover" href="#"><img src={snack.image} style={{"width":"100%", "border":"1px solid #D7D7D7"}}/></NavLink>
                <figcaption><strong style={{"overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{snack.name}</strong> <em>{snack.manu}</em></figcaption>
            </figure>
        </li>
    )

    useEffect(()=>{
        axios.get("http://localhost/snack/snack2_top3").then(response=>{
            console.log(response.data)
            setSnack2Top(response.data)
        })
    },[])
    let html2 = snack2Top.map((snack,index)=>
        <li className={index%3==0?'one_third first':'one_third'}>
            <figure><NavLink to={"/snack/snack_detail/"+snack.no} className="imgover" href="#"><img src={snack.image} style={{"width":"100%", "border":"1px solid #D7D7D7"}}/></NavLink>
                <figcaption ><strong style={{"overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{snack.name}</strong> <em>{snack.manu}</em></figcaption>
            </figure>
        </li>
    )
    useEffect(()=>{
        axios.get("http://localhost/snack/snack3_top3").then(response=>{
            console.log(response.data)
            setSnack3Top(response.data)
        })
    },[])
    let html3 = snack3Top.map((snack,index)=>
        <li className={index%3==0?'one_third first':'one_third'}>
            <figure><NavLink to={"/snack/snack_detail/"+snack.no} className="imgover" href="#"><img src={snack.image} style={{"width":"100%", "border":"1px solid #D7D7D7"}}/></NavLink>
                <figcaption ><strong style={{"overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{snack.name}</strong> <em>{snack.manu}</em></figcaption>
            </figure>
        </li>
    )
    useEffect(()=>{
        axios.get("http://localhost/snack/snack4_top3").then(response=>{
            console.log(response.data)
            setSnack4Top(response.data)
        })
    },[])
    let html4 = snack4Top.map((snack,index)=>
        <li className={index%3==0?'one_third first':'one_third'}>
            <figure><NavLink to={"/snack/snack_detail/"+snack.no} className="imgover" href="#"><img src={snack.image} style={{"width":"100%", "border":"1px solid #D7D7D7"}}/></NavLink>
                <figcaption ><strong style={{"overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{snack.name}</strong> <em>{snack.manu}</em></figcaption>
            </figure>
        </li>
    )
    useEffect(()=>{
        axios.get("http://localhost/snack/snack5_top3").then(response=>{
            console.log(response.data)
            setSnack5Top(response.data)
        })
    },[])
    let html5 = snack5Top.map((snack,index)=>
        <li className={index%3==0?'one_third first':'one_third'}>
            <figure><NavLink to={"/snack/snack_detail/"+snack.no} className="imgover" href="#"><img src={snack.image} style={{"width":"100%", "border":"1px solid #D7D7D7"}}/></NavLink>
                <figcaption ><strong style={{"overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{snack.name}</strong> <em>{snack.manu}</em></figcaption>
            </figure>
        </li>
    )
    useEffect(()=>{
        axios.get("http://localhost/snack/snack6_top3").then(response=>{
            console.log(response.data)
            setSnack6Top(response.data)
        })
    },[])
    let html6 = snack6Top.map((snack,index)=>
        <li className={index%3==0?'one_third first':'one_third'}>
            <figure><NavLink to={"/snack/snack_detail/"+snack.no} className="imgover" href="#"><img src={snack.image} style={{"width":"100%", "border":"1px solid #D7D7D7"}}/></NavLink>
                <figcaption ><strong style={{"overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{snack.name}</strong> <em>{snack.manu}</em></figcaption>
            </figure>
        </li>
    )
    useEffect(()=>{
        axios.get("http://localhost/snack/snack7_top3").then(response=>{
            console.log(response.data)
            setSnack7Top(response.data)
        })
    },[])
    let html7 = snack7Top.map((snack,index)=>
        <li className={index%3==0?'one_third first':'one_third'}>
            <figure><NavLink to={"/snack/snack_detail/"+snack.no} className="imgover" href="#"><img src={snack.image} style={{"width":"100%", "border":"1px solid #D7D7D7"}}/></NavLink>
                <figcaption ><strong style={{"overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{snack.name}</strong> <em>{snack.manu}</em></figcaption>
            </figure>
        </li>
    )
    return (
        <Fragment>
        <div className="bgded overlay" style={{"backgroundImage":"url('https://cookieall.com/web/upload/goodymall/kr/main/main_img1.jpg')"}}>
            <div id="pageintro" className="hoc clear">
            </div>
        </div>
        <div style={{"height":"120px"}}></div>
        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">비스킷 & 샌드</h6>
                </div>
                <ul className="nospace group team">
                    {html}
                </ul>
            </div>
        </div>

        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">스낵 & 봉지과자</h6>
                </div>
                <ul className="nospace group team">
                    {html2}
                </ul>
            </div>
        </div>

        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">캔디 & 사탕 & 젤리</h6>
                </div>
                <ul className="nospace group team">
                    {html3}
                </ul>
            </div>
        </div>

        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">초콜릿</h6>
                </div>
                <ul className="nospace group team">
                    {html4}
                </ul>
            </div>
        </div>

        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">껌 & 자일리톨</h6>
                </div>
                <ul className="nospace group team">
                    {html5}
                </ul>
            </div>
        </div>

        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">라면 & 컵밥 & 햇반 & 3분카레</h6>
                </div>
                <ul className="nospace group team">
                    {html6}
                </ul>
            </div>
        </div>

        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">음료 & 커피 & 차</h6>
                </div>
                <ul className="nospace group team">
                    {html7}
                </ul>
            </div>
        </div>
        </Fragment>
    )
}
export default Home;