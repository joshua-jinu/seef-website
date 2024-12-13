import React from 'react'
import image2 from '../assets/image2.png'

function CTA() {
  return (
    <section className='bg-darkgreen text-white flex flex-col lg:flex-row p-5 font-extrabold'>
        <div className='lg:w-1/2 flex justify-center items-center'>
            <img src={image2} alt="" className='lg:w-3/4'/>
        </div>
        <div className='lg:w-1/2 flex text-white justify-center items-center flex-col text-lg leading-9 p-6'>
            <br />
            <h1 className='text-3xl text-white'>Call to Action</h1>
            <br />
            <p className='text-white'>
            Join SEEF in making a difference! Partner with us to drive social innovation, address critical challenges, and empower communities. Whether you're an educator, organization, or individual passionate about creating positive change, our mission has a place for you. Join us in creating a sustainable and equitable future.
            </p>
            <br />
            <br />
            <p className='text-right text-white self-end'>
                Contact <br />
                seeffoundation@gmail.com
            </p>
        </div>
    </section>
  )
}

export default CTA
