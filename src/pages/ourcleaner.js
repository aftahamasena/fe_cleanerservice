import React from "react";
import imageCleaning from "../assets/image-cleaning.png";
import imageReview from "../assets/image-review.png";

const OurCleaner = () => (
  <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center justify-center">
    <div className="bg-blue-500 text-white text-center py-4 mb-8 rounded-lg w-full">
      <h1 className="text-2xl font-bold">OUR CLEANER</h1>
      <p className="text-sm">
        Tim pembersih kami profesional, terlatih, dan siap membantu menjaga
        kebersihan rumah Anda dengan layanan terbaik.
      </p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-md mb-8 flex flex-col items-center w-full max-w-4xl">
      <div className="flex justify-center mb-5">
        <div className="w-40 h-40">
          <img src={imageCleaning} alt="Cleaner" className="w-full h-full object-cover" />
        </div>
      </div>
      <p className="text-md text-center px-8">
        Beresin dengan bangga dapat berperan dalam memajukan komunitas lokal
        dengan memberikan kesempatan bagi penduduk setempat untuk menghasilkan
        pendapatan dengan jadwal yang fleksibel melalui platform kami. Kami
        tidak hanya memberikan peluang kerja, tetapi juga menyediakan
        pelatihan dan kesempatan karir bagi mereka yang ingin berkembang di
        bidang kebersihan.
      </p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-md mb-8 flex flex-col items-center w-full max-w-4xl">
      <p className="text-md text-center">
        "Waktunya untuk bertindak! Pesan sekarang dan nikmati kenyamanan
        serta kualitas terbaik dari kami."
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img
          src={imageReview}
          alt="Review"
          className="w-16 h-16 rounded-full mb-4"
        />
        <h4 className="font-bold text-center">Siti, Supervisor Kebersihan</h4>
        <p className="text-gray-700 text-center">
          "Kami memastikan setiap sudut rumah Anda bersih dan nyaman. Pesan sekarang untuk layanan terbaik!"
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img
          src={imageReview}
          alt="Review"
          className="w-16 h-16 rounded-full mb-4"
        />
        <h4 className="font-bold text-center">Budi, Manajer Layanan</h4>
        <p className="text-gray-700 text-center">
          "Kualitas layanan adalah prioritas kami. Bergabunglah dengan pelanggan puas kami sekarang!"
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img
          src={imageReview}
          alt="Review"
          className="w-16 h-16 rounded-full mb-4"
        />
        <h4 className="font-bold text-center">Dewi, Spesialis Kebersihan</h4>
        <p className="text-gray-700 text-center">
          "Kebersihan adalah kunci kenyamanan. Pesan layanan kami dan rasakan perbedaannya!"
        </p>
      </div>
    </div>
  </div>
);

export default OurCleaner;
