'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Rate limiting constants
  const RATE_LIMIT_MINUTES = 5;
  const RATE_LIMIT_KEY = 'lastSubmission';
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset states
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');
    
    // Check rate limit
    const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
    const now = new Date().getTime();
    
    if (lastSubmission) {
      const timeElapsed = now - parseInt(lastSubmission);
      const minutesElapsed = timeElapsed / (1000 * 60);
      
      if (minutesElapsed < RATE_LIMIT_MINUTES) {
        setSubmitError(`Please wait ${Math.ceil(RATE_LIMIT_MINUTES - minutesElapsed)} minutes before sending another message.`);
        setIsSubmitting(false);
        return;
      }
    }
    
    const formData = new FormData(e.currentTarget);
    
    // Create Discord message format
    const message = {
      embeds: [{
        title: "New Contact Form Submission",
        description: "From https://hadi.cherkaoui.ch",
        color: 3447003, // Blue color
        fields: [
          {
            name: "Name",
            value: formData.get('name') as string,
            inline: true
          },
          {
            name: "Email",
            value: formData.get('email') as string,
            inline: true
          },
          {
            name: "Message",
            value: formData.get('message') as string
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Portfolio Contact Form"
        }
      }]
    };

    try {
      // Get webhook URL from environment variable (passed through Next.js)
      const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error('Discord webhook URL not configured');
      }
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
      });
      
      if (response.ok) {
        // Store submission time for rate limiting
        localStorage.setItem(RATE_LIMIT_KEY, now.toString());
        setSubmitSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitError('Error sending message. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full mb-4">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-[var(--primary-color)]">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
            Interested in collaboration? Let&apos;s connect! Feel free to reach out if you have any questions or would like to work together on a project.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Contact form */}
          <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
            <div className="bg-[var(--card-bg)] p-8 rounded-xl shadow-lg border border-[var(--foreground)]/5 hover-lift">
              <h3 className="text-xl font-bold mb-6 text-[var(--primary-color)]">Send a Message</h3>
              
              <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[var(--darker-bg)] border border-[var(--foreground)]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[var(--darker-bg)] border border-[var(--foreground)]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--darker-bg)] border border-[var(--foreground)]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>
                
                {submitError && (
                  <div className="text-red-500 text-sm p-2 bg-red-100/10 rounded-lg">
                    {submitError}
                  </div>
                )}
                
                {submitSuccess && (
                  <div className="text-green-500 text-sm p-2 bg-green-100/10 rounded-lg">
                    Message sent successfully!
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-medium rounded-lg transition-all duration-300 hover-lift hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
            <div className="space-y-8">
              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--foreground)]/5 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:contact@hide.cherkaoui.ch" 
                      className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors"
                    >
                      contact@hide.cherkaoui.ch
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--foreground)]/5 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-[var(--secondary-color)]/10 flex items-center justify-center text-[var(--secondary-color)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-[var(--foreground)]/70">
                      Zurich, Switzerland
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social links */}
              <div className="bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--foreground)]/5 hover-lift">
                <h3 className="text-xl font-bold mb-6 text-[var(--foreground)]">Connect With Me</h3>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/HadiCherkaoui" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-4 py-3 bg-[var(--darker-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://gitlab.cherkaoui.ch/HadiCherkaoui" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-4 py-3 bg-[var(--darker-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024"/></svg>
                    <span>GitLab</span>
                  </a>
                  
                  <a 
                    href="https://cherkaoui.ch" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-4 py-3 bg-[var(--darker-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>PC Services</span>
                  </a>
                  
                  <a 
                    href="https://docs.cherkaoui.ch" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 px-4 py-3 bg-[var(--darker-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                    <span>Documentation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
