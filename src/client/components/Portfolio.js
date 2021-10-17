import Image from 'next/image'
import Tag from './Tag'

export default function Portfolio() {
  return (
    <div className='container mx-auto'>
      <div className='lg:space-x-5 lg:flex lg:flex-row md:flex-row item-center lg:-mx-4 flex flex-col text-center lg:text-left'>
        <div className='flex-shrink-0 lg:mt-12 lg:px-4 mb-2'>
          <Image
            src='/images/7046.jpg'
            alt='Profile'
            priority={true}
            className='rounded-full'
            width={150}
            height={150}
          />
        </div>
        <div className='lg:px-4 lg:mt-12 p-4'>
          <h1 className='text-2xl text-white font-mono font-extrabold lg:text-5xl'>Good Morning!</h1>
          <div className='mt-4 md:text-xl lg:text-xl text-gray-200 '>
            <q className='mb-4  font-extrabold pr-2'>
              You can never understand everything. But, you should push yourself to understand the system.
            </q>
            - Ryan Dahl (Creator of NodeJs)
          </div>
        </div>
      </div>
    </div>
  )
}
