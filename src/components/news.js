import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const newsData = [
    {
        id: 1,
        image: require('../assets/images/news.jpg'),
        time: 'RECIPES | POST BY ADMIN',
        title: 'Immunity-Boosting To Add To Your Diet Now',
        btn: 'Our Story',
        link: '#'
    },
    {
        id: 2,
        image: require('../assets/images/news2.jpg'),
        time: 'LIFESTYLE, RECIPES | POST BY ADMIN',
        title: 'Cinnamon tea, an excellent digestive aid',
        btn: 'Shop Our Teas',
        link: '#',
    },
    {
        id: 3,
        image: require('../assets/images/blog2.jpg'),
        time: 'PRODUCT TIPS, RECIPES | POST BY ADMIN',
        title: 'Ramadan & Eid: The Custom of Gifting Tea',
        btn: 'Explore Out Ingredients',
        link: '#'
    },
    {
        id: 4,
        image: require('../assets/images/news3.jpg'),
        time: 'HEALTH & NUTRITION | POST BY ADMIN',
        title: 'Chamomile: Herbal Tea of the Month',
        btn: 'Explore Out Ingredients',
        link: '#'
    }
]

export default function AppNews() {
    return (
        <section id='blog' className=''>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Latest News & Recipies</h2>
                </div>

                <Row className='portfoliolist'>
                    {
                        newsData.map(news => {
                            return (
                                <Col sm={3} key={news.id}>
                                    <div className='hedding'>
                                        <Card>
                                            <Card.Img variant="top" src={news.image} />
                                            <Card.Body>
                                                <time>{news.time}</time>
                                                <Card.Title>{news.title}</Card.Title>
                                                <Card.Text>{news.description}</Card.Text>
                                                <a href='#' className='title-ceylon'><u>Read More </u><i className="fa-solid fa-angle-right"></i></a>
                                            </Card.Body>
                                        </Card>

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