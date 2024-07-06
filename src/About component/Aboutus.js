import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const Aboutus = () => {

    const [testimonial, setTestimonial] = React.useState([
        { src: img1, name: 'matt brandon', passion: 'Designer', disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { src: img2, name: 'john Larsen', passion: 'Enterpreneur', disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { src: img3, name: 'Ceo & Founder', passion: 'Freelancing', disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ])

    return (
        <div>

            <section className='py-3'>
                <div className='container-fluid course-bg-clr'>
                    <div className="container course">
                        <div className="course py-4">
                            <h2 className='text-center text-white'>About Us</h2>
                            <p className='text-center text-white'>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12  col-xl-order-1 col-lg-order-1 col-md-order-1 col-sm-order-1">
                        <div className='paragraph pt-4'>
                            <h3 className='fw-bold mb-3'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>

                            <p className='mb-4'><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>

                            <ul className="p-0">
                                <li className='pb-3'><FaRegCircleCheck className='right-icon-color fs-4' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li className='pb-3'><FaRegCircleCheck className='right-icon-color fs-4' /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li className='pb-3'><FaRegCircleCheck className='right-icon-color fs-4' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>

                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className='img'>
                            <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/about.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="section-title pt-4">
                    <h6>TESTIMONIAL</h6>
                    <p className='fs-1 fw-bold'>POPULAR COURSES</p>
                </div>
            </div>

            <div className="container d-flex">
                <div className="row">
                    {
                        testimonial.map((el, index) => {
                            return (
                                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={el.src} />
                                        <Card.Body className='text-center '>
                                            <Card.Title>{el.name}</Card.Title>
                                            <Card.Text className='mb-3'>{el.passion}</Card.Text>
                                            {el.disc}
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Aboutus