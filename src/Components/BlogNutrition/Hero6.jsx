import React from 'react'
import "boxicons/css/boxicons.min.css";
import { calendar, mansitting, nutritionhero, pentool3 } from '../../assets'

const Hero6 = () => {
  return (
    <section>
        <div>
            <h1 className='text-center text-[#514A4A] text-[12px]'>Home - Blog - Blog Single</h1>
            <h2 className='text-[#1B1B1B] font-semibold lg:text-[40px] text-center'>Blog</h2>
        </div>

        <div className='mt-10'>
            <h1 className='text-[16px] text-[#0071FE] underline decoration-[#0071FE] decoration'>NUTRITION</h1>
            <h2 className='text-[#1B1B1B] text-[32px] font-semibold mt-2'>Nutrition 101: <br /> A Beginner's Guide to Healthy Eating</h2>
            <div className='leading-loose mt-3'>
                <h1 className='flex items-center text-[20px] text-[#514A4A] gap-[3px]'><img src={pentool3} alt=""/>Felicia Tilman</h1>
                <h1 className='flex items-center text-[14px] text-[#787070] gap-[3px]'><img src={calendar} alt="" /> 1 March, 2024</h1>
            </div>
        </div>

        <div className='mt-5'>
            <img src={nutritionhero} alt="" />
        </div>

        <div className='grid grid-cols-2 -space-x-80 mt-7'>
            <div>
                <h1 className='text-[#0071FE] text-[16px]'>POINTS...</h1>
                <div className='space-y-5'>
                    <p className='text-[#1B1B1B] font-semibold text-[16px] mt-1 underline decoration-[#787070] decoration'>Incorporating Whole Foods</p>
                    <p className='text-[#645D5D] text-[16px]'>Choosing Healthy Fats</p>
                    <p className='text-[#645D5D] text-[16px]'>Balancing Macronutrients</p>
                    <p className='text-[#645D5D] text-[16px]'>Hydration and Mindful Eating</p>
                    <p className='text-[#645D5D] text-[16px]'>Conclusion</p> 
                </div>
            </div>

            <div>
                <h1 className='text-[#1B1B1B] text-[16px] leading-loose'>Embarking on a journey towards healthier eating habits can be both exciting and overwhelming, especially if you're just starting out. <br />
                But fear not! Our blog series, "Nutrition 101," is here to guide you through the essentials of healthy eating, providing you <br /> with the knowledge and tools you need to nourish your body and enhance your well-being.</h1>


                <div className='leading-loose'>
                    <h1 className='text-[24px] font-semibold text-[#1B1B1B]'>Incorporating Whole Foods</h1>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Start by incorporating more whole foods into your diet, such as fruits, vegetables, whole grains, and lean proteins. These nutrient-rich foods provide essential vitamins, minerals, and antioxidants to support overall health.</p>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Aim to fill half of your plate with colorful fruits and vegetables at each meal. These plant-based foods are packed with <br className='lg:block hidden'/> fiber, which aids in digestion, promotes satiety, and supports a healthy weight.</p>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Experiment with different types of whole grains, such as quinoa, brown rice, oats, and barley, to add variety to your <br className='lg:block hidden'/> meals and increase your intake of fiber and complex carbohydrates.</p>
                </div>

                <div className='leading-loose'>
                    <h1 className='text-[24px] font-semibold text-[#1B1B1B]'>Choosing Healthy Fats</h1>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Opt for sources of healthy fats, such as avocados, nuts, seeds, and fatty fish like salmon and trout. These fats <br className='lg:block hidden'/> are essential for brain health, hormone production, and the absorption of fat-soluble vitamins.</p>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Limit your intake of saturated fats and trans fats, which are found in fried foods, processed snacks, and fatty cuts of <br className='lg:block hidden'/> meat. These fats can raise cholesterol levels and increase the risk of heart disease.</p>
                </div>

                <div className='mt-5'>
                    <img src={mansitting} alt="" />
                </div>

                <div className='leading-loose'>
                    <h1 className='text-[24px] font-semibold text-[#1B1B1B]'>Balancing Macronutrients</h1>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Strive for a balanced diet that includes a mix of carbohydrates, proteins, and fats at each meal. Carbohydrates provide energy, proteins support muscle growth and repair, and fats help with hormone production and nutrient absorption.</p>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Choose complex carbohydrates, such as whole grains, legumes, and starchy vegetables, over refined carbohydrates like white bread and sugary snacks. These complex carbs provide sustained energy and are higher in fiber and nutrients.</p>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Include lean sources of protein, such as poultry, fish, tofu, beans, and lentils, in your meals to support muscle health and keep you feeling full and satisfied.</p>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Incorporate healthy fats into your diet from sources like olive oil, nuts, seeds, and fatty fish. These fats are essential for brain function, heart health, and overall well-being.</p>
                </div>

                <div className='leading-loose'>
                    <h1 className='text-[24px] font-semibold text-[#1B1B1B]'>Hydration and Mindful Eating</h1>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Stay hydrated throughout the day by drinking plenty of water and herbal teas. Aim to drink at least 8 glasses of water per day, and more if you're physically active or in hot weather.</p>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Practice mindful eating by paying attention to your hunger and fullness cues, eating slowly, and savoring each bite. This can help prevent overeating and promote better digestion and satisfaction with your meals.</p>
                    <p className='flex gap-3 pl-2 text-[#3E3838]'><i className="bx bxs-circle text-[8px] mt-3"></i> Limit your intake of sugary beverages like soda, fruit juices, and energy drinks, which can contribute to weight gain and increase the risk of chronic diseases like type 2 diabetes and heart disease.</p>
                </div>

                <div className='leading-loose mt-3'>
                    <h1 className='text0-[16px] text-[#3E3838]'>By incorporating these practical tips into your daily routine, you can improve your eating habits and take meaningful steps towards better health and well-being. Remember to be patient with yourself and make gradual changes over time for long-lasting results.</h1>
                </div>

                <div className='leading-loose mt-3'>
                    <h1 className='text-[24px] font-semibold text-[#1B1B1B]'>Related Blogs:</h1>
                    <p className='text-[16px] text-[#B57500] underline decoration-[#B57500] decoration'>Nutrition 102: Some Things You Should Avoid</p>
                    <p className='text-[16px] text-[#B57500] underline decoration-[#B57500] decoration'>Breaking Down the Sugar Debate: How Much Sugar is Too Much?</p>
                    <p className='text-[16px] text-[#B57500] underline decoration-[#B57500] decoration'>The Gut-Brain Connection: How Your Gut Health Impacts Your Overall Wellbeing</p>
                    <p className='text-[16px] text-[#B57500] underline decoration-[#B57500] decoration'>Understanding Macronutrients: What You Need to Know About Carbs, Proteins, and Fats</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero6