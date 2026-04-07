import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, MapPin, Sparkles, Lightbulb, Users, Code, BrainCircuit, Target, Award, ExternalLink } from 'lucide-react'

// ...
// Hero Section content up to Scroll Down SVG
// ...

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full pb-10">
      
      {/* Hero Container */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-6 lg:pt-16">
        
        {/* Left Column: Text & Content */}
        <div className="flex flex-col items-start text-left w-full lg:w-[55%] space-y-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide w-fit">
            <Sparkles className="w-4 h-4" />
            <span>Hello I am</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            DJOUMESSI
            <span className="block text-primary">Ronsard Carnegie</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground font-body text-base md:text-lg">
            <span className="font-medium text-foreground">AI Engineer & Full Stack Developer</span>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary/40"></div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Cameroon, Buea</span>
            </div>
          </div>

          <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Transforming digital visions into reality with innovative and custom-made solutions. Expertise in building AI models, beautiful Frontend, and scalable software architecture.
          </p>

          <div className="pt-2">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-[2rem] transition-all duration-300 bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Statistics Block */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-border/40 w-full mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">20+</span>
              <span className="font-body text-sm text-muted-foreground font-medium">Projects Completed</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">98%</span>
              <span className="font-body text-sm text-muted-foreground font-medium">Client Satisfaction</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">7+</span>
              <span className="font-body text-sm text-muted-foreground font-medium">Years Experience</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end relative mb-12 lg:mb-0">
          <div className="relative w-full max-w-[420px] lg:max-w-full h-[500px] md:h-[600px] lg:h-[680px] rounded-[3rem] overflow-hidden border border-border/40 shadow-2xl group">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            <Image 
              src="/assets/r-home-landing.jpg" 
              alt="Ronsard Carnegie"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll Down SVG */}
      <div className="w-full flex justify-center pt-24 pb-8">
        <div className="flex flex-col items-center gap-2 animate-bounce cursor-pointer text-muted-foreground hover:text-primary transition-colors">
          <span className="font-body text-xs font-semibold tracking-widest uppercase">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>

      {/* Marquee Section */}
      <section className="w-full py-16 overflow-hidden flex flex-col items-center">
        <p className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-8 font-medium">Trusted by</p>
        <div className="relative flex overflow-hidden w-full max-w-5xl [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] group">
            {/* Array doubled for endless loop visual buffer */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-16 px-8 items-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div className="relative w-32 h-12">
                  <Image src="/trusted companies/Nextise-Centered (1).png" alt="Nextise" fill className="object-contain" />
                </div>
                <div className="relative w-32 h-12">
                  <Image src="/trusted companies/kodschul-wordmark.png" alt="Kodschul" fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-24 flex flex-col md:flex-row items-start justify-between gap-12 max-w-6xl mx-auto border-t border-border/40">
        <div className="md:w-1/3">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
        </div>
        <div className="md:w-2/3 flex flex-col gap-6 font-body text-lg text-muted-foreground leading-relaxed">
          <p className="text-2xl text-foreground font-heading">AI Engineer & Full Stack Developer</p>
          <p>
            Passionate about technological innovation, I transform complex challenges into elegant and high-performing solutions. My approach combines cutting-edge technical expertise with strategic vision to create exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="w-full py-24 max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card flex flex-col border border-border/40 p-8 rounded-3xl hover:bg-muted/10 transition-colors duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 mb-8 transition-transform group-hover:scale-110">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Innovation</h3>
            <p className="font-body text-muted-foreground leading-relaxed">Cutting-edge technologies and avant-garde solutions</p>
          </div>
          
          <div className="bg-card flex flex-col border border-border/40 p-8 rounded-3xl hover:bg-muted/10 transition-colors duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 mb-8 transition-transform group-hover:scale-110">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Collaboration</h3>
            <p className="font-body text-muted-foreground leading-relaxed">Agile approach and transparent communication</p>
          </div>

          <div className="bg-card flex flex-col border border-border/40 p-8 rounded-3xl hover:bg-muted/10 transition-colors duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 mb-8 transition-transform group-hover:scale-110">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Development</h3>
            <p className="font-body text-muted-foreground leading-relaxed">Modern web applications with best practices</p>
          </div>

          <div className="bg-card flex flex-col border border-border/40 p-8 rounded-3xl hover:bg-muted/10 transition-colors duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 mb-8 transition-transform group-hover:scale-110">
              <BrainCircuit className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">AI & ML</h3>
            <p className="font-body text-muted-foreground leading-relaxed">Intelligent systems and automation</p>
          </div>

          <div className="bg-card flex flex-col border border-border/40 p-8 rounded-3xl hover:bg-muted/10 transition-colors duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 mb-8 transition-transform group-hover:scale-110">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Strategy</h3>
            <p className="font-body text-muted-foreground leading-relaxed">Digital transformation consulting</p>
          </div>

          <div className="bg-card flex flex-col border border-border/40 p-8 rounded-3xl hover:bg-muted/10 transition-colors duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 mb-8 transition-transform group-hover:scale-110">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Excellence</h3>
            <p className="font-body text-muted-foreground leading-relaxed">Quality-driven delivery and support</p>
          </div>
        </div>
      </section>

      {/* Tools & Tech Grid */}
      <section className="w-full py-24 flex flex-col items-center max-w-5xl mx-auto border-t border-border/40">
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-center mb-12">Tools & Technology</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Go', 'Node.js', 'Python', 'React', 'Vue.js', 'PostgreSQL', 'MongoDB', 'Redis'].map(tech => (
            <div 
              key={tech} 
              className="px-8 py-4 rounded-full border border-border/50 bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 text-foreground font-body text-base md:text-lg font-medium cursor-default shadow-sm hover:shadow-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* What I Do / Services */}
      <section className="w-full py-24 max-w-6xl mx-auto border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">What I Do</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
          </div>
          <p className="text-muted-foreground font-body max-w-md text-lg">
            Delivering end-to-end technological solutions designed to scale, perform, and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="group relative p-8 rounded-[2rem] bg-card border border-border/40 hover:bg-muted/10 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl font-heading font-bold text-muted/10 group-hover:text-primary/10 transition-colors pointer-events-none">01</div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4 relative z-10">Web Development</h3>
            <p className="text-muted-foreground font-body relative z-10 leading-relaxed">
               Building scalable, responsive, and high-performance web applications tailored to your specific business needs using modern framework architectures.
            </p>
          </div>
          {/* Service 2 */}
          <div className="group relative p-8 rounded-[2rem] bg-card border border-border/40 hover:bg-muted/10 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl font-heading font-bold text-muted/10 group-hover:text-primary/10 transition-colors pointer-events-none">02</div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4 relative z-10">Mobile Apps</h3>
            <p className="text-muted-foreground font-body relative z-10 leading-relaxed">
               Crafting seamless cross-platform mobile experiences that offer native-like performance and highly intuitive user interfaces.
            </p>
          </div>
          {/* Service 3 */}
          <div className="group relative p-8 rounded-[2rem] bg-card border border-border/40 hover:bg-muted/10 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl font-heading font-bold text-muted/10 group-hover:text-primary/10 transition-colors pointer-events-none">03</div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4 relative z-10">AI Solutions</h3>
            <p className="text-muted-foreground font-body relative z-10 leading-relaxed">
               Integration of artificial intelligence and machine learning into your products. Automation, predictive analytics, and intelligent systems.
            </p>
          </div>
          {/* Service 4 */}
          <div className="group relative p-8 rounded-[2rem] bg-card border border-border/40 hover:bg-muted/10 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl font-heading font-bold text-muted/10 group-hover:text-primary/10 transition-colors pointer-events-none">04</div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4 relative z-10">DevOps & Automation</h3>
            <p className="text-muted-foreground font-body relative z-10 leading-relaxed">
               CI/CD pipeline setup, infrastructure as code, containerization with Docker/Kubernetes, and monitoring solutions for optimal performance.
            </p>
          </div>
          {/* Service 5 */}
          <div className="group relative p-8 rounded-[2rem] bg-card border border-border/40 hover:bg-muted/10 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-6xl font-heading font-bold text-muted/10 group-hover:text-primary/10 transition-colors pointer-events-none">05</div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4 relative z-10">Facebook Ads</h3>
            <p className="text-muted-foreground font-body relative z-10 leading-relaxed">
               Targeted data-driven marketing campaigns designed to maximize ROI, generate qualified leads, and aggressively expand your digital footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-24 max-w-6xl mx-auto border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mt-6"></div>
          </div>
          <Link href="/projects" className="px-6 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold text-sm tracking-wide">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1: Labreach */}
          <div className="flex flex-col rounded-[2.5rem] border border-border/40 bg-card overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 p-8 md:p-10 gap-6 group">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">Labreach</h3>
              <div className="flex gap-3">
                <Link href="#" className="p-3 rounded-full bg-muted/50 hover:text-primary transition-colors hover:bg-primary/10" aria-label="Demo"><ExternalLink className="w-5 h-5" /></Link>
              </div>
            </div>
            <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
              <p><strong className="text-foreground">The Problem:</strong> Disconnected laboratory ecosystems struggling with siloed data communication and delayed crucial research metrics.</p>
              <p><strong className="text-foreground">Solution & Role:</strong> Lead Full-Stack Engineer. Architected a centralized data-bridging platform enabling real-time laboratory equipment sync over remote APIS.</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 mt-auto">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">React</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">Node.js</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">AWS</span>
            </div>
          </div>

          {/* Project 2: Tii */}
          <div className="flex flex-col rounded-[2.5rem] border border-border/40 bg-card overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 p-8 md:p-10 gap-6 group">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">Tii</h3>
              <div className="flex gap-3">
                <Link href="#" className="p-3 rounded-full bg-muted/50 hover:text-primary transition-colors hover:bg-primary/10"><ExternalLink className="w-5 h-5" /></Link>
              </div>
            </div>
            <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
              <p><strong className="text-foreground">The Problem:</strong> Highly inefficient route planning and localized delivery tracking constraints causing missed logistics quotas.</p>
              <p><strong className="text-foreground">Solution & Role:</strong> AI Engineer. Implemented sophisticated predictive ML models mapping ultra-efficient delivery corridors for fleet logistics.</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 mt-auto">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">Python</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">TensorFlow</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">Docker</span>
            </div>
          </div>
          
          {/* Project 3: Aardis */}
          <div className="flex flex-col rounded-[2.5rem] border border-border/40 bg-card overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 p-8 md:p-10 gap-6 group">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">Aardis</h3>
              <div className="flex gap-3">
                <Link href="#" className="p-3 rounded-full bg-muted/50 hover:text-primary transition-colors hover:bg-primary/10"><ExternalLink className="w-5 h-5" /></Link>
              </div>
            </div>
            <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
              <p><strong className="text-foreground">The Problem:</strong> Fragmented educational tracking causing delays in student performance intervention and staff disorganization.</p>
              <p><strong className="text-foreground">Solution & Role:</strong> Backend Architect. Developed an intuitive dashboard unifying student metrics safely via strict microservices logic.</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 mt-auto">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">Go</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">PostgreSQL</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">Vue.js</span>
            </div>
          </div>

          {/* Project 4: Kodschull */}
          <div className="flex flex-col rounded-[2.5rem] border border-border/40 bg-card overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 p-8 md:p-10 gap-6 group">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">Kodschull</h3>
              <div className="flex gap-3">
                <Link href="#" className="p-3 rounded-full bg-muted/50 hover:text-primary transition-colors hover:bg-primary/10"><ExternalLink className="w-5 h-5" /></Link>
              </div>
            </div>
            <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
              <p><strong className="text-foreground">The Problem:</strong> Lack of interactive, scalable coding environments natively accessible across specialized corporate networks.</p>
              <p><strong className="text-foreground">Solution & Role:</strong> Full Stack Developer. Spearheaded the EdTech curriculum hub deploying isolated cloud coding environments.</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 mt-auto">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">Kubernetes</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">React</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">Terraform</span>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-24 max-w-6xl mx-auto border-t border-border/40">
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "John N.", title: "Tech Startup Founder", text: "Ronsard delivered a complex AI-driven application ahead of schedule. The code was pristine and the architecture scales effortlessly. Highly recommended!" },
            { name: "Sarah J.", title: "Product Manager", text: "Exceptional frontend skills. Ronsard took our messy wireframes and turned them into a gorgeous, fluid React web application." },
            { name: "Michael C.", title: "Director of Engineering", text: "An absolute master of DevOps. He fully containerized our monolithic backend and reduced our deployment pipeline times significantly." }
          ].map((review, i) => (
            <div key={i} className="flex flex-col p-8 rounded-[2.5rem] border border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, star) => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
              </div>
              <p className="font-body text-muted-foreground italic text-lg leading-relaxed mb-8 grow">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{review.name.charAt(0)}</div>
                <div>
                  <p className="font-heading font-bold text-foreground text-lg">{review.name}</p>
                  <p className="text-sm font-body text-muted-foreground mt-0.5">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Let's Connect */}
      <section className="w-full py-32 max-w-4xl mx-auto text-center px-4 relative mt-16">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
        <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-8">Let&apos;s Connect</h2>
        <p className="font-body text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to scale your next big idea? Schedule a call with me to discuss automation, AI integrations, or custom high-performance application development.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_60px_-15px_rgba(var(--primary),0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Schedule A Call
        </Link>
      </section>

    </div>
  )
}

export default HomePage
