import React from 'react'
import './Contacts.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'

const Contacts = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6f0f619-5909-4131-967a-d5f2ff3a7f0b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contacts'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt=''/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati beatae dolores possimus dolorum dolor numquam tenetur? Necessitatibus, labore minima? Consequuntur ipsum illo ipsa veniam</p>
            <ul>
                <li><img src={mail_icon} alt=''/> sanjaypandian@gmail.com </li>
                <li><img src={phone_icon} alt=''/> +91 8945-8945-23 </li>
                <li><img src={location_icon} alt=''/> 77 Rykeriand ave, Cambridge <br/> MA 02139, United States </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label> Your Name </label>
                <input type='text' name='name' placeholder='Enter your name' required />
                <label> Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label> Write your message here </label>
                <textarea name="message" rows="6" placeholder='enter your message' required></textarea> 
                <button type='submit' className='btn dark-btn'> Submit <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contacts