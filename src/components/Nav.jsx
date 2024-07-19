import React from 'react';

export default function Nav() {
    return (
            <nav>
                <div className='nav-ctrl-btns-container'>
                    <div className='nav-ctrl-round delete'></div>
                    <div className='nav-ctrl-round min'></div>
                    <div className='nav-ctrl-round max'></div>
                </div>
            </nav>
        )
}