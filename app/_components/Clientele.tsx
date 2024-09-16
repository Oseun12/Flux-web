import Image from 'next/image'
import React from 'react'

function Clientele() {
  return (
    <div className='flex flex-col '>
        <h2 className='font-bold text-center text-4xl mb-20 mt-10'>MEET OUT CLIENTELE</h2>
        <div className="avatar grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 p-6">
        <div className="flex flex-col items-center mb-10">
            <div className="ring-primary ring-offset-base-100 w-60 h-60 rounded-full ring ring-offset-2 mb-4">
                <Image 
                src="/images/avatar.webp" 
                width={240} 
                height={240} 
                alt="avatar" 
                className="rounded-full object-cover"
                />
            </div>
            <h2 className="text-lg text-center text-black">Daxile Marketing</h2>
            </div>


            <div className="flex flex-col items-center mb-10">
                <div className="ring-primary ring-offset-base-100 w-60 h-60 rounded-full ring ring-offset-2 mb-4">
                    <Image 
                    src="/images/avatar.webp" 
                    width={240} 
                    height={240} 
                    alt="avatar" 
                    className="rounded-full object-cover"
                    />
                </div>
                <h2 className="text-xl text-center text-black">Tems company</h2>
            </div>

            <div className="flex flex-col items-center mb-10">
                <div className="ring-primary ring-offset-base-100 w-60 h-60 rounded-full ring ring-offset-2 mb-4">
                    <Image 
                    src="/images/avatar.webp" 
                    width={240} 
                    height={240} 
                    alt="avatar" 
                    className="rounded-full object-cover"
                    />
                </div>
                <h2 className="text-xl text-center text-black">Darel Clothing</h2>
            </div>

            <div className="flex flex-col items-center mb-10">
                <div className="ring-primary ring-offset-base-100 w-60 h-60 rounded-full ring ring-offset-2 mb-4">
                    <Image 
                    src="/images/avatar.webp" 
                    width={240} 
                    height={240} 
                    alt="avatar" 
                    className="rounded-full object-cover"
                    />
                </div>
                <h2 className="text-xl text-center text-black">Rola Shoes</h2>
            </div>

            <div className="flex flex-col items-center mb-10">
                <div className="ring-primary ring-offset-base-100 w-60 h-60 rounded-full ring ring-offset-2 mb-4">
                    <Image 
                    src="/images/avatar.webp" 
                    width={240} 
                    height={240} 
                    alt="avatar" 
                    className="rounded-full object-cover"
                    />
                </div>
                <h2 className="text-xl text-center text-black">Shegs auto</h2>
            </div>

            <div className="flex flex-col items-center mb-10">
                <div className="ring-primary ring-offset-base-100 w-60 h-60 rounded-full ring ring-offset-2 mb-4">
                    <Image 
                    src="/images/avatar.webp" 
                    width={240} 
                    height={240} 
                    alt="avatar" 
                    className="rounded-full object-cover"
                    />
                </div>
                <h2 className="text-xl text-center text-black">Japa company</h2>
            </div>

        </div>

    </div>
  )
}

export default Clientele