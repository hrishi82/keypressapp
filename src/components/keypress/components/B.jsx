
import { useState, useEffect } from "react"
import {ReactKeypressItem} from "./ReactKeypressItem"
export const B = ({shortcuts}) =>{
    return (
        <ReactKeypressItem key={"B"} itemData={"B"} shortcuts={shortcuts}/>
    )
}
