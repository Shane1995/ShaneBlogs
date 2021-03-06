import { useRouter } from 'next/router'
import requests from '../../utils/requests'

export default function Nav() {
  const router = useRouter()

  return (
    <nav className='relative mb-4'>
      <div className='flex px-3 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h1
            key={key}
            onClick={() => router.push(`?tag=${key}`)}
            className='last:pr-24  cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'
          >
            {title}
          </h1>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  )
}
