import React from 'react'

export default function ContactForm() {
  return (
    <>
      <form className='py-4 mt-4 border-t flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="fullname">Full Name</label>
            <input className='px-6 py-2 boder border-slate-300 shadow-md rounded-md' type="text" id='fullname' placeholder='Jhon Doe'/>
        </div>

        <div className='flex flex-col gap-2'> 
            <label htmlFor="email">Email</label>
            <input className='px-6 py-2 boder border-slate-300 shadow-md rounded-md' type="text" id='email' placeholder='john@gmail.com' />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="message">Your Message</label>
            <textarea className='h-32 px-6 py-2 boder border-slate-300 shadow-md rounded-md' id="message" placeholder='Type your message here'></textarea>
        </div>

        <button type='submit' className='bg-green-700 p-3 text-white font-bold rounded-lg'>Send</button>
      </form>
      <div className='bg-slate-100 flex flex-col'>
        <div className=' bg-red-600 px-5 py-2'>Error Message</div>
      </div>
    </>
  )
}
