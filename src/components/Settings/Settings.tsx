import React, { useState } from 'react'
import './Settings'
import Modal from 'react-modal'

function Settings({ onClose, isOpen }: any) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Settings Modal"
        >
            {/* Your settings UI and options go here */}
            <h2>Settings</h2>
            {/* Add your settings content */}
            <button onClick={onClose}>Close</button>
        </Modal>
    )
}

export default Settings