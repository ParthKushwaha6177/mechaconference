import './Venue.css'
export function Venue()
{
    return(
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Venue</h2>
                <p className="text-lg text-justify text-gray-700 mx-auto px-4 py-4">
                Punjab Engineering College is located in Chandigarh, Sector-12. Chandigarh, also known as The City Beautiful, is a city and a union territory in the northern part of India that serves as the capital of the states of Punjab and Haryana. Chandigarh is easily accessible from anywhere in the country via all modes of transport, including flight, train and bus. The city is served by an international airport as well as well-planned rail and road network, using which travellers can enter the city with ease. 
                </p>
            </div>
            <div className='flex justify-center'>
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="w-full sm:w-1/2 md:p-4">
                    <img src="https://dummyimage.com/400x200" alt="Venue Image 1" className="rounded-lg shadow-lg mb-4" />
                </div>
                <div className="w-full sm:w-1/2 md:p-4">
                    <img src="https://dummyimage.com/400x200" alt="Venue Image 2" className="rounded-lg shadow-lg mb-4" />
                </div>
            </div>
            </div>
            <div className="custom-bg-colour rounded-lg overflow-hidden py-2">
                <div className="container mx-auto text-center">
                    <h2 className="text-ways-to-reach">Ways to Reach Chandigarh</h2>
                </div>
            </div>
            <div className='second-portion'>
            <section className="text-gray-600 body-font -mt-14">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://www.mastyatri.com/wp-content/uploads/Chandigarh-to-Delhi-International-Airport.jpg"/>
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Air Route</h2>
                            <p className="text-air-route text-justify">Chandigarh International Airport serves not only Chandigarh but neighbouring cities of Panchkula, Mohali and even some of the southern districts of Himachal. The international airport operates flights of 7 airlines including Indigo, Spicejet and Air India which connect Chandigarh with several national and international destinations. Travellers can either take private cabs or public transport like buses, autos to reach the college from here.</p>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://spoindia.org/wp-content/uploads/2021/09/chandigha.jpg"/>
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Train Route</h2>
                            <p className="text-train-route text-justify">Chandigarh Junction Railway Station (CDG) is the main railhead of the city. It serves both short and long-distance trains to and from neighbouring cities like Delhi, Ambala, Panipat, Shimla and many more.</p>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://ieeeindiscon.org/assets/images/busstop.jpg"/>
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Road Route</h2>
                            <p className="text-road-route text-justify">Travellers who prefer road trips can easily access Chandigarh from neighbouring cities via a well-maintained network of highways and expressways. Ambala-Chandigarh Expressway, Khuda Lahore Road, Jan Marg, Sukhna Path and Shanti Path are some of the major arterial roads in the city. Chandigarh Bus Terminus serves as the main entrance for both public and private buses. There are plenty of public transports available outside the bus terminus using which guests can access major parts of the city.</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            <div className='text-2'>
                <div className="custom-bg-colour-2 rounded-lg overflow-hidden py-2">
                    <div className="container mx-auto text-center">
                        <h2 className="text-hotels">Hotels Near PEC</h2>
                    </div>
                </div>
            </div>

            <div className='third-portion'>
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <div className="img-list">
                                <img alt="Hotels" className="map w-1/2" src="https://ieeeindiscon.org/assets/images/hotels.png"/>
                                <ul className="list-disc list-inside px-10">
                                    <h1 className='some-good-hotels'>Some Good Hotels</h1>
                                    <li className="leading-relaxed">The Lalit Chandigarh</li>
                                    <li className="leading-relaxed">JW Marriott Hotel</li>
                                    <li className="leading-relaxed">Hyatt Centric Sector 17</li>
                                    <li className="leading-relaxed">Hotel Mountain View</li>
                                    <li className="leading-relaxed">Hyatt Regency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </section>
            </div>

            <div className='text-3'>
                <div className="custom-bg-colour rounded-lg overflow-hidden py-2">
                    <div className="container mx-auto text-center">
                        <h2 className="text-attractions">Attractions in Chandigarh</h2>
                    </div>
                </div>
            </div>

            <div className='Attractions py-20'>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-2 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Sukhna Lake" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://www.chandigarhx.com/wp-content/uploads/2018/04/sukhna-lake-drying-1.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Sukhna Lake</h2>
                                <p class="mb-4 text-justify">A tranquil reservoir offering boating and breathtaking views.</p>
                            </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Rose Garden" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://im.whatshot.in/img/2019/Dec/rose-garden-1575289885.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Rose Garden</h2>
                                <p class="mb-4 text-justify">The largest rose garden in Asia, boasting thousands of varieties.</p>
                            </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="Rock Garden" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://www.adotrip.com/public/images/areas/5e41376d80313-Rock%20Garden%20Sight%20Seeing%20Tour.jpg"/>
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Rock Garden</h2>
                                    <p class="mb-4 text-justify">A unique sculpture garden crafted from recycled materials.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Bird Park" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://avesdojorge.com/wp-content/uploads/2020/12/avesdojorge_loroparquefundacion-scaled.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Bird Park</h2>
                                <p class="mb-4 text-justify">Located in the Nepli Reserve Forest, it offers a peaceful retreat for birdwatchers within the lush Sukhna Wildlife Sanctuary.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container px-5 py-0 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Le Corbusier Centre" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://chandigarhmetro.com/wp-content/uploads/2017/03/Le-corbusier-chandigarh.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Le Corbusier Centre</h2>
                                <p class="mb-4 text-justify">Provides insights into the life and works of Le Corbusier.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Capitol Complex" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://cdn.thespaces.com/wp-content/uploads/2020/04/Chandigarh_RC_6-1024x683.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Capitol Complex</h2>
                                <p class="mb-4 text-justify">An architectural marvel by Le Corbusier housing government offices.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Government Museum and Art Gallery" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://edge.ixigo.com/ixi-api/img/512d9ca2e4b09b831bf79fcb_600x315.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Government Museum and Art Gallery</h2>
                                <p class="mb-4 text-justify">Home to Gandharan sculptures and modern Indian art.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Cactus Garden" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://themedmatter.in/wp-content/uploads/2023/02/cactus-garden-in-chandigarh-city-featured-1024x576.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Cactus Garden</h2>
                                <p class="mb-4 text-justify">One of Asia's largest succulent gardens located in nearby Panchkula.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>

            <div className='text-3'>
                <div className="custom-bg-colour rounded-lg overflow-hidden py-2">
                    <div className="container mx-auto text-center">
                        <h2 className="text-attractions">Attractions Near Chandigarh</h2>
                    </div>
                </div>
            </div>

            <div className='Attractions py-20'>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-2 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Shimla" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://topranked.in/wp-content/uploads/2020/05/Kufri-2048x1536.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Shimla</h2>
                                <p class="mb-4 text-justify">Situated at the height of 2200m, the hill station still retains its old-world charm with beautiful colonial architecture, pedestrian-friendly Mall Road and the ridge lined up with multiple shops, cafes and restaurants.</p>
                            </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Kasauli" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://i1.wp.com/travelshoebum.com/wp-content/uploads/2017/10/dsc_6628.jpg?resize=1000%2C662&ssl=1"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Kasauli</h2>
                                <p class="mb-4 text-justify">Explore Kasauli, a quiet hill station in Himachal Pradesh, with its scenic views, temples, churches and breweries.</p>
                            </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="Chail" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1102198/WelcomHotel-916x515.jpg"/>
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Chail</h2>
                                    <p class="mb-4 text-justify">Chail is a quiet hill station close (44km) to Shimla, known for the world's highest cricket ground and a heritage hotel, Chail Palace. Surrounded by pine and deodar trees, Chail is located at an altitude of 2,250m above sea level.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Dharamshala" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://www.tripsavvy.com/thmb/Q31XiZ7CMED31Z9uprSmMXhIVhI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/india--dharamsala-105137790-3c6e2f8cc6a7456bad0b24d3118c905f.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Dharamshala</h2>
                                <p class="mb-4 text-justify">Dharamshala is a picturesque hill town in the lap of the Dhauladhar range.Often overshadowed by the more popular suburb of McLeodganj, Dharamshala is more of a laid-back and calm destination to spend a long weekend.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container px-5 py-0 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Timber Trail" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://www.holidify.com/images/cmsuploads/compressed/Timber_Trail_at_Parwanoo,_Himachal_Pradesh_20170407195818.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Timber Trail</h2>
                                <p class="mb-4 text-justify">Wrapped in the quiet charms of Himachal Pradesh, Timber Trail in the city of Kasauli is a quiet little hill station</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="Toy Train" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/r04ped.jpg"/>
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Toy Train</h2>
                                <p class="mb-4 text-justify">Kalka to Shimla toy train runs on a narrow-gauge track and is known for its dramatic views of the hills and surrounding villages.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
}
