"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Sending...');

    const data = {
      name,
      email,
      subject,
      message,
      access_key: 'afe67161-27d2-4c2b-80ec-1a250fc6da53' 
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.error("Error from Web3Forms:", result);
        setStatus(result.message || 'Oops! There was a problem.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('Oops! There was a problem submitting your form.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="bg-card"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="bg-card"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="bg-card"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        required
        className="bg-card min-h-[120px]"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === 'Sending...'}>
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </Button>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </div>
    </form>
  );
}