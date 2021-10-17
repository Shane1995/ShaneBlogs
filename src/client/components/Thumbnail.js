import Tag from './Tag'

export default function Thumbnail({ thumbnailContent }) {
  const renderTags = () => {
    return thumbnailContent.tags.map((value, index) => {
      return <Tag key={index} name={value} />
    })
  }

  return (
    <article className='flex flex-row bg-[#061b24]  p-8 rounded shadow mb-8'>
      <div>
        <h1 className='text-2xl text-blue-200 cursor-pointer underline pb-2'>{thumbnailContent.title}</h1>
        <p className=' text-sm font-serif italic pb-2'>
          Created: <span className='underline'>{thumbnailContent.created_at}</span>
        </p>
        <p>{thumbnailContent.summary}</p>
        <div className='pt-4 pb-2'>{renderTags()}</div>
      </div>
    </article>
  )
}
