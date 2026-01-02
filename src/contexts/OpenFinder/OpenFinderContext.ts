import { createContext } from 'react'

interface OpenFinderContextType {
  openFinder: boolean
  setOpenFinder: (openFinder: boolean) => void
}

export const OpenFinderContext = createContext<OpenFinderContextType>({
  openFinder: false,
  setOpenFinder: () => {},
})
