"use client"
import TransitionLink from '@/components/reusable/TransitionLink';
import { Button } from '@/components/ui/button';
import { resourceData } from '@/constants'
import Image from 'next/image';
import React from 'react'
import { PiArrowLeftLight, PiShareFatLight } from 'react-icons/pi';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table"
import Contact from '@/components/reusable/Contact';
import { Separator } from '@/components/ui/separator';
import NotFoundPage from '@/components/reusable/NotFoundPage';
import BlurText from '@/components/reusable/BlurText';

const page = ({ params }: { params: Promise<{ id: string }> }) => {
    const [param, setParam] = React.useState<{ id: string } | null>(null);
  
    React.useEffect(() => {
      // Unwrap the params Promise and set the param
      params.then((resolvedParams) => {
        setParam(resolvedParams);
      });
    }, [params]);
  
    // Handle loading state while params is being resolved
    if (!param) {
      return <div>Loading...</div>;
    }
  
    // Find the data based on the id
    const data = resourceData.find(item => item._id === param.id);
  
    if (!data) {
      return <NotFoundPage/>;
    }

    return (
        <div className='relative flex-center pt-32'>
            <section className='flex-col flex w-[600px] p-5 gap-y-5'>
                <TransitionLink href='back' className='flex items-center gap-x-3 opacity-80 hover:opacity-100 transition-all'>
                    <PiArrowLeftLight />Go back
                </TransitionLink>
                <h4 className='text-h4-bold'>{data.title}</h4>
                <TransitionLink href='/'>
                    <Button size="lg" variant={'outline'}>
                        Live Website<PiShareFatLight />
                    </Button>
                </TransitionLink>
                <div className='p-5 bg-zinc-200/50 dark:bg-zinc-800/50 shadow-inner border-0.05 rounded-xl my-10'>
                    <Image src={data.thumbImgUrl} alt='thumb_project' width={1000} height={1000} className='w-full aspect-video rounded-lg'/>
                </div>
                <div>
                    <h6 className='text-h6-bold mb-3'>Tech Stack</h6>
                    <Table>
                        <TableBody>
                            <TableRow>
                            <TableCell className="font-medium">HTML</TableCell>
                            <TableCell>Defines the content of the webpage.</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="font-medium">CSS</TableCell>
                            <TableCell>Controls the presentation layer (visual design).</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="font-medium">SCSS</TableCell>
                            <TableCell>Simplifies complex styling with variables, nesting, and mixins.</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="font-medium">Javascript</TableCell>
                            <TableCell>Manages the logic and functionality of a webpage.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div>
                    <h6 className='text-h6-bold mb-3'>Included in Package</h6>
                    <Table>
                        <TableBody>
                            <TableRow>
                            <TableCell>HTML File as templates.</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>CSS File and SCSS (Compiler File) as styles.</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>Javascript File as scripts.</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>All images used in this project.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div>
                    <h6 className='text-h6-bold mb-3'>Features</h6>
                    <ul className='list-disc pl-4'>
                    {data.features && data.features.length > 0 ? (
                        data.features.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    ) : (
                        <li>No features available</li>
                    )}
                    </ul>
                </div>
                <div className='flex flex-col gap-y-3 pb-4'>
                    <h6 className='text-h6-bold'>What's your plan?</h6>
                    <p>Short on cash for the template? No stress! Dive into my YouTube video for step-by-step guidance and build it like a pro.</p>
                    <div className='w-full flex-between'>
                        <Button 
                            size={"lg"}
                            className='font-archivo w-[49%] min-w-30' 
                            onClick={() => window.open(data.purchaseLink)}>Purchase now</Button>
                        <Button 
                            size={"lg"}
                            variant={"outline"}
                            className='font-archivo w-[49%] min-w-30' 
                            onClick={() => window.open(data.playlistLink)}>Build it now</Button>
                    </div>
                </div>
                <Separator/>
                <Contact 
                    title='Let me know' 
                    subtitle='Got a theme idea for our next project? Shoot us an email and let’s make it happen!'/>
            </section>
        </div>
    )
}

export default page