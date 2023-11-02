import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Pagination from 'react-bootstrap/Pagination';

var brandsData = [
    {
        id: 1,
        link: '#',
        image: require('../assets/images/logo1.png'),
        title: 'The perfect design',
        subtitle: 'Web design',
    },
    {
        id: 2,
        link: '#',
        image: require('../assets/images/logo2.png'),
        title: 'The perfect design',
        subtitle: 'Web design',
    },
    {
        id: 3,
        link: '#',
        image: require('../assets/images/logo3.png'),
        title: 'The perfect design',
        subtitle: 'Web design',
    },
    {
        id: 4,
        link: '#',
        image: require('../assets/images/logo4.png'),
        title: 'The perfect design',
        subtitle: 'Web design',
    },
    {
        id: 5,
        link: '#',
        image: require('../assets/images/logo5.png'),
        title: 'The perfect design',
        subtitle: 'Web design',
    },
    {
        id: 6,
        link: 'https://www.google.com',
        image: require('../assets/images/logo6.png'),
        title: 'The perfect design',
        subtitle: 'Web design',
    }
]


export default function AppWorks(){
    return(
        <section id='works' className='block works-block'>
        <Container fluid>
        <div className='title-holder'>
                {/* <h2>Our Works</h2> */}
                <div className='subtitle'>Popular Tea Brands</div>
            </div>
        <Row className='portfoliolist'>
            {
                brandsData.map(brands => {
                    return(
                        <Col sm={2} className='holder' key={brands.id}>
                        <div className='portfolio-wrapper'>
                            <a href={brands.link}>
                                <Image src={brands.image} className=''></Image>
                                <div className='label text-center'>                        
                        <h3>{brands.title}</h3>
                        <h6>{brands.subtitle}</h6>  
                        </div>
                            </a>
                        </div>
                    </Col>
                    )
                })
            }
        </Row>

        
      </Container>
      </section>
    )
}