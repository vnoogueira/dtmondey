import Modal from 'react-modal';
import { Container } from './style';
import CloseModal from '../../assets/botaoFechar.svg'

interface NewTransactionProps{
  isOpen: boolean,
  onRequestClose: () => void; 
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionProps){
  return(
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName = "react-modal-overlay"
        className = 'react-modal-content'
      >
        <button 
          type='button' 
          onClick = {onRequestClose}
          className = 'react-modal-close'
        >
          <img src={CloseModal} alt="Fechar Modal"/>
        </button>
        <Container>
          <h2>Cadastrar Transação</h2>
          <input placeholder = 'Titulo'/>
          <input placeholder = 'Valor' type = 'number'/>
          <input placeholder = 'Categoria'/>
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  ); 
}