import React from 'react'
import { motion } from 'framer-motion'

const Button = ({styles}) => {
  return (
    <motion.button whileTap={{ scale: 0.85 }} type='button' className={`text-primary font-poppins text-[18px] font-normal py-[19px] px-[33px] outline-none rounded-[10px] bg-blue-gradient ${styles}`}>
        Get Started
    </motion.button>
  )
}

export default Button