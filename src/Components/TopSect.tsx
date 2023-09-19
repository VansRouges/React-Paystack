import { FaShoppingCart } from "react-icons/fa";

function TopSect({
 setShow,
 size,
}: {
 setShow: (value: boolean) => void,
 size: number,
}) {
 return (
   <>
     <div className="flex justify-between items-center px-8 pt-2 pb-4 sticky w-full top-0 z-50 bg-white shadow-lg border-b-[2px]">
       <div className="flex justify-center items-center relative">
         <p className="font-semibold text-2xl text-black">GlobalPalate🥡</p>
       </div>

       <div className="flex flex-row flex-wrap text-black">
         <p
           onClick={() => setShow(true)}
           className="text-xl mt-5 mr-4 hover:text-brandColor hover:underline cursor-pointer"
         >
           Store
         </p>
         <span
           className="text-brandColor text-xl cursor-pointer"
           onClick={() => setShow(false)}
         >
           <FaShoppingCart className="text-2xl mt-6" />
         </span>
         <p
            className={`absolute right-5 top-5 -z-10 text-sm bg-yellow-400 h-5 w-5 rounded-full text-center ${
              size === 0 ? 'hidden' : '' // Add 'hidden' class if size is zero
            }`}
          >
            {size}
          </p>
       </div>
     </div>
   </>
 );
}

export default TopSect;