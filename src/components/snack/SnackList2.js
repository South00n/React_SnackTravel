import {useState, useEffect, Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function SnackList2(){
    const [snackList,setSnackList] = useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage, setTotalpage]=useState(0)
    const [startPage, setStartPage]=useState(0)
    const [endPage, setEndPage]=useState(0)


    useEffect(()=>{
        axios.get("http://localhost/snack/snack2_list_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setSnackList(response.data)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost/snack/snack2_page_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    },{})
    // 이벤트 처리
    const pages=(page)=> {
        axios.get("http://localhost/snack/snack2_list_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setSnackList(response.data)
        })
        axios.get("http://localhost/snack/snack2_page_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    }
    const pageChange=(page)=>{
        //etCurpage(page)
        pages(page)
    }
    const pagePrev=()=>{
        //setCurpage(startPage-1)
        pages(startPage-1)
    }
    const pageNext=()=>{
        //setCurpage(endPage+1)
        pages(endPage+1)
    }
    let html = snackList.map((snack,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}>
            <NavLink to={"/snack/snack_detail/"+snack.no}>
                <img src={snack.image} title={snack.name} style={{"width":"100%", "border":"2px solid #D7D7D7"}}/>
                <hr/>
                <h5 className={"text-center"} style={{"overflow":"hidden", "textOverflow":"ellipsis", "whiteSpace":"nowrap"}}>{snack.name}</h5>
                <p className={"text-center"}>가격 : {snack.cost}</p>
                <p className={"text-center"}>적립금 : <span style={{color:"orange"}}>{snack.point}</span></p>
                <hr/>
            </NavLink>


        </li>
    )
    let row = [];
    if(startPage>1) {
        row.push(<li><a href="#" onClick={()=>pagePrev()}>&laquo; Previous</a></li>)
    }
    for(let i=startPage;i<=endPage;i++) {
        if (i == curpage) {
            row.push(<li className="current"><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        } else {
            row.push(<li><a href="#" onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage < totalpage) {
        row.push(<li><a href="#" onClick={()=>pageNext()}>Next &raquo;</a></li>)
    }
    return(
        <Fragment>
            <div className="wrapper gradient">
                <div className="hoc container clear">
                    <div className="sectiontitle">
                        <p className="nospace font-xs">Enjoy Your Snack</p>
                        <h6 className="heading font-x2">사탕 & 초콜릿</h6>
                    </div>
                </div>
            </div>

            <div className="wrapper row3">
                <main className="hoc container clear">
                    <div className="content">
                        <div id="gallery">
                            <figure>
                                <ul className="nospace clear">
                                    {html}
                                </ul>
                            </figure>
                        </div>
                        <nav className="pagination">
                            <ul>
                                {row}
                            </ul>
                        </nav>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )
}
export default SnackList2;