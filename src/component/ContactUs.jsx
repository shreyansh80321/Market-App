import React, { useState } from 'react'
import contactStyles from '../assets/dummyStyles'
import { FaCheck } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  const [showToast, setShowToast] = useState(false);
  const whatsappNumber = '7905448686';
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev=>({...prev,[name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    if (!name || !email || !phone || !subject || !message) {
      alert('Please fill all fields')
    }

    const text =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Subject: ${subject}\n` +
      `Message: ${message}`;
    const url = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  }
  return (
    <div className={contactStyles.pageContainer}>
      {showToast && (
        <div className='toast-notification'>
          <div className={contactStyles.toast}>
            <FaCheck className='mr-2' />
            Message opened in WhatsApp!
          </div>
        </div>
      )}
      <div className={contactStyles.centeredContainer}>
        <div className={contactStyles.headingContainer}>
          <h1 className={contactStyles.heading}>
            Contact FreshGrocers
          </h1>
          
        </div>
      </div>
    </div>
  )
}

export default ContactUs