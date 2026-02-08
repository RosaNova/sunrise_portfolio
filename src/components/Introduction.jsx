import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Introduction = () => {
    const [isVisible, setIsVisible] = useState(true);

    const text = "Sun Rosa";
    const characters = text.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    const characterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 600
            }
        }
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence
            mode='wait'
            onExitComplete={() => setIsVisible(false)}
        >
            {isVisible && (
                <motion.div
                    className='fixed top-0 left-0 flex justify-center items-center z-[9999] w-full h-full bg-black'
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onAnimationComplete={() => {
                        setTimeout(() => {
                            setIsVisible(false);
                        }, 150);
                    }}
                    variants={containerVariants}
                >
                    <div className="overflow-hidden flex px-5 py-5 md:px-10 md:py-10">
                        {characters.map((char, index) => (
                            <motion.span
                                key={index}
                                variants={characterVariants}
                                className='text-3xl name lg:text-[100px] font-bold uppercase tracking-wider text-[#fb8569]'
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Introduction;