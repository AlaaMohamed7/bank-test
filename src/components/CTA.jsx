import styles from "../style"
import Button from "./Button"
const CTA = () => {
  return (
    <section className={`${styles.marginY} ${styles.padding} md:w-[85%] w-[90%] m-auto flex items-center justify-between lg:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex flex-1 flex-col  ">
          <h2 className={`font-poppins font-semibold md:text-[48px] text-[34px] text-white md:leading-[76.8px] leading-[50.8px] w-full`}>Let’s try our service now!</h2>
          <p className={`font-poppins font-normal text-dimWhite md:text-[18px] text-[15px] md:leading-[30.8px] leading-[20.8px] max-w-[470px] mt-5`}>
             Everything you need to accept card payments and grow your business
             anywhere on the planet.
          </p>
        </div>
        <div>
            <Button styles={' lg:mt-0 mt-10'} />
        </div>

    </section>
  )
}

export default CTA