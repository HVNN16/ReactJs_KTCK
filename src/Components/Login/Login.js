import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser, FaLock } from "react-icons/fa"; // Import các biểu tượng khi cần thiết

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Sử dụng useEffect để làm sạch sessionStorage khi component mount
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  // Xử lý sự kiện khi người dùng ấn nút đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();

    // Kiểm tra xác thực trước khi gửi yêu cầu đăng nhập
    if (validate()) {
      // Gửi yêu cầu đăng nhập đến server
      fetch("http://localhost:3000/user/" + username)
        .then((res) => res.json())
        .then((resp) => {
          // Xử lý kết quả trả về từ server
          if (Object.keys(resp).length === 0) {
            // Nếu không tìm thấy tài khoản
            toast.error('Vui lòng nhập một tên đăng nhập hợp lệ');
          } else {
            if (resp.password === password) {
              // Nếu mật khẩu đúng, đăng nhập thành công
              toast.success('Đăng nhập thành công');
              sessionStorage.setItem('username', username);
              sessionStorage.setItem('userrole', resp.role);
              navigate('/');
            } else {
              // Nếu mật khẩu không đúng
              toast.error('Vui lòng nhập thông tin đăng nhập hợp lệ');
            }
          }
        })
        .catch((err) => {
          // Xử lý lỗi khi gửi yêu cầu đăng nhập
          toast.error('Đăng nhập thất bại do: ' + err.message);
        });
    }
  };

  // Hàm kiểm tra xác thực trước khi gửi yêu cầu đăng nhập
  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Vui lòng nhập tên đăng nhập');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Vui lòng nhập mật khẩu');
    }
    return result;
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow p-4">
            <div className="card-header bg-primary text-white text-center">
              <h2>Đăng Nhập</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username" className="mb-2">
                    <FaUser className="me-2" />Tên Đăng Nhập <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="Nhập tên đăng nhập của bạn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="mb-2">
                    <FaLock className="me-2" />Mật Khẩu <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Nhập mật khẩu của bạn"
                  />
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary">
                    Đăng Nhập
                  </button>
                  <span className="mx-3">hoặc</span>
                  <Link to="/register" className="btn btn-success">
                    Đăng Ký
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
