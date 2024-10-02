import React from 'react';

function VerificationMail() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the password reset logic here
    console.log('Password reset form submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '900px', height: '600px' }}>
        {/* Left Image Section */}
        <div className="w-1/2 h-full">
          <img 
            src="src/images/background2.jpeg" // Replace with the actual image URL
            alt="Background"
            className="object-cover w-full h-full border border-blue-500"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 p-8 h-full">
          {/* Top Navigation */}
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-blue-700 hover:underline text-lg">Trở về</a>
            <div className="flex flex-col items-center">
              <span className="text-black text-lg">Tạo mật khẩu mới</span>
              <span className="text-black text-lg">1/3</span>
            </div>
          </div>

          {/* Password Reset Form */}
          <h2 className="text-2xl font-semibold mb-4">Quên mật khẩu</h2>
          <p className="text-gray-700 mb-6">
            Nhập Email của bạn để gửi mã xác nhận thay đổi mật khẩu.
          </p>

          <form onSubmit={handleSubmit} className="mb-6">
            {/* Email Input */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Mật khẩu mới</label>
              <div className="flex items-center rounded-md border border-gray-300 px-3 py-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1024px-Envelope_font_awesome.svg.png" 
                  alt="Icon" 
                  className="w-6 h-6 text-gray-700 mr-2"
                />
                <input 
                  type="password" 
                  className="w-full px-2 py-1 focus:outline-none focus:border-blue-500"
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300"
            >
              Tiếp tục
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerificationMail;
