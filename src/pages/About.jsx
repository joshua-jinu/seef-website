import React from 'react';
import backgroundImage from '../assets/aboutUsBckgGreen.png';  // Import the image

function About() {
  return (    
  <div className="bg-darkgreen mt-20">

      <div className="w-screen h-[200px] bg-lightgreen flex items-center justify-center px-2">
        <span className="lg:text-7xl text-[45px] md:text-6xl font-bold text-white font-palatino">
          About
        </span>
      </div>
    
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image dynamically
          backgroundSize: 'cover',  // Ensure the background image covers the entire area
          backgroundPosition: 'center',  // Center the background image
        }}
      >

        <div className="flex justify-center">
          <div className="lg:w-3/4 md:w-[80%] w-[90%] flex flex-col lg:flex-row lg:items-start">
   
            <div className="lg:w-1/2 w-full lg:pr-8 p-4">
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                Sustainable Environment Educational Foundation (SEEF) was established in 2022 by alumni
                of St. Joseph's Boys' High School (SJBHS) who had a vision to empower today's youth to
                lead the way toward a better and more sustainable future. SEEF empowers students from
                underprivileged backgrounds to become the changemakers of tomorrow by fostering
                experiential learning through peer-based collaboration, mentorship, and networking. Students
                gain hands-on experience, develop essential skills, and build confidence to break barriers and
                create opportunities.            
              </p>
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                SEEF’s initial work revolved around developing and implementing farm-based projects at a
                model farm on the outskirts of Bangalore. Since then, SEEF's initiatives have evolved into
                meaningful, collaborative endeavours with underprivileged schools like Christel House India.
                These partnerships go beyond project management with students SJBHS and Christel House
                India coming together to design, develop, and implement a variety of sustainability projects,
                thereby fostering a sense of shared responsibility and leadership among them.            
              </p>
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                To ensure sustainable learning and long-term change, SEEF plans to conduct regular
                workshops and awareness campaigns directly within these schools. These initiatives aim to
                empower students with the knowledge and skills they need to make informed decisions that
                can transform their lives and communities. For example, workshops on sustainable
                menstruation seek to dispel myths, address fears, and introduce eco-friendly menstrual
                products, helping young girls approach menstruation with dignity and confidence.            
              </p>
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                Nutrition-based campaigns focus on educating students about the importance of balanced
                diets and how adding simple, nutrient-rich foods to their daily meals can significantly
                improve their health. By addressing key issues like micronutrient deficiencies, SEEF hopes to
                create lasting improvements in the well-being of entire student communities. Through this
                hands-on approach, SEEF is not only developing immediate solutions but also cultivating a
                sense of sustainability, leadership, and resilience in every student involved.            
              </p>            
            </div>

            <div className="lg:w-1/2 w-full flex flex-col items-center">
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                SEEF works on a range of sustainability-focused projects at the farm, including:
              </p>
              
              <ul className="pl-6 text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                <li>Organic Vegetable Garden</li>
                <li>Composting</li>
                <li>RWH Model</li>
                <li>Solar Dryer</li>
                <li>Nutrition</li>
                <li>Sustainable Menstruation</li>
                <li>Algal Farming</li>
              </ul>

              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                In addition to our farm initiatives, SEEF has partnered with the Social Innovation Lab at
                SJBHS to fuel creativity, critical thinking, and problem-solving in students. This program
                encourages young minds to come up with innovative solutions to some of the most pressing
                social and environmental challenges we face today.            
              </p>

              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                As SEEF continues to evolve, we remain committed to its core mission of empowering youth
                and fostering sustainable solutions Our current focus areas—such as algal farming,
                sustainable menstruation, and nutrition—reflect our commitment to addressing both
                environmental and social challenges. By providing opportunities for experiential learning and
                fostering meaningful partnerships, SEEF is dedicated to building a more sustainable and
                equitable future.            
              </p>
            
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default About;
