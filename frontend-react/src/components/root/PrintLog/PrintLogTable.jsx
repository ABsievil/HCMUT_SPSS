import React, { useState } from 'react';
import PrintLogFilter from './PrintLogFilter';
import { X } from 'lucide-react';

const PrintHistoryDetail = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg w-full max-w-2xl p-6 mx-4">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Chi tiết lịch sử in</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Thông tin cơ bản</h3>
              <div className="mt-2 space-y-2">
                {data.mssv && (
                  <p><span className="font-medium">MSSV:</span> {data.mssv}</p>
                )}
                <p><span className="font-medium">ID máy in:</span> {data.printerId}</p>
                <p><span className="font-medium">Tên tệp:</span> {data.name}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Thời gian</h3>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Ngày in:</span> {data.date}</p>
                <p><span className="font-medium">Bắt đầu:</span> {data.startTime}</p>
                <p><span className="font-medium">Kết thúc:</span> {data.endTime}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Thông số in</h3>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Số trang:</span> {data.pageCount || '10'}</p>
                <p><span className="font-medium">Số bản in:</span> {data.numberCopies|| '10'}</p>
                <p><span className="font-medium">Khổ giấy:</span> {data.paperSize || 'A4'}</p>
                <p><span className="font-medium">Trang/mặt:</span> {data.pagesPerSide || '1'}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Trạng thái</h3>
              <div className="mt-2 space-y-2">
                <p>
                  <span className="font-medium">Tình trạng:</span>
                  <span className="ml-2 px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                    {data.status || 'Hoàn thành'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Table = ({ type }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const rows = [
    { 
      mssv: 2021001, 
      printerId: 101, 
      name: 'congthuc.doc', 
      startTime: '12:20', 
      endTime: '12:59', 
      date: '26/09/2024',
      pageCount: 12,
      numberCopies: 2,
      paperSize: 'A4',
      pagesPerSide: 1,
      status: 'Hoàn thành'
    },
    { 
      mssv: 2021002, 
      printerId: 102, 
      name: 'baitap.doc', 
      startTime: '13:00', 
      endTime: '13:30', 
      date: '26/09/2024',
      pageCount: 8,
      numberCopies: 1,
      paperSize: 'A4',
      pagesPerSide: 2,
      status: 'Hoàn thành'
    },
    { 
      mssv: 2021003, 
      printerId: 103, 
      name: 'lythuyet.pdf', 
      startTime: '13:30', 
      endTime: '14:00', 
      date: '26/09/2024',
      pageCount: 15,
      numberCopies: 1,
      paperSize: 'A3',
      pagesPerSide: 1,
      status: 'Hoàn thành'
    },
    { 
      mssv: 2021004, 
      printerId: 104, 
      name: 'tailieu.pdf', 
      startTime: '14:00', 
      endTime: '14:30', 
      date: '26/09/2024',
      pageCount: 20,
      numberCopies: 1,
      paperSize: 'A4',
      pagesPerSide: 2,
      status: 'Hoàn thành'
    },
    { 
      mssv: 2021005, 
      printerId: 105, 
      name: 'doan.ppt', 
      startTime: '14:30', 
      endTime: '15:00', 
      date: '26/09/2024',
      pageCount: 30,
      numberCopies: 1,
      paperSize: 'A4',
      pagesPerSide: 1,
      status: 'Hoàn thành'
    },
  ];

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowDetail(true);
  };

  return (
    <div className="overflow-x-auto drop-shadow-lg mx-10 py-4">
      <h1 className="text-center text-xl font-bold mt-10 mb-5">
        LỊCH SỬ IN CỦA {type === "student" ? "SINH VIÊN" : type === "admin" ? "HỆ THỐNG" : "BẠN"}
      </h1>

      <PrintLogFilter type={type} />

      <table className="min-w-full bg-white mt-3">
        <thead>
          <tr className="bg-themecolor1">
            {type === 'admin' && <th className="px-6 py-3 text-left">MSSV</th>}
            <th className="px-6 py-3 text-left">ID máy in</th>
            <th className="px-6 py-3 text-left">Tên tệp</th>
            <th className="px-6 py-3 text-left">Giờ bắt đầu</th>
            <th className="px-6 py-3 text-left">Giờ kết thúc</th>
            <th className="px-6 py-3 text-left">Ngày đăng ký</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr 
              key={index} 
              className={`
                ${index % 2 === 0 ? 'bg-white' : 'bg-purple-100'}
                hover:bg-gray-100 cursor-pointer transition-colors duration-150
              `}
              onClick={() => handleRowClick(row)}
            >
              {type === 'admin' && <td className="px-6 py-4">{row.mssv}</td>}
              <td className="px-6 py-4">{row.printerId}</td>
              <td className="px-6 py-4">{row.name}</td>
              <td className="px-6 py-4">{row.startTime}</td>
              <td className="px-6 py-4">{row.endTime}</td>
              <td className="px-6 py-4">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PrintHistoryDetail
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        data={selectedRow || {}}
      />
    </div>
  );
};

export default Table;