import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../assets/images/carousel1.jpg'),
        title: 'Ceyloan Organic Tea',
        description: 'Enjoy 20% OFF gift ords no code needed',
    },
    {
        id: 2,
        image: require('../assets/images/carousel2.jpg'),
        title: 'Ceyloan Organic Tea',
        description: 'Enjoy 20% OFF gift ords no code needed',
    },
    {
        id: 3,
        image: require('../assets/images/carousel3.jpg'),
        title: 'Ceyloan Organic Tea',
        description: 'Enjoy 20% OFF gift ords no code needed',
    }
]
export default function AppHero() {
    return (
        <section id='home' className='hero-block'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img
                                    className="hero-carousel"
                                    src={hero.image}
                                    alt={"Slide" + hero.id}
                                />
                                <Carousel.Caption>
                                    <h1>{hero.title}</h1>
                                    <p>{hero.description}</p>
                                    <a className='btn tea-btn' href={hero.link}>Shop Our Teas <i className="fa-solid fa-angle-right"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </section>
    )
}