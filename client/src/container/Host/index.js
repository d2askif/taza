import React from 'react'
import './style.scss'
export default function index() {
    return (
        <div className='host' >
            <div className='host-image'>
                <img src={require('./testimg.jpeg')} style={{ borderRadius: 16 }}></img>
            </div>
            <div className='host-detail'>
                <p className='host-detail-header'>አድራሻ</p>
                <p className='host-detail-detail'>Londone, westfiled </p>

                {/* <p className='host-detail-header'>ስለ አስተናጋጅ:</p>
        <p className='host-detail-detail'>Cupidatat proident amet Lorem cillum qui sit sunt. Ullamco fugiat dolore tempor nulla elit fugiat proident incididunt est ea. Duis cupidatat ad sit duis consequat veniam proident anim consectetur duis fugiat qui Lorem. </p>
         */}<p className='host-detail-header'>Accomedation offer</p>
                <p className='host-detail-detail'> ምኝታ ክፍል, ሶፋ, የሚነፋ/ስፖንጅ ፍራሽ</p>
                <p className='host-detail-header'>Availability:</p>
                <p className='host-detail-detail'>ሰው እቀበላለሁ</p>
                <p className='host-detail-header'>House Rules</p>
                <p className='host-detail-detail'>ማጨስ አይቻልም</p>
                {/* <p className='host-detail-header'>Guest Interaction</p>
        <p className='host-detail-detail'>ከተማውን ኣስጎበኛለሁ መኪና አለኝ ቅዳሜና እሁድ ቦታዎችን ማሳየት እችላለሁ</p>
        <p>Reviews and References:</p> */}
            </div>



        </div>
    )
}
