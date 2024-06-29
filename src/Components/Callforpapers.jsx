import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";
import "./callforpapers.css"
export function Callforpapers() {
    const openGoogleDocs = () => {
        window.open('https://docs.google.com/document/d/1IlEeKji912TytiTfhNk2ZHoh0DCq8Iwo/edit?usp=sharing&ouid=111443267578785456162&rtpof=true&sd=true', '_blank');
    };





    const itemsTrack7 = [
        "Information Technology in Automation",
        "Industrial Control",
        "Mechatronic system Design",
        "Manufacturing mechatronics",
        "Precision Mechatronic and Mechanics",
        "Intelligent Control Systems and Optimization",
        "Artificial Intelligence, Neural Networks and Fuzzy Logic in Mechatronics",
        "Micro and Nano Mechatronics",
        "Industry 4.0 and 5.0 technologies and its applications",
        "Advanced instrumentation and control",
        "Signal and image processing and pattern recognition in mechatronic systems",
        "Intelligent mechatronics, automation, and control systems",
        "Control system modeling and simulation techniques and methodologies",
        "CAD/CAM/CAE/CAP and manufacturing systems, technologies and applications",
        "Real Time Supervisory Control"
    ];
    const items = [
        "Adaptive suspension System for railway coach",
        "Sensors and actuators for railway coach",
        "Real-time monitoring of rail coaches",
        "Implementation of IoT and AI in railway coaches",
        "Innovative solutions to reduce noise and vibrations in rolling stock",
        "Advanced techniques for vibration analysis in railway coaches",
        "Automation in railway coaches",
        "3D and 4D printing in railway coach components",
        "Additive manufacturing in railway coach components",
        "Smart materials in railway coach components",
        "Sustainable and green materials",
        "Risk assessment and mitigation strategies",
        "Innovative design approaches for safety, comfort, and aesthetics",
        "Big data analytics for predictive maintenance",
        "Government initiatives impacting the railway industry"
    ];
    const itemsTrack6 = [
        "Parallel and Serial manipulators",
        "Reconfigurable manipulator",
        "Human Centric Robotics",
        "Soft Robotics",
        "Humanoid Robots, Service Robots",
        "Mobile and Autonomous Systems",
        "Robotics and Automation",
        "Industrial Robotics",
        "Bionic robotics, autonomous and evolutionary robotics",
        "Robotics and Mechanical Engineering",
        "Robot intelligence and learning",
        "Robot vision and audition",
        "Robotics and Industrial Monitoring",
        "Agriculture and Field Robotics"
    ];
    const itemsTrack5 = [
        "Conventional and non-conventional machining process and their hybridization",
        "Ultra-precision and Micro Manufacturing",
        "Advanced finishing Processes",
        "Microwave Processing of Materials",
        "Advances in Casting of Materials",
        "Metal Forming Processes",
        "Powder Metallurgy",
        "Green Manufacturing",
        "Additive Manufacturing",
        "Metal Joining Processes",
        "Cutting/ Grinding/ Polishing",
        "Sustainable Manufacturing Technologies",
        "Machining of Composites, ceramics",
        "Modelling, Simulation and Optimisation of manufacturing processes",
        "Bio manufacturing",
        "Quality & Reliability in manufacturing"
    ];
    const itemsTrack4 = [
        "Advanced Numerical Techniques in Engineering Structures",
        "Differential/Dynamical systems",
        "Dynamics and Control of Structures",
        "Finite Element Analysis",
        "Computational Applied Mechanics",
        "Fracture and Failure Mechanics",
        "Modelling & Simulation of Composite structures",
        "Product Design and Development",
        "Tribology",
        "Nano mechanics and MEMS",
        "Vibrations Analysis",
        "Numerical Simulations of Coupled Problems",
        "Mechanics of Fluids, Solids, and Structures",
        "Beam, Plate and Shell Theories",
        "Health monitoring and inspection techniques for Engineering structures",
        "Multi-scale analysis",
        "Optimization techniques and methods in Engineering structures",
        "Automation & Robotics, Mechatronics"
    ];

    const itemsTrack2 = [
        "Composite materials and their processing",
        "Metal matrix composites",
        "Polymer based composites",
        "Ceramic composites",
        "Recycled waste-based composites",
        "Nanocomposites",
        "Hybrid composites",
        "Bio-composites",
        "Green Composites",
        "Multi-functional composites",
        "Applications of Composites in various fields of Engineering",
        "Composite for bio-medical applications",
        "Design and applications of composites",
        "Delamination, damage, fracture, failure, fatigue and durability of composites",
        "Dynamics of composite structures",
        "Experimental Methods for composites",
        "FRP structures",
        "Functionally graded and porous composite structures",
        "Smart composites and structures",
        "Thermal problems on composite materials and structures"
    ];
    const itemsTrack1 = [

        "Materials behaviour",
        "Advanced Materials and Characterization",
        "Metals and Alloys",
        "Ceramic Materials",
        "Polymeric Materials",
        "Biomaterials",
        "Biodegradable materials",
        "Biomedical implants and Bone Scaffolds",
        "Functionally graded materials",
        "Coatings and Surface Engineering",
        "Advanced Nanomaterials",
        "Graphene Technology",
        "Semiconductor Materials",
        "Superconductors",
        "Cryogenic Materials",
        "Renewable Materials",
        "Energy Harvesting Materials",
        "Renewable Fuels",
        "Building Materials",
        "Smart Materials and their Applications",
        "Biosensors"
    ];


    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: '#F0F8FF' }}>
            <section className="text-gray-600 body-font">
                <div className="container  mx-auto">
                    <div className="px-5 py-5 mx-auto flex flex-col items-center justify-center">
                        <div className="flex flex-wrap w-full mb-4">
                            <div className="lg:w-full lg:mb-0 pt-10 text-center">
                                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    <Typewriter onInit={(typewriter) => {
                                        typewriter
                                            .typeString("CALL FOR PAPERS")
                                            .pauseFor(1500)
                                            .start();
                                    }} />
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <section className="text-gray-600 body-font">
                            <div className="container py-10 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 1 Materials</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack1.map((item, index) => (
                                                <a key={index} >
                                                    <div class="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 2 Composites</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack2.map((item, index) => (
                                                <a key={index}>
                                                    <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>{item}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 3 Design</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack4.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="text-gray-600 body-font">
                            <div className="container py-1 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 4 Manufacturing Techniques</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack5.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>

                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 5 Robotics</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack6.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>

                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="text-gray-600 body-font ">
                            <div className="container  py-10 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-left">Track 6 Mechatronics and Automation</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack7.map((item, index) => (
                                                <a key={index}>
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                    <path d="M20 6L9 17l-5-5"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>

                                            ))}
                                        </nav>
                                    </div>
                                    {/* <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-left">Track 7 Railway Vehicle Dynamics</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {items.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>

                                            ))}
                                        </nav>
                                    </div> */}

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <div className="text-center pb-5 px-10">
                <div className="px-5 py-5 mx-auto flex flex-col items-center justify-center">
                    <div className="flex flex-wrap w-full mb-4">
                        <div className="lg:w-full lg:mb-0 pt-10 text-center">
                            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Paper Submission
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                        </div>
                    </div>
                </div>
                <div className=" leading-relaxed lg:w-3/4 mx-auto text-left sm:text-2xl text-xl">
                    <ul>
                        <li> <i class="fa-regular fa-hand-point-right px-2 py-3"></i>Authors must strictly follow the manuscript preparation guidelines.</li>


                        <li>
                            <i class="fa-regular fa-hand-point-right px-2 py-3"></i> Access the MS Word Template and a Sample Paper for reference on the conference website.
                        </li>

                        <li> <i class="fa-regular fa-hand-point-right px-2 py-3"></i>Manuscript submissions should be made through the Microsoft CMT online system.</li>
                        <li> <i class="fa-regular fa-hand-point-right px-2 py-3"></i>All submitted manuscripts will undergo:
                            <ul className="ml-10">
                                <li> <i class="fa-regular fa-hand-point-right px-2 py-3"></i>A peer-review process</li>
                                <li> <i class="fa-regular fa-hand-point-right px-2 py-3"></i>Mandatory plagiarism screening for publication eligibility</li>
                            </ul>
                        </li>
                        <li className='pt-2'>
                            <a>
                                <div className="flex items-center space-x-3">
                                    <div><i className="fa-regular fa-hand-point-right px-2 py-3"></i></div>
                                    <div>Accepted papers, following peer review, will be published as a standalone proceeding by a Scopus Indexed publication.</div>
                                </div>
                            </a>
                        </li>

                    </ul>
                    <div className="flex flex-col items-center mt-4 space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-20">
                        <button className="botao" onClick={openGoogleDocs}>
                            <svg
                                className="mysvg"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                height="24px"
                                width="24px"
                            >
                                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                <g
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    id="SVGRepo_tracerCarrier"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Interface / Download">
                                        <path
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                            stroke-width="2"
                                            stroke="#f1f1f1"
                                            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                                            id="Vector"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                            <span className="texto">Download Template</span>
                        </button>
                        <a
                            href="https://cmt3.research.microsoft.com/docs/help/pdfs/small_conference_guide.pdf" target="_blank"
                            className="inline-block px-3 py-2 mb-2 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white" style={{ backgroundColor: '#818589' }}
                        >
                            Guide for Authors
                        </a>
                        <a
                            href="https://cmt3.research.microsoft.com/ICDMT2024/Submission/Index" target="_blank"
                            className="inline-block px-3 py-2 mb-2 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white"
                        >
                            Submit Your Paper
                        </a>
                    </div>

                </div>
            </div>


            <section className="text-gray-600 body-font hidden md:flex justify-center">
                <div className="container mx-auto">
                    <div className="flex-col text-center w-full">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                            Accepted papers will be published in the journals of following publishers
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">(In communication with)</p>
                    </div>
                </div>
            </section>

            {/* Hide the following div on mobile and display only on large screens */}
            <div className="hidden lg:grid h-56 grid-cols-5 gap-4 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel></Carousel>
                <Carousel indicators={false} slideInterval={3000}>
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-53 h-48 object-cover object-center mb-4 mr-0"
                        src="https://icssmt.com/2023/Springer.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://bioone.org/images/publishers/fullsize/SAGE.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://assets.materialstoday.com/wpimg/float/6ec9dec2-a9ce-415f-80db-fe6bd7027d22.jpg"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-50 object-cover object-center mb-4 mr-0"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Elsevier_logo_2019.svg/800px-Elsevier_logo_2019.svg.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://sciencecouncil.org/web/wp-content/uploads/2016/02/iop-logo.jpg"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-50 h-48 object-cover object-center mb-4 mr-0"
                        src="https://www.informascope.com/views/default/_images/_logos/urunler/taylor_and_francis.png"
                    />
                </Carousel>
                <Carousel indicators={false} slideInterval={3000}>
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-50 object-cover object-center mb-4 mr-0"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Elsevier_logo_2019.svg/800px-Elsevier_logo_2019.svg.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-50 h-48 object-cover object-center mb-4 mr-0"
                        src="https://www.informascope.com/views/default/_images/_logos/urunler/taylor_and_francis.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://bioone.org/images/publishers/fullsize/SAGE.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-53 h-48 object-cover object-center mb-4 mr-0"
                        src="https://icssmt.com/2023/Springer.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://assets.materialstoday.com/wpimg/float/6ec9dec2-a9ce-415f-80db-fe6bd7027d22.jpg"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://sciencecouncil.org/web/wp-content/uploads/2016/02/iop-logo.jpg"
                    />
                </Carousel>
                <Carousel indicators={false} slideInterval={3000}>
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://assets.materialstoday.com/wpimg/float/6ec9dec2-a9ce-415f-80db-fe6bd7027d22.jpg"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-53 h-48 object-cover object-center mb-4 mr-0"
                        src="https://icssmt.com/2023/Springer.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-50 h-48 object-cover object-center mb-4 mr-0"
                        src="https://www.informascope.com/views/default/_images/_logos/urunler/taylor_and_francis.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://sciencecouncil.org/web/wp-content/uploads/2016/02/iop-logo.jpg"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4 mr-0"
                        src="https://bioone.org/images/publishers/fullsize/SAGE.png"
                    />
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-48 h-50 object-cover object-center mb-4 mr-0"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Elsevier_logo_2019.svg/800px-Elsevier_logo_2019.svg.png"
                    />
                </Carousel>
                <Carousel></Carousel>
            </div>



        </div>
    )
}
