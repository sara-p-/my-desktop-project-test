import { useContext } from 'react'
import { AppStateContext } from '../contexts/AppState/AppStateContext'
import type { AppStateType } from '../types/appType'

interface AppStateContextType {
  appStates: AppStateType
  setAppStates: (appStates: AppStateType) => void
}

export default function useAppStateContext() {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error(
      'useAppStateContext must be used within a AppStateContextProvider'
    )
  }
  return context as AppStateContextType
}
