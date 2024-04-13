import Typewriter from "typewriter-effect";
export function Speakers()
{
    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        <Typewriter onInit={(typewriter) => {
                            typewriter
                                .typeString("Speakers")
                                .pauseFor(15)
                                .start();
                        }} />
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">**A short desciption of the Speakers page**</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="Photos/Inderdeep_Singh.jpg" alt="content"></img>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Inderdeep Singh</h2>
          <p className="leading-relaxed text-base">Department of Mechanical and Industrial Engineering, IIT Roorkee</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"></img>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Akshay Dvivedi</h2>
          <p className="leading-relaxed text-base">Department of Mechanical and Industrial Engineering, IIT Roorkee</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"></img>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Rahul Vaish</h2>
          <p className="leading-relaxed text-base">School of Engineering IIT Mandi</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"></img>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Sunil Pandey</h2>
          <p className="leading-relaxed text-base">Department of Mechanical Engineering, IIT Delhi</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"></img>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Associate Professor</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Pradeep Dixit</h2>
          <p className="leading-relaxed text-base">Department of Mechanical Engineering, IIT Bombay</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
