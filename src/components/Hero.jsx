import styles from "../style"
import { discount,robot } from "../assets"
import GetStarted from "./GetStarted"
import { motion } from "framer-motion"
import rect1 from '../assets/rect1.png'
import rect2 from '../assets/rect2.png'
import rect3 from '../assets/rect3.png'
import robotH from '../assets/robotH.png'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 lg:self-center md:self-start ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
            <div className="flex flex-row items-center py-[6px] pl-[10px] pr-[18px] bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="" className="w-[32px] h-[32px]" />
                <p className={`${styles.paragraph} font-poppins ml-[10px] sm:text-[18px] xxs:text-[14px]`}>
                    <span className="text-white">20%</span>{' '}
                    DISCOUNT FOR{' '}
                    <span className="text-white">1 MONTH</span>{' '}
                    ACCOUNT
                </p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold md:text-[5vw] ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                  The Next <br className="sm:block hidden" />{" "}
                  <span className="text-gradient">Generation</span>{" "}
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted />
                </div>
            </div>
            <h1 className="font-poppins font-semibold md:text-[4.7vw] ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
               Payment Method.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our team of experts uses a methodology to identify the credit cards
              most likely to fit your needs. We examine annual percentage rates,
              annual fees.
            </p>
            <div className="gray__gradient absolute top-[25%] left-[-65px] ss:w-[125px] w-[30%]  ss:h-[300px] h-[200px] " />
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
           {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
           <div className=''>
              <motion.img initial={{y:-1000}} animate={{y:0}} transition={{delay:1.2, type:'tween'}}  className="absolute z-[5] top-[2vw] w-[70%] right-[16.2%]"  src={rect1} />
     
              <motion.img initial={{y:-1000}} animate={{y:0}} transition={{delay:1, type:'tween'}} className="absolute z-[3] md:top-[6vw] top-[10vw] w-[80%] right-[10%]" src={rect2} />
 
              <motion.img initial={{y:-1000}} animate={{y:0}} transition={{delay:0.7, type:'tween'}} className="absolute z-[0] md:top-[15.5vw] top-[31.5vw] w-[60%] right-[23%]" src={rect3} />
     
              <motion.img initial={{x:700}} animate={{x:0}} transition={{delay:0.7, type:'tween'}} className="absolute z-[10] md:top-[17vw] top-[35vw] right-0" src={robotH} />
           </div>
           <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.7}} className="absolute top-0 left-[10%] cir1 md:h-[7vw] md:w-[7vw] w-[14.5vw] h-[14.5vw] z-20 rounded-full">
          
           </motion.div>
           <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.7}} className="absolute md:top-[27vw] right-[25%] top-[57vw] cir1 lg:h-[68px] lg:w-[68px] md:h-[5vw] md:w-[5vw] h-[10vw] w-[10vw] z-20 rounded-full">
          
           </motion.div>
           <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.7}} className="absolute md:top-[31vw] left-[18%] top-[67vw] cir1 md:h-[2.1vw] md:w-[2.1vw] h-[4.3vw] w-[4.3vw] z-20 rounded-full">
          
           </motion.div>
           <div className="lg:h-[100vh] md:h-[75vh] h-[100vw] w-11 bg-transparent">

           </div>
           {/* gradient start */}
           <div className="absolute z-[0]   ss:w-[345px] w-[40%] md:h-[513px] h-[50%] mr-[65px] rotate-[-20deg] pink__gradient" />
           <div className="absolute z-[1]   ss: w-[405px] h-[40%] mr-[37px] white__gradient  " />
           <div className="absolute z-[0] top-[70px]  ss:w-[478px] w-[60%] h-[60%]  mr-[65px]  blue__gradient" />
           {/* gradient end */}
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
           <GetStarted />
        </div>
    </section>
  )
}

export default Hero