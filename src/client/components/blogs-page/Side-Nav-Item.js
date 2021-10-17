import Link from 'next/link'

function SideNavItem({ name, type, id }) {
  return (
    <Link href={`?${type}=${id}`}>
      <a className='flex flex-row items-center p-4 h-2 hover:text-white hover:bg-[#061b24]'>
        <span className='font-mono'>{name}</span>
      </a>
    </Link>
  )
}

export default SideNavItem
