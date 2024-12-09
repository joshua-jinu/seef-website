import React from 'react'
import Project from "../components/Project"




// 'darkgreen': '#16423c',
//         'lightgreen': '#6A9C89',
//         'neutralgreen': '#c4dad2',
//         'neutral': '#E9EFEC',

const data = [{
  ProjectName: "Rainwater Harvesting",
  para_1: `At SEEF, a rainwater harvesting system was developed to demonstrate how rainwater can be
  captured and used efficiently in environments where rainfall is seasonal. The system collects
  rainwater from rooftops and stores it for later use in both household and agricultural
  applications, ensuring a consistent water supply throughout dry periods. This initiative helps
  students and community members understand the importance of water conservation in a
  sustainable farm setting, especially in areas that experience unpredictable rainfall.`,
  para_2: `SEEF’s system serves as a model that can be replicated in underprivileged schools and local
  communities, promoting water security and reducing reliance on municipal water sources. This
  project is critical for promoting long-term resilience in regions affected by water scarcity.`
},
{
  ProjectName: "Solar Dryer",
  para_1: `To address the problem of food waste and nutrient loss, SEEF introduced the use of solar
dryers to preserve fruits and vegetables. Using renewable energy from the sun, the solar dryer
gently removes moisture from produce, allowing it to be stored for extended periods without
losing its nutritional value. This innovation helps reduce post-harvest waste, ensuring that
excess fruits and vegetables can be saved and consumed later, particularly when fresh produce
is unavailable.`,
  para_2: `To address the problem of food waste and nutrient loss, SEEF introduced the use of solar
dryers to preserve fruits and vegetables. Using renewable energy from the sun, the solar dryer
gently removes moisture from produce, allowing it to be stored for extended periods without
losing its nutritional value. This innovation helps reduce post-harvest waste, ensuring that
excess fruits and vegetables can be saved and consumed later, particularly when fresh produce
is unavailable.`,
},
{
  ProjectName: "Organic Garden",
  para_1: `SEEF’s organic garden serves as a living lab where multiple research plots have been created
to study sustainable farming techniques. Students engage in experiments to evaluate the effects
of various factors on vegetable growth, such as irrigation methods, compost application,
planting on slopes, and intercropping with legumes. These research plots allow students to
observe firsthand how sustainable agricultural practices can improve crop yield and soil health
without the need for chemical fertilizers or pesticides.`,
  para_2: `By working on the organic garden, students learn about biodiversity and the importance of
preserving soil quality through natural methods. This hands-on experience not only enhances
their knowledge of sustainable agriculture but also encourages them to adopt these practices in
their own communities. The garden’s success in growing vegetables sustainably also serves as
a model for promoting food security in underprivileged schools and local areas.`,
},
{
  ProjectName: `Composting`,
  para_1: `Composting is a fundamental part of SEEF’s sustainability efforts, teaching students how to turn
organic waste into valuable compost that enriches soil quality. Students learned to create and

maintain composting pits by layering kitchen scraps, farm waste, and other biodegradable
materials. Over time, this organic matter breaks down, producing nutrient-rich compost that can
be used to fertilize crops in SEEF’s organic garden.`,
  para_2: `The composting project highlights the importance of reducing waste and promoting circular
economies, where nothing is wasted and resources are continuously reused. By applying
compost to their farming plots, students observed significant improvements in soil fertility and
crop growth without relying on chemical fertilizers. This initiative not only educates youth on
sustainable waste management but also promotes environmental stewardship by reducing
landfill waste.`,
},
{
  ProjectName: "Sustainable Menstruation",
  para_1: `SEEF is committed to promoting sustainable menstruation, addressing the taboo surrounding
menstruation in many communities while encouraging the use of eco-friendly products.
Workshops were conducted to educate young women about sustainable menstrual products
such as reusable cloth pads and menstrual cups, which are both cost-effective and
environmentally friendly alternatives to disposable sanitary products.`,
  para_2: `By breaking the silence around menstruation and providing access to sustainable solutions,
SEEF empowers girls and women to make informed choices about their health while reducing
plastic waste from single-use products. The program also includes awareness campaigns in
schools, where students learn about menstrual hygiene management and the environmental
impact of disposable products, creating a more informed and empowered community.`,
},
{
  ProjectName: "Nutrition",
  para_1: `SEEF’s nutrition initiative focuses on educating students about the importance of a balanced
diet and how to incorporate more fruits and vegetables into their daily meals. Cooking classes
were held to demonstrate easy, healthy recipes using local produce from the farm, highlighting
the benefits of fresh, nutrient-rich foods. Students learned how to make healthier food choices
and integrate more plant-based meals into their diets to support their overall health and
well-being.`,
  para_2: `This hands-on approach to nutrition education not only improves the students’ understanding of
healthy eating but also encourages them to share their knowledge with their families and
communities. By promoting the consumption of farm-grown fruits and vegetables, SEEF helps
combat malnutrition and fosters a culture of healthy living that can have lasting benefits for
individuals and society.`,
}
]

