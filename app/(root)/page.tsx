'use client'
import ArrowSeparator from "@/components/reusable/ArrowSeparator";
import Collection from "@/components/reusable/Collection";
import Footer from "@/components/reusable/Footer";
import ShinyText from "@/components/reusable/ShinyText";
import TransitionLink from "@/components/reusable/TransitionLink";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <div className="relative">
        <Image alt="" src={"/assets/images/hero_gradient.png"} width={2000} height={2000} className="absolute w-screen top-0 -z-50 rotate-180" />
        <section className="min-h-screen flex-center flex-col">
          <div className="wrapper mb-10">
            <div className="relative py-16 xs:py-28">
              <div className="relative w-full flex-center h-[60px]">
                <div className="absolute w-full h-full">
                  <svg width="100%" height="100%" id="dashed-y-one">
                    <line x1="0" y1="0" x2="100%" y2="0" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                    <line x1="0" y1="100%" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                  </svg>
                </div>
                <div className="absolute flex-center w-fit h-[80px] px-20">
                  <svg className="absolute hidden xs:block" width="100%" height="100%" id="dashed-x-one">
                    <line x1="0" y1="0" x2="0" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                    <line x1="100%" y1="0" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                  </svg>
                  <ShinyText text="Javascript Syndrome" disabled={false} speed={3} className='text-body-2-bold' />
                </div>
              </div>
              <div className="relative flex-center w-full py-28 mt-10 mb-5">
                <svg className="absolute" width="100%" height="100%">
                  <line x1="0" y1="0" x2="100%" y2="0" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                  <line x1="0" y1="100%" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                </svg>
                <div className="absolute -inset-5 px-10 flex xs:hidden">
                  <svg width="100%" height="100%">
                    <line x1="0" y1="0" x2="0" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                    <line x1="100%" y1="0" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                  </svg>
                </div>
                <div className="absolute px-5 lg:px-20 w-full h-full flex-center">
                  <div className="relative w-full h-full">
                    <div className="w-2 h-2 bg-black dark:bg-white rotate-45 absolute -top-1 -left-1"></div>
                    <div className="w-2 h-2 bg-black dark:bg-white rotate-45 absolute -top-1 -right-1"></div>
                    <div className="w-2 h-2 bg-black dark:bg-white rotate-45 absolute -bottom-1 -left-1"></div>
                    <div className="w-2 h-2 bg-black dark:bg-white rotate-45 absolute -bottom-1 -right-1"></div>
                  </div>
                </div>
                <h1 className="text-h1" id="head-title">HAD VERSE</h1>
              </div>
              <div className="flex-center w-full">
                <p className="flex flex-wrap gap-1 text-center">Your Ultimate Hub for Web Development Essentials.</p>
              </div>
              <div className="relative w-full h-[80px] mt-5">
                <svg width="100%" height="100%" id="dashed-y-three">
                  <line x1="0" y1="0" x2="100%" y2="0" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                  <line x1="0" y1="100%" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex-between xs:flex-center xs:gap-x-5" id="buttons">
                  <Button 
                    onClick={() => {
                        const section = document.getElementById('projects_collection');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }} className="w-[48%] xs:w-fit xs:btn-large" size={"lg"}>Get Started</Button>
                  <TransitionLink href="/resource" className="w-[48%] xs:w-fit">
                    <Button variant="outline" className="w-full xs:btn-large" size={"lg"}>Discover</Button>
                  </TransitionLink>
                </div>
              </div>
              <div className="absolute hidden xs:flex-center top-10 left-0 w-full h-screen -z-40 ">
                <div className="flex item-center w-full h-[650px] p-5 lg:px-20" id="dashed-x-two">
                  <svg width="100%" height="100%">
                    <line x1="0" y1="0" x2="0" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                    <line x1="100%" y1="0" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                  </svg>
                </div>
              </div>
            </div>
              <ArrowSeparator/>
          </div>
        </section>

        <section className="wrapper" id="projects_collection">
          <Collection isSample={true} collectionType={"Project"} />
        </section>

        {/* <section className="wrapper mb-20">
          <Collection isSample={true} collectionType={"Blog"} />
        </section> */}
      </div>
      <Footer/>
    </>
  );
}