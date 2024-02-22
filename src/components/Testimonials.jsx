import styles,{layout} from "../style"
import FeedbackCard from "./FeedbackCard"
import { feedback } from "../constants"

const Testimonials = () => {
  return (
    <section className="flex flex-col py-20">
        <div className="w-full flex md:flex-row justify-start flex-col items-center">
            <div className="flex flex-1 justify-start md:mb-0 mb-10 md:mt-0 mt-10">
              <h2 className={`${styles.heading2}`}>
                  What People are <br className="sm:block hidden" /> saying about us
              </h2>
            </div>
            <div className="flex flex-1 justify-start  md:mb-0 mb-10">
              <p className={`${styles.paragraph} max-w-[450px]`}>
                 Everything you need to accept card payments and grow your business
                 anywhere on the planet.
              </p>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 py-20 gap-6">
            {feedback.map((client) => (
                <FeedbackCard key={client.id} img={client.img} content={client.content} name={client.name} title={client.title}/>
            ))}
        </div>
    </section>
  )
}

export default Testimonials