import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { CiMobile1 } from "react-icons/ci";
import { Formik, Field, Form } from 'formik';


import React from 'react'

const Cnt = () => {
    return (
        <div>

            <section>
                <div className="container-fluid">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d72.82229625000001!3d21.15920015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2z4Kq44KuB4Kqw4KqkLCDgqpfgq4HgqpzgqrDgqr7gqqQ!5e0!3m2!1sgu!2sin!4v1704805851472!5m2!1sgu!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width={"100%"}></iframe>
                </div>
            </section>

            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-4">
                            <div className="icons-contact d-flex mb-4">
                                <a href=""><IoLocationOutline className="fs-4 aft" /></a>
                                <div className="Location">
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="icons-contact d-flex mb-4">
                                <a href=""><AiOutlineMail className="fs-4 aft" /></a>
                                <div className="Location">
                                    <h4>Email::</h4>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className="icons-contact d-flex mb-4">
                                <a href=""><CiMobile1 className="fs-4 aft" /></a>
                                <div className="Location">
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-8">
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                }}
                                onSubmit={async (values) => {
                                    await new Promise((r) => setTimeout(r, 500));
                                    alert(JSON.stringify(values, null, 2));
                                }}
                            >
                                <Form className="">
                                    <div className="row">
                                        <div className="col-6">
                                            <Field id="firstName" name="firstName" placeholder="Jane" />
                                        </div>
                                       
                                        <div className="col-6">
                                            <Field
                                                id="email"
                                                name="email"
                                                placeholder="jane@acme.com"
                                                type="email"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <Field id="subject" name="subject" placeholder="Subject" />
                                        </div>

                                        <div className="col-12">
                                           <textarea type="massege" id="massage" />
                                        </div>

                                        {/* <button type="submit">Submit</button> */}
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Cnt