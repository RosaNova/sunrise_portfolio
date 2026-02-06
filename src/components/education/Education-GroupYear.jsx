import EducationGroup from "./educationGroup";
import { motion } from "framer-motion";

const EducationGroupYear = ({ year, educationgroup }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="w-full pb-10">
            <h1 className="year bg-[#fb8569] text-black text-start w-[60px]  text-2xl mb-4 font-bold">{year}</h1>
            <div className="w-full  grid grid-cols-1 gap-5 md:gap-10 lg:gap-20 xl:gap-28 2xl:gap-5 2xl:grid-cols-4  md:justify-start items-start justify-center">
                {educationgroup.map((education, index) => (
                    <EducationGroup
                        key={index}
                        school={education.school}
                        specialization={education.specialization}
                        path={education.path}
                        location={education.location}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default EducationGroupYear;
