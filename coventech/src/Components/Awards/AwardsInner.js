import React from "react";

const AwardsInner = (props) =>{
    return(
    <div className="col-span-1 row-span-1 flex items-center justify-center">
        <img src={props.imagesrc} className="w-[70%]"/>
    </div>
    )
}
export default AwardsInner;