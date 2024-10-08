import React from "react";
import InputField from "../Login/InputField"; // Import InputField component

function PrintingForm() {
  return (
    <section className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full mx-20">
      <div className="flex gap-52 max-md:flex-col">
        {/* Phần chọn máy in và số bản in */}
        <div className="flex flex-col w-5/12 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c03e7cd16ef33d7f3d1a8b7b09546f4aeec9793f6296076ffc8be97a8c297571?placeholderIfAbsent=true&apiKey=985f1fb8be044ffd914af5aef5360e96"
            alt="Printer illustration"
            className="object-contain w-4/5 h-auto max-md:mt-10 mx-auto"
          />
          <div className="flex flex-col items-center md:items-start mt-8 w-full">
            <button className="px-6 py-4 text-base text-white rounded-lg bg-slate-600 hover:bg-slate-700 w-full max-md:w-auto max-md:px-5">
              Chọn máy in
            </button>
            <label htmlFor="printCopies" className="mt-6 text-xl text-black">
              Số bản in
            </label>
            <InputField
              id="printCopies"
              type="number"
              defaultValue="100"
              className="w-full px-4 py-2 mt-4 text-xl border border-zinc-200 rounded-xl"
            />
            <div className="flex mt-8">
              <label htmlFor="paperSize" className="text-xl mr-6">
                Khổ giấy
              </label>
              <select
                id="paperSize"
                className="px-3 py-0.5 text-xl bg-white border border-black rounded-xl"
              >
                <option>A4</option>
              </select>
            </div>
          </div>
        </div>

        {/* Phần thông tin in */}
        <div className="flex flex-col w-6/12 max-md:w-full">
          <h2 className="self-center text-2xl font-extrabold text-stone-900">
            THÔNG TIN IN
          </h2>
          <div className="flex flex-col mt-8">
            <label htmlFor="filesToPrint" className="text-xl">
              Tệp cần in
            </label>
            <div className="flex gap-4 p-2 mt-2 bg-white border border-black rounded-xl">
              <span>File.doc</span>
              <span>File.ex</span>
            </div>
          </div>
          <button className="px-6 py-3 mt-6 text-base text-white bg-slate-600 hover:bg-slate-700 rounded-lg w-full max-md:px-5">
            Tải tệp lên
          </button>

          <label htmlFor="selectedPrinter" className="mt-6 text-xl text-black">
            Máy in đã chọn
          </label>
          <InputField
            id="selectedPrinter"
            placeholder="ID máy in"
            className="w-full px-4 py-4 mt-4 text-xl border border-black rounded-xl"
          />

          <label htmlFor="pagesToPrint" className="mt-6 text-xl text-black">
            Trang cần in
          </label>
          <InputField
            id="pagesToPrint"
            placeholder="e.g. 1-5, 8, 11-13"
            className="w-full px-4 py-4 mt-4 text-xl border border-black rounded-xl"
          />

          <fieldset className="mt-8">
            <legend className="text-xl text-black">Số trang mỗi mặt</legend>
            <div className="flex flex-col gap-4 mt-4 border border-black">
              <label className="flex items-center gap-2 p-3 bg-white">
                <input type="radio" name="pagesPerSide" value="1" defaultChecked />
                <span>1 trang</span>
              </label>
              <label className="flex items-center gap-2 p-3 bg-white">
                <input type="radio" name="pagesPerSide" value="2" />
                <span>2 trang</span>
              </label>
            </div>
          </fieldset>
        </div>
      </div>

      <button className="self-center px-12 py-4 mt-16 text-base font-semibold text-white uppercase bg-blue-700 hover:bg-blue-800 rounded-xl max-md:w-full">
        XÁC NHẬN
      </button>
    </section>
  );
}

export default PrintingForm;
