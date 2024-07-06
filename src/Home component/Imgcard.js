import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaRegUser, FaRegHeart, FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import React from 'react'

const Imgcard = () => {
    return (
        <div>

            <section className='pt-5'>

                <div className="container">
                    <div className="section-title">
                        <h6>COURSES</h6>
                        <p className='fs-1 fw-bold'>POPULAR COURSES</p>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row gy-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="img-card">
                                <Card style={{}}>
                                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-1.jpg" />
                                    <Card.Body>
                                        <div className='d-flex align-items-center justify-content-between mb-4'>
                                            <Card.Text className='web-d px-3 py-1 m-0'>Web Development</Card.Text>

                                            <p className='mb-0'>$169</p>
                                        </div>
                                        <Card.Title><a href="" className='text-decoration-none text-black profile-title'>Website Design</a></Card.Title>
                                        <Card.Text>
                                            Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.
                                        </Card.Text>
                                        <div className='d-flex py-3 border-top'>
                                            <div className='profile-icon d-flex align-items-center'>
                                                <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-1.jpg" alt="" className='rounded-circle' />
                                                <p className='mb-0'>Antonio</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='d-flex align-items-center'>
                                                    <FaRegUser />
                                                    <p className='mb-0 count'>50</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <FaRegHeart className='p-left' />
                                                    <p className='mb-0 count'>65</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>


                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="img-card">
                                <Card style={{}}>
                                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-2.jpg" />
                                    <Card.Body>
                                        <div className='d-flex align-items-center justify-content-between mb-4'>
                                            <Card.Text className='web-d px-3 py-1 m-0'>Marketing</Card.Text>

                                            <p className='mb-0'>$250</p>
                                        </div>
                                        <Card.Title><a href="" className='text-decoration-none text-black profile-title'>Search Engine Optimization</a></Card.Title>
                                        <Card.Text>
                                            Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.
                                        </Card.Text>
                                        <div className='d-flex py-3 border-top'>
                                            <div className='profile-icon d-flex align-items-center'>
                                                <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg" alt="" className='rounded-circle' />
                                                <p className='mb-0'>Lana</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='d-flex align-items-center'>
                                                    <FaRegUser />
                                                    <p className='mb-0 count'>35</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <FaRegHeart className='p-left' />
                                                    <p className='mb-0 count'>42</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="img-card">
                                <Card style={{}}>
                                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-3.jpg" />
                                    <Card.Body>
                                        <div className='d-flex align-items-center justify-content-between mb-4'>
                                            <Card.Text className='web-d px-3 py-1 m-0'>Content</Card.Text>

                                            <p className='mb-0'>$180</p>
                                        </div>
                                        <Card.Title><a href="" className='text-decoration-none text-black profile-title'>Copywriting</a></Card.Title>
                                        <Card.Text>
                                            Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.
                                        </Card.Text>
                                        <div className='d-flex py-3 border-top'>
                                            <div className='profile-icon d-flex align-items-center'>
                                                <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-3.jpg" alt="" className='rounded-circle' />
                                                <p className='mb-0'>Brandon</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='d-flex align-items-center'>
                                                    <FaRegUser />
                                                    <p className='mb-0 count'>20</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <FaRegHeart className='p-left' />
                                                    <p className='mb-0 count'>85</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
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

export default Imgcard