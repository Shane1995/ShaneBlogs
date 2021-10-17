import Link from 'next/link'

export default function NavigationItem({ Icon, title, to }) {
  return (
    <Link href={to}>
      <a className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
        <Icon className='h-8 mb-1 group-hover:animate-bounce'></Icon>
        <p className='tracking-widest md:opacity-100 opacity-0 group-hover:opacity-100'>{title}</p>
      </a>
    </Link>
  )
}
