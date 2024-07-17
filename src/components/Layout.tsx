import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center grow">
      {children}
    </div>
  )
}

export default Layout
