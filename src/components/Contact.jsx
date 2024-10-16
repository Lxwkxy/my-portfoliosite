import React from 'react'

function Contact() {
  return (
    <div id='Contact'>
    <div className='container mx-auto flex item-center py-16'>
      <div className="w-1/2">
        <div className='bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block font-thaiFont'>
            Contact
        </div>
        <img src="https://github.com/Lxwkxy/my-portfoliosite/blob/main/img/me.jpg?raw=true" alt="Me" className='w-full h-auto rounded-full p-10'/>
      </div>
      <div className="w-1/2 px-6 flex items-center">
          <div className="w-full px-4 py-10 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
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
