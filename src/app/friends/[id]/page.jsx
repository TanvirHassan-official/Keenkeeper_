/* eslint-disable @next/next/no-img-element */
import { FaClock } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
const FriendDetails = async ({ params }) => {

    const { id } = await params;

    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();

    const friend = friends.find(p => p.id == id);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 my-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT SIDE */}
                <div className="space-y-6 px-6 lg:px-10">

                    <figure className="relative w-full aspect-square">
                        <img
                            src={friend.picture}
                            alt="Image of a friend"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </figure>

                    <div className="space-y-2 justify-items-center">
                        <p className={`text-center rounded-2xl text-white px-1
                                ${friend.status === "on-track"
                                ? "bg-green-500"
                                : friend.status === "almost due"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                            }
  `}>{friend.status}</p>
                        <div className="flex gap-2 justify-items-center">
                            <p className="text-center px-1 bg-[#80fd80] rounded-2xl">{friend.tags[0]}</p>
                            <p className="text-center px-1 bg-[#80fd80] rounded-2xl">{friend.tags[1]}</p>
                        </div>
                        <p className="text-gray-600">{friend.bio}</p>
                    </div>

                    <div className="grid gap-4">
                        <button className="btn">
                            Snooze 2 weeks
                        </button>

                        <button className="btn">
                            Archive
                        </button>

                        <button className="btn">
                            Delete
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="md:col-span-2">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="text-center">
                            <h3 className="text-2xl text-[#244D3F] font-semibold">
                                {friend.days_since_contact}
                            </h3>

                            <p className="text-[#64748B]">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl text-[#244D3F] font-semibold">
                                {friend.goal}
                            </h3>

                            <p className="text-[#64748B]">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl text-[#244D3F] font-semibold">
                                {friend.next_due_date}
                            </h3>

                            <p className="text-[#64748B]">
                                Next Due
                            </p>
                        </div>

                    </div>

                    <div className="flex justify-between mt-10 mb-4">
                        <p className="text-[#244D3F] text-xl font-semibold">
                            Relationship Goal
                        </p>
                        <p className="cursor-pointer">
                            Edit
                        </p>
                    </div>
                    <p>
                        Connect every <span className="font-bold">{friend.goal} days</span>
                    </p>

                    <div className="my-10 space-y-4">
                        <p className="text-[#244D3F] text-xl font-semibold">
                            Quick Check-In
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="text-center">
                                <button className="btn btn-wide hover:bg-[#244D3F] hover:text-white bg-white  text-black">
                                    <img
                                        src="/assets/call.png"
                                        alt="call sign"
                                        className="w-5 h-5"
                                    />
                                    <p>Call</p>
                                </button>
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
                            <FaClockRotateLeft className="inline justify-items-center"/> Full History
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FriendDetails;