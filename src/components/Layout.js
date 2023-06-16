import React from "react"

const Layout = ({children, className=""}) => {
  return(
    <div className={`w-auto h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:px-32 md:p-12 sm:p-8 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
