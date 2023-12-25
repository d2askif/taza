import React from 'react'
import './style.scss'

export default function index() {
    return (
        <div className='cities'>
            <p className='cities-header'>ኣስተናጋጅ በ እነዚህ ከተማዎች ይፈልጉ</p>
            <div className='cities-find'>
                <div className='cities-find-img'>
                    <img src={require('./goteborg.jpeg')}></img>
                    <p>Gothenburg</p>
                </div>
                <div className='cities-find-img'>
                    <img src={require('./linkoping.jpeg')}></img>
                    <p>London</p>
                </div>
                <div className='cities-find-img'>
                    <img src={require('./malmojpeg.jpeg')}></img>
                    <p>Frankfurt</p>
                </div>
                <div className='cities-find-img'>
                    <img src={require('./stockholm.jpeg')}></img>
                    <p>Copenhagen</p>

                </div>
                <div className='cities-find-img'>
                    <img src={require('./norrkoping.jpeg')}></img>
                    <p>Zurick</p>
                </div>
            </div>
        </div>
    )
}
