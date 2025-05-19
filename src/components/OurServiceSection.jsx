import React from "react";
import Card from "./Card";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

// Icon library map
const iconLibraries = {
  Bs: BsIcons,
  Gi: GiIcons,
  Md: MdIcons,
};

// Utility function to dynamically get icon component
const getIconComponent = (iconName) => {
  const prefix = iconName.slice(0, 2); // e.g., 'Bs', 'Gi', 'Md'
  const library = iconLibraries[prefix];
  return library?.[iconName] || BsIcons.BsQuestionCircle; // fallback
};

export function OurServiceSection({ items }) {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="text-6xl font-bold">Our Services</div>
      </div>

      <div className="mt-10 bg-white px-4">
  <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto items-center">
    {items.map((item) => {
      const IconComponent = getIconComponent(item.icon);
      return <Card key={item.id} item={item} Icon={IconComponent} />;
    })}
  </div>
</div>

</div>

    
  );
}

export default OurServiceSection;
