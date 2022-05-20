import React, { useState } from "react";
import { RiChatSmile3Fill } from 'react-icons/ri'
import Fact from "../components/Fact";
import '../styles/fact.scss'

export default function Facts() {
  const [modalOpen, setModalOpen] = useState(false);

  if(modalOpen) {
    setTimeout(()=>{
      setModalOpen(false)
    }, 15000)
  }

  return (
    <div className="modalBox">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <RiChatSmile3Fill />
      </button>

      {modalOpen && <Fact setOpenModal={setModalOpen} />}
    </div>
  );
}