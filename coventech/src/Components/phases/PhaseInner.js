import React from "react";

const PhaseInner = (props) =>{
    return(
        <div className="col-span-1 row-span-1">
            <div className="border border-secondary bg-primary- hover:scale-105 transition-transform py-2 px-4 flex rounded-lg">
                <p className="font-inter text-sm font-bold leading-6">{props.phase}</p>
            </div>
        </div>
    )
}
export default PhaseInner;