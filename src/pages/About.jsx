import React from 'react';
import backgroundImage from '../assets/illustration.jpg'; // Import the image

function About() {
  return (
    <div className="bg-darkgreen mt-20">
      {/* Header Section */}
      <div className="w-screen h-[200px] bg-lightgreen flex items-center justify-center px-2">
        <span className="lg:text-7xl text-[45px] md:text-6xl font-bold text-white font-palatino">
          About
        </span>
      </div>

      {/* Background Section */}
      <div
        className="relative" // Parent container needs to be relative
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image dynamically
          backgroundSize: 'cover', // Ensure the background image covers the entire area
          backgroundPosition: 'center', // Center the background image
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-70 z-10"></div>

        {/* Content Section */}
        <div className="py-[10vh] relative z-20">
          <div className="w-full flex flex-col lg:flex-row justify-around items-center">
            {/* Left Column */}
            <div className="lg:w-1/2 lg:px-24 w-3/4">
              <p className="text-black mb-6 font-Rubik text-lg leading-relaxed">
                Sustainable Environment Educational Foundation (SEEF) was established in 2022 by alumni
                of St. Joseph's Boys' High School (SJBHS) who had a vision to empower today's youth to
                lead the way toward a better and more sustainable future. SEEF empowers students from
                underprivileged backgrounds to become the changemakers of tomorrow by fostering
                experiential learning through peer-based collaboration, mentorship, and networking. Students
                gain hands-on experience, develop essential skills, and build confidence to break barriers and
                create opportunities.
              </p>
              <p className="text-black mb-6 font-Rubik text-lg leading-relaxed">
                SEEF’s initial work revolved around developing and implementing farm-based projects at a
                model farm on the outskirts of Bangalore. Since then, SEEF's initiatives have evolved into
                meaningful, collaborative endeavours with underprivileged schools like Christel House India.
                These partnerships go beyond project management with students SJBHS and Christel House
                India coming together to design, develop, and implement a variety of sustainability projects,
                thereby fostering a sense of shared responsibility and leadership among them.
              </p>
              <p className="text-black mb-6 font-Rubik text-lg leading-relaxed">
                To ensure sustainable learning and long-term change, SEEF plans to conduct regular
                workshops and awareness campaigns directly within these schools. These initiatives aim to
                empower students with the knowledge and skills they need to make informed decisions that
                can transform their lives and communities. For example, workshops on sustainable
                menstruation seek to dispel myths, address fears, and introduce eco-friendly menstrual
                products, helping young girls approach menstruation with dignity and confidence.
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 lg:px-24 w-3/4 flex flex-col items-center">
              <p className="text-black mb-6 font-Rubik text-lg leading-relaxed">
                Nutrition-based campaigns focus on educating students about the importance of balanced
                diets and how adding simple, nutrient-rich foods to their daily meals can significantly
                improve their health. By addressing key issues like micronutrient deficiencies, SEEF hopes to
                create lasting improvements in the well-being of entire student communities. Through this
                hands-on approach, SEEF is not only developing immediate solutions but also cultivating a
                sense of sustainability, leadership, and resilience in every student involved.
              </p>

              <p className="text-black mb-6 font-Rubik text-lg leading-relaxed">
                SEEF works on a range of sustainability-focused projects at the farm, including:
              </p>
              <ul className="pl-6 text-black mb-6 font-Rubik text-lg leading-relaxed bg-lightgreen p-8 rounded-md">
                <li>Organic Vegetable Garden</li>
                <li>Composting</li>
                <li>RWH Model</li>
                <li>Solar Dryer</li>
                <li>Nutrition</li>
                <li>Sustainable Menstruation</li>
                <li>Algal Farming</li>
              </ul>

              <p className="text-black mb-6 font-Rubik text-lg leading-relaxed">
                In addition to our farm initiatives, SEEF has partnered with the Social Innovation Lab at
                SJBHS to fuel creativity, critical thinking, and problem-solving in students. This program
                encourages young minds to come up with innovative solutions to some of the most pressing
                social and environmental challenges we face today.
              </p>

              <p className="text-black mb-6 font-Rubik text-lg leading-relaxed">
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
