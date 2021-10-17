import BlogHeader from './Blogs-Header'
import Search from './Search'
import SideNav from './Side-Nav'

export default function Layout({ children }) {
  return (
    <div className='container mx-auto px-2'>
      <div className='flex flex-row'>
        <div className='"sm:hidden md:block'>
          <SideNav />
        </div>
        <div className=''>
          <BlogHeader>
            <Search />
          </BlogHeader>
          {children}
        </div>
      </div>
    </div>
  )
}
