import React from "react";
import award1 from "../../assets/award.png";
import AwardsInner from "./AwardsInner";

const data = [
    {
        id : 1,
        award : award1,
    },
    {
        id : 2,
        award : award1,
    },
    {
        id : 3,
        award : award1,
    },
    {
        id : 4,
        award : award1,
    },
]
const Awards = () =>{
    return(
        <div className="text-center mt-24 w-[90%] mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-14">Awards & Acheivements</h2>
            <p className="text-base font-normal leading-7">At Co-Ventech, we're more than a company; we're architects of innovation and collaborators in your success story. </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
                {data.map(award => <AwardsInner imagesrc = {award.award} />)}
            </div>
        </div>

    )
}
export default Awards;