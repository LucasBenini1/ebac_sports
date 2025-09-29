import Produto from '../components/Produto'
import { useGetProductsQuery } from '../store/api/productsApi'

import * as S from './styles'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
