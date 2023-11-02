import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

var productsData = [
    {
        id: 1,
        image: require('../assets/images/tea1.jpg'),
        name: 'Gobrial Hart',
        title: 'Battler',
        priceRange: '$20.00-$140.00'
    },
    {
        id: 2,
        image: require('../assets/images/tea3.jpg'),
        name: 'Gobrial Hart',
        title: 'Bogawantalawa',
        priceRange: '$15.00-$150.00'
    },
    {
        id: 3,
        image: require('../assets/images/tea2.jpg'),
        name: 'Gobrial Hart',
        title: 'DG Labookellie',
        priceRange: '$20.00-$140.00'
    },
    {
        id: 4,
        image: require('../assets/images/tea4.jpg'),
        name: 'Gobrial Hart',
        title: 'Deavon',
        priceRange: '$4.00-$28.00'
    }
]

export default function AppProducts(){
    return(
        <section id='teams' className='block teams-block'>
        <Container fluid>
        <div className='title-holder'>
        <h2>Our Products</h2>
        <div className='subtitle'>Our range of gift boxes are elegantly packed, gorgeous to look at, and <br/>
packed with the freshest indian teas.</div>
        </div>

        <Row className='portfoliolist'>
            {
                productsData.map(products => {
                    return(
                        <Col sm={3} key={products.id}>
                        <div className='image'>
                            <Image src={products.image}></Image> 
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span> 
                            <span class="fa fa-star"></span>                      
                        </div>

                        <div className='content'>                            
                        <h3>{products.name}</h3>
                            <span className='designation'>{products.title}</span>
                            <p>{products.priceRange}</p>
                        </div>
                        </Col>
                    )
                })
            }

        </Row>
        <a href='#' className='viewProducts title-ceylon'><u>View All Products</u><i className="fa-solid fa-angle-right"></i></a>

        </Container>
        
      </section>
      
    )
}