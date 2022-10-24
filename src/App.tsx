import React, { useState } from 'react'
import Modal from './Modal'

function App() {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false)
  const modalContent = {
    title: 'Hello world!',
    content: 'This is cool.'
  }
  return <Modal title={modalContent.title} content={modalContent.content} modalDisplayed={isModalDisplayed} setModalDisplayed={setIsModalDisplayed} />
}

export default App
