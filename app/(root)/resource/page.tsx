"use client"
import CardTemplate from '@/components/reusable/Card';
import { resourceData } from '@/constants';
import { IProject } from '@/types';
import React from 'react'

const ResourcePage = () => {
  return (
    <div className='relative flex-center pt-16 lg:pt-24'>
      <div className='wrapper'>
        <div className='text-center pb-10'>
          <h1 className='text-h4-bold'>Where Art Meets Code</h1>
          <p className='text-subtitle opacity-70'>Transform your ideas into reality with templates that blend beauty and elegant.</p>
        </div>
        <div className='w-full h-fit flex-center flex-wrap gap-10'>
          {resourceData.map((project : IProject) => (
            <CardTemplate key={project._id} type={"bigProject"} data={project}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResourcePage