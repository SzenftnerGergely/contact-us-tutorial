import ContactForm from '@/components/ContactForm'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div className='p-4 max-w-xl mx-auto'>
      <h1 className='text-3xl font-bold my-4'>Contact Us</h1>
      <p>Please fill in the form below</p>
      <Toaster position="top-center"/>
      <ContactForm/>
    </div>
  )
}
