import React from 'react'
import NewsDiv2 from '../../Pages/Home/RightSide/NewsDiv2'

const Sports = () => {
    return (
        <div>
            <p className='font-bold text-xl m-6 ml-10'>স্পোর্টস</p>

            <div className='grid md:grid-cols-12 md:mx-10 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>


                <div className='col-span-4'>
                    <div className='w-[95%] h-[200px] mb-3 bg-[#D9D9D9]'></div>
                    <div className='space-y-4'>
                        <h1 className=' text-xl font-bold'>
                        সিরিজ জিতে মুশফিকের অন্যরকম উদযাপন
                        </h1>
                        <p className='text-[12px]'>
                        সিলেটে তিন ম্যাচের টি-টোয়েন্টি সিরিজ ২-১ ব্যবধানে জিতেছে শ্রীলঙ্কা। তবে ওয়ানডে ফরম্যাটে বরাবরই আধিপত্য বাংলাদেশের। আর তা আবারো প্রমাণ হলো ...                            </p>

                    </div>
                </div>

                <div className='col-span-4'>
                    <NewsDiv2 />
                </div>

                <div className='col-span-4'>
                    <NewsDiv2/>
                </div>









            </div>
        </div>
    )
}

export default Sports
