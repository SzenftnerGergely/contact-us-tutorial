"use client"
import axios from 'axios'

import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function ContactForm() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        (async () => {
            try {
                await axios
                    .post('api/contact', { fullname, email, message })
                    .then((response) => {
                        const { msg, success } = response.data
                        success ? toast.success("Email sent succesfully!") : msg.map((e: string) => { toast.error(e) })
                        if (success) { setFullname(""), setEmail(""), setMessage("") }
                    })

            } catch (error) {
                console.log(error);
            }
        })()
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='py-4 mt-4 border-t flex flex-col gap-5'
            >
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        className='px-6 py-2 boder border-slate-300 shadow-md rounded-md'
                        type="text"
                        id='fullname'
                        placeholder='John Doe'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input
                        className='px-6 py-2 boder border-slate-300 shadow-md rounded-md'
                        type="text"
                        id='email'
                        placeholder='john@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        className='h-32 px-6 py-2 boder border-slate-300 shadow-md rounded-md'
                        id="message"
                        placeholder='Type your message here'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <button type='submit' className='bg-green-700 p-3 hover:scale-105 active:scale-100 text-white font-bold rounded-lg transition-all'>Send</button>
            </form>
        </>
    )
}
