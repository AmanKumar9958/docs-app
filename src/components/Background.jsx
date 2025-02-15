import React from 'react'

const Background = () => {
    return (
        <>
            <div className='w-full h-screen absolute z-[2]'>
                <p className='w-full text-center font-bold text-[1.8rem]  text-zinc-600 absolute top-[5vh]'>Documents</p>
                <h1 className='text-zinc-900 text-[12vw] leading-none absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold'>Docs</h1>
            </div>
        </>
    )
}

export default Background