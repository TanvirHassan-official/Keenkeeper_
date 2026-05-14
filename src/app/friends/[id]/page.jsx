/* eslint-disable @next/next/no-img-element */
import friends from "@/../public/friends.json";
import TimelineCard from "@/components/TimelineCard";
import { FaClockRotateLeft, FaBell, FaRegTrashCan, FaBoxArchive } from "react-icons/fa6";
const FriendDetails = async ({ params }) => {

    const { id } = await params;

    // const res = await fetch("http://localhost:3000/friends.json");
    // const friends = await res.json();

    const friend = friends.find(p => p.id == id);

    const date = friend.next_due_date;
    const formattedDate = new Date(date)
        .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })




    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">

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
                        <h3 className="text-2xl font-bold">{friend.name}</h3>
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
                        <p className="text-gray-600">Email: <span className="font-semibold text-black">{friend.email}</span></p>
                    </div>

                    <div className="grid gap-4">
                        <button className="btn">
                            <FaBell /> Snooze 2 weeks
                        </button>

                        <button className="btn">
                            <FaBoxArchive />Archive
                        </button>

                        <button className="btn text-red-500">
                            <FaRegTrashCan /> Delete
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
                                {formattedDate}
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

                <TimelineCard friend= {friend} />
                </div>

            </div>

        </div>
    );
};

export default FriendDetails;