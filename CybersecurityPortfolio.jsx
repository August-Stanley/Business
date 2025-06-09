import React, { useState, useEffect } from "react";
import { FaLinkedin, FaLock } from "react-icons/fa";
import { SiProtonmail } from "react-icons/si";

const skills = [
  'Network Security', 'Threat Hunting', 'SIEM', 'Penetration Testing',
  'Firewalls', 'SOC Monitoring', 'Incident Response', 'Python', 'Cloud Security', 'Red Teaming'
];

const certifications = [
  'OSCP', 'CompTIA Security+', 'CISSP', 'AWS Certified Security – Specialty'
];

const projects = [
  {
    title: "Intrusion Detection Dashboard",
    description: "Real-time Splunk dashboard for monitoring security events.",
  },
  {
    title: "Phishing Simulation Campaign",
    description: "Deployed phishing tests to improve security awareness.",
  },
  {
    title: "Cloud Hardening Script",
    description: "Automated AWS environment audit using Terraform and AWS CLI.",
  },
  {
    title: "Ransomware Behavior Sandbox",
    description: "Isolated environment to reverse engineer ransomware.",
  },
  {
    title: "Zero Trust Network Lab",
    description: "Built a zero-trust model in a virtual environment using microsegmentation.",
  },
  {
    title: "SIEM Alert Correlator",
    description: "Python tool to analyze and correlate Splunk alerts for triage automation.",
  },
];

export default function CybersecurityPortfolio() {
  const [displayText, setDisplayText] = useState('');
  const title = "Cyber Guardian";

  // Typewriter effect for Hero
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(title.slice(0, i));
      i++;
      if (i > title.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400">{displayText}<span className="animate-pulse">|</span></h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Protecting digital landscapes with precision, integrity, and passion.
        </p>
      </section>

      {/* About Section */}
      <section className="px-6 py-10 bg-gray-900">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 max-w-3xl">
          I’m a cybersecurity analyst with a background in network defense, threat intelligence, and ethical hacking. I specialize in identifying vulnerabilities before they become breaches.
        </p>
      </section>

      {/* Skills */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-semibold text-purple-400 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {skills.map(skill => (
            <div key={skill} className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition relative group">
              <p className="text-green-300 font-medium">{skill}</p>
              <span className="absolute bottom-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                {`Expertise in ${skill}`}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 py-10 bg-gray-900">
        <h2 className="text-3xl font-semibold text-pink-400 mb-6">Certifications</h2>
        <div className="flex flex-wrap gap-4">
          {certifications.map(cert => (
            <div key={cert} className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full shadow hover:bg-gray-700">
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-semibold text-teal-400 mb-6">Projects</h2>
        <ul className="space-y-6">
          {projects.map((project, i) => (
            <li key={i} className="bg-[#111827] border border-gray-700 p-4 rounded-xl shadow-md hover:shadow-lg hover:border-teal-400 transition">
              <div className="font-mono text-green-400 text-lg">> {project.title}</div>
              <p className="text-gray-300 mt-1">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Contact</h2>
        <p className="text-gray-300">
          Reach out via ProtonMail:{" "}
          <a href="mailto:yourname@protonmail.com" className="text-blue-400 underline">
            yourname@protonmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 flex items-center justify-center gap-6 border-t border-gray-700">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://proton.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300"
        >
          <SiProtonmail size={28} />
        </a>
      </footer>
    </div>
  );
}
