import collab1 from '../assets/collaborations1.jpg'
import collab2 from '../assets/collaborations2.jpg'
import collab3 from '../assets/collaborations3.jpg'
import { useEffect } from 'react'

function Collaborations() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className="bg-darkgreen mt-20">
      <div className="w-screen h-[300px] bg-lightgreen flex items-center justify-center px-2 z-[500]">
        <span className="lg:text-7xl text-[45px] md:text-6xl font-bold text-white font-palatino">
          Collaborations
        </span>
      </div>
      <div className="flex justify-center mt-8">
        <div className="lg:w-3/4 w-[80%] flex flex-col lg:flex-row lg:items-start">
          {/* Mobile Layout */}
          <div className="w-full lg:hidden flex flex-col justify-center items-center">
            <img
              src={collab1}
              alt="Collaboration 1"
              className="rounded-lg shadow-lg align-middle w-4/5 object-cover mb-4"
            />
            <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
              SEEF has been at the forefront of collaborative initiatives
              to tackle the pressing social, economic, and environmental
              issues faced by underprivileged communities.
            </p>
            
            <img
              src={collab2}
              alt="Collaboration 2"
              className="rounded-lg shadow-lg  w-4/5 object-cover mb-4"
            />
            <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
              SEEF was founded by alumni of St. Joseph's Boys' High
              School, who have partnered with the school since 2014 to
              develop the Social Innovation Lab—a platform designed to
              cultivate leadership, creativity, and problem-solving skills
              in students. Through this collaboration, SEEF has been
              able to leverage the school's expertise and resources to
              develop innovative solutions that address the unique
              challenges faced by marginalized communities.
            </p>
            
            <img
              src={collab3}
              alt="Collaboration 3"
              className="rounded-lg shadow-lg  w-4/5 object-cover mb-4"
            />
            <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
              Beyond SJBHS, SEEF has extended its reach to work with
              schools that serve underprivileged communities. One
              notable partnership is with Christel House India, a school
              dedicated to transforming the lives of economically
              disadvantaged children. SEEF's collaboration with Christel
              House addresses social, economic, and environmental
              challenges by empowering students to become
              change-makers, preparing them for upward economic
              mobility, good citizenship, and the realization of their goals
              and potential.
            </p>
            
            <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
              SEEF's collaborative approach highlights the power of
              cross-sector partnerships in driving social innovation and
              change, leveraging the knowledge, skills, and resources of
              various groups to address social, economic, and
              environmental challenges while promoting networking and
              collaboration.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:w-full">
            <div className="lg:w-1/2 lg:pr-8">
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                SEEF has been at the forefront of collaborative initiatives
                to tackle the pressing social, economic, and environmental
                issues faced by underprivileged communities.
              </p>
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                SEEF was founded by alumni of St. Joseph's Boys' High
                School, who have partnered with the school since 2014 to
                develop the Social Innovation Lab—a platform designed to
                cultivate leadership, creativity, and problem-solving skills
                in students. Through this collaboration, SEEF has been
                able to leverage the school's expertise and resources to
                develop innovative solutions that address the unique
                challenges faced by marginalized communities.
              </p>
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                Beyond SJBHS, SEEF has extended its reach to work with
                schools that serve underprivileged communities. One
                notable partnership is with Christel House India, a school
                dedicated to transforming the lives of economically
                disadvantaged children. SEEF's collaboration with Christel
                House addresses social, economic, and environmental
                challenges by empowering students to become
                change-makers, preparing them for upward economic
                mobility, good citizenship, and the realization of their goals
                and potential.
              </p>
              <p className="text-neutral mb-6 font-Rubik text-lg leading-relaxed">
                SEEF's collaborative approach highlights the power of
                cross-sector partnerships in driving social innovation and
                change, leveraging the knowledge, skills, and resources of
                various groups to address social, economic, and
                environmental challenges while promoting networking and
                collaboration.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center">
              <img
                src={collab1}
                alt="Collaboration 1"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover mb-4"
              />
              <img
                src={collab2}
                alt="Collaboration 2"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover mb-4"
              />
              <img
                src={collab3}
                alt="Collaboration 3"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaborations;