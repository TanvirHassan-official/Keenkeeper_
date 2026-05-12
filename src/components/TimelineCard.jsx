/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";



const TimelineCard = ({friend}) => {
    

        const today = new Date()
        .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })
        
        const [timelineData, setTimelineData] =useState([]);
        
        const handleData =(type, data) => {
            const newData ={
                ...data,
                clicked: type,
                time: today
            }
            setTimelineData([...timelineData, newData]);
            toast.success("Done!");
        }
        console.log(timelineData);

    return (
        <div>
            <div className="my-10 space-y-4">
                <p className="text-[#244D3F] text-xl font-semibold">
                    Quick Check-In
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="text-center">
                        <button onClick={()=>handleData("Call", friend)} className="btn btn-wide hover:bg-[#244D3F] hover:text-white bg-white  text-black">
                            <img
                                src="/assets/call.png"
                                alt="call sign"
                                className="w-5 h-5"
                            />
                            
                            <p>Call</p>
                        </button>
                        <ToastContainer/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-wide hover:bg-[#244D3F] hover:text-white bg-white  text-black">
                            <img
                                src="/assets/text.png"
                                alt="Text sign"
                                className="w-5 h-5"
                            />
                            <p>Text</p>
                        </button>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-wide hover:bg-[#244D3F] hover:text-white bg-white  text-black">
                            <img
                                src="/assets/video.png"
                                alt="Video call sign"
                                className="w-5 h-5"
                            />
                            <p>Video</p>
                        </button>
                    </div>



                </div>
            </div>

            <div className="flex justify-between mt-10 mb-4">
                <p className="text-[#244D3F] text-xl font-semibold">
                    Recent Interactions
                </p>
                <p className="cursor-pointer">
                    <FaClockRotateLeft className="inline justify-items-center" /> Full History
                </p>
                
            </div>

        {
            timelineData.map(call=>(
                <div>
                    <p>{call.name}</p>
                </div>

            ))
        }
        </div>
    );
};

export default TimelineCard;