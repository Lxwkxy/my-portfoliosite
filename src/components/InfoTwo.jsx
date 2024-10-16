import React from 'react'

function InfoTwo() {
  return (
    <div className='container size-3/4 mx-auto flex item-center py-16'>
      <div className="grid grid-cols-3 gap-4 flex flex-wrap justify-center mt-8 ">
          <div className="p-5 grid justify-items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className='w-full md:w-3/4 p-5'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" className='w-full md:w-3/4 p-5'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png" alt="Javascript" className='w-full md:w-3/4 p-5'/>
          </div>
          <div className="p-5 grid justify-items-center">
            <img src="https://img.icons8.com/?size=512&id=40670&format=png" alt="C Programming Language" className='w-full md:w-3/4 p-5'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python Programming Language" className='w-full md:w-3/4 p-5'/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="ReactJs" className='w-full md:w-3/4 p-5'/>
          </div>
          <div className="p-5 grid justify-items-center ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" className='w-full md:w-3/4 p-5'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png" alt="Visual Studio Code" className='w-full md:w-3/4 p-5'/>
          </div>
      </div>
    </div>
  )
}

export default InfoTwo
