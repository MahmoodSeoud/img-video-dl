import React, { useState, useEffect } from 'react'
import { UilFileDownload } from '@iconscout/react-unicons'
import ReactSwitch from 'react-switch';

import './Toolbar.css'

function Toolbar() {
    const [active, setActive] = useState(false);

    // Toggle the active state
    function toggleActive() {
        setActive((prevState) => !prevState);
    }

    return (
        <div className='Toolbar-wrapper'>
            <div>
                <ReactSwitch
                    width={20}
                    height={10}
                    handleDiameter={10}
                    checked={active}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onChange={toggleActive}
                    onColor={'#61DAFB'}
                />
            </div>
            <div>
                <UilFileDownload size="25" color={active ? "#61DAFB" : "grey"} />
            </div>
        </div>
    )
}

export default Toolbar