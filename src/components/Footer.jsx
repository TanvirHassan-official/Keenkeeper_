/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-7.5 px-10 md:px-30 lg:px-50'>
            <div className='space-y-4 justify-items-center'>
                <img 
                    src={"/assets/logo-xl.png"} 
                    alt="" 
                />
                <p className='text-white opacity-80 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h3 className='text-white text-xl'>Social Links</h3>
                <div className='flex gap-2'>
                    <img 
                        src={"/assets/facebook.png"} 
                        alt="Facebook logo"
                    />
                    <img 
                        src={"/assets/instagram.png"} 
                        alt="Instagram logo" 
                    />
                    <img 
                        src={"/assets/twitter.png"} 
                        alt="twitter logo" 
                    />
                </div>
            </div>

            <hr className='text-[#1A8862] opacity-40 my-5'/>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 ">
                <p className="text-[#FAFAFA] opacity-50 order-2 md:order-1">© 2026 KeenKeeper. All rights reserved.</p>
                <div className="space-x-4 grid justify-items-center grid-cols-1 md:grid-cols-3 gap-2 order-1 md:order-2">
                    <Link href="/privacy-policy"><button className="text-[#FAFAFA] opacity-50 hover:opacity-100 cursor-pointer">
                                  Privacy Policy
                                </button></Link>
                    <Link href="/terms-of-service"><button className="text-[#FAFAFA] opacity-50 hover:opacity-100 cursor-pointer">
                                  Terms of Service
                                </button></Link>
                    <Link href="/cookies"><button className="text-[#FAFAFA] opacity-50 hover:opacity-100 cursor-pointer">
                                  Cookies
                                </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;