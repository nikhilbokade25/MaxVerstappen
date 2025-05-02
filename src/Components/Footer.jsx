import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="footer_container">
            <div className='footer_left'>
                <h1>MAX VERSTAPPEN</h1>
            </div>

            <div className='footer_right'>
                <div className='right_content'>
                    <div className='right_section'>
                        <h2>The Driver</h2>
                        <h2>The Man</h2>
                        <h2>Calendar</h2>
                    </div>

                    <div className='right_section'>
                        <h2>Partner</h2>
                        <h2>News</h2>
                        <h2>Contacts</h2>
                    </div>

                    <div className='right_section'>
                        <h2>Privacy Policy</h2>
                        <h2>Cookie Policy</h2>
                        <h2>Legal</h2>
                    </div>
                </div>

                <div className='footer_social'>
                <FaFacebook size={30} className="social_icon" />
                    <FaTwitter size={30} className="social_icon" />
                    <FaInstagram size={30} className="social_icon" />
                    <FaLinkedin size={30} className="social_icon" />
                </div>

            </div>
        </div>
    );
}