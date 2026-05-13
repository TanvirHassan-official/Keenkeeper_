/* eslint-disable @next/next/no-img-element */
"use client";
import { useContext, useState } from "react";
import { TimelineContext } from "@/context/context";

const TimelineFilter = () => {
    const [filter, setFilter] = useState("All");
        const { timelineData } = useContext(TimelineContext);

    const filteredTimeline =
    filter === "All"
        ? timelineData
        : timelineData.filter(
              (act) => act.clicked === filter
          );

    return (
        <div className="px-10 md:px-30 lg:px-50 py-10">
            <div className='space-y-8'>
                <h1 className='text-4xl font-bold'>Timeline</h1>

                <label className="select">
                    <span className="label">Filter Timeline</span>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option>All</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video Call</option>
                    </select>
                </label>
            </div>



{filteredTimeline.length === 0 ? (
                <div className="flex px-4 gap-4 py-2 my-8 bg-base-100 shadow-md opacity-60">
                    <div className="grid">
                        <p className="text-gray-600 font-medium">No timeline yet</p>
                        <p className="text-sm text-gray-400">Recent activities will appear here</p>
                    </div>
                </div>
            ) : (
                filteredTimeline.reverse().map((act, i) => (
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
                ))
            )}

        </div>
    );
};

export default TimelineFilter;