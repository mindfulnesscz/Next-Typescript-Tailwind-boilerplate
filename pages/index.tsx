import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import WMLogo from '../public/webmind_logo.svg'

import { motion } from 'framer-motion';

interface Props {
  banners?:Array<string>
}


const Home: React.FC<Props> = () => {

  useEffect(() => {

   console.log('useEffect');

  }, []);


  return (
    <div className="">
      <Head>
        <title>{"Webmind Next Boilerplate"}</title>
        <meta property="og:title" content="Webmind Next Boilerplate" />
        <meta property="og:type" content="html" />
        <meta property="og:url" content="https://webmind.digital" />
        <meta property="og:image" content="/og_image.webp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-xl m-auto h-screen flex items-center content-center flex-wrap" >

        <Image width='1920' height='1080' src={WMLogo} alt='WEBMIND'></Image>
        <h1 className="w-full font-bold text-4xl text-center">www.webmind.digital</h1>
        
      </main>

      <footer></footer>
    </div>
  )
}

export default Home;
