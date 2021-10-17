import HeaderItem from './HeaderItem'
import { LightningBoltIcon, HomeIcon, LightBulbIcon, VideoCameraIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <header>
      <div className='flex flex-col sm:flex-row justify-between items-center h-auto pt-4 mb-4'>
        <div className='pb-5 md:pb-0 md:pl-4'>
          <h1 className='text-4xl font-mono text-white'>Shane Blogs</h1>
        </div>
        <div className='flex flex-grow justify-end max-w-2xl'>
          <HeaderItem title='Home' Icon={HomeIcon} to='/' />
          <HeaderItem title='Blogs' Icon={LightningBoltIcon} to='/blog' />
          <HeaderItem title='Topics' Icon={LightBulbIcon} to='/' />
          <HeaderItem title='Videos' Icon={VideoCameraIcon} to='/' />
        </div>
      </div>
    </header>
  )
}
