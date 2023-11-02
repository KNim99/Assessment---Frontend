import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

    export default function AppVideo(){

    return (
        <section id='teams' className='block teams-block'>
        <Container fluid>

            <div className='cusServices-parent'>

                <div className='cusServices-ticket-des'>
                Straight From The<br />
                Field To Your Cup
                    
                    {/* <a href="#" className=''><u>kjjhk</u><i className="fa-solid fa-angle-right"></i></a> */}
                    {/* <button className='cusServices-ticket-btn'>Buy Tickets</button> */}
                </div>
                <div className='cusServices-ticket'>
                <video controls width="100%">
              <source src="/assets/images/tea.mp4" type="video/mp4" />
              {/* Your browser does not support the video tag. */}
            </video>
                </div>

            </div>

            </Container>
        
        </section>
    )
}