import React from 'react'

function InfoOne() {
  return (
    <div className='bg-gray-200'>
    <div className='container mx-auto flex item-center py-16'>
      <div className="w-1/2 md:w-1/3 lg:w-1/4">
        <img src="https://github.com/Lxwkxy/my-portfolio/blob/main/img/me_img.jpg?raw=true" alt="Me" className='w-full h-auto rounded-full p-10'/>
      </div>
      <div className="w-1/2 px-6">
          <div className='bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block font-thaiFont'>
            ประวัติส่วนตัว
          </div>
          <div className="w-full px-4 py-10 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className='text-black py-2 font-thaiFont'>ชื่อ - สกุล : นาย ภัทรพล ดีจัด</p>
            <p className='text-black py-2 font-thaiFont'>ชื่อเล่น : ไผ่</p>
            <p className='text-black py-2 font-thaiFont'>เกิด : 17 พฤษภาคม พ.ศ. 2549</p>
            <p className='text-black py-2 font-thaiFont'>หมู่เลือด : B</p>
            <p className='text-black py-2 font-thaiFont'>สัญชาติ : ไทย</p>
            <p className='text-black py-2 font-thaiFont'>เชื้อชาติ : ไทย</p>
            <p className='text-black py-2 font-thaiFont'>ศาสนา : พุทธ</p>
            <p className='text-black py-2 font-thaiFont'>ปัจจุบันศึกษาที่ : โรงเรียนกาญจนานุเคราะห์</p>
            <p className='text-black py-2 font-thaiFont'>แผนการเรียน : เพชรกาญจนา</p>
            <p className='text-black py-2 font-thaiFont'>วิชาที่ชื่นชอบ : คณิตศาสตร์ ฟิสิกส์</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default InfoOne