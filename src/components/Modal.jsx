import React from 'react'
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ( { onClose , isOpen , children }  ) => {
  return createPortal (
    <>
    {isOpen && (
        <> 
        <div className='relative z-50 m-auto  min-h-[200px] max-w-[80%] bg-gray p-4 rounded-md    '> 
        <div className='  flex justify-end  '>
            <AiOutlineClose onClick={onClose} 
            className=' self-end text-2xl' />
        </div>
        {children}
        </div>
        <div className=' z-40 absolute top-0 backdrop-blur h-screen w-screen ' />
        </>
    )}
    </>
  , document.getElementById('modal-root')
)
}

export default Modal ; 