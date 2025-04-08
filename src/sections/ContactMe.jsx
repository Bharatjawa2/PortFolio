import React, { useState } from 'react';
import { ABOUT_ME } from '../utils/data';
import ContactInfoCard from '../components/ContactInfoCard';
import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const { fullname, email, message } = e.target;

    // Basic validation
    if (!fullname.value || !email.value || !message.value) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_er74zk2',         // ✅ Your service ID as string
        'template_rhvl2hn',        // ✅ Your template ID as string
        e.target,
        'TSx4KT9a46NeZPwnL'        // ✅ Your public key as string
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        () => {
          alert('Failed to send message.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 text-center">
            Contact Me
          </h4>

          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on experience in modern technologies, tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          {/* Contact Info Cards */}
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>

          {/* Contact Form */}
          <div>
            <h5 className="md:hidden text-[#7a4b18] text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>
            <form className="flex flex-col" onSubmit={sendEmail}>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="bg-orange-50 rounded-2xl border border-orange-100 px-4 py-3 placeholder:text-sm mb-5 focus:outline-none focus:border-[#d68a39]"
                autoComplete="off"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="bg-orange-50 rounded-2xl border border-orange-100 px-4 py-3 placeholder:text-sm mb-5 focus:outline-none focus:border-[#d68a39]"
                autoComplete="off"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="bg-orange-50 rounded-2xl border border-orange-100 px-4 py-3 placeholder:text-sm mb-5 focus:outline-none focus:border-[#d68a39]"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={loading}
                className={`h-12 px-6 text-sm md:text-base font-medium text-white bg-gradient-to-r from-amber-700 to-amber-900 rounded-full transition-all duration-300 ${
                  loading ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 hover:shadow-md'
                }`}
              >
                {loading ? 'Sending...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