const CurrentProjects = [
  {
    ProjectName: "Algal Farming Project by SEEF",
    para_1: `SEEF is implementing an algal farming project as part of its broader focus on environmental
sustainability. Algal farming offers an efficient and sustainable way to tackle environmental
issues such as pollution, excessive CO2 emissions, and soil contamination from chemical

fertilizers. This project aims to raise awareness of how algae, often considered a nuisance, can
play a vital role in ecological balance. Students were taught how to farm algae, which can be
grown almost anywhere with minimal setup, and discovered its potential applications in biofuel
production, wastewater treatment, and as a food source.`,
    para_2: `In collaboration with the local community, SEEF promotes small-scale algal farming practices,
emphasizing its ease of use and the rapid results it can produce. The project demonstrates that
algae can significantly reduce pollution while providing economic and environmental benefits.
Through this initiative, SEEF not only fosters a culture of environmental stewardship but also
empowers students to lead innovative projects that contribute to a healthier planet.`,
  },
  {
    ProjectName: "Nutrition Project by SEEF",
    para_1: `SEEF is undertaking a project to address the critical issue of iron deficiency and anemia,
particularly in children and teens. The project aims to create sustainable, affordable diets for
locals suffering from iron deficiency, focusing on meal planning, nutritional education, and social
media awareness campaigns. Students are actively involved in identifying the root causes of
anemia, such as inadequate dietary intake, and worked on developing nutrition programs that
could be implemented in underprivileged communities. By raising awareness through various
platforms, SEEF seeks to highlight the importance of iron-rich diets to improve public health
outcomes.`,
    para_2: `This initiative is part of SEEF’s broader mission to promote community-based health
interventions. The project emphasizes that addressing nutritional deficiencies requires both
education and practical solutions. SEEF’s approach of involving local communities and focusing
on small-scale interventions has the potential to create lasting change, ensuring that children
and teens in low-resource areas have access to the nutrients they need for healthy
development. Through this project, SEEF helps create a model that could be expanded to
address malnutrition and health issues in other communities as well.`,
  },
  {
    ProjectName: "Sustainable Menstrual Health Project by SEEF",
    para_1: `SEEF is actively addressing the challenges of sustainable menstrual health through both
product innovation and educational interventions. The project focuses on promoting eco-friendly
menstrual products such as reusable cloth pads, menstrual cups, and organic tampons, which
significantly reduce environmental waste compared to traditional plastic-based products. SEEF
engages students in designing campaigns that raise awareness about these sustainable
options, while also tackling the stigma surrounding menstruation. By conducting workshops in
local communities, SEEF ensures that people are informed about the importance of using
eco-friendly menstrual products and their role in reducing plastic waste.`,
    para_2: `In addition to product promotion, SEEF is committed to improving accessibility and affordability
of these sustainable alternatives, particularly in underserved communities. The project involves
community outreach programs that focus on education about menstrual hygiene and health,
breaking down taboos, and advocating for policies that support widespread access to
eco-friendly products. By integrating both awareness campaigns and practical solutions, SEEF

empowers women and girls to make informed, sustainable choices while also fostering a
supportive environment where menstruation is discussed openly and without stigma. This
project not only contributes to environmental sustainability but also promotes gender equity by
addressing a critical health and social issue.`,
  },
]

const FutureProjects = [
  {
    ProjectName: "",
    para_1: `SEEF is excited to announce upcoming projects centered on sustainability and education,
aimed at empowering youth to lead change in their communities. From new initiatives in waste
reduction, eco-friendly farming techniques, and renewable energy to expanded programs in
menstrual health and nutrition, SEEF continues to promote hands-on learning and innovation.
We invite students, educators, and community members to participate, collaborate, or offer
support as we work together toward a more sustainable future. Join us in creating impactful
solutions that can benefit both people and the planet.`,
    para_2: ``,
  }
]

function Projects() {
  return (
    <div className='text-black mt-20 w-full'>

      <div className='w-full'>
        {/* COMPLETED PROJECTS */}
        <div className='bg-neutralgreen w-full p-4 pt-20 mb-10' >
          <p className=' font-bold text-gray-900 sm:truncate text-4xl md:text-4xl sm:tracking-tight mb-5'>
            Completed Projects
          </p>
          {data.map((ele) => (
            <div>

              <div className="mb-10 ml-8 mr-8 bg-lightgreen p-5 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

                  <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      {ele.ProjectName}
                    </h2>
                  </div>

                  <div className="  bg-neutralgreen text-left p-10 rounded-2xl">
                    <div className='mb-4'>
                      <p>{ele.para_1}</p>
                    </div>
                    <div>
                      <p>{ele.para_2}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          ))}

        </div>


        {/* CURRENT PROJECTS */}
        <div className='bg-neutralgreen p-4 mb-10' >
          <p className=' font-bold text-gray-900 sm:truncate text-4xl md:text-4xl sm:tracking-tight mb-5'>
            Current Projects
          </p>
          {CurrentProjects.map((ele) => (
            <div>

              <div className="mb-10 ml-20 mr-20 bg-lightgreen p-5 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

                  <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      {ele.ProjectName}
                    </h2>
                  </div>

                  <div className="  bg-neutralgreen text-left p-10 rounded-2xl">
                    <div className='mb-4'>
                      <p>{ele.para_1}</p>
                    </div>
                    <div>
                      <p>{ele.para_2}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          ))}

        </div>

        {/* FUTURE PROJECTS */}
        <div className='bg-neutralgreen p-4 mb-10' >
          <p className=' font-bold text-gray-900 sm:truncate text-4xl md:text-4xl sm:tracking-tight mb-5'>
            Future Projects
          </p>
          {FutureProjects.map((ele) => (
            <div>

              <div className="mb-10 ml-20 mr-20 bg-lightgreen p-5 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-4">

                  {/* <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      {ele.ProjectName}
                    </h2>
                  </div> */}

                  <div className="  bg-neutralgreen text-left p-10 rounded-2xl">
                    <div className='mb-4'>
                      <p>{ele.para_1}</p>
                    </div>
                    <div>
                      <p>{ele.para_2}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default Projects
