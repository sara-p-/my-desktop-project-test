import { createContext } from 'react'
import type { AppStateType } from '../../types/appType'

interface AppStateContextType {
  appStates: AppStateType
  setAppStates: (appStates: AppStateType) => void
}

export const AppStateContext = createContext<AppStateContextType>({
  appStates: { finder: false },
  setAppStates: () => {},
})
