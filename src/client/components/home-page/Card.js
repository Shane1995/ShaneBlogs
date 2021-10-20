export default function Card({ title, description, linkTitle, url, cardLayout }) {
  return (
    <div className='text-white font-mono'>
      <h1 className='font-semibold text-xl text-white'>{title}</h1>
      <p className='text-base font-normal my-4 text-gray-300'>{description}</p>
      <a
        // href={latestRepo.clone_url}
        className='font-semibold cursor-pointer group flex flex-row space-x-2 w-full items-center'
      >
        <p className='transition underline duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>
          {linkTitle} &rarr;
        </p>
      </a>
    </div>
  )
}
