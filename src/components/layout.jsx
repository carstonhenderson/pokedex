import React from 'react'
import './layout.css'

const Layout = ({ children }) => (
  <div className="bg-gray-900 text-white h-screen">
    <main className="container mx-auto overflow-auto p-4 bg-gray-900 text-white">
      {children}
    </main>
  </div>
)

export default Layout
