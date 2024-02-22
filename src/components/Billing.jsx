import { bill,google,apple } from "../assets"
import styles, { layout } from "../style"

const Billing = () => {
  return (
    <section id="product" className={`${styles.paddingY} flex md:flex-row flex-col-reverse `}>
        <div className={`${layout.sectionImgReverse}`}>
            <img className="w-[100%] h-[100%] z-[5]" src={bill} />
        </div>
        <div className={`${layout.sectionInfo} md:pl-20 pl-0`}>
            <h2 className={`${styles.heading2}`}>
               Easily control your <br className="sm:block hidden" /> 
               billing & invoicing
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
               Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
               aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
               placerat.
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img src={apple} alt="google_play" className="sm:w-[128.86px] sm:h-[42.05px] w-[90px] h-[30px] object-contain mr-5 cursor-pointer" />
                <img src={google} alt="google_play" className="sm:w-[144.17px] sm:h-[43.08px] w-[100px] h-[35px] object-contain cursor-pointer" />
            </div>
        </div>
    </section>
  )
}

export default Billing