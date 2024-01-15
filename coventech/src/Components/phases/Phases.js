import React from "react";
import PhaseInner from "./PhaseInner";
import backgroundImage from "../../assets/HeroDesign1.png"

const project_phases = [
    {
        id : 1,
        step : "Rquirement"
    },
    {
        id:2,
        step : "Design",
    },
    {
        id : 3,
        step : "Development"
    },
    {
        id : 4,
        step : "QA"
    },
    {
        id : 5,
        step : "Security"
    },
    {
        id : 6,
        step : "Testing"
    },
    {
        id : 7,
        step : "Deployment"
    },
    {
        id : 8,
        step : "Support"
    },
]
const Phases = () =>{
    return(
        <div className="relative py-8 px-16 bg-primary border border-secondary w-[90%] mx-auto rounded rounded-lg mt-16 bg-cover" 
        style={{
            backgroundImage: `url(${backgroundImage})`,
          }} >
            <h1 className="text-4xl font-bold mb-4 md:w-4/5">Project Phases</h1>
            <p className="text-base font-normal leading-7 tracking-normal text-left mt-2 ">Coventech collaborated with SeedsLabs to deliver a comprehensive suite of services, </p>
            <h3 className="font-inter text-xl font-bold leading-7 tracking-normal text-left mt-4">Discovery</h3>
            <div class="border-t border-dashed border-secondary">
            <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 gap-2 mt-8">
                {project_phases.map(phase => <PhaseInner phase = {phase.step}/>)}
            </div>
            </div>
        </div>
    )
}
export default Phases;