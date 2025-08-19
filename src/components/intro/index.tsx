import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="h-full w-full bg-background flex justify-center items-center">
      <motion.span
        animate={{ opacity: 0, transition: { duration: 1, delay: 1.2 } }}
        className="text-[2.2rem] font-extralight italic tracking-[0.15rem]"
      >
        Lucca Gabriel
      </motion.span>
      <motion.span animate={{ opacity: 0, transition: { duration: 0.8, delay: 1.6 } }} className="text-[2.2rem] font-bold ml-5 tracking-[0.15rem]">
        PORTIFOLIO
      </motion.span>
    </div>
  );
}
