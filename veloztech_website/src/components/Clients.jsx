import { clients } from "../constants";
import styles from "../style";


const Clients = () => {
  return (
    // <section className='flex items-center justify-center my-4'>
       <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className="max-w-5xl mx-auto px-4 lg:px-8 flex flex-col items-center text-center sm:mb-16 mb-6 relative z-[1] mt-15">
      {/* <div className={`${styles.flexCenter} flex-wrap w-full`}> */}
  <h1 className="text-4xl font-bold text-[#fc8318]">
    Our Trusted Clients <br className="sm-block hidden" />
  </h1>
  <p className={`${styles.paragraph} max-w-[450px] text-sm font-medium text-[#10323C] mt-4`}>
     Our mission is to dive prorss and enhance the lives of our customers by delivering superior products and services that exceed expectations.
  </p>
</div>

    {/* <div className="w-full md:mt-0 mt-6 text-center md:text-right">
      <p className="max-w-[450px] mx-auto md:mx-0 text-md font-medium text-[#13333b]">
        Everything you need to accept technology and grow your business anywhere in the planet.
      </p>
    </div> */}
  

  <div className='flex items-center justify-center flex-wrap w-full'>
  {clients.map((item) => (
    <div
      key={item.id}
      className='flex items-center justify-center sm:min-w-[192px] min-w-[120px] m-2'
    >
      <img
        src={item.logo}
        alt="client"
        className='sm:w-[192px] w-[100px] object-contain cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'
      />
    </div>
  ))}
</div>



    </section>
  )
}

export default Clients