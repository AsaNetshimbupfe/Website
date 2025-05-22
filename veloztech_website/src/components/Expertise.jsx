// import { apple, bill, google } from "../assets";
import styles from "../style";
import grid1 from "../assets/images/IMG_8811.jpeg"
import grid2 from "../assets/images/IMG_8814.jpeg"
import grid3 from "../assets/images/IMG_8813.jpeg"

const Expertise = () => (
  
 <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#ffffff] rounded-[20px] box-shadow`}>
  <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
    <div className="">
         <h3 className={`${styles.heading3}`}>Expertise</h3>
         <p className="font-poppins font-medium  xs:text-[48px] text-[70px] text-[#10323c] xs:leading-[176.8px] leading-[66.8px] mr-10 ">
           We knew to be done is good, but sharing our experiences and it “works” is way better.
       </p>
       </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-12 px-4 py-12">
      
      {/* STEP 01 */}
      <div className="flex flex-col items-end justify-end text-right">
        <p className="text-[8.6rem] font-bold text-[#fc8318]">01</p>
        <h3 className="font-medium max-w-[450px] text-[#10323C] text-3xl mb-2">
          Tell us what you like (and what not)
        </h3>
        <p className="font-light text-left max-w-[450px] text-[#10323C] text-3xl">
          Never again waste time thinking about what to have! Veloztech AI will create
          a 100% personalized technology just for you. It makes sure you get all
          the technology and innovations you need, no matter what trend you follow!
        </p>
      </div>

      <div className="flex items-end w-100 h-100 rounded-2xl">
        <img
          src={grid1}
          alt="grid1"
          className="w-100 h-100 object-cover rounded-2xl"
        />
      </div>

      {/* STEP 02 */}
      <div className="flex items-end w-full h-full rounded-2xl">
        <img
          src={grid2}
          alt="grid2"
          className="w-110 h-110 object-cover rounded-2xl"
        />
      </div>

      <div className="flex flex-col items-start justify-start text-left">
        <p className="text-[8.6rem] font-bold text-[#fc8318]">02</p>
        <h3 className="font-medium max-w-[450px] text-[#10323C] text-3xl mb-2">
          Ability to combine empathy, creativity and rationality
        </h3>
        <p className="font-light text-left max-w-[450px] text-[#10323C] text-3xl">
          Once per week, approve the meal plan generated for you by VelozTech AI.
          You can change ingredients, swap entire meals, or even add your own recipes.
        </p>
      </div>

      {/* STEP 03 */}
      <div className="flex flex-col items-end justify-end text-right">
        <p className="text-[8.6rem] font-bold text-[#fc8318]">03</p>
        <h3 className="font-medium max-w-[450px] text-[#10323C] text-3xl mb-2">
          System at convenient time
        </h3>
        <p className="font-light text-left max-w-[450px] text-[#10323C] text-3xl">
          Best software engineers in town will build your selected technology every day,
          and we will deliver it to your door whenever works best for you.
          You can change systems and get it on time!
        </p>
      </div>

      <div className="flex items-end w-full h-full rounded-2xl">
        <img
          src={grid3}
          alt="grid3"
          className="w-100 h-100 object-cover rounded-2xl"
        />
      </div>
    </div>
    </div>
   </section>
);

export default Expertise;