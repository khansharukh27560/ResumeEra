import React from 'react';
import '../css/FAQSection.css';

const faqs = [
    {
      question: 'What is ResumeEra?',
      answer:
        'ResumeEra is more than just a resume builder — it’s your career partner. Whether you’re just stepping into the job market or climbing the professional ladder, ResumeEra helps you create polished, professional resumes completely free of cost.'
    },
    {
      question: 'Is ResumeEra completely free?',
      answer:
        'Yes, ResumeEra is absolutely free to use. There are no hidden charges, no premium traps. You can create your resume and download it as a high-quality PDF without spending a single penny.'
    },
    {
      question: 'Do I need to sign up to use ResumeEra?',
      answer:
        'No registration is required to get started. You can jump right in and start building your resume. However, if you’d like to save your progress and come back to edit later, signing up makes that easy.'
    },
    {
      question: 'What kind of resume templates are available?',
      answer:
        'ResumeEra offers a curated collection of clean, modern, and industry-approved resume templates. Whether you prefer minimalist designs or structured formats, there’s something here for every role and industry.'
    },
    {
      question: 'Are the resumes from ResumeEra ATS-friendly?',
      answer:
        'Definitely. All our templates are built to be ATS (Applicant Tracking System) compatible, ensuring your resume passes automated scans and reaches real human eyes.'
    }
  ];
  

const FAQSection = () => {
  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
