import Navbar from './components/Navbar' ;
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { db } from './config/firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import Plus from './components/Plus';
import AddandUpdate from './components/AddandUpdate';
import useDisclose from './hooks/useDisclose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import NotFoundContact from './components/Inint';




const App = () => {

  const [contacts , setContacts] = useState([]);
  const { isOpen , onClose , onOpen } = useDisclose();

  useEffect( () => {

    const getContacts = async () => {
      try {
        const contactsRef = collection( db , 'contact' )
        
        onSnapshot(contactsRef,(snapshot) => {
          const contactLists = snapshot.docs.map( (doc) => {
            return {
              id : doc.id,
              ...doc.data()
            };
          } );
          setContacts(contactLists);
          return contactLists  ;
          
        })
      } catch (error) {
        console.log(error);
      }

    };
    getContacts();
  },[]);

  const filterContacts = (e) => {
    const value = e.target.value ;
    const contactsRef = collection( db , 'contact' )
        
    onSnapshot(contactsRef,(snapshot) => {
      const contactLists = snapshot.docs.map( (doc) => {
        return {
          id : doc.id,
          ...doc.data()
        };
      } );

      const filteredContacts = contactLists.filter((contact) => 
      contact.name.toLowerCase().includes(value.toLowerCase()));

      setContacts(filteredContacts);
      return filteredContacts  ;
      
    })
  }

  return (
    <>

    <div className='  max-w-[370px]  mx-auto '>
      <Navbar />
      <div className='flex gap-6 ' >
      <div className=' ml-2  relative flex items-center'>
        <FiSearch  className=' p-1 absolute   text-3xl text-white ' />
        <input type='text'
        onChange={filterContacts}
         className='  text-white  pl-9   border-[3px] bg-transparent border-gray  rounded-2xl  h-10  w-[295px] '    />
      </div>
      <div className='h-10 w-10 rounded-full  border '>
        <img src='/batman.png' />
      </div>
      </div>
      <div className='  mt-4  flex flex-col gap-4  '>
        { contacts.length <= 0  ? <NotFoundContact /> :  contacts.map((contact) =>  (
          <ContactCard  key={contact.id} contact={contact} />
          ) 
          )
        }
      </div>
      <AddandUpdate  
      onClose={onClose}  isOpen={ isOpen } />
      <Plus onOpen={onOpen} > </Plus> 
      <ToastContainer  position='bottom-center' />
    </div>
    </>
  
  )
}
export default App ;  