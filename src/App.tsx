import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from './components/NewtransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);

  function HandleOpenIsNewTransactionModal(){
    setIsNewTransactionOpenModal(true);
  }

  function HandleCloseIsNewTransactionModal(){
    setIsNewTransactionOpenModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={HandleOpenIsNewTransactionModal}/>

      <Dashboard/>

      <NewTransactionModal
        isOpen = {isNewTransactionOpenModal}
        onRequestClose = {HandleCloseIsNewTransactionModal}
      />

      <GlobalStyle/>
    </>
  );
}