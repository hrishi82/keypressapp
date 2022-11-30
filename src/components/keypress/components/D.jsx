
import { useState, useEffect } from "react"
import {ReactKeypressItem} from "./ReactKeypressItem"
export const D = ({shortcuts}) =>{
    return (
        <ReactKeypressItem key={"D"} itemData={"D"} shortcuts={shortcuts}/>
    )
}
