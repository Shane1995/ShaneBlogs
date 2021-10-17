import MainNavigation from './Main-Navigation'

export default function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  )
}
