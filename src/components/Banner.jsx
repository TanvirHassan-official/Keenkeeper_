import { FaUser } from "react-icons/fa";
import Link from "next/link";
const Banner = () => {
    return (
        <div className="space-y-8 justify-items-center py-20 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto">Friends to keep close in your life</h1>
            <p className="text-[#64748B] text-center max-w-xl mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div>
                
                    <button className= 'btn bg-[#244D3F] text-white hover:bg-white hover:text-black'>
                        <FaUser />Add Friend
                    </button>
                
            </div>
        </div>
    );
};

export default Banner;