import './App.css'
import Header from './components/layout/Header/Header'
import Desktop from './components/layout/Desktop/Desktop'
import Dock from './components/layout/Dock/Dock'
import Finder from './components/features/Finder/Finder'
import { appStateAtom } from './atoms/atoms'
import { useAtom } from 'jotai'

function App() {
  const [appState] = useAtom(appStateAtom)
  return (
    <>
      <Header />
      <Desktop />
      {appState.finder && <Finder />}
      <Dock />
    </>
  )
}

export default App
