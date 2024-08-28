import React from "react";
import oc from "../assets/oc.png";
import oc1 from "../assets/oc1.png"

const OurServicePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="bg-blue-500 text-white text-center py-4 mb-8 rounded-lg w-full">
        <h1 className="text-2xl font-bold">Our Service</h1>
        <p className="text-sm">Kami menyediakan berbagai layanan kebersihan dan perawatan untuk rumah dan peralatan elektronik Anda</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md mb-8 flex flex-col items-center w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <p className="text-lg text-center font-bold">Daily Cleaning</p>
          <p className="text-lg text-center font-bold">Electronic Service</p>
          <p className="text-lg text-center font-bold">Other Services</p>
        </div>
        <img
          src={oc1}
          alt="Service"
          className="mx-auto w-80 h-80 h-auto rounded-lg mt-8"
        />
        <p className="text-md mt-8 text-center px-8">
          Apa Anda merasa lelah saat melakukan pekerjaan rumah tangga? Apa Anda
          merasa stres seperti tidak punya waktu yang cukup waktu dalam sehari?
          Apakah rumah atau tempat kerja Anda terasa berantakan dan kotor?
          Jangan khawatir.
        </p>
        <p className="text-lg mt-8 text-center font-bold pt-12">
          Beresin menjadi solusi bagi anda
        </p>
        <div className="flex flex-col mt-8 space-y-4 text-md">
          <div className="text-start">
            Kami akan membantu anda dalam membersihkan rumah, service
            elektronik, laundry, dan layanan yang lainnya.
          </div>
          <div className="text-start">
            Kami sangat memperhatikan kualitas service kami - jika anda
            kurang atau tidak puas dengan layanan kami, anda dapat menghubungi
            customer service kami kapan pun dan dimana pun antara pukul 08:00 -
            16:00 setiap hari.
          </div>
          <div className="text-start">
            Biarkan kami yang melakukan pembersihan sehingga anda bisa
            bebas menghabiskan waktu dengan keluarga tercinta anda.
          </div>
        </div>
      </div>
      <p className="text-lg font-bold mb-8 text-center">
        Perbedaan Single dan Member
      </p>
      <div className="flex flex-col md:flex-row mb-16 w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-lg font-bold mb-2 text-center">Single</h2>
          <p className="text-sm text-center">Layanan Single kami menawarkan bantuan kebersihan yang fleksibel sesuai kebutuhan Anda</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-lg font-bold mb-2 text-center">Member</h2>
          <p className="text-sm text-center">Keanggotaan Member kami memberikan akses eksklusif ke layanan rutin dengan harga ekonomis dan manfaat tambahan</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center">
          <img src={oc} alt="Room Cleaning" className="w-24 h-24 rounded-lg mr-4"/>
          <div>
            <h2 className="text-lg font-bold mb-2 text-center">ROOM CLEANING</h2>
            <p className="text-sm text-center">
              Membersihkan dan merapikan meja, lemari, kursi, furniture dan
              barang-barang lainnya yang kotor akibat noda maupun debu.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center">
          <img src={oc} alt="Electronic Service" className="w-24 h-24 rounded-lg mr-4"/>
          <div>
            <h2 className="text-lg font-bold mb-2 text-center">
              ELECTRONIC SERVICE
            </h2>
            <p className="text-sm text-center">
              Membersihkan dan merapikan meja, lemari, kursi, furniture dan
              barang-barang lainnya yang kotor akibat noda maupun debu.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center">
          <img src={oc} alt="Laundry" className="w-24 h-24 rounded-lg mr-4"/>
          <div>
            <h2 className="text-lg font-bold mb-2 text-center">LAUNDRY</h2>
            <p className="text-sm text-center">
              Membersihkan dan merapikan meja, lemari, kursi, furniture dan
              barang-barang lainnya yang kotor akibat noda maupun debu.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center">
          <img src={oc} alt="Other Services" className="w-24 h-24 rounded-lg mr-4"/>
          <div>
            <h2 className="text-lg font-bold mb-2 text-center">OTHER SERVICES</h2>
            <p className="text-sm text-center">
              Membersihkan dan merapikan meja, lemari, kursi, furniture dan
              barang-barang lainnya yang kotor akibat noda maupun debu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicePage;
