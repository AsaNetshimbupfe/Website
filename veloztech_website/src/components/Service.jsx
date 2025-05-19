import React from "react";
import styles from "../style";
import ServiceCard from "./ServiceCard";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import { service } from "../constants";

// Icon library map
const iconLibraries = {
  Bs: BsIcons,
  Gi: GiIcons,
  Md: MdIcons,
};

const getIconComponent = (iconName) => {
  if (typeof iconName !== 'string') {
    console.warn('Invalid icon name:', iconName);
    return BsIcons.BsQuestionCircle; // fallback icon
  }

  const prefix = iconName.slice(0, 2); // e.g., 'Md', 'Gi', 'Bs'
  const library = iconLibraries[prefix];
  return library?.[iconName] || BsIcons.BsQuestionCircle;
};


export function Service() {
  return (
    <section id="service" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="">
      <div className="">
        <h3 className={`${styles.heading3}`}>Services</h3>
        <p className="font-poppins font-medium  xs:text-[48px] text-[70px] text-[#10323c] xs:leading-[176.8px] leading-[66.8px] mr-70 mb-20">
          It’s not about limitations, but this is something about what we focus on.
      </p>
      </div>

      <div className="mt-10 bg-white px-4">
  <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto items-center">
   {service.map((item) => {
  const IconComponent = getIconComponent(item.icon);
  return <ServiceCard key={item.id} item={item} Icon={IconComponent} />;
})}

  </div>
</div>

</div>

    </section>
  );
}

export default Service;
