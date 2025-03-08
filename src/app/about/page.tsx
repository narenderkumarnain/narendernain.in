import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Narender Nain',
  description: 'Learn more about Narender Nain, a software engineer specializing in backend development.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-16 max-w-4xl mx-auto">
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h1>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Software Engineer capable of driving projects from inception to scale, specializing in building robust backend systems and innovative solutions.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="aspect-square relative rounded-lg overflow-hidden border border-border bg-background-lighter">
              {/* Replace with your own image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-muted flex items-center justify-center text-foreground text-6xl font-bold">
                NN
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-foreground-muted leading-relaxed">
              I'm Narender Nain, a software engineer with a passion for building innovative solutions across various domains. 
              I have experience collaborating with teams to develop products from the ground up, leveraging my technical expertise to create impactful systems.
            </p>
            
            <p className="text-lg text-foreground-muted leading-relaxed">
              My technical expertise includes developing machine learning models, creating scalable backend systems, 
              and building robust infrastructure using AWS, Golang, Python, and TypeScript.
            </p>
            
            <p className="text-lg text-foreground-muted leading-relaxed">
              I graduated as a Gold Medalist from NIT Kurukshetra with a B.Tech in Electronics and Communication Engineering. 
              I'm passionate about solving complex problems and creating efficient, scalable systems that make a real impact.
            </p>
          </div>
        </div>
      </section>
      
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {/* Commenting out Flipkart employment for future use */}
          {/* 
          <div className="employment">
            <h3>Software Development Engineer 2 (SDE-2)</h3>
            <p>Flipkart, February 2024 - Present</p>
            <ul>
              <li>Responsibilities in the Seller Platform - Analytics team.</li>
              <li>Worked on various projects to enhance seller experience.</li>
              <li>Collaborated with cross-functional teams to deliver solutions.</li>
            </ul>
          </div>
          */}
          
          <div className="card p-6 hover:translate-y-[-4px] transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h3 className="text-xl font-semibold text-foreground">Founding Engineer</h3>
              <div className="md:ml-auto px-3 py-1 bg-background-lighter text-foreground-muted text-sm rounded-full">
                Apr 2023 - Sept 2024
              </div>
            </div>
            <p className="text-foreground-muted mb-2">Awen (Awen Financial Services Pvt. Ltd.), Gurugram</p>
            <ul className="list-disc list-inside text-foreground-muted space-y-2 pl-4">
              <li>Collaborated directly with founders for ideation and development of various fintech products from scratch.</li>
              <li>Developed ML models for bank statement analysis, including Hierarchical Transaction Classifiers (92% accuracy) and NER-based Counter-party Extraction.</li>
              <li>Built Vision LLM-based merchant onboarding solution with 98% precision, saving hundreds of hours of manual operational effort.</li>
              <li>Created a generic internal API Gateway with configurable rate limiting, authentication, and notification support.</li>
              <li>Designed FinOps, a generic organizational service for tracking financial information across all systems.</li>
            </ul>
          </div>

          <div className="card p-6 hover:translate-y-[-4px] transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h3 className="text-xl font-semibold text-foreground">Engineer</h3>
              <div className="md:ml-auto px-3 py-1 bg-background-lighter text-foreground-muted text-sm rounded-full">
                Aug 2022 - Dec 2022
              </div>
            </div>
            <p className="text-foreground-muted mb-2">Udaan.com (Hiveloop Technology Pvt. Ltd.), Bengaluru</p>
            <ul className="list-disc list-inside text-foreground-muted space-y-2 pl-4">
              <li>Worked as Engineer in Inventory Planning Tech Team of B2B core business.</li>
              <li>Contributed to Replenishment Team's services through code revamp and new feature integrations.</li>
              <li>Built UI consoles for business teams using Kotlin, React, and Azure Cosmos DB.</li>
            </ul>
          </div>

          <div className="card p-6 hover:translate-y-[-4px] transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h3 className="text-xl font-semibold text-foreground">Research Intern</h3>
              <div className="md:ml-auto px-3 py-1 bg-background-lighter text-foreground-muted text-sm rounded-full">
                Jan 2021 - June 2021
              </div>
            </div>
            <p className="text-foreground-muted mb-2">Siemens Technology and Services Pvt. Ltd., Bengaluru</p>
            <ul className="list-disc list-inside text-foreground-muted space-y-2 pl-4">
              <li>Worked on solving assets digitization problems using Computer Vision algorithms and techniques.</li>
              <li>Focused on digitization of Piping and Instrumentation Diagrams (PIDs) and Document Parsing Engine.</li>
              <li>Used PyTorch, Docker, Object Detection (Detectron2), and Self-Supervised Learning.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          Education
        </h2>
        
        <div className="card p-6 hover:translate-y-[-4px] transition-all">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h3 className="text-xl font-semibold text-foreground">Bachelor of Technology in Electronics and Communication Engineering</h3>
            <div className="md:ml-auto px-3 py-1 bg-background-lighter text-foreground-muted text-sm rounded-full">
              July 2018 - June 2022
            </div>
          </div>
          <p className="text-foreground-muted mb-2">National Institute of Technology, Kurukshetra</p>
          <ul className="list-disc list-inside text-foreground-muted space-y-2 pl-4">
            <li>Graduated with a CGPA of 9.60 (Gold Medalist)</li>
            <li>Semester Topper (2nd, 3rd), Institute Merit Scholarship (2019, 2020)</li>
            <li>Specialized in Electronics and Communication Engineering</li>
          </ul>
        </div>
      </section>
      
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 hover:translate-y-[-4px] transition-all">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">Golang</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">Python</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">C++</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">Kotlin</span>
            </div>
          </div>
          
          <div className="card p-6 hover:translate-y-[-4px] transition-all">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">AWS</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">Docker</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">Serverless</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">DynamoDB</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">TensorFlow</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">PyTorch</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">LLMs</span>
              <span className="px-3 py-1 bg-background-lighter text-foreground-muted rounded-full">React</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="card p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          Let's Connect
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Link 
          href="/contact"
          className="btn btn-primary px-8 py-3 inline-block"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
} 