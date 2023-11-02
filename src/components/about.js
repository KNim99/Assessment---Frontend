import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tea from '../assets/images/tea5.jpg'

export default function AppAbout() {
  const html = 80;
  const response = 95;
  const photoshop = 60;

  return (
    <Container fluid>
      <div id='about' className='title-holder'>
      </div>
      <Row>
        <Col sm={6}>
          <Image src={tea}></Image>
        </Col>
        <Col sm={6}>
          <h1 className='title-ceylon'>Leading Explorter OfCeyloan Tea</h1>
          <p>Samley Tea is geared to offering products of the highest caliber,
             and we acknowledge that tea, in all its forms, is our premier
             offering to the world.
          </p>

          <ul>
            <li><FontAwesomeIcon icon="fa-square-check" />100% Purity & Quality</li>
            <li>Meticulously hand-picked teas</li>
            <li>Single Estate Loose Teas</li>
            <li>Experience a luxurious tasting brew</li>
          </ul>

          <a href='#' className='read-more-tea title-ceylon'>Read More Details <i className="fa-solid fa-angle-right"></i></a>    
     
        </Col>
      </Row>
    </Container>
  )
}