import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
    {
        id: 1,
        image: require('../assets/images/img1.png'),
        time: 'SINCE 1983',
        title: 'Heritage & Tradition',
        description: 'Established in 1983, our Tea has been sourcing, manufacturing and distributing quality and affordable tea.',
        btn: 'Our Story',
        link: '#'
    },
    {
        id: 2,
        image: require('../assets/images/img2.png'),
        time: 'PURE & NATURAL',
        title: 'Fresh from Source',
        description: 'We believe in the magic of freshly plucked leaves from the tea gardens. Find out what it means to be Fresh from Source.',
        btn: 'Shop Our Teas',
        link: '#',
    },
    {
        id: 3,
        image: require('../assets/images/img3.png'),
        time: 'QUALITY',
        title: 'Organic Ingredients',
        description: 'Made with over 140 exotic spices, our teas are purposefully blended both delicious taste and healthful benefits.',
        btn: 'Explore Out Ingredients',
        link: '#'
    }
]

export default function AppBlog() {
    return (
        <section id='blog' className=''>
            <Container fluid>
                <div className='title-holder'>
                    
                </div>

                <Row className='portfoliolist'>
                    {
                        blogData.map(blog => {
                            return (
                                <Col sm={4} key={blog.id}>
                                    <div className='hedding'>
                                        <Card>
                                            <Card.Img variant="top" src={blog.image} />
                                            <Card.Body>
                                                <time>{blog.time}</time>
                                                <Card.Title>{blog.title}</Card.Title>
                                                <Card.Text>{blog.description}</Card.Text>
                                                <a href={blog.link} className=''><u>{blog.btn}</u><i className="fa-solid fa-angle-right"></i></a>
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