import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../store'
import { abrirCarrinho } from '../../store/reducers/carrinho'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const valorTotal = items.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  const handleAbrirCarrinho = () => {
    dispatch(abrirCarrinho())
  }

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <div onClick={handleAbrirCarrinho} style={{ cursor: 'pointer' }}>
          <img src={cesta} />
          <span>
            {items.length} itens, valor total: {paraReal(valorTotal)}
          </span>
        </div>
      </div>
    </S.Header>
  )
}

export default Header
