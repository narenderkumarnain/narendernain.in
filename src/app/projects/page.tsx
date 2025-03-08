import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Projects | Narender Nain',
  description: 'Explore the projects and work of Narender Nain, a software engineer specializing in backend development.',
};

// Updated projects array with company information
const projects = [
  {
    id: 'project-one',
    title: 'Enrich - Credit Risk Analysis',
    description: 'Developed ML models for bank statement analysis, including Hierarchical Transaction Classifiers (92% accuracy) and NER-based Counter-party Extraction. Created annotation tools and automated training infrastructure.',
    technologies: ['Machine Learning', 'Python', 'Fintech'],
    company: 'Awen Finance',
  },
  {
    id: 'project-two',
    title: 'Vision LLM Merchant Onboarding',
    description: 'Built a Vision LLM-based merchant onboarding solution that extracts compliance parameters from shop images/websites. Achieved 98% precision with 50%+ coverage, saving hundreds of operational hours.',
    technologies: ['LLM', 'Computer Vision', 'AWS'],
    company: 'Awen Finance',
  },
  {
    id: 'project-three',
    title: 'Digitization of Piping and Instrumentation Diagrams (P&IDs)',
    description: 'Developed an end-to-end P&ID digitization pipeline using various computer vision techniques to solve challenges in the oil and gas industry, depicting the flow of processes in plants.',
    technologies: ['Computer Vision', 'Machine Learning', 'Digitization'],
    company: 'Siemens',
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-16 py-16 max-w-4xl mx-auto">
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projects
          </h1>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different challenges and solutions in software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card overflow-hidden hover:translate-y-[-4px] transition-all">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h2>
                <p className="text-foreground-muted mb-4 text-sm">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-background-lighter text-foreground-muted text-xs rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
                <p className="text-foreground-muted text-xs">Associated with: {project.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="card p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          Want to collaborate on a project?
        </h2>
        <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects and opportunities. If you have an idea or need technical expertise, feel free to reach out.
        </p>
        <Link 
          href="/contact"
          className="btn btn-primary px-8 py-3 inline-block"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
} 