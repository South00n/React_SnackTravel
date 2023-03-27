import {useStatem, useEffect, Fragment, useState} from "react";
import axios from "axios";
function Footer(){
    const [newsList,setNewsList] = useState([])
    const [title,setTitle] = useState('과자')
    const [snackFooterTop,setSnackFooterTop]=useState([])
    const [snackFooter2Top,setSnackFooter2Top]=useState([])
    useEffect(()=>{
        axios.get("http://localhost/news/news_footer_react",{
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    },[])
    let html = newsList.map((news)=>
        <li style={{margin:"0px", padding:"0px", "overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}><a href={news.link} target={"_blank"}><h3 style={{fontSize:"1rem"}} dangerouslySetInnerHTML={{__html: news.title}}></h3></a></li>
    )

    useEffect(()=>{
        axios.get("http://localhost/snack/snackFooter_top6").then(response=>{
            console.log(response.data)
            setSnackFooterTop(response.data)
        })
    },[])
    let html2 = snackFooterTop.map((snack,index)=>
        <li><a className="imgover" href="#" style={{border:"1px solid #d7d7d7"}}><img src={snack.image}/></a></li>
    )

    useEffect(()=>{
        axios.get("http://localhost/snack/snackFooter2_top6").then(response=>{
            console.log(response.data)
            setSnackFooter2Top(response.data)
        })
    },[])
    let html3 = snackFooter2Top.map((snack,index)=>
        <li><a className="imgover" href="#" style={{border:"1px solid #d7d7d7"}}><img src={snack.image}/></a></li>
    )

    let cookie = document.cookie.split(";");
    let cc=[]
    for(let i=0; i<cookie.length;i++) {
        let a = cookie[i];
        let b = a.substring(a.indexOf("=")+1)
        cc.push(b.trim())
    }
    let m = cc.map((mm,index)=>
        <li><a className="imgover" href="#" style={{border:"1px solid #d7d7d7"}}><img src={mm}/></a></li>
    )
    return (
        <Fragment>
        <div className="bgded overlay row4">
            <footer id="footer" className="hoc clear">
                <div className="one_third first">
                    <h6 className="heading">오늘의 뉴스 Top6</h6>
                    <ul className="nospace linklist">
                        {html}
                    </ul>
                </div>
                <div className="one_third">
                    <h6 className="heading">오늘의 과자 Top6</h6>
                    <ul className="nospace clear latestimg">
                        {html2}
                    </ul>
                </div>
                <div className="one_third">
                    <h6 className="heading">최근 본 과자</h6>
                    <ul className="nospace clear latestimg">
                        {m}
                    </ul>
                </div>
            </footer>
        </div>
        <div className="wrapper row5">
            <div id="copyright" className="hoc clear">
                <p className="fl_left">Copyright &copy; 2023-03-23 - 강남 쌍용 교육센터 - <a href="#">남훈</a></p>
                <p className="fl_right">Template by <a href="https://github.com/south00n">Git Address</a></p>
            </div>
        </div>
        </Fragment>
    )
}
export default Footer