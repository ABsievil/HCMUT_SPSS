import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"; // Import icons
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function RegisForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); // Create navigate function

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/verify");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form className="flex flex-col max-w-full w-[530px] p-6" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-4">
        <div className='flex justify-center items-center'>
          <IoMdArrowRoundBack size={20} color='blue' />
          <a href="/login" className="text-left text-blue-700 hover:underline text-lg font-bold">Trở về</a>
        </div>
        <div className="flex flex-col items-end mt-6">
          <span className="text-black text-lg font-bold">Đăng ký</span>
          <span className="text-black text-lg">1/2</span>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d7576939ba90f1483dc1b48490e69d0dc4888cc061d7e09535e09ea9924476c?placeholderIfAbsent=true&apiKey=985f1fb8be044ffd914af5aef5360e96"
        alt=""
        className="object-contain self-center max-w-full aspect-[0.99] w-[175px]"
      />
      <h2 className="self-center mt-7 text-2xl text-black">Trang đăng ký</h2>
      <p className="self-center mt-2 text-base text-black">Vui lòng nhập đầy đủ thông tin</p>

      {/* Student ID Input */}
      <div className="flex items-center px-4 py-3 mt-6 text-base font-medium bg-white rounded-xl border border-gray-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0acec3f0c21c585b693aab238ddf1a6054cfa9ee7646ac7df643f1272897cf03?placeholderIfAbsent=true&apiKey=985f1fb8be044ffd914af5aef5360e96"
          alt="icon"
          className="object-contain shrink-0 w-6 h-6 mr-6"
        />
        <input
          id="studentIdInput"
          name="studentId"
          type="text"
          placeholder="Mã sinh viên"
          required
          className="flex-auto rounded-md pl-2 py-2"
        />
      </div>

      {/* Email Input */}
      <div className="flex items-center px-4 py-3 mt-4 text-base font-medium bg-white rounded-xl border border-gray-300">
        <img
          loading="lazy"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1024px-Envelope_font_awesome.svg.png"
          alt="icon"
          className="object-contain shrink-0 w-6 h-6 mr-6"
        />
        <input
          id="emailInput"
          name="email"
          type="email"
          placeholder="Email"
          required
          className="flex-auto rounded-md pl-2 py-2"
        />
      </div>

      {/* Password Input */}
      <div className="flex items-center px-4 py-3 mt-4 text-base font-medium bg-white rounded-xl border border-gray-300 relative">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/26d9c5399a667e190537f967c908e5b53fea2716a5b94db02389112e242bc353?placeholderIfAbsent=true&apiKey=985f1fb8be044ffd914af5aef5360e96"
          alt="icon"
          className="object-contain shrink-0 w-6 h-6 mr-6"
        />
        <input
          id="passwordInput"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Mật khẩu"
          required
          className="flex-auto rounded-md pl-2 py-2"
        />
        <div className="absolute right-7 top-[35%] cursor-pointer " onClick={togglePasswordVisibility}>
          {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </div>
      </div>

      {/* Confirm Password Input */}
      <div className="flex items-center px-4 py-3 mt-4 text-base font-medium bg-white rounded-xl border border-gray-300 relative">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/26d9c5399a667e190537f967c908e5b53fea2716a5b94db02389112e242bc353?placeholderIfAbsent=true&apiKey=985f1fb8be044ffd914af5aef5360e96"
          alt="icon"
          className="object-contain shrink-0 w-6 h-6 mr-6"
        />
        <input
          id="confirmPasswordInput"
          name="confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Nhập lại mật khẩu"
          required
          className="flex-auto rounded-md pl-2 py-2"
        />
        <div className="absolute right-7 top-[35%] cursor-pointer " onClick={toggleConfirmPasswordVisibility}>
          {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 py-4 text-white bg-blue-700 rounded-md  hover:bg-blue-800"
      >
        Tiếp tục
      </button>

      <p className="self-center mt-4 text-base">
        Bạn đã có tài khoản? <a href="/login" className="text-blue-700 underline font-bold">Đăng nhập</a>
      </p>
    </form>
  );
}

export default RegisForm;
