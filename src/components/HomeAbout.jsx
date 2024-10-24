import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'

function HomeAbout() {
  return (
    <section className='about-components'>
        <div>
            <h2 className='home-subhead'>Overview</h2>
        </div>
        <div>
            <div>
                <p className='about-para'>SEEF (Social Empowerment and Education Farm) is a Bangalore-based initiative dedicated to
empowering youth to drive social change through sustainability, education, and community
engagement. At SEEF, students work collaboratively on innovative projects aimed at addressing
critical societal issues such as nutrition, sustainable menstruation, and food security. By
providing a platform for hands-on learning, SEEF encourages young people to actively engage
with real-world challenges, equipping them with the skills to create meaningful and lasting
change. <br /> <br />
A core aspect of SEEF’s mission is to implement impactful projects in underprivileged schools,
where students can apply their learning to improve the lives of others. These projects not only
promote awareness about important social issues but also empower the students involved to
take leadership roles in driving change. Through initiatives like nutrition programs, eco-friendly
menstrual health solutions, and sustainable farming practices, SEEF helps build resilient
communities with a focus on long-term solutions. <br /> <br />
SEEF’s approach also emphasizes the importance of building a strong, lasting network of
changemakers. By fostering connections and collaboration among students, SEEF creates a
community of socially conscious individuals committed to sustainability and social innovation.
This network supports ongoing engagement and helps ensure that the projects developed at
SEEF continue to make a difference well beyond the initial stages.</p>
                <br />
                <Link to='/about'>
                    <button className='std-btn' id='read-more'>Know More</button>
                </Link>
            </div>
            {/* <div>
                <img src="" alt="" />
            </div> */}
        </div>
    </section>
  )
}

export default HomeAbout
