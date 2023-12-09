import React, { useState } from 'react';

export default function ContactSection() {
  // State để lưu trữ thông tin đặt bàn
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfPersons, setNumberOfPersons] = useState('');
  const [chosenDate, setChosenDate] = useState('');

  // Hàm xử lý thay đổi giá trị của input
  const handleInputChange = (e, setterFunction) => {
    setterFunction(e.target.value);
  };

  // Hàm xử lý khi đặt bàn thành công, reset thông tin đặt bàn
  const alertSuccess = () => {
    alert('Đặt Bàn Thành Công !!!!!');
    setName('');
    setEmail('');
    setNumberOfPersons('');
    setChosenDate('');
  };

  // Hàm xử lý khi người dùng nhấn nút Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin nhập liệu có đầy đủ không
    if (!name || !email || !numberOfPersons || !chosenDate) {
      alert('Vui Lòng Nhập Đủ Thông Tin!!!');
      return;
    }

    // Dữ liệu đặt bàn
    const reservationData = {
      name,
      email,
      numberOfPersons,
      chosenDate,
    };

    // Gửi POST request đến server
    fetch('http://localhost:3000/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý khi đặt bàn thành công
        alertSuccess();
      })
      .catch((error) => {
        // Xử lý khi có lỗi
        console.error('Error:', error);
      });
  };

  return (
    <div id='table' className='min-h-screen container mx-auto flex justify-center'>
      <div className='flex-wrap sm:flex-nowrap flex items-center sm:gap-20 lg:gap-20'>
        <div className='sm:w-1/2 lg:w-1/2 py-4 px-4'>
          <div className='flex flex-col gap-4 w-full'>
            <div className='w-full'>
              <h2 className='text-[#FF6600] text-2xl font-mono'>Fresh From Pizzon Feedus</h2>
              <h1 className='text-5xl font-bold tracking-[6px]'>Book 😋 <br />Online</h1>
            </div>
            <p className='text-gray-700 text-medium '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam distinctio eaque saepe sed ratione.</p>
            <p className='text-gray-700 text-medium '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam distinctio eaque saepe sed ratione.</p>
            <button type='submit' className='border text-[#FF6600] rounded-full py-2 px-6 w-36 text-center'>View</button>
          </div>
        </div>

        <div className='sm:w-1/2 lg:w-1/2 sm:p-2 lg:p-2 max-w-7xl mx-auto'>
          <p className='bold text-center text-3xl font-bold tracking-wide uppercase my-4'>Book a table</p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
            <input
              type="text"
              placeholder='Name'
              value={name}
              //Theo dõi và cập nhật giá trị của input và cập nhật khi nó bị thay đổi
              onChange={(e) => handleInputChange(e, setName)}
              className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3'
            />
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3'
            />
            <input
              type="number"
              placeholder='How Many Person?'
              value={numberOfPersons}
              onChange={(e) => handleInputChange(e, setNumberOfPersons)}
              className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3'
            />
            <input
              type='text'
              placeholder='Choose Date'
              value={chosenDate}
              onChange={(e) => handleInputChange(e, setChosenDate)}
              className='border border-[#FF6600]/60 rounded placeholder-gray-600 py-4 px-3 w-full'
            />
            <button type='submit' className='self-center bg-[#FF6600] text-white rounded-full py-2 px-6 w-36 text-center'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
