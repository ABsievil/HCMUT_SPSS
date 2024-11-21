import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectPrinterList } from '../../../store/PrintersabcSlice';

const PrintLogFilter = ({ type }) => {
  const [printerId, setPrinterId] = useState('');
  const [startDate, setStartDate] = useState('2018-10-12');
  const [endDate, setEndDate] = useState('2018-10-12');
  const [MSSV, setMSSV] = useState('');

  const handleMSSVChange = (e) => setMSSV(e.target.value);
  const handlePrinterChange = (e) => setPrinterId(e.target.value === 'reset' ? '' : e.target.value);

  const renderInputField = (label, value, onChange, type = "text") => (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full pl-3 pr-2 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      />
    </div>
  );
  
  const { isLoading, printerList, error } = useSelector(selectPrinterList);
  if (isLoading || error)
      return <div>Loading...</div>

  return (
    <div className="p-4">
      <div className="flex justify-center items-center space-x-4">
        {type === "admin" && renderInputField("MSSV", MSSV, handleMSSVChange)}

        {/* Printer ID Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700">CHỌN MÁY IN</label>
          <select
            value={printerId}
            onChange={handlePrinterChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="reset">Tất cả máy in</option>
            {printerList.data.length > 0 ? (
              printerList.data.map(printer => (
                <option key={printer.printer_id} value={printer.printer_id}>
                  {printer.brand_name} {printer.printer_model} - {printer.building} {printer.room} - {printer.state?"sẵn sàng":"ngừng hoạt động"}
                </option>
              ))
            ) : (
              <option value="" disabled>Không có máy in nào</option>
            )}
          </select>
        </div>

        {/* Start Date */}
        {renderInputField("TỪ", startDate, (e) => setStartDate(e.target.value), "date")}

        {/* End Date */}
        {renderInputField("ĐẾN", endDate, (e) => setEndDate(e.target.value), "date")}
      </div>
    </div>
  );
};

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
                <p><span className="font-medium">Số bản in:</span> {data.numberCopies || '10'}</p>
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

//deprecated, gonna erease it soon
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
  ];

  // Tính tổng số trang đã in
  const calculateTotalPages = () => {
    return rows.reduce((total, row) => {
      return total + (row.pageCount * row.numberCopies);
    }, 0);
  };

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
      { type === "student" &&
        <div className="w-full md:w-4/5 m-auto mt-4 mb-4">
          <p className="font-medium text-gray-800">
            Tổng số trang in đã dùng: <span className="font-bold text-blue-600">{calculateTotalPages()} trang</span>
          </p>
        </div>
      }

      <table className="w-full md:w-4/5 bg-white mt-3 m-auto">
        <thead>
          <tr className="bg-themecolor1">
            {type === 'admin' && <th className="py-3 text-center">MSSV</th>}
            <th className=" py-3 text-center">ID máy in</th>
            <th className=" py-3 text-center">Tên tệp</th>
            <th className=" py-3 text-center">Giờ bắt đầu</th>
            <th className=" py-3 text-center">Giờ kết thúc</th>
            <th className=" py-3 text-center">Ngày đăng ký</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`
                ${index % 2 === 0 ? 'bg-white hover:bg-gray-200' : 'bg-purple-100 hover:bg-purple-200'}
                 cursor-pointer transition-colors duration-150
              `}
              onClick={() => handleRowClick(row)}
            >
              {type === 'admin' && <td className="py-4 text-center">{row.mssv}</td>}
              <td className=" py-4 text-center">{row.printerId}</td>
              <td className=" py-4 text-center">{row.name}</td>
              <td className=" py-4 text-center">{row.startTime}</td>
              <td className=" py-4 text-center">{row.endTime}</td>
              <td className=" py-4 text-center">{row.date}</td>
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