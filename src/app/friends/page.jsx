import FriendCard from "@/Components/FriendCard";

const page = async () => {

  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  return (
    <div className="px-10 md:px-30 lg:px-50 py-10">
        <h2 className="text-2xl font-bold py-10">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {
          friends.map(friend => (
            <FriendCard
              key={friend.id}
              friend={friend}
            />
          ))
        }

      </div>
    </div>
  );
};

export default page;