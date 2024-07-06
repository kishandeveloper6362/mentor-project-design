import { MdKeyboardArrowRight } from "react-icons/md";
import React from 'react'

const Footer = () => {
    return (
        <div>

            <section className=" pt-5">
                <div className="container-fluid footer-bg-color py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-contact">
                                    <h3>Mentor</h3>
                                    <p>A108 Adam Street <br />
                                        New York, NY 535022 <br />
                                        United States
                                        <br />
                                        <br />
                                        <strong>Phone: </strong>
                                        +1 5589 55488 55
                                        <br />
                                        <strong>Email: </strong>
                                        info@example.com
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 cols-md-6 col-sm-12">
                                <div className="useful-links">
                                    <h5 className="footer-size fw-bold">Useful links</h5>
                                    <ul className="p-0">
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight /> Home</a></li>
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight /> About Us</a></li>
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight /> Services</a></li>
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight /> Term Of Services</a></li>
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight /> Privecy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="useful-links">
                                    <h5 className="footer-size fw-bold">Our Services</h5>
                                    <ul className="p-0">
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight />
                                            Web Design</a></li>
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight />
                                            Web Development</a></li>
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight />
                                            Product Management
                                        </a></li>
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight />
                                            Marketing</a></li>
                                        <li className="py-2"><a href="" className="text-decoration-none text-black"><MdKeyboardArrowRight />
                                            Graphic Design</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="Join Our Newsletter">
                                    <h5 className="footer-size fw-bold">Join Our Newsletter</h5>
                                    <p className="footer-size fw-bold">Tamen quem nulla quae legam multos aute sint culpa legam noster magnas</p>

                                    <form action="" method="post">
                                        <input type="text" name="Email" />
                                        <input type="submit" value="Subscribe" id="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer