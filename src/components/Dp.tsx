import dp from "../utils/img/dpp.jpeg"
import { FC } from "react"

interface Dp{
    h : Number,
    w : Number    
}


const Dp : FC<Dp> = ({h, w})=>{
    return(
        <>
        <div className='flex justify-center transform -translate-y-[70px] translate-x-[-60px] '>
                <img src={dp} alt=""  className="rounded-full"  style={{ height: `${h}px`, width: `${w}px` }} />
        </div>
        </>
    )
}

export default Dp;