import Header from './components/Header'
import Produtos from './containers/Produtos'
import Cart from './components/Cart'

import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
      <Cart />
    </>
  )
}

export default App
