
import { useState, useEffect } from "react"
import {ReactKeypressItem} from "./ReactKeypressItem"
export const A = ({shortcuts}) =>{
    return (
        <ReactKeypressItem key={"A"} itemData={"A"} shortcuts={shortcuts}/>
    )
}
