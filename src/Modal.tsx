import React from 'react'

interface IModalProps {
  title: string
  content: string
  modalDisplayed: boolean
  setModalDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ title, content, modalDisplayed, setModalDisplayed }: IModalProps): JSX.Element => {
  function handleCloseModal (): void {
    setModalDisplayed(false)
  }

  return (
    <div className={modalDisplayed ? 'modal displayed' : 'modal hidden'}>
      <h1 className='modal-title'>{title}</h1>
      <span className='modal-content'>{content}</span>
      <button className='modal-close' onClick={handleCloseModal}>x</button>
    </div>
  )
}

export default Modal
