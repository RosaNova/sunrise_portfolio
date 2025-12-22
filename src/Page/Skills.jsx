import React, { useState } from "react";
import Title from "../components/Title";

import SkillsBlock from "../components/skills/SkillsBlock";

const Allskills = [
  {
    Backend: [
      {
        name: "PHP",
        percentage: 80,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340654/40f06d83-0b37-488e-8ea3-85714dde3738.png",
      },
      {
        name: "Java",
        percentage: 80,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340674/487444e7-04a3-4172-a98f-2dc19190e2ae.png",
      },
      {
        name: "Kotlin",
        percentage: 30,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752346444/Kotlin__programming_language_-Logo.wine-removebg-preview_cxhaap.png",
      },
      {
        name: "C#",
        percentage: 80,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340690/97a5a627-a716-415a-9d73-f8a651159170.png",
      },
      {
        name: "Python",
        percentage: 50,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340708/698a42c0-1853-4a1c-9e83-35012ae3db3c.png",
      },
    ],
    Fontend: [
      {
        name: "HTML",
        percentage: 95,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340358/0c8724fe-0d77-47fc-ba13-afab36209581.png",
      },
      {
        name: "CSS",
        percentage: 95,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340373/8d4fe1f3-c9b6-44b8-8fdf-9251e632827f.png",
      },
      {
        name: "Java Script",
        percentage: 80,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340395/97893cbf-c388-4330-9f2a-a4458f191f78.png",
      },
      {
        name: "Type Script",
        percentage: 50,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340437/fb433c55-e4f8-485c-a7c9-4c37b5084412.png",
      },
      {
        name: "Bootstrap",
        percentage: 90,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340481/c40f3170-7979-4508-8ca9-e65b1eb1adad.png",
      },
      {
        name: "Tailwind CSS",
        percentage: 90,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340456/621180e9-1cba-4101-ba3b-3304100bd73c.png",
      },
      {
        name: "SCSS",
        percentage: 70,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340504/8adf3167-b671-49b2-8ce5-d3ff360e3e31.png",
      },
      {
        name: "React.js",
        percentage: 80,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340556/f0e27814-a52a-4e8c-8a76-e13d9821f484.png",
      },
      {
        name: "Vue.js",
        percentage: 50,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340574/cc0717f5-9fdc-4b54-98cc-d75f8f6a3a89.png",
      },
      {
        name: "Angular.js",
        percentage: 20,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340600/fcc76bad-7ec7-4bb1-8cea-6589ab9a73ed.png",
      },
      {
        name: "Next.js",
        percentage: 50,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340621/ce5b34d0-abba-4a41-8a58-94c3554dae60.png",
      },
    ],
    Database: [
      {
        name: "My SQL",
        percentage: 70,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340753/57bd0bda-fe04-45d5-8bea-ecdaf680c7f4.png",
      },
      {
        name: "Postgre SQL",
        percentage: 30,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752346265/2106609-removebg-preview_wm58b0.png",
      },
      {
        name: "Mongo DB",
        percentage: 30,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340779/a853e1c0-d64d-4000-bc05-1d2e6f111fcc.png",
      },
    ],
    Disign: [
      {
        name: "Figma",
        percentage: 75,
        icon: "https://res.cloudinary.com/dnfahcxo3/image/upload/v1752340804/5f0c7100-b1a1-4a63-82f8-0264a815dc78.png",
      },
    ],
  },
];

const Skills = () => {
  const [fontendSkills, setFrontend] = useState(Allskills[0].Fontend);
  const [backendSkills, setBackend] = useState(Allskills[0].Backend);
  const [database, setDatabase] = useState(Allskills[0].Database);
  const [design , setDesign] = useState(Allskills[0].Disign);
  return (
    <div
      id="skills"
      className="skills  bg-greenMain  md:p-0 w-full md:pb-[70px] p-[30px]"
    >
      <Title className="text-pink" title={"My Skills"} />
      <div className="flex skill-containers lg:py-5 md:py-10   md:gap-20 lg:p-[70px] md:p-[15px] w-full flex-wrap justify-center ">
        <div className="block-left w-full  md:w-[45%] gap-10 md:gap-0 pb-5 md:p-0 flex justify-between flex-col">
          <SkillsBlock title={"Front-End Developement"} Skill={fontendSkills} />
        </div>
        <div className="block-right  w-full md:w-[45%]  gap-10 md:gap-0  flex justify-between flex-col">
          <SkillsBlock title={"Back-End Developement"} Skill={backendSkills} />
          <SkillsBlock title={"Database Management"} Skill={database} />
          <SkillsBlock title={"UX/UI & Design"} Skill={design} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
