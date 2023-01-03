import React from "react";
import {BsFillXCircleFill,BsFillCheckCircleFill} from 'react-icons/bs'

const LoadingIcon = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={{
      marginRight: "-2px",
      display: "block",
      backgroundRepeatY: "initial",
      backgroundRepeatX: "initial",
    }}
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      fill="none"
      stroke="#3B3B3B"
      strokeWidth={18}
      r={35}
      strokeDasharray="164.93361431346415 56.97787143782138"
      style={{
        transform: "matrix(1,0,0,1,0,0)",
      }}
    />
  </svg>
)


const FormError = (data) =>{
  return(
    <div className="flex gap-x-2 items-center  mt-3 pl-2 bg-slate-800/70 py-1">
      <BsFillXCircleFill className="text-red-500" size={12}/>
      <div className="text-left text-sm sm:text-[15px] text-red-500">
          {data.message}
      </div>
    </div>
  )
}
const FormSuccess = (data) =>{
  return(
    <div className="flex gap-x-2 items-center  mt-3 pl-2 bg-slate-800/70 py-1">
      <BsFillCheckCircleFill className="text-green-500" size={12}/>
      <div className="text-left text-sm sm:text-[15px] text-green-500">
          {data.message}
      </div>
    </div>
  )

}

export {FormError, FormSuccess, LoadingIcon}