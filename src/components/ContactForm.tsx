"use client"

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from './ui/button'

type FormFields = {
    name: string,
    email: string,
    textarea: string
}

function ContactForm() {
    const { register, handleSubmit } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <label htmlFor="name" className="block text-sm mb-3 font-medium leading-6 text-gray-900">
                    Full name
                </label>
                <input
                    className='mb-4 block w-full focus-visible:ring-none rounded-md outline-0 border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-accent_one sm:text-sm sm:leading-6 resize-none'
                    type="text"
                    name='name'
                    {...register('name')}
                />
                <label htmlFor="email" className="block text-sm mb-3 font-medium leading-6 text-gray-900">
                    Your email
                </label>
                <input
                    required
                    className='mb-4 block w-full focus-visible:ring-none rounded-md outline-0 border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-accent_one sm:text-sm sm:leading-6 resize-none'
                    type="email"
                    name='name'
                    {...register('email')}
                />
                <label htmlFor="name" className="block text-sm mb-3 font-medium leading-6 text-gray-900">
                    Your message
                </label>
                <textarea
                    rows={4}
                    className='mb-4 block outline-0 w-full focus-visible:ring-none rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-accent_one sm:text-sm sm:leading-6 resize-none'
                    {...register('textarea')}
                >

                </textarea>
                <Button>
                    Submit
                </Button>
            </form>
        </>
    )
}

export default ContactForm