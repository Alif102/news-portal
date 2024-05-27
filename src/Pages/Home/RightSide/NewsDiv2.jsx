import a2 from '../../../assets/Images/a2.jpg'
import a3 from '../../../assets/Images/a3.jpg'
import a4 from '../../../assets/Images/a4.jpg'
import a5 from '../../../assets/Images/a5.jpg'
const NewsDiv2 = ({ posts }) => {
  return (
    <div>
      <div>
        <div className=' space-y-6  flex flex-col gap-1'>
          <div className='flex gap-2'>
            <div className='news-box2 relative overflow-hidden  bg-no-repeat'>
              <img className=' transition duration-300 ease-in-out hover:scale-110' src={a2} alt="car" />

            </div>
            <h1 className="text-[12px] font-bold">২৩ নাবিককে মুক্ত করতে  বিশেষ অভিযানের প্রস্তাব,  বিশেষজ্ঞদের ‘না’</h1>
          </div>



          <div className='flex gap-2'>
            <div className=' news-box2 relative overflow-hidden  bg-no-repeat'>
              <img className=' transition duration-300 ease-in-out hover:scale-110' src={a5} alt="car" />
            </div>
            <h1 className="text-[12px] font-bold">২৩ নাবিককে মুক্ত করতে  বিশেষ অভিযানের প্রস্তাব,  বিশেষজ্ঞদের ‘না’</h1>
          </div>


          <div className='flex gap-2'>
            <div className=' news-box2 relative overflow-hidden  bg-no-repeat'>
              <img className=' transition duration-300 ease-in-out hover:scale-110' src={a3} alt="car" />
            </div>
            <h1 className="text-[12px] font-bold">২৩ নাবিককে মুক্ত করতে  বিশেষ অভিযানের প্রস্তাব,  বিশেষজ্ঞদের ‘না’</h1>
          </div>


          <div className='flex gap-2'>
            <div className=' news-box2 relative overflow-hidden  bg-no-repeat'>
              <img className=' transition duration-300 ease-in-out hover:scale-110' src={a4} alt="car" />
            </div>
            <h1 className="text-[12px] font-bold">২৩ নাবিককে মুক্ত করতে  বিশেষ অভিযানের প্রস্তাব,  বিশেষজ্ঞদের ‘না’</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewsDiv2