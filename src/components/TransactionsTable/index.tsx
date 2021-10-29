import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable(){
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data)) //após a conversão mostra no console os dados
  },[]);

  return(
    <Container>
    <table>
      <thead>
        <th>Titulo</th>
        <th>Valor</th>
        <th>Categoria</th>
        <th>Data</th>
      </thead>
      <tbody>
        <tr>
          <td className="title">Desenvolvimento de Website</td>
          <td className="deposit">R$12.000</td>
          <td>Desenvolvimento</td>
          <td>28/09/2021</td>
        </tr>
        <tr>
          <td className="title">Aluguel</td>
          <td className="withdraw">-R$1.000</td>
          <td>Despesa</td>
          <td>02/09/2021</td>
        </tr>
      </tbody>
    </table>
    </Container>
  )
}