import TimelineFilter from "@/components/TimelineFilter";


const page = () => {
    return (
        <div>
            <TimelineFilter/>
        </div>
    );
};

export default page;





// /* eslint-disable @next/next/no-img-element */
// "use client";

// import { useContext } from "react";
// import { TimelineContext } from "@/context/context";

// export default function Page() {
//     const { timelineData } = useContext(TimelineContext);

//     return (
//         <div className="px-10 md:px-30 lg:px-50 py-10">
//             <h1>Timeline</h1>

//             <div className='space-y-8'>
//                 <h1 className='text-4xl font-bold'>Timeline</h1>

//                 <label className="select">
//                     <span className="label">Filter Timeline</span>
//                     <select
//                         value={filter}
//                         onChange={(e) => setFilter(e.target.value)}
//                     >
//                         <option>All</option>
//                         <option>Call</option>
//                         <option>Text</option>
//                         <option>Video</option>
//                     </select>
//                 </label>
//             </div>
//             <div>

//             </div>

//             {timelineData.length === 0 ? (
//                 <div className="flex px-4 gap-4 py-2 my-8 bg-base-100 shadow-md opacity-60">
//                     <div className="grid">
//                         <p className="text-gray-600 font-medium">No timeline yet</p>
//                         <p className="text-sm text-gray-400">Recent activities will appear here</p>
//                     </div>
//                 </div>
//             ) : (
//                 timelineData.map((act, i) => (
//                     <div className="flex px-4 gap-4 py-2 my-4 bg-base-100 shadow-md" key={i}>
//                         <div className="my-auto">
//                             <img
//                                 src={
//                                     act.clicked === "Call"
//                                         ? "/assets/call.png"
//                                         : act.clicked === "Text"
//                                             ? "/assets/text.png"
//                                             : "/assets/video.png"
//                                 }
//                                 alt="audio call image"
//                                 className="w-5 h-5 "
//                             />
//                         </div>

//                         <div className="grid">
//                             <p>{act.clicked} with <span className="font-semibold">{act.name}</span></p>
//                             <p><span className="font-semibold">{act.time}</span></p>
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }