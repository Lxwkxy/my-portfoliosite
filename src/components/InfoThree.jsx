import React from 'react'

function InfoThree() {
  return (
    <div className='bg-gray-200'>
      <div className='container mx-auto flex item-center py-16 flex flex-col md:flex-row'>
      <div className="w-full md:full">
        <img src="https://github.com/Lxwkxy/my-portfoliosite/blob/main/img/transcript_front.jpg?raw=true" alt="transcipt_front" className='w-auto h-auto p-10'/>
      </div>
      <div className="w-full md:full">
        <img src="https://github.com/Lxwkxy/my-portfoliosite/blob/main/img/transcript_back.jpg?raw=true" alt="transcipt_back" className='w-auto h-auto p-10'/>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-6">
          <div className="w-full px-4 py-10 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
          <div className='bg-blue-500 text-white px-6 py-2 rounded-full inline-block font-thaiFont'>
            GPA
          </div>
            <div className='mt-4'>
            <p className='text-black py-2 font-thaiFont'>ม.4 เทอม 1 : 3.93</p>
            <p className='text-black py-2 font-thaiFont'>ม.4 เทอม 2 : 4.00</p>
            <p className='text-black py-2 font-thaiFont'>ม.5 เทอม 1 : 4.00</p>
            <p className='text-black py-2 font-thaiFont'>ม.5 เทอม 2 : 3.95</p>
            <p className='text-black py-2 font-thaiFont'>GPAX 4 เทอม : 3.96</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoThree
