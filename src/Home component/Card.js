import { MdChevronRight } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
    
import React from 'react'

const Card = () => {

    return (
        <div>

            <div className="container py-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div className='card-bg-color py-5 rounded'>
                            <h2 className='text-white mb-4'>Why Choose Mentor?</h2>
                            <p className='text-white mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>

                            <div className='text-center'>
                                <a href="" className='px-5 py-2 card-btn text-decoration-none d-inline-block text-white rounded-pill'>Learn More <MdChevronRight />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="row gy-4 align-items-center">
                            <div className="col-xl-4 border border-1 card-part">
                                <div className="text-center">
                                    <h1 className="rounded mb-5"><HiOutlineClipboardDocumentList className="card-icon-bg-color" /></h1>

                                    <h4 className="text-center mb-4">Corporis voluptates sit</h4>

                                    <p className="card-paragraph">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                            </div>

                            <div className="col-xl-4 border border-1 card-part">
                                <div className="text-center">
                                    <h1 className="rounded mb-5"><HiOutlineClipboardDocumentList className="card-icon-bg-color" /></h1>

                                    <h4 className="text-center mb-4">Ullamco laboris ladore</h4>

                                    <p className="card-paragraph">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                            </div>

                            <div className="col-xl-4 border border-1 card-part">
                                <div className="text-center">
                                    <h1 className="rounded mb-5"><HiOutlineClipboardDocumentList className="card-icon-bg-color" /></h1>

                                    <h4 className="text-center mb-4">Labore consequatur</h4>

                                    <p className="card-paragraph">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card