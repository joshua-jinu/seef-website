import React from 'react'
import image1 from '../assets/image1.jpg'

function Project() {
    return (
        <section className='our-projects bg-neutralgreen p-8'>
            <div>
                <h1 className='text-darkgreen p-4 text-4xl font-extrabold'>
                    OUR PROJECTS
                </h1>
                <div id='projects' className='flex font-extrabold flex-col md:flex-row p-9 md:px-[10%] leading-8 justify-around items-center'>
                    <div id='left'>
                        <h1 className='text-3xl pb-4 text-darkgreen'>Past Projects</h1>
                        <div className='text-center text-darkgreen font-extrabold bg-lightgreen p-8 rounded-3xl'>
                            <div>
                                <h1 className='text-6xl'>6</h1>
                                <ul>
                                    <li>NUTRITION</li>
                                    <li>SOLAR DRYER</li>
                                    <li>COMPOSTING</li>
                                    <li>ORGANIC GARDEN</li>
                                    <li>RAIN WATER HARVESTING</li>
                                    <li>SUSTAINABLE MENUSTRATION</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div id='right'>
                        <h1 className='text-3xl pb-4 text-darkgreen'>Current Projects</h1>
                        <div className='text-center text-darkgreen font-extrabold bg-lightgreen p-8 rounded-3xl'>
                            <div>
                                <h1 className='text-6xl'>3</h1>
                                <ul>
                                    <li>NUTRITION</li>
                                    <br />
                                    <li>ALGAL FARMING</li>
                                    <br />
                                    <li>SUSTAINABLE MENSTRUAL HEALTH</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='std-btn bg-darkgreen text-white rounded-full px-9'>Learn More</button>
                </div>
            </div>

            <div className='future-projects text-darkgreen font-extrabold flex flex-col md:flex-row justify-around w-full p-8'>
                <div id='left' className='md:w-1/2'>
                    <img src={image1} alt="" className='h-auto md:w-3/4 mb-8 self-center rounded-xl' />
                </div>
                <div id='right' className='md:w-1/2'>
                    <h1 className='font-extrabold text-3xl'>
                        FUTURE PROJECTS
                    </h1>
                    <br />
                    <p className='leading-9'>
                        SEEF is excited to announce upcoming projects centered on sustainability and education, aimed at empowering youth to lead change in their communities. From new initiatives in waste reduction, eco-friendly farming techniques, and renewable energy to expanded programs in menstrual health and nutrition, SEEF continues to promote hands-on learning and innovation. We invite students, educators, and community members to participate, collaborate, or offer support as we work together toward a more sustainable future. Join us in creating impactful solutions that can benefit both people and the planet.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Project