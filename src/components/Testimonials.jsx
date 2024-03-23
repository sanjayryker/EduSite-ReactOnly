import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'

const Testimonials = () => {

    let tx = 0
    const slider = useRef()

    const moveForward = () =>{
        if(tx > -50){
            tx = tx-25 
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const moveBackward = () =>{
        if(tx < 0){
            tx = tx+25 
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials '>
        <img src={next_icon} alt='' className='next-btn' onClick={moveForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={moveBackward}/>
        <div className="slider"> 
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt=''/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim assumenda officia consequuntur, quaerat ea corrupti alias dolores eveniet adipisci cupiditate!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt=''/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim assumenda officia consequuntur, quaerat ea corrupti alias dolores eveniet adipisci cupiditate!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt=''/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim assumenda officia consequuntur, quaerat ea corrupti alias dolores eveniet adipisci cupiditate!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt=''/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,India</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim assumenda officia consequuntur, quaerat ea corrupti alias dolores eveniet adipisci cupiditate!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials