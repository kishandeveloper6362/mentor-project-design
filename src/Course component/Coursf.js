import Card from 'react-bootstrap/Card';
import { FaRegUser, FaRegHeart } from "react-icons/fa";

import React from 'react'

const Coursf = () => {
  return (
    <div>

      <main className='py-3'>
        <div className='container-fluid course-bg-clr'>
          <div className="container course">
            <div className="course py-4">
              <h2 className='text-center text-white'>Courses</h2>
              <p className='text-center text-white'>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
            </div>
          </div>
        </div>
      </main>


      <div className="container py-5">
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
                    <Card.Text className='web-d px-3 py-1 m-0'>Web Development</Card.Text>

                    <p className='mb-0'>$169</p>
                  </div>
                  <Card.Title><a href="" className='text-decoration-none text-black profile-title'>Website Design</a></Card.Title>
                  <Card.Text>
                    Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.
                  </Card.Text>
                  <div className='d-flex py-3 border-top'>
                    <div className='profile-icon d-flex align-items-center'>
                      <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg" alt="" className='rounded-circle' />
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
                <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-3.jpg" />
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
                      <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-3.jpg" alt="" className='rounded-circle' />
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
        </div>
      </div>

    </div>
  )
}

export default Coursf