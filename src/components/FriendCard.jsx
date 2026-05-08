/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const friendCard = ({friend}) => {


    return (
        <div> 
            <Link href={`/friends/${friend.id}`}>
            <div className="card bg-[#edffea] shadow-sm cursor-pointer">
                <figure className="relative w-full aspect-square rounded-full">
                    <img
                        src={friend.picture}
                        alt="Image of a friend" 
                        className="object-cover rounded-xl w-full h-full"
                        />
                </figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">{friend.name}</h2>
                    <p className="text-center text-[#64748B] text-2xs"><span>{friend.days_since_contact}</span>d ago</p>
                    <div className="flex gap-2">
                        <p className="text-center px-1 bg-[#80fd80] rounded-2xl">{friend.tags[0]}</p>
                        <p className="text-center px-1 bg-[#80fd80] rounded-2xl">{friend.tags[1]}</p>
                    </div>

                    <p  className={`text-center rounded-2xl text-white
    ${
      friend.status === "on-track"
        ? "bg-green-500"
        : friend.status === "almost due"
        ? "bg-yellow-500"
        : "bg-red-500"
    }
  `}>{friend.status}</p>


                </div>
            </div>
            </Link>

        </div>
    );
};

export default friendCard;