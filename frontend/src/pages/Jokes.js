import React, { useState } from "react";
import { RiChatSmile3Fill } from 'react-icons/ri'
import Joke from "../components/Joke";
import '../styles/joke.scss'

export default function Jokes() {
  const [modalOpen, setModalOpen] = useState(false);

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

      {modalOpen && <Joke setOpenModal={setModalOpen} />}
    </div>
  );
}