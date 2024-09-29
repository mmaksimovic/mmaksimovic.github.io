import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    purpose: 'Pozdrav',
    name: '',
    email: '',
    message: '',
    service: '' // New field for the dropdown
  });

  useEffect(() => {
    if (formData.purpose === 'Zakaži besplatnu konsultaciju') {
      setFormData(prev => ({...prev, message: "Zainteresovani smo za vaše usluge! Kontaktirajte nas."}));
    } else {
      setFormData(prev => ({...prev, message: ''}));
    }
  }, [formData.purpose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const response = await fetch("https://formspree.io/f/xwpejpgb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("Hvala na vašoj prijavi!");
        setFormData({purpose: 'Pozdrav', name: '', email: '', message: '', service: ''});
      } else {
        setStatus("Ups! Došlo je do problema prilikom slanja forme.");
      }
    } catch (error) {
      setStatus("Ups! Došlo je do problema prilikom slanja forme.");
    }
  };
      
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({...prev, purpose: value}));
    } else {
      setFormData(prev => ({...prev, [name]: value}));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Kontaktirajte nas</h2>
      
      <div className="flex justify-center gap-[35px]">
        <div className="flex items-center gap-[14px]">
          <input 
            type="checkbox" 
            id="sayHi" 
            name="purpose" 
            value="Pozdrav" 
            checked={formData.purpose === 'Pozdrav'}
            onChange={handleChange}
            className="form-checkbox text-aquamarin-500" 
          />
          <label htmlFor="sayHi" className="text-gray-700 font-medium">Pozdrav</label>
        </div>
        <div className="flex items-center gap-[14px]">
          <input 
            type="checkbox" 
            id="getQuote" 
            name="purpose" 
            value="Zakaži besplatnu konsultaciju" 
            checked={formData.purpose === 'Zakaži besplatnu konsultaciju'}
            onChange={handleChange}
            className="form-checkbox text-aquamarin-500" 
          />
          <label htmlFor="getQuote" className="text-gray-700 font-medium">Zakaži besplatnu konsultaciju</label>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Usluga*</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-aquamarin-500 transition duration-300"
          required
        >
          <option value="">Izaberite uslugu</option>
          <option value="Održavanje društvenih mreža">Održavanje društvenih mreža</option>
          <option value="SEO">SEO</option>
          <option value="Grafički i video dizajn">Grafički i video dizajn</option>
          <option value="Sadržaj za sajt">Sadržaj za sajt</option>
          <option value="Oglašavanje na društvenim mrežama">Oglašavanje na društvenim mrežama</option>
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ime*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Vaše ime"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-aquamarin-500 transition duration-300"
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
          placeholder="vas@email.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-aquamarin-500 transition duration-300"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Poruka*</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Vaša poruka ide ovde..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-aquamarin-500 transition duration-300 h-32 resize-none"
          required
        ></textarea>
      </div>

      <input type="hidden" name="_subject" value={`Nova prijava sa Ključna Reč Digital - ${formData.service}`} />
      <input type="text" name="_gotcha" style={{display: 'none'}} />

      <button type="submit" className="btn-primary w-full py-3 rounded-lg text-white font-medium hover:opacity-90 transition duration-300">Pošalji poruku</button>
      
      {status && <p className="text-center mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;