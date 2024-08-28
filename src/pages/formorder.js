import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormOrder = () => {
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setNotification("Pesanan telah diproses.");
    setTimeout(() => {
      navigate("/");
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="flex">
          <div className="w-1/2 pr-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Form Order</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="serviceType"
                >
                  Jenis Layanan
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="regular">Reguler</option>
                  <option value="membership">Membership</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="size"
                >
                  Ukuran
                </label>
                <select
                  id="size"
                  name="size"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 text-sm font-bold mb-2">
                  Layanan Lainnya
                </label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="laundry"
                    name="additionalService"
                    value="laundry"
                    className="mr-2"
                  />
                  <label htmlFor="laundry" className="mr-4">
                    Laundry
                  </label>
                  <input
                    type="radio"
                    id="electronic"
                    name="additionalService"
                    value="electronic"
                    className="mr-2"
                  />
                  <label htmlFor="electronic">Electronic</label>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Alamat
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Alamat"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="paymentMethod"
                >
                  Metode Pembayaran
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="cash">Cash</option>
                  <option value="bankTransfer">Bank Transfer</option>
                  <option value="creditCard">Credit Card</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="bookingDetails"
                >
                  Rincian Booking
                </label>
                <textarea
                  id="bookingDetails"
                  name="bookingDetails"
                  rows="3"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Rincian Booking"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Rincian Pembayaran</h3>
              <div className="mt-2 mb-4">
                <div className="flex justify-between mt-2">
                  <span>Total Harga:</span>
                  <span>Rp 100.000</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Biaya Layanan Lainnya:</span>
                  <span>Rp 20.000</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Total Pembayaran:</span>
                  <span>Rp 120.000</span>
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
              {notification && (
                <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">{notification}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOrder;
