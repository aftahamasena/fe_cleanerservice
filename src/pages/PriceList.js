import React from "react";
import daily from "../assets/daily.png";
import membership from "../assets/membership.png";

const PriceListPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-blue-500 text-white text-center py-4 mb-4 rounded-lg">
        <h1 className="text-2xl font-bold">Daftar Harga</h1>
        <p className="text-sm">
          Di sini Anda dapat menemukan harga layanan kebersihan kami
        </p>
      </div>

      <div className="px-40 pt-8">
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Pembersih Harian</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
                key={item}
              >
                <img
                  src={daily}
                  alt="Keanggotaan Kebersihan"
                  className="w-1/2 h-auto rounded-lg"
                />
                <p className="text-lg font-bold mt-2">Regular</p>
                <p className="text-sm">Rp 200.000 / bulan</p>
                <p className="text-sm">4 jam / minggu</p>
                <p className="text-xs">Deskripsi Daily</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Keanggotaan Kebersihan</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
                key={item}
              >
                <img
                  src={membership}
                  alt="Keanggotaan Kebersihan"
                  className="w-1/2 h-auto rounded-lg"
                />
                <p className="text-lg font-bold mt-2">Regular</p>
                <p className="text-sm">Rp 500.000 / bulan</p>
                <p className="text-sm">4 jam / minggu</p>
                <p className="text-xs">Deskripsi Membership</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Layanan Lainnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((item) => (
              <div
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
                key={item}
              >
                <p className="text-lg font-bold">Tipe Layanan Lainya</p>
                <p className="text-sm">Deskripsi disini Lainya</p>
                <p className="text-sm">Hubungi: 123-456-789</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceListPage;
