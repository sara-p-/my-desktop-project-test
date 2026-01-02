import './App.css'
import Header from './components/layout/Header/Header'
import Desktop from './components/layout/Desktop/Desktop'
import Dock from './components/layout/Dock/Dock'
import OpenFinderContextProvider from './contexts/OpenFinder/OpenFinderContextProvider'

function App() {
  return (
    <>
      <OpenFinderContextProvider>
        <Header />
        <Desktop />
        <Dock />
      </OpenFinderContextProvider>
    </>
  )
}

export default App
