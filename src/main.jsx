import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const contactForm = document.getElementById('contactForm');

if(contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
      await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        message: message,
        timestamp: serverTimestamp()
      });
      
      alert("Pesan berhasil terkirim!");
      contactForm.reset();
      
    } catch (error) {
      console.error("Error: ", error);
      alert("Terjadi kesalahan.");
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
