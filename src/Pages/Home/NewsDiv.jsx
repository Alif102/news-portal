
const NewsDiv = () => {
  return (
    <div>
        <div>
              <div className='w-[100%] h-auto space-y-4  py-3 pt-7 pr-1 rounded-sm mt-6 flex flex-col shadow-lg p-2'>
              

                <h1 className="font-bold text-2xl mb-3 text-center">
                আজকের মানি এক্সচেঞ্জ রেট
                </h1>
                <div className="flex cursor-pointer  flex-col space-y-4">
                  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>BDT AUD</th>
        <th>0.01279</th>
        {/* <th>Bangladesh Taka to Australian Dollars</th> */}
      </tr>
      <tr>
       
        <th>BDT EUR</th>
        <th>0.00785</th>
        {/* <th>Bangladesh Taka to Euros Dollars</th> */}
      </tr>
      <tr>
       
        <th>BDT INR</th>
        <th>0.71301</th>
        {/* <th>Bangladesh Taka to Rupees Dollars</th> */}
      </tr>
      <tr>
       
        <th>USD BDT</th>
        <th>117.08437</th>
        {/* <th>Dollars to Bangladesh Taka</th> */}
      </tr>
    </thead>
    <tbody>
     
     
     
    </tbody>
  </table>
</div>
             
                </div>

              </div>
            </div>
    </div>
  )
}

export default NewsDiv