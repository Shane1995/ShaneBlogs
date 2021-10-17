function SideNav() {
  return (
    <div className='md:flex flex-row md:pl-4 pr-2 '>
      <div className='flex flex-col w-60 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0'>
        <div className='flex flex-col '>
          <div className='flex flex-row items-center mb-4 h-4 '>
            <h1 className='inline-flex items-center justify-center font-mono h-4 w-12 text-2xl '>Tags</h1>
          </div>
          <a href='#' className='flex flex-row items-center p-4 h-2 hover:text-white hover:bg-[#061b24]'>
            <span className='font-mono'>#C-Sharp</span>
          </a>
          <a href='#' className='flex flex-row items-center p-4 h-2  hover:text-white hover:bg-[#061b24]'>
            <span className='font-mono'>#Express</span>
          </a>
          <a href='#' className='flex flex-row items-center p-4 h-2 hover:text-white hover:bg-[#061b24]'>
            <span className='font-mono'>#WebAPI</span>
          </a>
          <a href='#' className='flex flex-row items-center p-4 h-2 hover:text-white hover:bg-[#061b24]'>
            <span className='font-mono'>#Programing</span>
          </a>
          <div className='flex flex-row items-center p-4 mb-2 mt-2 '>
            <h1 className='inline-flex  justify-center font-mono h-4 w-12 text-2xl'>Topics</h1>
          </div>
          <a href='#' className='flex flex-row items-center p-4 h-2 hover:text-white hover:bg-[#061b24]'>
            <span className='font-mono'>Application Hosting</span>
          </a>
          <a href='#' className='flex flex-row items-center p-4 h-2 hover:text-white hover:bg-[#061b24]'>
            <span className='font-mono'>Web APIs </span>
          </a>
          <a href='#' className='flex flex-row items-center p-4 h-2 hover:text-white hover:bg-[#061b24]'>
            <span className='font-mono'>Vue Js Two way blinding </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideNav
