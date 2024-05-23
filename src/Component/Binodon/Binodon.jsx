import React from 'react'
import NewsDiv2 from '../../Pages/Home/RightSide/NewsDiv2'

const Binodon = () => {
    return (
        <div>
            <p className='font-bold text-xl m-6 ml-10'>বিনোদন</p>

            <div className='grid md:grid-cols-12 md:mx-10 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>


                <div className='col-span-4'>
                    <div className='w-[95%] h-[200px] mb-3 bg-[#D9D9D9]'></div>
                    <div className='space-y-4'>
                        <h1 className=' text-xl font-bold'>
                            সাগরে ঝাঁপ দিয়ে আহত চিত্রনায়ক ইমন
                        </h1>
                        <p className='text-[12px]'>অপারেশন জ্যাকপট’ সিনেমার শুটিংয়ের একটি দৃশ্য ধারণ করতে গিয়ে গুরুতর আহত হয়েছেন চিত্রনায়ক মামুনুন হক ইমন। বিষয়টি নিশ্চিত করেছেন ছবির ...</p>

                    </div>
                </div>

                <div className='col-span-4'>
                    <NewsDiv2 />
                </div>

                <div className='col-span-4'>
                    <div className="flex items-center justify-center w-[90%] h-[350px]  font-bold bg-[#D9D9D9]">ADD</div>
                </div>









            </div>
            <div className=' border-black w-[94%] mx-auto my-6 border-b-2'></div>

        </div>
    )
}

export default Binodon
