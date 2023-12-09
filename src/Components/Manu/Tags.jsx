// Tags.js
import React, { useState } from 'react';
import { useStates } from '../Context Api/ContextFt';

// Component hiển thị các thẻ (tags) để lọc sản phẩm theo danh mục
export default function Tags() {
  // Sử dụng custom hook để lấy hàm xử lý thay đổi danh mục từ context
  const { handleCategory } = useStates();
  // State để theo dõi thẻ đang được chọn
  const [active, setActive] = useState('all');

  // Danh sách các thẻ
  const tags = [
    { name: 'all' },
    { name: 'drinks' },
    { name: 'pasta' },
    { name: 'burgers' },
    { name: 'salads' },
    { name: 'desserts' },
    { name: 'pizzas' },
  ];

  // Xử lý khi người dùng nhấn vào một thẻ
  const handleClick = (tag) => {
    // Cập nhật thẻ đang được chọn và thực hiện việc thay đổi danh mục
    setActive(tag.name);
    handleCategory(tag.name);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-4 bg-slate-100/70 rounded-full p-3">
        {/* Hiển thị từng thẻ và xác định thẻ nào đang được chọn */}
        {tags.map((tag, i) => (
          <button
            key={i}
            onClick={() => handleClick(tag)}
            className={`${
              active === tag.name ? 'bg-[#F96442] text-white ' : ''
            } border border-[#F96442]/30 px-3 hover:border-[#F96442]/70 ease-in-out transition duration-300 uppercase rounded-full font-semibold sm:text-md text-sm sm:px-6 sm:py-3 py-1 sm:w-md`}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}
