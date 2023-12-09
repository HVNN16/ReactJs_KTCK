import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {

  // Tính tổng giá tiền của các sản phẩm trong giỏ hàng
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Xử lý sự kiện khi người dùng nhấn nút "Thanh toán"
  const handleCheckout = () => {

    alert('Thanh toán thành công!');
  };

  // Render phần giao diện của component
  return (
    <div className="cart-container">
      <h2 className="cart-heading">Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Giỏ hàng trống rỗng</p>
      ) : (
        <div>
          {/* Hiển thị danh sách sản phẩm trong giỏ hàng */}
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">Giá: ${item.price}</p>
                </div>
                {/* Nút xóa sản phẩm khỏi giỏ hàng */}
                <button
                  className="cart-item-remove-btn"
                  onClick={() => removeFromCart(item)}
                >
                  Xóa khỏi giỏ hàng
                </button>
              </li>
            ))}
          </ul>

          {/* Hiển thị tổng giá tiền và nút thanh toán */}
          <div className="cart-total">
            <p className="cart-total-text">Tổng giá tiền: ${getTotalPrice()}</p>
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              Thanh toán
            </button>
          </div>
        </div>
      )}
      </div>
  );
};

export default Cart;
