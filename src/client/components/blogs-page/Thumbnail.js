import Tag from './Tag'
import { ThumbUpIcon, StarIcon, ChatIcon, HeartIcon } from '@heroicons/react/outline'
import {
  ThumbUpIcon as ThumbUpIconSolid,
  ChatIcon as ChatIconSolid,
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid
} from '@heroicons/react/solid'

export default function Thumbnail({ thumbnailContent }) {
  const renderTags = () => {
    return thumbnailContent.tags.map((value, index) => {
      return <Tag key={index} name={value} />
    })
  }

  const renderButton = (Icon, name, value) => {
    return (
      <div
        className={`flex flex-row cursor-pointer text-sm rounded hover:text-white hover:font-bold active:text-red-500 hover:bg-[#06202A] p-2 `}
      >
        <Icon className='md:h-4 md:pr-2 h-4 pr-1 text-red-500 ' />
        <span> {name}</span>
      </div>
    )
  }

  return (
    <article className=' flex flex-col bg-[#061b24] p-4 rounded shadow mb-2 '>
      <header className='flex flex-col sm:flex-row justify-between items-center'>
        <div>
          <h1 className='text-blue-400 text-2xl underline cursor-pointer font-medium font-mono'>
            {thumbnailContent.title}
          </h1>

          <p className=' text-sm py-1 font-serif italic'>
            Created: <span className='underline'>{thumbnailContent.created_at}</span>
          </p>
        </div>

        <div className='flex flex-grow justify-end sm:max-w-2xl md:max-w-'>
          <div className='flex flex-row items-center  group w-12 '>{<ThumbUpIcon className='pr-1 h-4' />} 23</div>
          <div className='flex flex-row items-center  group w-12 '>{<ChatIcon className='pr-1 h-4' />} 1.2K</div>
          <div className='flex flex-row items-center cursor-pointer hover:animate-bounce  group p-4 '>
            {<StarIcon className=' text-yellow-400 pr-1 h-5' />}
          </div>
        </div>
      </header>

      <div className='flex'>
        <p>{thumbnailContent.summary}</p>
      </div>
      <div className='pt-2 pb-2 flex flex-wrap'>{renderTags()}</div>
      <div className='md:flex md:flex-row md:text-base text-xs flex flex-row md:justify-start sm:justify-center items-center'>
        {renderButton(ThumbUpIcon, 'Like', 10)}
        {renderButton(ChatIcon, 'Comments')}
      </div>
    </article>
  )
}
