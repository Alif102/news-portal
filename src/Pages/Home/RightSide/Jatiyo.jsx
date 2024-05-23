import React from 'react'

const Jatiyo = () => {
  return (
    <div>
      <h1 className='f font-bold text-3xl'>জাতীয়</h1>
                <div className='b border-black py-3 border-b-4'></div>
                <div className='grid grid-cols-4 pt-3 pb-3'>
                  <div className=' col-span-2 pl-3'>
                    <div>
                      <div className='w-[330px] mb-3 h-[185px] bg-[#D9D9D9]'></div>
                      <div className=' space-y-4' >
                        <h1 className=' text-xl font-bold'>দেশের ১৪ অঞ্চলে ৬০ কিমি. <br /> বেগে ঝড়ো বৃষ্টির আভাস</h1>
                        <p>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার <br /> বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                        <p>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার <br /> বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                      </div>
                    </div>
                  </div>
                  <div className=' col-span-2 '>
                    <NewsDiv2 />
                  </div>
                </div>
    </div>
  )
}

export default Jatiyo
