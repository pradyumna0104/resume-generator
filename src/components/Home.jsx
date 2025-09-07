import React, { useContext, useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { AppContext } from '../contexts/AppContext';
import { TemplateIcon, ColorPaletteIcon, DownloadIcon } from '../assets/icons';
import Header from './Header';

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-center text-white">{children}</h2>
);

const HeroSection = () => {
  const { setPage } = useContext(AppContext);
  const [splineApp, setSplineApp] = useState(null);
  const splineContainerRef = useRef(null);

  const onSplineLoad = (app) => {
    setSplineApp(app);
  };

  useEffect(() => {
    if (!splineApp) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          splineApp.play();
        } else {
          splineApp.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (splineContainerRef.current) {
      observer.observe(splineContainerRef.current);
    }

    return () => {
      if (splineContainerRef.current) {
        observer.unobserve(splineContainerRef.current);
      }
    };
  }, [splineApp]);
  
  return (
    <section className="relative flex items-center min-h-screen px-4 py-24 md:py-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
            Craft Your Future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Stellar Resume</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-neutral-300 max-w-lg">
            Build a professional, standout resume in minutes. Our intuitive builder helps you land your dream job with beautifully designed templates.
          </p>
          <div className="mt-8">
            <button
              onClick={() => setPage('builder')}
              className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Building for Free
            </button>
          </div>
        </div>
        
        <div ref={splineContainerRef} className="w-full aspect-square order-1 lg:order-2 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_80%)]">
            <Spline scene="https://prod.spline.design/Wp8uvAqUFqRQez3J/scene.splinecode" onLoad={onSplineLoad}/>
        </div>
      </div>
    </section>
  );
};


const FeatureCard = ({ icon, title, description }) => (
  <div className="glass-effect p-6 rounded-xl flex flex-col items-center text-center border border-transparent transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 will-change-transform">
    <div className="text-purple-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-neutral-400 text-sm">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section className="py-20 px-4">
    <SectionTitle>Everything You Need to Succeed</SectionTitle>
    <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
      <FeatureCard 
        icon={<TemplateIcon />} 
        title="Stylish Templates" 
        description="Choose from a variety of professional templates designed to impress any recruiter."
      />
      <FeatureCard 
        icon={<ColorPaletteIcon />} 
        title="Easy Customization" 
        description="Change colors, fonts, and layouts with a single click. Make your resume truly yours."
      />
      <FeatureCard 
        icon={<DownloadIcon />} 
        title="Instant PDF Downloads" 
        description="Export your resume as a pixel-perfect PDF, ready to be sent out immediately."
      />
    </div>
  </section>
);

const TemplateShowcase = () => (
  <section className="py-20 px-4 bg-black">
    <SectionTitle>Find Your Perfect Look</SectionTitle>
    <p className="text-center text-neutral-400 mt-4 max-w-2xl mx-auto">Preview a selection of our modern, clean, and creative resume templates.</p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {['Modern', 'Creative', 'Clean'].map(name => (
        <div key={name} className="border border-gray-800 rounded-lg p-2 bg-gray-900/50 transform transition-transform duration-300 hover:scale-105">
          <div className="bg-gray-700 h-96 rounded-md flex items-center justify-center">
            <p className="text-gray-400 text-2xl font-bold">{name} Template</p>
          </div>
        </div>
      ))}
    </div>
    <p className="text-center text-neutral-500 mt-4">...and many more available in the builder!</p>
  </section>
);

const HowItWorksSection = () => (
  <section className="py-20 px-4">
    <SectionTitle>Get Hired in 3 Simple Steps</SectionTitle>
    <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center relative">
      <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gray-700" style={{'background': 'repeating-linear-gradient(90deg, #4a5568 0, #4a5568 6px, transparent 6px, transparent 12px)'}}></div>
      <div className="flex flex-col items-center z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg shadow-purple-500/30">1</div>
        <h3 className="text-xl font-semibold mb-2">Fill Your Details</h3>
        <p className="text-neutral-400">Use our intuitive form to add your experience, skills, and education.</p>
      </div>
      <div className="flex flex-col items-center z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg shadow-purple-500/30">2</div>
        <h3 className="text-xl font-semibold mb-2">Choose a Template</h3>
        <p className="text-neutral-400">Instantly preview your resume in any of our professionally designed templates.</p>
      </div>
      <div className="flex flex-col items-center z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg shadow-purple-500/30">3</div>
        <h3 className="text-xl font-semibold mb-2">Download PDF</h3>
        <p className="text-neutral-400">Export your final resume as a high-quality PDF, ready for job applications.</p>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, name, title, avatar }) => (
    <div className="glass-effect p-6 rounded-xl text-center">
        <img src={avatar} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-purple-400" />
        <p className="text-neutral-300 italic">"{quote}"</p>
        <p className="mt-4 font-bold text-white">{name}</p>
        <p className="text-sm text-purple-400">{title}</p>
    </div>
);

const TestimonialsSection = () => (
    <section className="py-20 px-4 bg-black">
        <SectionTitle>Trusted by Professionals</SectionTitle>
        <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <TestimonialCard 
                quote="Stellar Resume helped me create a professional resume in under 15 minutes. The live preview is a game-changer!"
                name="Sarah J."
                title="UX Designer"
                avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <TestimonialCard 
                quote="I was struggling with formatting my resume for ATS. The 'ATS-Friendly' template worked like a charm and I got more interviews."
                name="Michael B."
                title="Software Engineer"
                avatar="https://i.pravatar.cc/150?u=a042581f4e29026704e"
            />
        </div>
    </section>
);

const CtaSection = () => {
  const { setPage } = useContext(AppContext);
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold text-white">Ready to Land Your Dream Job?</h2>
      <p className="text-neutral-400 mt-4">Start building your professional resume today and take the next step in your career.</p>
      <div className="mt-8">
        <button
          onClick={() => setPage('builder')}
          className="px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Create My Resume Now
        </button>
      </div>
    </section>
  );
};

const NameHighlight = ({ children }) => (
  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
    {children}
  </span>
);

const Footer = () => (
    <footer className="text-center py-8 border-t border-gray-800">
        <p className="text-neutral-500">&copy; {new Date().getFullYear()} Stellar Resume. All rights reserved.</p>
        <p className="text-neutral-500 text-sm mt-4">
            Developed by <NameHighlight>Pradyumna Sahu</NameHighlight>, <NameHighlight>Harish Chandra Mohanta</NameHighlight>, & <NameHighlight>Rahul Dev Nayak</NameHighlight>
        </p>
    </footer>
);

const Home = () => {
  return (
    <div className="bg-black text-slate-200">
      <Header />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-fixed" style={{ backgroundImage: "url('/grid.svg')" }}></div>
        <div className="relative z-10">
          <HeroSection />
          <FeaturesSection />
          {/* <TemplateShowcase /> */}
          <HowItWorksSection />
          <TestimonialsSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;