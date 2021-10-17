import NavigationItem from './Navigation-Item'
import { LightningBoltIcon, HomeIcon, LightBulbIcon, TerminalIcon } from '@heroicons/react/outline'
import Logo from './Logo'

export default function MainNavigation() {
  return (
    <header className='flex flex-col sm:flex-row md:mb-4 p-4 justify-between items-center'>
      <Logo />
      <div className='flex flex-grow justify-evenly sm:max-w-2xl md:max-w-xs'>
        <NavigationItem title='Home' Icon={HomeIcon} to='/' />
        <NavigationItem title='Blogs' Icon={LightningBoltIcon} to='/blogs' />
        <NavigationItem title='Topics' Icon={LightBulbIcon} to='/topics' />
        <NavigationItem title='Videos' Icon={TerminalIcon} to='/videos' />
      </div>
    </header>
  )
}
