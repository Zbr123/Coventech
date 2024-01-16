import React from "react";
import Heading from "../../UI/Heading";
import articleImage from "../../assets/Article_Image.png";
import blog1 from "../../assets/blog1.png"
import BlogsInner from "./BlogsInner";
const data = [
    {
        id : 1,
        image : blog1,
        title : "Future Of QA Automation With AI",
        date : "Jan 10, 2022"
    },
    {
        id : 2,
        image : articleImage,
        title : "How to make GUI in Java with example",
        date : "Jan 10, 2022"
    },
    {
        id : 3,
        image : articleImage,
        title : "How to make GUI in Java with example",
        date : "Jan 10, 2022"
    },
    {
        id : 4,
        image : articleImage,
        title : "How to make GUI in Java with example",
        date : "Jan 10, 2022"
    },
]
const Blogs = () =>{
    return(
        <div className="">
            <div className="w-[90%] mx-auto mt-[5%]">
            <Heading heading = "Featured Article"/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
                  {data.map(blog => <BlogsInner key = {blog.id} src = {blog.image} title = {blog.title} date = {blog.date}/>)}
            </div>
        </div>
        </div>
    )

}
export default Blogs;