import styles,{layout} from '../style'
import Button from './Button'
import { features } from '../constants'
import FeatureCard from './FeatureCard'

const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
        <div className={`${layout.sectionInfo} relative`}>
          <h2 className={styles.heading2}>
              You do the business, <br className="sm:block hidden" /> we’ll handle
              the money.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with hundreds
              of credit cards on the market.
          </p>
          <Button styles={'mt-10 md:mb-0 mb-10'} />
          <div className="white__gradient rotate-[176.617deg] w-[405px] h-[471px] absolute md:left-[-388px] md:top-[300px] left-[-388px] top-[400px] z-0" />
          <div className="pink__gradient rotate-[156.607deg] w-[345px] h-[514px] absolute md:left-[-551px] md:top-[700px] left-[-651px] top-[800px] z-0"/>
        
        </div>
        <div className='flex flex-1 flex-col justify-center items-center '>
            {features.map((feature,index) => (
                <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} content={feature.content} index={index} />
            ))}
        </div>
    </section>
  )
}

export default Business