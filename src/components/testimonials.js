import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var testimonialsData = [
    {
        id: 1,
        name: 'Camilla V.',
        description: '"Lovely, clean environment and delicious bubble teas! Very cozy as well, This is a must go place if you are interested in or want to discover teas - I would recommend to everyone."',
    },
    {
        id: 2,
        name: 'Wendy Rose',
        description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
        
    },
    {
        id: 3,
        name: 'Linda Reid',
        description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
    },
    {
        id: 4,
        name: 'Eleonora L.',
        description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
        
    }
]

export default function AppTestimonials(){
    return(
        <section id='testimonials' className='testimonials-block'>
        <Container fluid>
        <div className='title-holder'>
        <div className='subtitle title-ceylon'>WHAT OUR CUSTOMER SAY!</div>
        </div>
        <Carousel controls={false}>
            {
                testimonialsData.map(testimonials => {
                    return(
                        <Carousel.Item key= {testimonials.id}>
                            <blockquote>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>                                
                            <p>{testimonials.description}</p>
                            <cite>
                                <span className='name'>{testimonials.name}</span>
                                <span className='designation'>{testimonials.designation}</span>
                            </cite>
                            </blockquote>
                        </Carousel.Item>
                    )
                })
            }
    </Carousel>

        

        </Container>
        </section>
    )
}