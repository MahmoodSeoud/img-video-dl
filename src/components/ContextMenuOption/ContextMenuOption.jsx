import React, { useState } from 'react'
import { UilCog } from '@iconscout/react-unicons'
import './ContextMenuOption.css'

function ContextMenuOption() {
    const [active, setActive] = useState(false);

    // Toggle the active state
    function toggleActive() {
        setActive((prevState) => !prevState);
    }

    function settings() {
        return (
            <div>
                Hello world
            </div>
        )
    }

    return (
        <div
            onClick={toggleActive}
        >
            <UilCog
                className="settings-icon"
                width={25}
                height={25}
                color={'grey'}
            />

        </div>
    )
}

export default ContextMenuOption