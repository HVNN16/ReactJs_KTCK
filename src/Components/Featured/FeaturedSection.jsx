import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColDesign from './ColDesign';

const MenuItems = () => {
  // State để lưu trữ dữ liệu từ server
  const [dataFeaturedFromServer, setDataFromServer] = useState([]);

  // Sử dụng useEffect để thực hiện yêu cầu HTTP khi component được render
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gửi yêu cầu GET đến endpoint 'http://localhost:3000/featured' để lấy dữ liệu
        const response = await axios.get('http://localhost:3000/featured');
        // Cập nhật state với dữ liệu nhận được từ server
        setDataFromServer(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Gọi hàm fetchData khi component được render
    fetchData();
  }, []);

  return (
    <>
      {/* Phần đầu hiển thị tiêu đề và mô tả */}
      <div className='flex items-center flex-col justify-center space-y-5 '>
        <h1 className='font-semibold font-[font-serif] text-5xl'>
          Our <span className='text-[#FF6600]'>Best Seller</span>
        </h1>
        <p className='w-[35ch] text-gray-600/70 px-3 sm:w-7/12 justify-center text-center'>
          Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, earum. adipisicing elit. Error, similique.
        </p>
        <hr className='sm:w-14 w-40  border-[#FF6600] border-2 ' />
      </div>

      {/* Phần hiển thị danh sách sản phẩm */}
      <br></br>
      <br></br>
      <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 sm:grid-rows-2 rounded-lg p-2 gap-y-16 place-items-center'>
        {/* Mapping qua mảng dữ liệu và render mỗi sản phẩm bằng component ColDesign */}
        {dataFeaturedFromServer.map((item, i) => (
          <ColDesign key={i} name={item.name} des={item.des} price={item.price} image={item.image} />
        ))}

        {/* Hiển thị thông báo nếu không có sản phẩm nào */}
        {dataFeaturedFromServer.length === 0 && (
          <div className='col-span-4 pt-12 animate-pulse'>
            <h1 className='font-bold text-center text-2xl text-yellow-600'>
              Currently, No items are available in this category!
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuItems;
