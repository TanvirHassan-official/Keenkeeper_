import { FaUser } from "react-icons/fa";
import Link from "next/link";
const Banner = () => {
    return (
        <div className="pt-20 px-10 md:px-30 lg:px-50 ">
            <div className="space-y-8 justify-items-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto">Friends to keep close in your life</h1>
                <p className="text-[#64748B] text-center max-w-xl mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                
                    <button className= 'btn bg-[#244D3F] text-white hover:bg-white hover:text-black'>
                        <FaUser />Add Friend
                    </button>
                
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 space-y-4">
                <div>
                    <h3 className="text-2xl text-[#244D3F] font-semibold text-center">10</h3>
                    <p className="text-[#64748B] text-center">Total Friends</p>
                </div>
                <div>
                    <h3 className="text-2xl text-[#244D3F] font-semibold text-center">03</h3>
                    <p className="text-[#64748B] text-center">On Track</p>
                </div>
                <div>
                    <h3 className="text-2xl text-[#244D3F] font-semibold text-center">06</h3>
                    <p className="text-[#64748B] text-center">Need Attention</p>
                </div>
                <div>
                    <h3 className="text-2xl text-[#244D3F] font-semibold text-center">12</h3>
                    <p className="text-[#64748B] text-center">Interactions This Month</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;