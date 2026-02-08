import React from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { motion } from "framer-motion";

const FormContact = () => {
  return (
    <form className="flex  w-full text-[#fb8569] flex-col md:flex-row flex-wrap gap-5 justify-between">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex w-full md:w-[45%] text-[#fb8569] flex-col justify-start items-start"
      >
        <Input
          label="Full Name (required)*"
          labelPlacement="outside"
          placeholder=" "
          variant="underlined"
          classNames={{
            input: "text-[#fb8569]",
            inputWrapper: "border-b-2 border-[#fb8569]/60 bg-[#fb8569]/20 hover:border-[#fb8569] focus-within:border-[#fb8569] after:bg-[#fb8569]",
            label: "text-[#fb8569] pb-1",
            mainWrapper: "w-full"
          }}
          type="text"
          name="name"
          id="first"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex w-full md:w-[45%] text-[#fb8569] flex-col justify-start items-start"
      >
        <Input
          label="Subject (required)*"
          labelPlacement="outside"
          placeholder=" "
          variant="underlined"
          classNames={{
            input: "text-[#fb8569]",
            inputWrapper: "border-b-2 border-[#fb8569]/60 bg-[#fb8569]/20 hover:border-[#fb8569] focus-within:border-[#fb8569] after:bg-[#fb8569]",
            label: "text-[#fb8569] pb-1",
            mainWrapper: "w-full"
          }}
          type="text"
          name="subject"
          id="last"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex md:w-[45%] w-full text-[#fb8569] flex-col justify-start items-start"
      >
        <Input
          label="Email (required)*"
          labelPlacement="outside"
          placeholder=" "
          variant="underlined"
          classNames={{
            input: "text-[#fb8569]",
            inputWrapper: "border-b-2 border-[#fb8569]/60 bg-[#fb8569]/20 hover:border-[#fb8569] focus-within:border-[#fb8569] after:bg-[#fb8569]",
            label: "text-[#fb8569] pb-1",
            mainWrapper: "w-full"
          }}
          type="email"
          name="email"
          id="email"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex md:w-[45%] w-full text-[#fb8569] flex-col justify-start items-start"
      >
        <Input
          label="Mobile Phone (required)*"
          labelPlacement="outside"
          placeholder=" "
          variant="underlined"
          classNames={{
            input: "text-[#fb8569]",
            inputWrapper: "border-b-2 border-[#fb8569]/60 hover:border-[#fb8569] focus-within:border-[#fb8569] bg-[#fb8569]/20 after:bg-[#fb8569]",
            label: "text-[#fb8569] pb-1",
            mainWrapper: "w-full"
          }}
          type="tel"
          name="mobile"
          id="mobile"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex w-full text-[#fb8569] flex-col justify-start items-start"
      >
        <Textarea
          label="Message (required)*"
          labelPlacement="outside"
          placeholder=" "
          variant="underlined"
          classNames={{
            input: "text-[#fb8569] resize-none h-[150px]",
            inputWrapper: "border-b-2 border-[#fb8569]/60 bg-[#fb8569]/20 hover:border-[#fb8569] focus-within:border-[#fb8569] after:bg-[#fb8569]",
            label: "text-[#fb8569] pb-1",
            mainWrapper: "w-full"
          }}
          name="message"
          id="message"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full"
      >
        <Button
          className=" bg-[#fb8569] text-black px-3 lg:text-[15px] lg:py-2 py-6 text-md font-bold rounded-xl hover:bg-[#fb8569]/50"
          type="submit"
        >
          Send Message
        </Button>
      </motion.div>
    </form>
  );
};

export default FormContact;
