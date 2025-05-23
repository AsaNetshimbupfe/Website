import styles from "../style";
// import { logo } from "../assets";
import logo from "../assets/images/logo-cropped.svg";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col scroll-px-42`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full bg-[#284750] `}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]  text-white`}>
          Agency with incredible design and development expertise. Based in Pretoria, RSA.
        </p>

        <p className={`${styles.paragraph} mt-4 max-w-[312px]  text-white`}>
          infor@velotech.co.za
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-bold text-[18px] leading-[27px] text-[#fc8318]">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-secondary cursor-pointer
                    text-white text-sm mb-2 hover:text-orange-500
                    ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#fc8310]">
      <p className="font-poppins font-medium text-center text-[15px] leading-[27px] text-white">
      Ⓒ 2025 VelozTech. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 text-amber-400">
        
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;