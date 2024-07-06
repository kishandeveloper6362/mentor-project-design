import { FaRegCircleCheck } from "react-icons/fa6";
import React from 'react'

const Downfooter = () => {
    return (
        <div>
            <main>
                <div className="container-fluid">
                    <div className="header-bg-img">
                        <div className="container">
                            <h1 className='text-white header-img-fs fw-bold'>Learning Today,
                                <br />
                                Leading Tomorrow</h1>

                            <h3 className='text-white'>We are team of talented designers making websites with Bootstrap</h3>
                            <a href="" className='text-decoration-none text-white fs-5 px-4 py-2 border border-2 rounded-pill d-inline-block mt-4 img-btn'>Get Started</a>
                        </div>
                    </div>
                </div>
            </main>

            <main>
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
                </div>
            </main>
        </div>
    )
}

export default Downfooter