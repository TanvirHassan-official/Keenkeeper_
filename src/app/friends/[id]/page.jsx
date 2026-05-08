/* eslint-disable @next/next/no-img-element */

const FriendDetails = async ({ params }) => {

    const { id } = await params;

    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();

    const friend = friends.find(p => p.id == id);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT SIDE */}
                <div className="space-y-6">

                    <figure className="relative w-full aspect-square">
                        <img
                            src={friend.picture}
                            alt="Image of a friend"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </figure>

                    <div className="space-y-2">
                        <p className="font-medium">{friend.status}</p>
                        <p>{friend.tags[0]}</p>
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
                <div className="lg:col-span-2">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="text-center">
                            <h3 className="text-2xl text-[#244D3F] font-semibold">
                                10
                            </h3>

                            <p className="text-[#64748B]">
                                Total Friends
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl text-[#244D3F] font-semibold">
                                03
                            </h3>

                            <p className="text-[#64748B]">
                                On Track
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl text-[#244D3F] font-semibold">
                                06
                            </h3>

                            <p className="text-[#64748B]">
                                Need Attention
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default FriendDetails;