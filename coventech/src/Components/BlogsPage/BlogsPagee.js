import React,{useEffect} from "react";
import Navbar from "../NavBar/Navbar";
import blog1 from "../../assets/blog1.png";
import profile from "../../assets/profile.png";
import Footer from "../Footer/Footer";

const BlogsPage = () =>{
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="main">
            <Navbar />
            <div className=" mx-auto w-[80%] xsm:mt-[20%] sm:mt-[15%] md:mt-[7%] ">
                <img src={blog1} />
                <div className="mt-[3%]">
                    <h1 className="text-3xl font-extrabold">The Future of QA Testing: Integrating AI for Enhanced Efficiency</h1>
                    <p>
                        <span className="bg-orange-200 m-1"> #QA </span>
                        <span className="bg-blue-200 m-1"> #AI </span>
                        <span className="bg-pink-200 m-1 "> #Automation </span>
                    </p>
                    <div className="flex">
                    <div>
                        <img src={profile} className="w-12 mt-2" />
                    </div>
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg md:text-xl lg:text-xl font-bold">
                            John Doe
                        </h3>
                        <p className="text-gray-500 font-normal leading-7 m-0">
                            May 12 Originally published at boburjon.netlify.app | 3 min read
                        </p>
                    </div>
                    </div>
                    <div>
                        <br /><br />
                        <p className="font-serif text-base font-normal leading-6 tracking-normal text-left">
                        Learn how AI can help you integrate and automate various aspects of QA testing and achieve higher efficiency and quality<br /><br />

                        How do you ensure the quality of your software products and services? How do you perform QA testing in a fast-paced and competitive environment? How do you cope with the increasing complexity and diversity of software applications?< br /><br />

                        “Quality is never an accident; it is always the result of intelligent effort.” - John Ruskin <br /><br />
                        
                        If you are a QA tester or a developer, you might have faced these questions and challenges in your work. You might have also wondered if there is a better way to do QA testing, a way that can save you time, money, and resources, and improve the quality and reliability of your software products and services.< br />
                        The answer is yes, there is a better way. And that way is AI.<br /><br />

                        Artificial intelligence (AI) is an effective means that has the potential to revolutionize and improve the effectiveness and efficiency of QA testing. Test case design, test execution, test data creation, test analysis, and test maintenance are just a few of the QA testing processes that AI can automate. 
                        By identifying and fixing mistakes, irregularities, and software defects, artificial intelligence (AI) can also improve the Caliber and dependability of QA testing. Additionally, AI is capable of learning from test results and user comments to enhance its accuracy and performance over time.
                        In this article, we will explore how AI is reshaping the landscape of QA testing, and what are the benefits and challenges of integrating AI into QA testing processes?. We will also look at some of the popular tools and platforms that use AI for QA testing, and how they can help QA testers and developers achieve better results. Finally, we will discuss the future of QA testing with AI, and how it can lead to a new era of autonomous testing.
                        If you want to navigate on a specific topic, you can click in content. <br /><br />
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Table Of Contents: </p>
                        <ol class="list-decimal pl-8">
                            <li class="mb-2">Can We Use AI in Automation Testing?</li>
                            <li class="mb-2">What is the Future of QA with AI?</li>
                            <li class="mb-2">Can AI Do Automation Testing?</li>
                            <li className="mb-2">How AI Can Make Software Testing Work better?</li>
                            <li className="mb-2">Popular AI-Automated Quality Assurance Tools</li>
                        </ol>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default BlogsPage;