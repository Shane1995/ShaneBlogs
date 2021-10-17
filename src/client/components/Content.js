import Nav from './Nav'
import Thumbnail from './Thumbnail'

export default function Content({ contents }) {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-row justify-between'>
        <h1 className='text-2xl text-white'>Blog Posts</h1>
        <div className='flex sm:flex-row items-center justify-center'>
          <div className='flex  border-2 border-gray-200 rounded'>
            <input className='px-4 py-2 w-full text-[#061b24] ' />
            <button className='px-4 text-white hover:bg-[#06202A] bg-[#061b24] border-l'>Search</button>
          </div>
        </div>
      </div>
      <div className='mb-4 mt-4'>
        <Nav className='py-10' />
      </div>
      {contents.map((value) => {
        return <Thumbnail key={value.id} thumbnailContent={value} />
      })}
    </div>
  )
}
