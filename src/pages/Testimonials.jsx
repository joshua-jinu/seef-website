import React from 'react'
import { HoverEffect } from '../components/cardHover'

function Testimonials() {
  return (
    <div className='bg-neutralgreen mt-20'>
      <div className='w-screen h-[300px] bg-lightgreen flex items-center justify-center px-2 z-[500 ]'>
        <span className='lg:text-7xl text-[45px] md:text-6xl  font-bold'>TESTIMONIALS</span>
      </div>
      <div className='flex justify-center'>
        <div className='lg:w-3/4  md:w-[80%] w-[90%] '>
          <HoverEffect items={testimonials}/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

export const testimonials = [
  {
    "title": "SEEF’s Vision in Action",
    "content": [
      {
        "sen": "\"SEEF has redefined how we approach sustainability and education. Their vision of empowering underserved communities through hands-on learning is truly transformative.\"",
        "from": "A Partner Organization"
      },
      {
        "sen": "\"The way SEEF integrates experiential learning with sustainable solutions is inspiring. It’s not just education; it’s empowerment for a better tomorrow.\"",
        "from": "A Collaborating Educator"
      }
    ]
  },
  {
    "title": "Empowering Through Collaborations",
    "content": [
      {
        "sen": "\"Our collaboration with SEEF has been a game-changer. The students’ creativity and problem-solving skills have blossomed, making a measurable difference in our community.\"",
        "from": "Christel House India"
      },
      {
        "sen": "\"The Social Innovation Lab at SJBHS, in partnership with SEEF, has provided a platform where students truly shine. They are learning to lead with purpose and innovation.\"",
        "from": "SJBHS Alumni"
      }
    ]
  },
  {
    "title": "Making an Impact with Projects",
    "content": [
      {
        "sen": "\"The rainwater harvesting model SEEF implemented has been a revelation. It has shown us how sustainable practices can be both simple and highly effective.\"",
        "from": "A Local Community Leader"
      },
      {
        "sen": "\"The workshops on sustainable menstruation empowered our students to make informed choices while promoting eco-friendly solutions in their communities.\"",
        "from": "School Administrator"
      },
      {
        "sen": "\"SEEF’s organic garden project has taught students to appreciate the value of sustainable farming. It’s incredible to see young minds so engaged in creating positive change.\"",
        "from": "Volunteer"
      },
      {
        "sen": "\"The solar dryer initiative is an example of how SEEF bridges innovation with practicality. It’s a small step that has made a big difference in reducing food waste.\"",
        "from": "Project Participant"
      }
    ]
  },
  {
    "title": "Want to Be Part of SEEF’s Journey?",
    "content": [
      {
        "sen": "\"Your testimonial could inspire others to join the movement for sustainability and social change. Share your story with us!\"",
        "from": "SEEF Team"
      }
    ]
  }
]

