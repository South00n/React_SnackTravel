import {useState, useEffect, Fragment} from "react";
import {useParams} from "react-router";
import axios from "axios";
function SnackDetail(props) {
    let {no} = useParams();
    const [snackDetail, setSnackDetail] = useState({})
    useEffect(()=>{
        axios.get("http://localhost/snack/snack_detail_react",{
            params:{
                no:no
            }
        }).then(response=>{
            console.log(response.data)
            setSnackDetail(response.data)
        })
    },{})

    document.cookie="snack"+parseInt(no)+"="+snackDetail.image;

    return (
        <Fragment>
        <div className="wrapper gradient">
            <div className="hoc container clear">
                <div className="sectiontitle">
                    <p className="nospace font-xs">Enjoy Your Snack</p>
                    <h6 className="heading font-x2">상세정보</h6>
                </div>
            </div>
        </div>

        <div className="wrapper row3">
            <main className="hoc container clear">
                    <table className={"text-center"}>
                        <tr>
                            <td width={"30%"} rowSpan={"8"}>
                                <img src={snackDetail.image} style={{"width":"100%"}}/>
                            </td>
                        </tr>
                        <tr>
                            <th width={"20%"}>상품명</th>
                            <td width={"80%"}>{snackDetail.name}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>가격</th>
                            <td width={"80%"} >{snackDetail.cost}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>제조사</th>
                            <td width={"80%"}>{snackDetail.manu}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>원산지</th>
                            <td width={"80%"}>{snackDetail.origin}</td>
                        </tr>
                        <tr>
                            <th width={"20%"}>적립금</th>
                            <td width={"80%"} style={{color:"orange"}}>{snackDetail.point}</td>
                        </tr>
                        <tr>
                            <td colSpan={"2"}>
                                <span id={"buybtn"}>구매하기</span>
                            </td>
                        </tr>

                    </table>
                    <div className={"text-center"} >
                        <img src={snackDetail.content}/>
                    </div>
            </main>
        </div>
        </Fragment>
    )
}

export default SnackDetail