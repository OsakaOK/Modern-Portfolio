import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] mb:mb-5 id="contact'>
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
            Let's connect! Feel free to reach out
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
            if you'd like to discuss opportunities, projects, or just want to chat.
            </p>
            <a href="mailto:osakakpv@gmail.com">
                <MagicButton
                    title="my email"
                    icon ={<FaLocationArrow/>}
                    position="right"
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) =>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex
                    justify-center items-center backdrop-filter backdrop-blur-lg saturate-180
                    bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt="icons"
                        width={20} height={20}/>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer