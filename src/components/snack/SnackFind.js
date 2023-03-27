import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function SnackFind(){
    const [ss,setSs] = useState('')
    const [fdata, setFdata] = useState([]);
    const [curpage, setCurpage] = useState(1)
    const [totalpage, setTotalpage] = useState(0)
    useEffect(()=>{
        axios.get("http://localhost/snack/snack_find_react",{
            params:{
                page:curpage,
                name:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    },[])
    const dataChange=(e)=>{
        setSs(e.target.value)

    }
    const dataKeyDown=(e)=>{
        setCurpage(1)
        if(e.keyCode==13) {
            axios.get("http://localhost/snack/snack_find_react",{
                params:{
                    page:curpage,
                    name:ss
                }
            }).then(response=>{
                console.log(response.data)
                setFdata(response.data)
                setCurpage(response.data[0].curpage)
                setTotalpage(response.data[0].totalpage)
            })
        }
    }
    const findData=()=>{
        //alert(ss)
        setCurpage(1)
        axios.get("http://localhost/snack/snack_find_react",{
            params:{
                page:curpage,
                name:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    }

    const prev=()=>{
        const prevPage = curpage>1?curpage-1:curpage;
        setCurpage(prevPage);
        axios.get("http://localhost/snack/snack_find_react",{
            params:{
                page: prevPage,
                name: ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setTotalpage(response.data[0].totalpage)
        })
    }
    const next=()=>{
        const nextPage = curpage<totalpage ? curpage+1 : curpage;
        setCurpage(nextPage);
        axios.get("http://localhost/snack/snack_find_react",{
            params:{
                page: nextPage,
                name: ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setTotalpage(response.data[0].totalpage)
        })
    }
    let html = fdata.map((snack,index)=>
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
    return(
        <Fragment>
            <div className="wrapper gradient">
                <div className="hoc container clear">
                    <div className="sectiontitle">
                        <p className="nospace font-xs">Enjoy Your Snack</p>
                        <h6 className="heading font-x2">과자 검색</h6>
                    </div>
                </div>
            </div>
            
            <div className="wrapper row3">
                <main className="hoc container clear">
                    <div className="content">
                        <div id="gallery">
                            <figure>
                                <header className="heading inline" >
                                    <input type={"text"} size={"30"} className={"input-sm"} placeholder={"과자이름을 검색해주세요"} style={{border:"1px solid #d7d7d7"}} onChange={dataChange} value={ss} onKeyDown={dataKeyDown}/>
                                    <input type={"button"} value={"검색"}
                                           className={"btn btn-sm btn-danger"} style={{marginLeft:"3px", padding:"5px 12px", border:"1px solid #d7d7d7"}} onClick={findData}/>
                                </header>
                                <ul className="nospace clear">
                                    {html}
                                </ul>
                            </figure>
                        </div>
                        <div className={"text-center"}>
                            <button className={"btn btn-sm btn-primary"} style={{margin:"7px", padding:"5px 12px", border:"1px solid #d7d7d7"}} onClick={prev}>이전</button>
                            {curpage} 페이지 / {totalpage} 페이지
                            <button className={"btn btn-sm btn-primary"} style={{margin:"7px", padding:"5px 12px", border:"1px solid #d7d7d7"}} onClick={next}>다음</button>
                        </div>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )
}

export default SnackFind