import Card from 'react-bootstrap/Card';
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

import React from 'react'

const Tranner = () => {
    return (
        <div>
            <section>
                <main className='py-3'>
                    <div className='container-fluid course-bg-clr'>
                        <div className="container course">
                            <div className="course py-4">
                                <h2 className='text-center text-white'>Trainers</h2>
                                <p className='text-center text-white'>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </section>


            <section>
            <div className="container py-5">
                <div className="row gy-4">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '' }} className='main-img-card'>
                            <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-1.jpg" />
                            <Card.Body>
                                <Card.Title className='f-f text-center  '>Walter White</Card.Title>
                                <span className='text-center d-block'><i>Web Development</i></span>
                                <Card.Text className='text-center pt-3 mb-2 clr'>
                                    <i>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</i>
                                </Card.Text>
                                <div className='text-center img-card-icon-clr'>
                                    <a href=""><FaTwitter className='fs-4 mx-2' /></a>
                                    <a href=""><FaFacebook className='fs-4 mx-2' /></a>
                                    <a href=""><IoLogoInstagram className='fs-4 mx-2' /></a>
                                    <a href=""><FaLinkedinIn className='fs-4 mx-2' /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '' }} className='main-img-card'>
                            <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg" />
                            <Card.Body>
                                <Card.Title className='f-f text-center  '>Sarah Jhinson</Card.Title>
                                <span className='text-center d-block'><i>Marketing</i></span>
                                <Card.Text className='text-center pt-3 mb-2 clr'>
                                    <i>Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus</i>
                                </Card.Text>
                                <div className='text-center img-card-icon-clr'>
                                    <a href=""><FaTwitter className='fs-4 mx-2' /></a>
                                    <a href=""><FaFacebook className='fs-4 mx-2' /></a>
                                    <a href=""><IoLogoInstagram className='fs-4 mx-2' /></a>
                                    <a href=""><FaLinkedinIn className='fs-4 mx-2' /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <Card style={{ width: '' }} className='main-img-card'>
                            <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-3.jpg" />
                            <Card.Body>
                                <Card.Title className='f-f text-center  '>William Anderson</Card.Title>
                                <span className='text-center d-block'><i>Content</i></span>
                                <Card.Text className='text-center pt-3 mb-2 clr'>
                                    <i>Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara</i>
                                </Card.Text>
                                <div className='text-center img-card-icon-clr'>
                                    <a href=""><FaTwitter className='fs-4 mx-2' /></a>
                                    <a href=""><FaFacebook className='fs-4 mx-2' /></a>
                                    <a href=""><IoLogoInstagram className='fs-4 mx-2' /></a>
                                    <a href=""><FaLinkedinIn className='fs-4 mx-2' /></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Tranner