import Image from "next/image";
import React from "react";

const CompanysList = ({ companys }: { companys: string[] }) => {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {companys.map((image) => (
        <Image
          src={image}
          key={image}
          alt="company"
          height={30}
          width={40}
          className=" m-1 object-contain"
        />
      ))}
    </div>
  );
};

export default CompanysList;
