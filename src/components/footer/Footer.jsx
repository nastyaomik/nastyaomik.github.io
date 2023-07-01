import React from 'react';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className='footer__socials'>
                <a href='https://t.me/nikit34' className='footer__social-link'>
                    <FaTelegram />
                </a>
                <a href='https://github.com/nikit34' className='footer__social-link'>
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/nikitapermikov/' className='footer__social-link'>
                    <FaLinkedin />
                </a>
            </div>
            <p className="footer__copyright text-cs">
                &copy; 2023 <span>Cassiopeia</span>. All Rights Reserved
            </p>
            <p className="footer__copyright text-cs">
                Developed by <span>Nikita Permyakov</span>
            </p>
        </div>
    </footer>
  );
};

export default Footer;
