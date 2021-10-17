import Nav from './Nav'

export default function BlogsHeader({ children }) {
  return (
    <div className='flex flex-col md:flex-row justify-between '>
      <Nav />
      <div className='flex sm:flex-row mb-4'>
        <div className='flex border-2 border-gray-200 rounded'>{children}</div>
      </div>
    </div>
  )
}
