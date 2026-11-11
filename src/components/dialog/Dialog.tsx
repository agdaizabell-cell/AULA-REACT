import { useState } from 'react'

import './Dialog.css'

type DialogProps ={
  title?: string;
  mostrar: boolean;
  mensagem:string
  textoConfirmar:string
  textoCancelar: string
  aoFechar: () => void
  aoConfirmar: () => void
}

import { Button, Modal, ModalTitle} from 'react-bootstrap'
function Dialog ({title,
   mostrar,
    mensagem = "Esta é uma mensagem padrao",
    textoConfirmar = "confirmar", 
    textoCancelar = "cancelar", 
    aoFechar, 
    aoConfirmar} : DialogProps) {


    return(
      <>
      
      
        <Modal show={mostrar} onHide={aoFechar} centered>
          <Modal.Header closeButton>
            <Modal.Title> {title ? title : "texto padrao"}

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {mensagem}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secundary" onClick={aoFechar}>
              {textoCancelar}

            </Button>
            <Button variant='primary' onClick={aoConfirmar}>
              {textoConfirmar}

            </Button>
            
          </Modal.Footer>
          

        </Modal>
      
      </>

 

    )
}
 export default Dialog