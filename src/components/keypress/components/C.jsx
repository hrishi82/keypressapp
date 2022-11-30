
import { useState, useEffect } from "react"
import {ReactKeypressItem} from "./ReactKeypressItem"
export const C = ({shortcuts}) =>{
    return (
        <ReactKeypressItem key={"C"} itemData={"C"} shortcuts={shortcuts}/>
    )
}
