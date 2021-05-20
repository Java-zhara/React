import React from 'react';

import nhl from './assest/nhlImg.jpg'

export class Img extends React.Component {
    render() {
        return (
            <div className='img'>
                <img src={nhl} alt='nhl' />
                <div>NHL FOREVER</div>
            </div>
        )
    };
}