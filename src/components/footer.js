import { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import img from '../assets/images/footer.jpg'

export default function AppFooter() {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400){
                setShowTopBtn(true);
            }else{
                setShowTopBtn(false);
            }
        })
    })

    function goTop() {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
            <Container className="homefooter">
                <Row>
          <Col className="logo">
              <img className='picture' src={img} />
              <p>An exquisite cup of aromatic <br/> delight, a testament to nature's artistry</p>
          </Col>

          <Col className="contact">
            <h3>Contact Us</h3>
            <a href="" className='icon'><FaPhoneVolume /> +94 12 356 7894</a><br></br>
            <a href="" className='icon'><FaEnvelopeOpenText />  tealeaves@gmail.com</a><br></br>
            <a href="" className='icon'><FaMapMarkerAlt />  43, Temple Road, Kandy</a>
          </Col>

          <Col className="slogo">
            <h3>Folllow us on social media</h3>
            <a href="" className="SIcon"><FaFacebookF /></a>
            <a href="" className="SIcon"><FaInstagram /></a>
            <a href="" className="SIcon"><FaLinkedinIn /></a>
          </Col>

        </Row>

                {/* {
                    showTopBtn && (<div className='go-top' onClick={goTop}></div>)
                } */}
                 <Container fluid>
                <div className='copyright'>© 2022 EventXpress. All Right Reserved.</div>
                {
                    showTopBtn && (<div className='go-top' onClick={goTop}></div>)
                }
            </Container>
            </Container>
    )
}