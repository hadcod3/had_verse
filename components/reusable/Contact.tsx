import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

interface Props {
    title: string;
    subtitle: string;
}

const Contact = ({title, subtitle} : Props) => {

  return (
    <div className='py-5'> 
        <div className='flex flex-col gap-y-3 pb-5'>
            <h6 className='text-h6-bold'>{title}</h6>
            <p className='opacity-70'>{subtitle}</p>
        </div>
        <div className='flex flex-col gap-y-3'>
            <div className='flex-between'>
                <Input type='text' placeholder='Full Name' className='w-[49%]'/>
                <Input type="email" placeholder="Email Address" className='w-[49%]'/>
            </div>
            <Textarea placeholder='Write your message' className='min-h-32 max-h-44'/>
            <Button size={"lg"}>Send Message</Button>
        </div>
    </div>
  )
}

export default Contact