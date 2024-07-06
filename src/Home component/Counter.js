import CountUp from 'react-countup';
import React from 'react'

const Counter = () => {
    return (
        <div>

            <div className="container-fluid counter-bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 py-5">
                            <div className='text-center counter-font-size'>
                                <h1 className='fw-bold fs'><CountUp end={1232} duration={6.75} className='count-clr' /></h1>
                                <span className='text-center fw-bold'>Student</span>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6  py-5'>
                            <div className='text-center counter-font-size'>
                                <h1 className='fw-bold fs'><CountUp end={64} duration={6.75}  className='count-clr' /></h1>
                                <span className='text-center fw-bold'>Courses</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6  py-5">
                            <div className='text-center counter-font-size'>
                                <h1 className='fw-bold fs'><CountUp end={42} duration={6.75}  className='count-clr' /></h1>
                                <span className='text-center fw-bold'>Event</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6  py-5">
                            <div className='text-center counter-font-size'>
                                <h1 className='fw-bold fs'><CountUp end={15} duration={6.75}  className='count-clr' /></h1>
                                <span className='text-center fw-bold'>Trainers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Counter