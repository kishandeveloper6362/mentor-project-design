import { RiStoreLine,RiFileListLine,RiPriceTag2Line,RiDiscLine } from "react-icons/ri";
import { IoBarChart } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { RiPaintBrushFill } from "react-icons/ri";
import { GoDatabase } from "react-icons/go";
import { TbGradienter } from "react-icons/tb";
import { FaAnchor,FaFingerprint } from "react-icons/fa";

import React from 'react'

const Compny = () => {
    return (
        <div>

            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <RiStoreLine className="fs-1 icon-f" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Lorem Ipsum</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <IoBarChart className="fs-1 icon-s" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Dolor Sitema</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <SlCalender className="fs-1 icon-t" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Sed perspic</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <RiPaintBrushFill className="fs-1 icon-fr" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Magni Dolor</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <GoDatabase className="fs-1 icon-fith" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Nemo Enim</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <TbGradienter className="fs-1 icon-six" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Eiu Tempor</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <RiFileListLine className="fs-1 icon-sev" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Midela Teren</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <RiPriceTag2Line className="fs-1 icon-eg" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Pira Neve</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <RiStoreLine className="fs-1 icon-n" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Lorem Ipsum</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <FaAnchor className="fs-1 icon-t" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Dirada Pack</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <RiDiscLine className="fs-1 icon-e" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Moton Ideal</a></h6>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                        <div className="icon-box d-flex align-items-center px-5 py-3 border border-1 compny">
                            <FaFingerprint className="fs-1 icon-tw" />
                            <h6 className="m-0"><a href="" className="text-decoration-none text-black fw-bold ml-5">Flavor Nivnda</a></h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Compny