import React from 'react'
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from 'yup' ;


const contactSchemaValidation = Yup.object().shape({
    name : Yup.string().required('Name is Required'),
    email : Yup.string().email('invalid email ').required('Email is Required')
})



const AddandUpdate = ({  contact ,  isOpen ,  onClose , isUpdate  }) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db,'contact') ;
            await addDoc(contactRef , contact ) ;
            onClose();
            toast.success('Added succesfully')
        } catch (error) {
            console.log(error);    
        }
    }

    const updateContact = async (contact , id ) => {
        try {
            const contactRef = doc(db,'contact', id  ) ;
            await updateDoc(contactRef , contact ) ;
            onClose();
            toast.success('Updated succesfully')
        } catch (error) {
            console.log(error);    
        }
    }










  return (
    <div> 
        <Modal
        isOpen={isOpen} onClose={onClose} >
         <Formik 
         validationSchema={contactSchemaValidation}
          initialValues={ isUpdate ? {
            name :  contact.name,
            email : contact.email,

          } : {
            name : '',
            email : '',
          }
        }
          onSubmit={ (values) => {
            console.log(values);
            isUpdate ? updateContact(values , contact.id) :
            addContact(values);
          } }
         
         >
            <Form className=' flex flex-col  gap-3 '>

               <div className=' flex flex-col gap-1   '>
                    <label htmlFor='name' > Name </label>
                    <Field  name = 'name'  className =' border h-10  rounded-md '   />
                    <div className='text-red-500 text-xs'>
                        <ErrorMessage name='name' />
                    </div> 
               </div>
               <div className=' flex flex-col gap-1   '>
                    <label htmlFor='email' > Email </label>
                    <Field  type = ' email '  name = 'email'  className =' border h-10 rounded-md '   />
                    <div className='text-red-500  text-xs '>
                        <ErrorMessage name='email' />
                    </div> 
               </div>

               <button className=' px-3  py-1.5 border self-end  rounded-md  hover:text-white  hover:bg-zinc-700 '>
                {isUpdate ? 'update' : 'add '} contact
               </button>

            </Form>
         </Formik>
        </Modal>




     </div>
  )
}

export default AddandUpdate ;