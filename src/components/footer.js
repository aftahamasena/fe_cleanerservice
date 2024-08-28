import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/login' || location.pathname === '/signup';

  if (hideFooter) {
    return null; // Jika halaman adalah /login atau /signup, footer tidak akan ditampilkan
  }

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>Copyright &copy; 2024 Beresin</p>
    </footer>
  );
};

export default Footer;
