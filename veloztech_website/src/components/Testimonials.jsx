import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="/testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    
<h3 className={`${styles.heading3}`}>Testimonials</h3>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
       
      <h2 className={styles.heading2} >
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`font-light text-left max-w-[450px] text-[#10323C] text-3xl`}>
          Everything you need to know about our clients and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div> */}

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
  </section>
);

export default Testimonials;