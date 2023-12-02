import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import '../style/style.css';

export default function Footer() {
  return (
    <footer className="text-center py-3">
      <div className="container">

            <a href="https://github.com/milena-allaway" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} className="f-icon" />
            </a>
            <a href="https://www.linkedin.com/in/milena-wheatcroft-023202281/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className="f-icon" />
            </a>
            <a href="https://twitter.com/milena_allaway" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={40} className="f-icon" />
            </a>
            <a href="https://www.instagram.com/milena_allaway/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} className="f-icon" />
            </a>
            <br />
            <p className='f-note'>Made with ❤️ by Milena Wheatcroft 2023</p>

      </div>
    </footer>
  );
}
