import React from "react";

const TeamInner = (props) =>{
    return(
        <div className="col-span-1 row-span-1">
        <div className="border border-gray-200 hover:border-gray-800 hover:scale-105 transition-transform py-2 px-4 flex rounded-lg">
            <div className="">
            <img src={props.image} className="w-12 mt-2" />
            </div>
            <div className="ml-4">
            <h3 className="btext-lg md:text-xl lg:text-xl font-bold leading-8 md:leading-9 lg:leading-10 text-left p-0 m-0">
                {props.title}
            </h3>
            <p className="text-gray-500 font-normal leading-7 m-0">{props.description}</p>
            </div>
        </div>
        </div>

    )
}
export default TeamInner;