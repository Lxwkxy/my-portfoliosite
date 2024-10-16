import React from 'react'

function Contact() {
  return (
    <div id='Contact'>
    <div className='container mx-auto py-16 flex flex-col md:flex-row'>
      <div className="w-1/6 px-10">
        <div className='bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block font-thaiFont'>
            Contact
        </div>
      </div>
      <div className='md:w-3/4 lg:w-1/3 justify-items-center'>
        <img src="https://github.com/Lxwkxy/my-portfoliosite/blob/main/img/me.jpg?raw=true" alt="Me" className='w-full h-auto rounded-full p-10'/>
      </div>
      <div className="w-full md:w-1/3 px-6 flex items-center">
        <div className="w-full px-4 py-10 mb-8 justify-items-center">
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <p className='text-black py-2 font-thaiFont'>Tel. : 080-783-5175</p>
            <p className='text-black py-2 font-thaiFont'>Gmail : paingaikrab1234@gmail.com</p>
            <p className='text-black py-2 font-thaiFont'>Line ID : painakao2549</p>
            <p className='text-black py-2 font-thaiFont'>Facebook : Pai Nakao</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
