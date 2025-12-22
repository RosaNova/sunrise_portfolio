import React, { useEffect, useState } from "react";

const Footer = () => {
  const [CurrentDate, setCurrentDate] = useState();
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.getFullYear());
  }, []);
  return (
    <div className=" m-auto pt-10">
      <p className="text-center md:text-2xl font-bold pb-10">
        &copy; {CurrentDate} My Portfolio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
