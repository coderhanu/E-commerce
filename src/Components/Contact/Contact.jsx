import React from 'react'
import './Contact.css'


function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "53f0a786-feba-4165-8c27-3344b5c76a6f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message
              <img src="/images/msg-icon.png" alt="" />
            </h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio animi ullam, modi expedita eveniet nesciunt blanditiis itaque soluta exercitationem voluptas.
            </p>
            <ul>
                <li> <img src="/images/mail-icon.png" alt="" /> Contact@Gagan.dev</li>
                <li> <img src="/images/phone-icon.png" alt="" /> +91 999990000</li>
                <li> <img src="/images/location-icon.png" alt="" /> 453 Lala Kila, Delhi <br /> Dl 01 2345 INDIA </li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
        
          <label > Phone Number</label>
          <input type="integer" name='Phone' placeholder='Enter your Phone Number' required/>
          <label >Write Your Message</label>
          <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
          <button type='sumbit' className='btn dark-btn'>Submit now <img src="/images/white-arrow.png" alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
