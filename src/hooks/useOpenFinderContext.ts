import { useContext } from 'react'
import { OpenFinderContext } from '../contexts/OpenFinder/OpenFinderContext'

export default function useOpenFinderContext() {
  const context = useContext(OpenFinderContext)
  if (!context) {
    throw new Error(
      'useOpenFinderContext must be used within a OpenFinderContextProvider'
    )
  }
  return context
}
