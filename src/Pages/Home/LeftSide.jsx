import NewsDiv from './NewsDiv'

const LeftSide = () => {
  return (

    <div className='mt-5'>
      
    <div className='  flex justify-center items-center text-center
     w-[100%] h-[650px]
     bg-white shadow-lg'>
           
            <div className="flex items-center justify-center w-[60%] h-[80%] mt-5 font-bold bg-[#D9D9D9]">ADD</div>

          </div>
          <div className=' '>
            <NewsDiv />
          </div>
    </div>
  )
}

export default LeftSide
