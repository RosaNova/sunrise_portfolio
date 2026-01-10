import React from "react";
import Button from "../button/Button";
import { motion} from "framer-motion";
const FormContact = () => {
  return (
    <form className="flex w-full text-[#fb8569] flex-col md:flex-row flex-wrap gap-5 justify-between">
      <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }} 
              className="flex w-full md:w-[45%] flex-col justify-start items-start">
        <label htmlFor="first" className="pb-1" >Full Name (required)*</label>
        <input
          type="text"
          name=""
          className="w-full bg-[#fb8569]/10 outline-0 border-b-2 border-[#fb8569]/60"
          placeholder=""
          id="first"
        />
      </motion.div>
      <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                 className="flex w-full md:w-[45%] flex-col justify-start items-start">
        <label htmlFor="last" className="pb-1" >Subject (required)*</label>
        <input
          type="text"
          name=""
          className="w-full bg-[#fb8569]/10 outline-0 border-b-2 border-[#fb8569]/60"
          placeholder=""
          id="last"
        />
      </motion.div>
      <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
               className="flex md:w-[45%] w-full flex-col justify-start items-start">
        <label htmlFor="email" className="pb-1" >Email (required)*</label>
        <input
          type="email"
          name=""
          className="w-full bg-[#fb8569]/10 outline-0 border-b-2 border-[#fb8569]/60"
          placeholder=""
          id="email"
        />
      </motion.div>
      <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                 className="flex md:w-[45%] w-full flex-col justify-start items-start">
        <label htmlFor="mobile" className="pb-1" >Mobile (required)*</label>
        <input
          type="tel"
          name=""
          className="w-full bg-[#fb8569]/10 outline-0 border-b-2 border-[#fb8569]/60"
          placeholder=""
          id="mobile"
        />
      </motion.div>
      <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                 className="flex w-full flex-col justify-start items-start">
        <label htmlFor="message" className="pb-1" >Message (required)*</label>
        <textarea
          name=""
          className="w-full resize-none bg-[#fb8569]/10 h-[150px] outline-0 border-b-2 border-[#fb8569]/60"
          placeholder=""
          id="message"
        ></textarea>
      </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
                  >
               <Button title={"Send Message"} className="bg-[#fb8569] text-black  px-3 lg:text-xl lg:py-2 py-3 text-2xl font-bold" />
               </motion.div>
    </form>
  );
};


export default FormContact;
