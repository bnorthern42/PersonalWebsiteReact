import React from 'react';
import { motion } from "framer-motion";




function PageTransition ({Page}) {
    return(
        <div className='motionWrap'>
        <motion.main
            className="main__container"
            initial={{ width: 80 }}
            animate={{ width: "100%" }}
            exit={{ x: "100%", opacity: 0, scale: 0.25, rotate: 20 }}
            transition={{ duration: 1 }}
        >
            {Page}

        </motion.main>
        </div>
    );
};



export default PageTransition;