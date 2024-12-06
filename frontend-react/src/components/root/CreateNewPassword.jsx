import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './fragments/InputField/InputField';
import { createNewPassword, deleteOTPByEmail } from '../../store/authSlice';
import { toast } from "react-toastify";

function CreateNewPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }
    const email = localStorage.getItem('email');
    const createNewPasswordDTO = {
      username: email.split('@')[0],
      newPassword: password
    }
    setErrorMessage(''); // Reset error message
    createNewPassword(createNewPasswordDTO);
    deleteOTPByEmail(email);
    localStorage.removeItem('email');
    navigate('/login');
    toast.success("Đổi mật khẩu thành công!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-0">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl md:h-[500px] mx-4 my-4">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img 
            src="src/images/background-newpass.jpg" 
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 h-full">
          <div className="flex justify-between items-center mb-4">
            <a href="/verify-newpass" className="text-blue-700 hover:underline text-lg font-bold">Trở về</a>
            <div className="flex flex-col items-end">
              <span className="text-black text-lg font-bold">Tạo mật khẩu mới</span>
              <span className="text-black text-lg">3/3</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Tạo mật khẩu mới</h2>
          <p className="text-gray-600 mb-6">Nhập mật khẩu mới cho tài khoản của bạn</p>

          {/* Password Input */}
          <form onSubmit={handleSubmit} className="mb-6">
            <InputField
              id="passwordInput"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu mới"
              required
              value={password}
              onChange={handlePasswordChange} // Update on change
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/26d9c5399a667e190537f967c908e5b53fea2716a5b94db02389112e242bc353?placeholderIfAbsent=true&apiKey=985f1fb8be044ffd914af5aef5360e96"
              showPasswordToggle
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            <InputField
              id="confirmPasswordInput"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange} // Update on change
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/26d9c5399a667e190537f967c908e5b53fea2716a5b94db02389112e242bc353?placeholderIfAbsent=true&apiKey=985f1fb8be044ffd914af5aef5360e96"
              showPasswordToggle
              showPassword={showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            />

            {/* Error Message */}
            {errorMessage && <p className="text-red-600 mb-1">{errorMessage}</p>}

            <button 
              type="submit" 
              className="w-full mt-5 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300"
            >
              Xác nhận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
