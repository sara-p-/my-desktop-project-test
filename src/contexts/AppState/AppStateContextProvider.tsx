import type { AppStateType } from '../../types/appType'
import { AppStateContext } from './AppStateContext'
import { useState } from 'react'

export default function AppStateContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [appStates, setAppStates] = useState<AppStateType>({ finder: false })

  return (
    <AppStateContext.Provider value={{ appStates, setAppStates }}>
      {children}
    </AppStateContext.Provider>
  )
}
