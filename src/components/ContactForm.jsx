import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    purpose: 'Say Hi',
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (formData.purpose === 'Get a Quote') {
      setFormData(prev => ({...prev, message: "We're interested in your services! Please contact us"}));
    } else {
      setFormData(prev => ({...prev, message: ''}));
    }
  }, [formData.purpose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xwpejpgb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("Thanks for your submission!");
        setFormData({purpose: 'Say Hi', name: '', email: '', message: ''});
      } else {
        setStatus("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({...prev, purpose: checked ? value : (value === 'Say Hi' ? 'Get a Quote' : 'Say Hi')}));
    } else {
      setFormData(prev => ({...prev, [name]: value}));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      
      <div className="flex justify-center gap-[35px]">
        <div className="flex items-center gap-[14px]">
          <input 
            type="checkbox" 
            id="sayHi" 
            name="purpose" 
            value="Say Hi" 
            checked={formData.purpose === 'Say Hi'}
            onChange={handleChange}
            className="form-checkbox text-green-500" 
          />
          <label htmlFor="sayHi" className="text-gray-700 font-medium">Say Hi</label>
        </div>
        <div className="flex items-center gap-[14px]">
          <input 
            type="checkbox" 
            id="getQuote" 
            name="purpose" 
            value="Get a Quote" 
            checked={formData.purpose === 'Get a Quote'}
            onChange={handleChange}
            className="form-checkbox text-green-500" 
          />
          <label htmlFor="getQuote" className="text-gray-700 font-medium">Get a Quote</label>
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-500 transition duration-300"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-500 transition duration-300"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-green-500 transition duration-300 h-32 resize-none"
          required
        ></textarea>
      </div>

      <input type="hidden" name="_subject" value="New submission from Ključna Reč Digital" />
      <input type="text" name="_gotcha" style={{display: 'none'}} />

      <button type="submit" className="btn-primary w-full py-3 rounded-lg text-white font-medium hover:opacity-90 transition duration-300">Send Message</button>
      
      {status && <p className="text-center mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;