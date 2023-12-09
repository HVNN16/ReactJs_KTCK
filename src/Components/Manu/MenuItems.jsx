import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ColDesign from './ColDesign';
import { useStates } from '../Context Api/ContextFt';

const MenuItems = ({ addToCart }) => {
  // Sử dụng custom hook để lấy thông tin về danh mục từ context
  const { category } = useStates();
  // State để lưu trữ dữ liệu từ server
  const [dataFromServer, setDataFromServer] = useState([]);

  // Sử dụng useEffect để fetch dữ liệu khi danh mục thay đổi
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tất cả sản phẩm nếu danh mục là "all", ngược lại fetch theo danh mục
        const url = category === 'all' ? 'http://localhost:3000/products' : `http://localhost:3000/products?category=${category}`;
        const response = await axios.get(url);
        setDataFromServer(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 sm:grid-rows-2 rounded-lg p-2 gap-y-16 place-items-center'>
      {/* Hiển thị thông tin chi tiết của từng sản phẩm sử dụng component ColDesign */}
      {dataFromServer.map((item, i) => (
        <ColDesign
          key={i}
          name={item.name}
          des={item.des}
          price={item.price}
          addToCart={addToCart} 
        />
      ))}

      {/* Hiển thị thông báo nếu không có sản phẩm nào */}
      {dataFromServer.length === 0 && (
        <div className='col-span-4 pt-12 animate-pulse'>
          <h1 className='font-bold text-center text-2xl text-yellow-600'>
            Hiện tại, không có sản phẩm nào trong danh mục này!
          </h1>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
