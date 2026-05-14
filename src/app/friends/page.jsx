import FriendCard from "@/Components/FriendCard";
import { Suspense } from "react";
const page = async () => {

  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  return (
    <div className="px-10 md:px-30 lg:px-50 py-10">
      <h2 className="text-2xl font-bold py-10">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">


        <Suspense fallback={
          <div className="space-y-4 ">

            <div
              className="bg-white border border-[#80fd80] rounded-2xl p-5 shadow-md flex items-center gap-4 animate-pulse"
            >
              <div className="w-28 h-56 rounded-full bg-[#80fd80]"></div>

              <div className="flex-1 space-y-3">
                <div className="h-4 w-40 rounded bg-[#244D3F] opacity-80"></div>
                <div className="h-3 w-24 rounded bg-[#1A8862] opacity-70"></div>
              </div>

              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>

          </div>

        }>
          {
            friends.map(friend => (
              <FriendCard
                key={friend.id}
                friend={friend}
              />
            ))
          }
        </Suspense>



      </div>
    </div>
  );
};

export default page;