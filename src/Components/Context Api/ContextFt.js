// Nhập các hàm cần thiết từ thư viện 'react'
import { createContext, useContext, useState } from 'react';

// Tạo một ngữ cảnh React mới có tên là 'States'
export const States = createContext();

// Hook tùy chỉnh giúp truy cập dễ dàng vào giá trị từ ngữ cảnh 'States'
export const useStates = () => {
  return useContext(States);
};

// Component cung cấp trạng thái và các hàm liên quan cho các thành phần con thông qua ngữ cảnh 'States'
export const StatesProvider = ({ children }) => {
  // Định nghĩa biến trạng thái 'category' và hàm 'setCategory' để cập nhật nó
  const [category, setCategory] = useState('all');

  // Hàm để xử lý thay đổi trong trạng thái 'category'
  const handleCategory = (newCategory) => {
    setCategory(newCategory);
  };

  // Hiển thị người cung cấp 'States' với trạng thái 'category' và hàm 'handleCategory' hiện tại
  return (
    <States.Provider value={{ category, handleCategory }}>
      {children}
    </States.Provider>
  );
};
