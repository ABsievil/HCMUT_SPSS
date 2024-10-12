import React from 'react';
import PrintLogFilter from './PrintLogFilter';

const Table = ({type}) => {
  const rows = [
    { id: 1234, name: 'congthuc.doc', startTime: '12:20', endTime: "12:59", date: '26/09/2024' },
    { id: 1234, name: 'congthuc.doc', startTime: '12:20', endTime: "12:59", date: '26/09/2024' },
    { id: 1234, name: 'congthuc.doc', startTime: '12:20', endTime: "12:59", date: '26/09/2024' },
    { id: 1234, name: 'congthuc.doc', startTime: '12:20', endTime: "12:59", date: '26/09/2024' },
    { id: 1234, name: 'congthuc.doc', startTime: '12:20', endTime: "12:59", date: '26/09/2024' },

  ];

  return (
    <div className="overflow-x-auto drop-shadow-lg mx-10 py-4">

      <h1 className="text-center text-xl font-bold mt-10 mb-5">
        LỊCH SỬ IN CỦA {type === "student" ? "SINH VIÊN" : type === "admin" ? "HỆ THỐNG" : "BẠN"}
      </h1>

      <PrintLogFilter type={type} />

      <table className="min-w-full bg-white mt-3">
        <thead>
          <tr className="bg-themecolor1">
            <th className="px-6 py-3 text-left">ID máy in</th>
            <th className="px-6 py-3 text-left">Tên tệp</th>
            <th className="px-6 py-3 text-left">Giờ bắt đầu</th>
            <th className="px-6 py-3 text-left">Giờ kết thúc</th>
            <th className="px-6 py-3 text-left">Ngày đăng ký</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-purple-100'}`}>
              <td className="px-6 py-4">{row.id}</td>
              <td className="px-6 py-4">{row.name}</td>
              <td className="px-6 py-4">{row.startTime}</td>
              <td className="px-6 py-4">{row.startTime}</td>
              <td className="px-6 py-4">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
