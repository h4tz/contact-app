import React from 'react'
import { createPortal } from 'react-dom';
import { AiFillPlusCircle } from 'react-icons/ai'

const Plus = ({ onOpen }) => {
  return createPortal(
    // <>
    // <div className=' relative min-h-[60vh]  max-w-[370px]  mx-auto ' >
    // <div className="  max-w-[370px]   right-0  m-4    absolute bottom-0  text-white p-4">
    //   <AiFillPlusCircle
    //   onClick={onOpen}
    //   className='  text-3xl  text-white  cursor-pointer   '/>
    // </div>
    // </div>
    // </>

//     <>
//   <div className="min-h-[60vh] max-w-[370px] mx-auto">
//     {/* Other content can go here */}
//   </div>
//   <div className="fixed right-0 bottom-0 m-4 text-white p-4">
//     <AiFillPlusCircle
//       onClick={onOpen}
//       className="text-3xl text-white cursor-pointer"
//     />
//   </div>
// </>
<>
  <div className="relative min-h-[60vh] max-w-[370px] mx-auto">
    {/* Other content can go here */}
    <div className="fixed bottom-0 right-0 mb-4 mr-auto ml-auto max-w-[370px] w-full flex justify-end px-4">
      <AiFillPlusCircle
        onClick={onOpen}
        className="text-3xl text-white cursor-pointer"
      />
    </div>
  </div>
</>


 , document.getElementById('root-plus') );
}

export default Plus ;