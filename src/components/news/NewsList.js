import {useState, useEffect, Fragment} from "react";
import axios from "axios";

function NewsList(){
    const [newsList,setNewsList] = useState([])
    const [title,setTitle] = useState('과자')
    useEffect(()=>{
        axios.get("http://localhost/news/news_list_react",{
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    },[])
    const dataChange=(e)=>{
        setTitle(e.target.value)
    }
    const dataKeyDown=(e)=>{
        axios.get("http://localhost/news/news_list_react",{
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    }
    const findData=()=>{
        axios.get("http://localhost/news/news_list_react",{
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    }
    // 읽은 데이터 출력
    let html = newsList.map((news)=>
        <table className={"table"}>
            <tr>
                <td><a href={news.link} target={"_blank"}><h3 style={{"color":"#B8AF9A"}} dangerouslySetInnerHTML={{__html: news.title}}></h3></a></td>
            </tr>
            <tr>
                <td dangerouslySetInnerHTML={{__html: news.description}}></td>
            </tr>
            <tr>
                <td className={"text-right"}>{news.pubDate}</td>
            </tr>
        </table>
    )
    return(
        <Fragment>
        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">뉴스검색</h6>
                </div>
            </div>
        </div>
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content">
                    <div id="gallery">
                        <figure>
                            <header className="heading inline">
                                <input type={"text"} size={"30"} className={"input-sm"}
                                       onChange={dataChange} value={title} style={{border:"1px solid #d7d7d7"}} onKeyDown={dataKeyDown}/>
                                <input type={"button"} value={"검색"}
                                       className={"btn btn-sm btn-danger"} style={{marginLeft:"3px", padding:"5px 12px", border:"1px solid #d7d7d7"}} onClick={findData}/>
                            </header>
                        </figure>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td>
                                    {html}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
        </Fragment>
    )
}

export default NewsList