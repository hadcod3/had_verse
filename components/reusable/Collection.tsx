
import React from 'react'
import { Button } from '../ui/button'
import { projectData, resourceData } from '@/constants'
import { PiArrowUpRight } from 'react-icons/pi';
import { IBlog, IProject } from '@/types';
import CardTemplate from './Card';
import TransitionLink from './TransitionLink';

interface CollectionProps {
    isSample: boolean;
    collectionType: string;
}

const Collection = ({isSample, collectionType} : CollectionProps) => {
    const displayLimit = -3
    return (
        <div className='w-full flex-center'>
            <div className='w-fit flex flex-col gap-y-10'>
                <div className='w-full xs:w-[400px]'>
                    <h4 className='text-h4-bold mb-2'>{collectionType === "Project" ? "Stunning web landing page templates" : "Design convert into stories from the web"}</h4>
                    <p className='text-subtitle'>{collectionType === "Project" ? "HTML, CSS, JavaScript Projects" : "Dive deep into trends that define the modern web"}</p>
                </div>
                <div className='w-full flex flex-wrap items-center place-content-center gap-6'>
                    {collectionType === 'Project' ? (
                        (isSample ? resourceData.slice(displayLimit) : resourceData).map((project : IProject) => (
                            <CardTemplate key={project._id} type='smallProject' data={project} />
                        ))
                    ) : (
                        (isSample ? projectData.slice(displayLimit) : projectData).map((project : IBlog) => (
                            <CardTemplate key={project._id} type='blog' data={project} />
                        ))
                    )}
                </div>
                <TransitionLink href={(collectionType === "Project" ? "/resource" : "/blog")} className='w-full flex justify-center'>
                    <Button variant='outline' className='btn-large w-fit'>Discover <PiArrowUpRight /></Button>
                </TransitionLink>
            </div>
        </div>
    )
}

export default Collection