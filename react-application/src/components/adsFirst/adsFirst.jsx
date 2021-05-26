import React from 'react';

import './adsFirst.css'

export class AdsFirst extends React.Component {
    render() {
        return (
            <div className='adsFirst'>
                <h1>14, 15, 16 апреля! Праздничное открытие! Магазин промтоваров!</h1>
                <p className='bold'>В честь праздника:</p>
                <p><span className='bold'><u>При покупке от 500 рублей</u> -</span> гарантированный <span className='bold'>ПОДАРОК</span></p>
                <p><span className='bold'><u>Главный подарок</u> - СЕРТИФИКАТ</span> на покупки <span className='red'><b>30 000</b></span> рублей</p>
                <p className='red'>Обладатель определится в пятницу.</p>
                <hr />
            </div>
        )
    };
}