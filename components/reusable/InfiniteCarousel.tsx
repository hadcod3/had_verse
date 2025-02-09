import { infiniteCarouselData } from '@/constants'
import React, { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { animate, useMotionValue, motion } from 'motion/react'
import CardTemplate from './Card'

const InfiniteCarousel = () => {
  const [ref, {width}] = useMeasure()
  const xTranslation = useMotionValue(0)

  const TOP_SPEED = 300
  const LOW_SPEED = 900
  const [duration, setDuration] = useState(TOP_SPEED)

  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 20

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        }
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0
      });
    }

    return controls.stop
  }, [xTranslation, width, duration, rerender, mustFinish])

  return (
    <div className='w-screen overflow-hidden'>
        <motion.div 
        className='flex gap-5 w-fit' 
        ref={ref}
        style={{x: xTranslation}}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(LOW_SPEED)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(TOP_SPEED)
        }}
        >
          {Array(5).fill(infiniteCarouselData).flat().map((item, index) => (
            <CardTemplate data={item} key={index} type='carousel'/>
          ))}
        </motion.div>
    </div>
  )
}

export default InfiniteCarousel