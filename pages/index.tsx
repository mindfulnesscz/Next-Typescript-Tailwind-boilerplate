import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { motion } from 'framer-motion';
import DynairixLogo from '../public/dynairix_logo.svg'

interface Props {
  banners?:Array<string>
}
let countDownTimer = null;


const Home: React.FC<Props> = () => {
  const [days, setDays] = useState(0);
  const [hours,setHours] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [seconds,setSeconds] = useState(0);

  const [cdTimer, setCdTimer]= useState<NodeJS.Timer | null>(null)

  useEffect(() => {

    const countDownDate = new Date("Jan 21, 2022 12:00:00").getTime();

    setCdTimer( setInterval(()=>{
      const now = new Date().getTime();
      const timeleft = countDownDate - now;
      
      console.log('timer')
      setDays ( Math.floor(timeleft / ( 1000 * 60 * 60 * 24 )));
      setHours ( Math.floor((timeleft % ( 1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60 )));
      setMinutes ( Math.floor((timeleft % ( 1000 * 60 * 60 )) / (1000 * 60 )));
      setSeconds ( Math.floor((timeleft % ( 1000 * 60 )) / 1000 ));
  
    }, 1000));

    return (()=>{
      setCdTimer(null);
    })
  }, []);


  return (
    <div className="">
      <Head>
        <title>{"Make the world a safer place - together with Dynairix!"}</title>
        <meta property="og:title" content="Make the world a safer place - together with Dynairix!" />
        <meta property="og:type" content="html" />
        <meta property="og:url" content="https://dynairix.com" />
        <meta property="og:image" content="/dynairix_og_image.webp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex w-screen h-screen flex-wrap justify-center content-center items-center" >
        <video className='bkg-video' src='/video_bkg.mp4' autoPlay={true} loop={true} playsInline={true} muted={true} />

        <motion.div 
          className="relative w-full text-center z-10 mb-12 opacity-0 top-40"
          animate={{ top: 0, opacity: 100, }}
          transition={{ type: 'spring', stiffness: 100, duration: .5}}
        >
          <Image src={DynairixLogo} width="300" height="100" alt="Dynairix"></Image>
        </motion.div>

        <motion.div 
          animate={{ top: 0, opacity: 1, }}
          transition={{delay :  .4 , type: 'spring', stiffness: 100, duration: .6}}
          className="relative circle -top-40 opacity-0"
        >
          <h3 className="font-aqua text-center text-md sm:text-lg mb-4">Make the world a safer place<br />together with Dynairix</h3>
          <div className="countdown-container w-full flex flex-nowrap justify-center">
            <div className="border-r border-r-gray-400 w-1/4">
              <h2 className="font-open text-center text-4xl sm:text-6xl" >
                  {days}
              </h2>
              <p className="text-center">days</p>
            </div>
            <div className="border-r border-r-gray-400 w-1/4">
              <h2 className="font-open text-center text-4xl sm:text-6xl" >
                  {hours}
              </h2>
              <p className="text-center">hours</p>
            </div>
            <div className="border-r border-r-gray-400 w-1/4">
              <h2 className="font-open text-center text-4xl sm:text-6xl">
                  {minutes}
              </h2>
              <p className="text-center">minutes</p>
            </div>
            <div className="w-1/4">
              <h2 className="font-open text-center text-4xl sm:text-6xl" >
                  {seconds}
              </h2>
              <p className="text-center">seconds</p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home;
