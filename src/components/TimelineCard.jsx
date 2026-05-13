/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import { FaClockRotateLeft } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { TimelineContext } from "@/context/context";


const TimelineCard = ({ friend }) => {


    const today = new Date()
        .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })

    const { timelineData, setTimelineData } =
        useContext(TimelineContext);

    const handleData = (type, data) => {
        const newData = {
            ...data,
            clicked: type,
            time: today
        }
        setTimelineData([...timelineData, newData]);
        toast.success(newData.clicked + " with " + data.name);
    }

    return (
        <div>
            <div className="my-10 space-y-4">
                <p className="text-[#244D3F] text-xl font-semibold">
                    Quick Check-In
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="text-center">
                        <button onClick={() => handleData("Call", friend)} className="btn btn-wide hover:bg-[#244D3F] hover:text-white bg-white  text-black">
                            <img
                                src="/assets/call.png"
                                alt="call sign"
                                className="w-5 h-5"
                            />

                            <p>Call</p>
                        </button>
                        <ToastContainer />
                    </div>
                    <div className="text-center">
                        <button onClick={() => handleData("Text", friend)} className="btn btn-wide hover:bg-[#244D3F] hover:text-white bg-white  text-black">
                            <img
                                src="/assets/text.png"
                                alt="Text sign"
                                className="w-5 h-5"
                            />
                            <p>Text</p>
                        </button>
                    </div>
                    <div className="text-center">
                        <button onClick={() => handleData("Video Call", friend)} className="btn btn-wide hover:bg-[#244D3F] hover:text-white bg-white  text-black">
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

            {timelineData.filter(act => act.id === friend.id).length === 0 ? (
                <div className="flex px-4 gap-4 py-2 my-8 bg-base-100 shadow-md opacity-60">
                    <div className="grid">
                        <p className="text-gray-600 font-medium">No timeline yet</p>
                        <p className="text-sm text-gray-400">Recent activities will appear here</p>
                    </div>
                </div>
            ) : (
                timelineData.filter(act => act.id === friend.id).slice(-5).reverse().map((act, i) =>
                    // showing last 5 activities
                    <div className="flex px-4 gap-4 py-2 my-4 bg-base-100 shadow-md" key={i}>
                        <div className="my-auto">
                            <img
                                src={
                                    act.clicked === "Call"
                                        ? "/assets/call.png"
                                    : act.clicked === "Text"
                                        ? "/assets/text.png"
                                        : "/assets/video.png"
                                }
                                alt="audio call image"
                                className="w-5 h-5 "
                            />
                        </div>

                        <div className="grid">
                            <p>{act.clicked} with <span className="font-semibold">{act.name}</span></p>
                            <p><span className="font-semibold">{act.time}</span></p>
                        </div>
                    </div>

                )
            )}



        </div>
    );
};

export default TimelineCard;