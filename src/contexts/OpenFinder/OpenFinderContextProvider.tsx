import { OpenFinderContext } from './OpenFinderContext'
import { useState } from 'react'

export default function OpenFinderContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [openFinder, setOpenFinder] = useState(false)

  return (
    <OpenFinderContext.Provider value={{ openFinder, setOpenFinder }}>
      {children}
    </OpenFinderContext.Provider>
  )
}
