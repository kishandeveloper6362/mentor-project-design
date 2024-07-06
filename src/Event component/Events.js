import React from 'react'
import img1 from '../images/events-item-1.jpg';
import img2 from '../images/events-item-2.jpg'

const Events = () => {
    const [eventcard, seteventcard] = React.useState([
        { src: img1, header: 'Introduction to webdesign', date: 'Sunday, September 26th at 7:00 pm', disc: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
        { src: img2, header: 'Marketing Strategies', date: 'Sunday, November 15th at 7:00 pm', disc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo' }
    ])
    return (
        <div>

            <section className='py-3'>
                <div className='container-fluid Event-bg-color'>
                    <div className="container">
                        <div className='event py-4'>
                            <h2 className='text-center text-white'>Events</h2>
                            <p className='text-center text-white'>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container py-5'>
                    <div className="row">
                        {
                            eventcard.map((el, index) => {
                                return (
                                    <div className="col-6 ">
                                        <div className='i-card'>
                                            <div className='e-card-img'>
                                                <div className='e-card-img'>
                                                    <img src={el.src} alt="" width={'100%'} />
                                                    <div className='bg width py-3 overlap'>
                                                        <h4 className='mb-3'><a href="" className='text-decoration-none fw-bold text-black text-center d-block'>{el.header}</a></h4>
                                                        <p className='text-center'><i>{el.date}</i></p>
                                                        <p className='px-4 text-jusify'>{el.disc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Events