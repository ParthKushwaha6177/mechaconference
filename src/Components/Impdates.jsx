import Typewriter from "typewriter-effect";

export function Impdates() {
  return (
    <div className="flex justify-center">
      <section className="bg-white-800 text-black-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3 flex justify-center">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Important Dates")
                        .pauseFor(15)
                        .start();
                    }}
                  />
                </h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">Event 1 </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">Date</time>
                  <p className="mt-3">Description of event</p>
                </div>
                <div className="flex flex-col items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">Event 2</h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">Date</time>
                  <p className="mt-3">Description of event</p>
                </div>
                <div className="flex flex-col items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">Event 3</h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">Date</time>
                  <p className="mt-3">Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
		<div className="flex justify-between">

        <button className="inline-block px-6 py-3 mr-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
          Call for Papers
        </button>
        <button className="inline-block px-6 py-3 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white">
          Submit Your Paper
        </button>
		</div>
      </section>
    </div>
  );
}