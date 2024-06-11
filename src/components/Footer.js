import React from 'react';
import './Footer.css';  // 引入样式文件


function Footer() {
  return (
    <footer className="footer-container">
      {/* Add any footer content here */}
      <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
