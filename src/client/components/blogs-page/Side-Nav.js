import SideNavItem from './Side-Nav-Item'

function SideNav() {
  const categories = [
    {
      id: 1,
      name: 'Containers',
    },
    {
      id: 2,
      name: 'RESTFUL Web API',
    },
    {
      id: 3,
      name: 'Mental',
    },
  ]

  const tags = [
    {
      id: 1,
      name: '#C-Sharp',
    },
    {
      id: 2,
      name: '#Express',
    },
    {
      id: 3,
      name: '#WebAPI',
    },
  ]

  const renderCategories = () => {
    return categories.map((category) => {
      return <SideNavItem key={category.id} name={category.name} type='category' id={category.id} />
    })
  }

  const renderTags = () => {
    return tags.map((tag) => {
      return <SideNavItem key={tag.id} name={tag.name} type='tag' id={tag.id} />
    })
  }

  return (
    <div className='md:flex flex-row md:pl-4 pr-2 '>
      <div className='flex flex-col w-60 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0'>
        <div className='flex flex-col '>
          <div className='flex flex-row items-center p-4 mb-2 mt-2 '>
            <h1 className=' justify-center font-mono h-4 w-12 text-2xl'>Categories</h1>
          </div>
          {renderCategories()}
          <div className='flex flex-row items-center p-4 mb-2 mt-2 '>
            <h1 className=' justify-center font-mono h-4 w-12 text-2xl'>Tags</h1>
          </div>
          {renderTags()}
        </div>
      </div>
    </div>
  )
}

export default SideNav
