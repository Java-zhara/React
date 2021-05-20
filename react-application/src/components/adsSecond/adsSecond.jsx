import React from 'react';

import './adsSecond.css'

export const AdsSecond = () => {
    return (
        <div className='adsSecond'>
            <h1>Продам картину!</h1>
            <p className='center'>Продаю другие картины выполненные маслом</p>
            <p><span className='bold'>Размер:</span> 40 х 60.</p>
            <p><span className='bold'>Цена:</span> <s>6000</s> <span className='red'><b>5500</b></span> рублей.</p>
            <p className='red'>Принимаю заказы!</p>
            <p><span className='bold'>Имя:</span> Александр</p>
            <p><span className='bold'>Телефон:</span> 555-55-55</p>
            <hr />
        </div>
    );
}