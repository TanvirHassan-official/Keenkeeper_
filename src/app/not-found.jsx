import { FaHome } from "react-icons/fa";
import Link from "next/link";
const NotFound = () => {
    return (
<div className="flex min-h-screen items-center justify-center text-white">
      <div className="max-w-xl p-8 text-center">
        

        <h1 className="text-[8rem] font-bold leading-none text-[#80fd80] md:text-[10rem]">
          404
        </h1>
        

        <h2 className="mb-2 mt-4 text-3xl font-semibold text-[#244D3F] md:text-4xl">
          Page Not Found
        </h2>

        <p className="mb-8 text-lg text-[#244D3F]">
          Oops! It looks like you are lost. The link you followed might be broken, or the page has been moved.
        </p>
        
        <Link href="/"><button className= 'btn btn-active btn-block bg-[#244D3F] text-white hover:bg-[#80fd80] hover:text-black'>
              <FaHome />Back to Homepage
            </button></Link>
        
      </div>
    </div>
    );
};

export default NotFound;