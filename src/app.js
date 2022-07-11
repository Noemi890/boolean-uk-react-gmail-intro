import './styles/app.css'
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  )
}

export default App
