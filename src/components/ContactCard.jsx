import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddandUpdate from './AddandUpdate'
import { isObject } from 'formik'
import useDisclose from '../hooks/useDisclose'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {


    const { isOpen , onClose , onOpen } = useDisclose();
    
   const deleteContact =  async (id) => {
    try {
        await deleteDoc(doc(db,'contact', id ))
        toast.success('Deleted succesfully')
    } catch (error) {
        console.log(error)
    }
   }





  return (
    <>
    <div key={contact.id}
    className='flex  items-center justify-between bg-gray p-2 rounded-lg '
   >
     <div className='flex gap-1'>
       <HiOutlineUserCircle  className='text-black text-5xl   ' />
     <div className='text-black'> 
       <h2 className=' font-bold  ' > { contact.name } sbc </h2>
       <p className=' text-sm '> { contact.email }  abc </p>
     </div>
     </div>
     <div className=' flex text-3xl  '>
       <RiEditCircleLine
        onClick={ onOpen } className=' cursor-pointer '
       
       />
       <IoMdTrash 
       onClick={ () => deleteContact(contact.id)}
       className='cursor-pointer' />
     </div>
   </div>
   <AddandUpdate contact = { contact } isUpdate isOpen={isOpen} onClose={onClose} />
   </>
  )
}

export default ContactCard;