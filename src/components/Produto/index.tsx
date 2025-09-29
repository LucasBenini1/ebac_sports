import { useDispatch } from 'react-redux'
import { Product } from '../../store/api/productsApi'
import { adicionarAoCarrinho } from '../../store/reducers/carrinho'
import * as S from './styles'

type Props = {
  produto: Product
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ produto }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(adicionarAoCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
