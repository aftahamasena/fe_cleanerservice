import React from "react";
import imageTop from "../assets/image-top.jpg";
import imageOrder from "../assets/image-order.png";
import imageReview from "../assets/image-review.png";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative">
        <img
          src={imageTop}
          alt="Top"
          className="w-full h-96 object-cover"
          style={{ zIndex: -1 }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di Layanan Kebersihan Kami
          </h1>
          <p className="text-lg">
            Kami menawarkan layanan kebersihan terbaik untuk rumah dan kantor
            Anda. Tim kami siap membantu menjaga kebersihan dan kenyamanan Anda.
          </p>
        </div>
      </div>

      <div className="px-80">
        <div className="container mx-auto py-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row">
            <div className="flex-1 text-center">
              <h2 className="text-2xl font-bold mb-4">Daily Cleaning</h2>
              <p className="text-gray-700 mb-4 px-28">
                Kegiatan membersihkan rumah atau ruang kerja setiap hari untuk
                menjaga kebersihan dan kesehatan lingkungan tersebut. Ini
                melibatkan melakukan serangkaian tugas kecil secara rutin untuk
                mencegah penumpukan kotoran dan menjaga lingkungan tetap rapi.
              </p>
              <h3 className="text-xl font-bold mt-20 mb-12">
                Bagaimana cara saya memesan di Beresin?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src={imageOrder}
                    alt="Order"
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-bold mb-2">Pesan Online</h3>
                  <p className="text-gray-700 text-sm">
                    Nikmati pelayanan pemesanan yang lancar dengan sistem
                    pemesanan online yang sangat mudah melalui website Beresin.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src={imageOrder}
                    alt="Order"
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-bold mb-2">
                    Masukkan Informasi Pemesanan
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Kami akan memilihkan tenaga kebersihan yang terlatih dan
                    sesuai dengan kualifikasi servis Beresin di wilayah terdekat
                    Anda.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <img
                    src={imageOrder}
                    alt="Order"
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-bold mb-2">
                    Layanan Pelanggan Setiap Hari
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Customer service kami buka mulai dari jam 8 pagi sampai
                    dengan 4 sore setiap harinya.
                  </p>
                </div>
              </div>
              <div className="mt-12 mb-4 text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Testimoni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <img
                src={imageReview}
                alt="Review"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Budi Santoso</h4>
                <p className="text-gray-700">
                  "Layanan kebersihannya sangat memuaskan dan profesional."
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <img
                src={imageReview}
                alt="Review"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Siti Aminah</h4>
                <p className="text-gray-700">
                  "Saya sangat puas dengan hasil kebersihannya. Rumah saya jadi
                  lebih nyaman."
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <img
                src={imageReview}
                alt="Review"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Ahmad Fauzi</h4>
                <p className="text-gray-700">
                  "Pelayanan yang cepat dan ramah. Hasilnya luar biasa."
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <img
                src={imageReview}
                alt="Review"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Dewi Lestari</h4>
                <p className="text-gray-700">
                  "Tim kebersihan sangat profesional dan hasilnya memuaskan."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
