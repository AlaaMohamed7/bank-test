import { quotes } from "../assets"

const FeedbackCard = ({content,title,img,name}) => {
  return (
    <div className='feedback-card py-[60px] px-[40px] rounded-[20px] flex flex-1 flex-col justify-between'>
        <img src={quotes} className="w-[42.6px] h-[27.6px] object-contain"/>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
            {content}
        </p>
        <div className="flex flex-row items-center ">
            <img src={img} className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col pl-2">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                 {name}
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                 {title}
              </p>
            </div>
        </div>

    </div>
  )
}

export default FeedbackCard