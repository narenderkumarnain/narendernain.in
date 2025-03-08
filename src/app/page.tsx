import Image from "next/image";
import Link from "next/link";
import { getLatestPosts } from '@/lib/mdx';
import { format } from 'date-fns';

// Define the projects array at the top of the file
const projects = [
  {
    id: 'project-one',
    title: 'Enrich - Credit Risk Analysis',
    description: 'Developed ML models for bank statement analysis, including Hierarchical Transaction Classifiers (92% accuracy) and NER-based Counter-party Extraction. Created annotation tools and automated training infrastructure.',
    technologies: ['Machine Learning', 'Python', 'Fintech'],
  },
  {
    id: 'project-two',
    title: 'Vision LLM Merchant Onboarding',
    description: 'Built a Vision LLM-based merchant onboarding solution that extracts compliance parameters from shop images/websites. Achieved 98% precision with 50%+ coverage, saving hundreds of operational hours.',
    technologies: ['LLM', 'Computer Vision', 'AWS'],
  },
  {
    id: 'project-three',
    title: 'Digitization of Piping and Instrumentation Diagrams (P&IDs)',
    description: 'Developed an end-to-end P&ID digitization pipeline using various computer vision techniques to solve challenges in the oil and gas industry, depicting the flow of processes in plants.',
    technologies: ['Computer Vision', 'Machine Learning', 'Digitization'],
  },
];

export default async function Home() {
  const latestPosts = await getLatestPosts(2);
  
  return (
    <div className="flex flex-col gap-24 py-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Narender Nain
        </h1>
        <h2 className="text-2xl md:text-3xl text-foreground-muted mb-8">
          Software Engineer
        </h2>
        <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Software Engineer capable of driving projects from inception to scale, 
          <br />
          Gold Medalist with a strong academic background and a passion for solving complex problems through innovative technology.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/projects"
            className="btn btn-primary px-8 py-3"
          >
            View My Work
          </Link>
          <Link 
            href="/contact"
            className="btn btn-secondary px-8 py-3"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            I've worked with a variety of technologies to build scalable and efficient solutions across different domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 hover:translate-y-[-4px] transition-all">
            <div className="mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Backend Development</h3>
            <p className="text-foreground-muted">
              Experienced in designing and implementing scalable backend systems using Golang, TypeScript, and Python. Built robust APIs, microservices, and data processing pipelines.
            </p>
          </div>
          <div className="card p-6 hover:translate-y-[-4px] transition-all">
            <div className="mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Machine Learning</h3>
            <p className="text-foreground-muted">
              Skilled in developing machine learning systems for vision and text analysis, classification, and extraction, along with building training pipelines and deployment infrastructure.
            </p>
          </div>
          <div className="card p-6 hover:translate-y-[-4px] transition-all">
            <div className="mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Cloud & Infrastructure</h3>
            <p className="text-foreground-muted">
              Proficient with AWS services including DynamoDB, ECS, Lambda, SQS, and CloudWatch. Experienced with Docker, Serverless architecture, and building scalable infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Here are some of the key projects I've worked on. Each represents different challenges and innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card overflow-hidden hover:translate-y-[-4px] transition-all">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background-lighter text-foreground-muted text-xs rounded-full">{tech}</span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className="text-primary hover:text-primary-hover">Learn more →</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link href="/projects" className="btn btn-secondary">View All Projects</Link>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Latest Blog Posts
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            I write about software development, machine learning, and my experiences building products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map(post => (
            <div key={post.slug} className="card p-6 hover:translate-y-[-4px] transition-all">
              <p className="text-sm text-foreground-subtle mb-2">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </p>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {post.title}
              </h3>
              <p className="text-foreground-muted mb-4">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-primary hover:text-primary-hover"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link 
            href="/blog"
            className="btn btn-secondary"
          >
            View All Posts
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="card p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          Let's Work Together
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
          I'm always open to new opportunities and collaborations. If you have a project in mind or just want to chat, feel free to reach out.
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
