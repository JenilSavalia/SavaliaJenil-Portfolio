import React from 'react'

const Footer = () => {
  return (
    <>
      <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500 }} className='flex flex-wrap gap-8 justify-between p-10 border-y-1 h-40 max-[462px]:h-48'>
        <div>
          <h1>Crafted in India 🇮🇳 💖</h1>
        </div>
        <div className='flex flex-wrap gap-8'>
          <a href='mailto:jenil.savalia.cd@gmail.com' className='cursor-pointer hover:underline'>EMAIL</a>
          <a href='https://github.com/JenilSavalia' target='_blank' className='cursor-pointer hover:underline'>GITHUB</a>
          <a href='https://www.linkedin.com/in/jenilsavalia/' target='_blank' className='cursor-pointer hover:underline'>LINKEDIN</a>
          <a href='https://leetcode.com/u/En6AUMb3D6/' target='_blank' className='cursor-pointer hover:underline'>LEETCODE</a>
        </div>
      </div>

    </>
  )
}

export default Footer