// import React, { useContext, useState } from 'react';
// import { AppContext } from '../contexts/AppContext';
// import { 
//     DownloadIcon, LogoIcon, PlusIcon, TrashIcon, ChevronDownIcon, LinkIcon, 
//     PhotoIcon, BriefcaseIcon, AcademicCapIcon, WrenchScrewdriverIcon,
//     ProjectIcon, LanguageIcon, TrophyIcon
// } from '../assets/icons';

// // --- Child Components (now defined inside Builder.jsx for stability) ---

// const TemplateSwitcher = () => {
//   const { template, setTemplate } = useContext(AppContext);
//   const templates = [
//     { id: 'modern', name: 'Modern' }, { id: 'clean', name: 'Clean' }, { id: 'creative', name: 'Creative' },
//     { id: 'minimalist', name: 'Minimalist' }, { id: 'corporate', name: 'Corporate' }, { id: 'ats', name: 'ATS-Friendly' },
//   ];
//   return (
//     <div className="flex items-center gap-2 bg-gray-900/50 p-1 rounded-lg flex-wrap">
//       {templates.map((t) => (
//         <button key={t.id} onClick={() => setTemplate(t.id)}
//           className={`px-3 py-1 text-sm rounded-md transition-colors ${template === t.id ? 'bg-indigo-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>
//           {t.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// const ColorSwitcher = () => {
//   const { colorScheme, setColorScheme } = useContext(AppContext);
//   const colors = [
//     { id: 'default', name: 'Indigo', hex: '#6366F1' }, { id: 'pink', name: 'Pink', hex: '#EC4899' },
//     { id: 'blue', name: 'Blue', hex: '#3B82F6' }, { id: 'green', name: 'Green', hex: '#22C55E' },
//   ];
//   return (
//     <div className="flex items-center gap-2">
//       {colors.map((color) => (
//         <button key={color.id} onClick={() => setColorScheme(color.id)}
//           className={`w-6 h-6 rounded-full focus:outline-none transition-transform transform hover:scale-110 ${colorScheme === color.id ? 'ring-2 ring-offset-2 ring-offset-gray-800 ring-white' : ''}`}
//           style={{ backgroundColor: color.hex }} title={color.name}
//         />
//       ))}
//     </div>
//   );
// };

// const ResumePreview = () => {
//   const { resumeData, template, colorScheme } = useContext(AppContext);
//   const getTemplate = () => {
//     const props = { data: resumeData, colorScheme };
//     // We must import templates here as they are separate files.
//     const ModernTemplate = React.lazy(() => import('./templates/ModernTemplate'));
//     const CleanTemplate = React.lazy(() => import('./templates/CleanTemplate'));
//     const AtsFriendlyTemplate = React.lazy(() => import('./templates/AtsFriendlyTemplate'));
//     const CreativeTemplate = React.lazy(() => import('./templates/CreativeTemplate'));
//     const MinimalistTemplate = React.lazy(() => import('./templates/MinimalistTemplate'));
//     const CorporateTemplate = React.lazy(() => import('./templates/CorporateTemplate'));
    
//     switch (template) {
//       case 'modern': return <ModernTemplate {...props} />;
//       case 'clean': return <CleanTemplate {...props} />;
//       case 'ats': return <AtsFriendlyTemplate {...props} />;
//       case 'creative': return <CreativeTemplate {...props} />;
//       case 'minimalist': return <MinimalistTemplate {...props} />;
//       case 'corporate': return <CorporateTemplate {...props} />;
//       default: return <ModernTemplate {...props} />;
//     }
//   };
//   return (
//     <div id="resume-preview-container" className="bg-white rounded-lg shadow-2xl p-2 w-full h-full">
//       <div id="resume-preview" className="w-full h-full overflow-auto">
//         <React.Suspense fallback={<div className="text-center p-8">Loading Template...</div>}>
//             {getTemplate()}
//         </React.Suspense>
//       </div>
//     </div>
//   );
// };


// const Input = ({ label, value, onChange, name, type = 'text', placeholder }) => (
//   <div>
//     <label className="text-sm text-gray-400">{label}</label>
//     <input type={type} name={name} value={value || ''} onChange={onChange} placeholder={placeholder}
//       className="w-full px-3 py-2 mt-1 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   </div>
// );

// const Textarea = ({ label, value, onChange, name, placeholder }) => (
//   <div>
//     <label className="text-sm text-gray-400">{label}</label>
//     <textarea name={name} value={value || ''} onChange={onChange} placeholder={placeholder} rows="4"
//       className="w-full px-3 py-2 mt-1 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   </div>
// );

// const AccordionSection = ({ title, children, icon, defaultOpen = false }) => {
//     const [isOpen, setIsOpen] = useState(defaultOpen);
//     return (
//         <div className="mb-2 border border-gray-800 rounded-lg">
//             <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-3 bg-gray-900/60 hover:bg-gray-800/80 transition-colors">
//                 <div className="flex items-center gap-3">
//                     {icon} <h3 className="font-semibold text-indigo-400">{title}</h3>
//                 </div>
//                 <ChevronDownIcon className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//             </button>
//             {isOpen && <div className="p-4 space-y-4">{children}</div>}
//         </div>
//     );
// };

// const ResumeForm = () => {
//   const { resumeData, updateResumeData } = useContext(AppContext);

//   const handleChange = (section, index, field, value) => {
//     const newData = JSON.parse(JSON.stringify(resumeData));
//     const sectionPath = section.split('.');
//     if (sectionPath.length > 1) {
//         newData[sectionPath[0]][sectionPath[1]][index][field] = value;
//     } else if (index === null) {
//       newData[section][field] = value;
//     } else {
//       newData[section][index][field] = value;
//     }
//     updateResumeData(newData);
//   };
  
//   const addEntry = (section) => {
//     const newData = JSON.parse(JSON.stringify(resumeData));
//     switch(section) {
//         case 'experience': newData.experience.push({ title: '', company: '', duration: '', description: '' }); break;
//         case 'education': newData.education.push({ degree: '', school: '', year: '' }); break;
//         case 'skills': newData.skills.push({ skill: '' }); break;
//         case 'projects': newData.projects.push({ name: '', description: '' }); break;
//         case 'languages': newData.languages.push({ language: '', proficiency: '' }); break;
//         case 'achievements': newData.achievements.push({ achievement: '' }); break;
//         case 'personalInfo.links': newData.personalInfo.links.push({ label: 'LinkedIn', url: '' }); break;
//         case 'customSections': newData.customSections.push({ id: crypto.randomUUID(), title: 'New Section', content: '' }); break;
//         default: return;
//     }
//     updateResumeData(newData);
//   };
  
//   const removeEntry = (section, index) => {
//     const newData = JSON.parse(JSON.stringify(resumeData));
//     const sectionPath = section.split('.');
//     if (sectionPath.length > 1) {
//         newData[sectionPath[0]][sectionPath[1]].splice(index, 1);
//     } else {
//         newData[section].splice(index, 1);
//     }
//     updateResumeData(newData);
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (upload) => { handleChange('personalInfo', null, 'photo', upload.target.result); };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <form>
//         <AccordionSection title="Personal Info" icon={<PhotoIcon />} defaultOpen={true}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input label="Full Name" value={resumeData.personalInfo.name} onChange={(e) => handleChange('personalInfo', null, 'name', e.target.value)} />
//               <Input label="Email" type="email" value={resumeData.personalInfo.email} onChange={(e) => handleChange('personalInfo', null, 'email', e.target.value)} />
//               <Input label="Phone" value={resumeData.personalInfo.phone} onChange={(e) => handleChange('personalInfo', null, 'phone', e.target.value)} />
//               <Input label="Location" value={resumeData.personalInfo.location} onChange={(e) => handleChange('personalInfo', null, 'location', e.target.value)} />
//             </div>
//              <div className="mt-4">
//                 <label className="text-sm text-gray-400">Profile Photo</label>
//                 <div className="flex items-center gap-4 mt-1">
//                     <input type="file" accept="image/*" onChange={handlePhotoUpload} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600"/>
//                     {resumeData.personalInfo.photo && (<button type="button" onClick={() => handleChange('personalInfo', null, 'photo', null)} className="text-red-400 hover:text-red-600"><TrashIcon /></button>)}
//                 </div>
//             </div>
//         </AccordionSection>
//         {/* All other form sections follow... */}
//         <AccordionSection title="Links" icon={<LinkIcon />}>
//             {(resumeData.personalInfo.links || []).map((link, index) => (
//               <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
//                 <button type="button" onClick={() => removeEntry('personalInfo.links', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <Input label="Label" value={link.label} onChange={(e) => handleChange('personalInfo.links', index, 'label', e.target.value)} placeholder="e.g. Portfolio"/>
//                     <Input label="URL" value={link.url} onChange={(e) => handleChange('personalInfo.links', index, 'url', e.target.value)} placeholder="https://..."/>
//                 </div>
//               </div>
//             ))}
//             <button type="button" onClick={() => addEntry('personalInfo.links')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Link</button>
//         </AccordionSection>
//         <AccordionSection title="Experience" icon={<BriefcaseIcon />}>
//             {(resumeData.experience || []).map((exp, index) => (
//               <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
//                 <button type="button" onClick={() => removeEntry('experience', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
//                 <Input label="Job Title" value={exp.title} onChange={(e) => handleChange('experience', index, 'title', e.target.value)} />
//                 <Input label="Company" value={exp.company} onChange={(e) => handleChange('experience', index, 'company', e.target.value)} />
//                 <Input label="Duration" value={exp.duration} onChange={(e) => handleChange('experience', index, 'duration', e.target.value)} placeholder="e.g. Jan 2022 - Present"/>
//                 <Textarea label="Description" value={exp.description} onChange={(e) => handleChange('experience', index, 'description', e.target.value)} />
//               </div>
//             ))}
//             <button type="button" onClick={() => addEntry('experience')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Experience</button>
//         </AccordionSection>
//         <AccordionSection title="Projects" icon={<ProjectIcon />}>
//             {(resumeData.projects || []).map((proj, index) => (
//               <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
//                 <button type="button" onClick={() => removeEntry('projects', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
//                 <Input label="Project Name" value={proj.name} onChange={(e) => handleChange('projects', index, 'name', e.target.value)} />
//                 <Textarea label="Description" value={proj.description} onChange={(e) => handleChange('projects', index, 'description', e.target.value)} />
//               </div>
//             ))}
//             <button type="button" onClick={() => addEntry('projects')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Project</button>
//         </AccordionSection>
//         <AccordionSection title="Education" icon={<AcademicCapIcon />}>
//             {(resumeData.education || []).map((edu, index) => (
//               <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
//                  <button type="button" onClick={() => removeEntry('education', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
//                 <Input label="Degree / Certificate" value={edu.degree} onChange={(e) => handleChange('education', index, 'degree', e.target.value)} />
//                 <Input label="School / University" value={edu.school} onChange={(e) => handleChange('education', index, 'school', e.target.value)} />
//                 <Input label="Year of Completion" value={edu.year} onChange={(e) => handleChange('education', index, 'year', e.target.value)} />
//               </div>
//             ))}
//             <button type="button" onClick={() => addEntry('education')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Education</button>
//         </AccordionSection>
//         <AccordionSection title="Skills" icon={<WrenchScrewdriverIcon />}>
//             {(resumeData.skills || []).map((skill, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                     <Input label={`Skill #${index + 1}`} value={skill.skill} onChange={(e) => handleChange('skills', index, 'skill', e.target.value)} />
//                     <button type="button" onClick={() => removeEntry('skills', index)} className="mt-5 text-red-400 hover:text-red-600"><TrashIcon /></button>
//                 </div>
//             ))}
//             <button type="button" onClick={() => addEntry('skills')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Skill</button>
//         </AccordionSection>
//         <AccordionSection title="Languages" icon={<LanguageIcon />}>
//             {(resumeData.languages || []).map((lang, index) => (
//               <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
//                 <button type="button" onClick={() => removeEntry('languages', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
//                 <div className="grid grid-cols-2 gap-4">
//                     <Input label="Language" value={lang.language} onChange={(e) => handleChange('languages', index, 'language', e.target.value)} placeholder="e.g. English"/>
//                     <Input label="Proficiency" value={lang.proficiency} onChange={(e) => handleChange('languages', index, 'proficiency', e.target.value)} placeholder="e.g. Native"/>
//                 </div>
//               </div>
//             ))}
//             <button type="button" onClick={() => addEntry('languages')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Language</button>
//         </AccordionSection>
//         <AccordionSection title="Achievements" icon={<TrophyIcon />}>
//             {(resumeData.achievements || []).map((ach, index) => (
//               <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
//                 <button type="button" onClick={() => removeEntry('achievements', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
//                 <Textarea label={`Achievement #${index + 1}`} value={ach.achievement} onChange={(e) => handleChange('achievements', index, 'achievement', e.target.value)} />
//               </div>
//             ))}
//             <button type="button" onClick={() => addEntry('achievements')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Achievement</button>
//         </AccordionSection>
//         {(resumeData.customSections || []).map((section, index) => (
//            <AccordionSection key={section.id} title={section.title || 'Custom Section'} icon={<PlusIcon/>}>
//               <div className="p-3 border border-gray-700 rounded-md space-y-2 relative">
//                  <button type="button" onClick={() => removeEntry('customSections', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
//                 <Input label="Section Title" value={section.title} onChange={(e) => handleChange('customSections', index, 'title', e.target.value)} />
//                 <Textarea label="Content" value={section.content} onChange={(e) => handleChange('customSections', index, 'content', e.target.value)} />
//               </div>
//             </AccordionSection>
//         ))}
//          <div className="mt-4">
//              <button type="button" onClick={() => addEntry('customSections')} className="w-full py-2 flex items-center justify-center gap-2 text-indigo-400 border-2 border-dashed border-gray-600 rounded-lg hover:bg-gray-800/50 hover:border-indigo-500 transition-colors">
//                 <PlusIcon /> Add Custom Section
//             </button>
//          </div>
//     </form>
//   );
// };


// // --- Main Builder Component ---
// const Builder = () => {
//   const handleDownload = () => {
//     const element = document.getElementById('resume-preview');
//     const opt = {
//       margin: 0, filename: 'resume.pdf', image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
//     html2pdf().from(element).set(opt).save();
//   };

//   return (
//     <div className="h-screen flex flex-col bg-black">
//       <main className="flex-1 flex flex-col lg:flex-row gap-4 p-4 overflow-hidden">
//         <div className="w-full lg:w-2/5 overflow-y-auto glass-effect rounded-lg p-4">
//           <div className="flex items-center gap-2 mb-4">
//               <LogoIcon /> <span className="text-xl font-bold text-white">Stellar Resume</span>
//           </div>
//           <ResumeForm />
//         </div>
//         <div className="flex-1 flex flex-col gap-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-effect rounded-lg p-2">
//             <TemplateSwitcher />
//             <div className="flex items-center gap-4">
//               <ColorSwitcher />
//               <button onClick={handleDownload}
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md shadow-purple-500/20 transition-all">
//                 <DownloadIcon /> Download PDF
//               </button>
//             </div>
//           </div>
//           <div className="flex-grow rounded-lg overflow-hidden">
//             <ResumePreview />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Builder;

import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { 
    DownloadIcon, LogoIcon, PlusIcon, TrashIcon, ChevronDownIcon, LinkIcon, 
    PhotoIcon, BriefcaseIcon, AcademicCapIcon, WrenchScrewdriverIcon,
    ProjectIcon, LanguageIcon, TrophyIcon
} from '../assets/icons';

// --- Child Components ---
const TemplateSwitcher = () => {
  const { template, setTemplate } = useContext(AppContext);
  const templates = [
    { id: 'modern', name: 'Modern' }, { id: 'clean', name: 'Clean' }, { id: 'creative', name: 'Creative' },
    { id: 'minimalist', name: 'Minimalist' }, { id: 'corporate', name: 'Corporate' }, { id: 'ats', name: 'ATS-Friendly' },
  ];
  return (
    <div className="flex items-center gap-2 bg-gray-900/50 p-1 rounded-lg flex-wrap">
      {templates.map((t) => (
        <button key={t.id} onClick={() => setTemplate(t.id)}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${template === t.id ? 'bg-indigo-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>
          {t.name}
        </button>
      ))}
    </div>
  );
};

const ColorSwitcher = () => {
  const { colorScheme, setColorScheme } = useContext(AppContext);
  const colors = [
    { id: 'default', name: 'Indigo', hex: '#6366F1' }, { id: 'pink', name: 'Pink', hex: '#EC4899' },
    { id: 'blue', name: 'Blue', hex: '#3B82F6' }, { id: 'green', name: 'Green', hex: '#22C55E' },
  ];
  return (
    <div className="flex items-center gap-2">
      {colors.map((color) => (
        <button key={color.id} onClick={() => setColorScheme(color.id)}
          className={`w-6 h-6 rounded-full focus:outline-none transition-transform transform hover:scale-110 ${colorScheme === color.id ? 'ring-2 ring-offset-2 ring-offset-gray-800 ring-white' : ''}`}
          style={{ backgroundColor: color.hex }} title={color.name}
        />
      ))}
    </div>
  );
};

const ResumePreview = () => {
  const { resumeData, template, colorScheme } = useContext(AppContext);
  const getTemplate = () => {
    const props = { data: resumeData, colorScheme };
    const ModernTemplate = React.lazy(() => import('./templates/ModernTemplate'));
    const CleanTemplate = React.lazy(() => import('./templates/CleanTemplate'));
    const AtsFriendlyTemplate = React.lazy(() => import('./templates/AtsFriendlyTemplate'));
    const CreativeTemplate = React.lazy(() => import('./templates/CreativeTemplate'));
    const MinimalistTemplate = React.lazy(() => import('./templates/MinimalistTemplate'));
    const CorporateTemplate = React.lazy(() => import('./templates/CorporateTemplate'));
    
    switch (template) {
      case 'modern': return <ModernTemplate {...props} />;
      case 'clean': return <CleanTemplate {...props} />;
      case 'ats': return <AtsFriendlyTemplate {...props} />;
      case 'creative': return <CreativeTemplate {...props} />;
      case 'minimalist': return <MinimalistTemplate {...props} />;
      case 'corporate': return <CorporateTemplate {...props} />;
      default: return <ModernTemplate {...props} />;
    }
  };
  return (
    <div id="resume-preview-container" className="bg-white rounded-lg shadow-2xl p-2 w-full h-full">
      <div id="resume-preview" className="w-full h-full overflow-auto">
        <React.Suspense fallback={<div className="text-center p-8">Loading Template...</div>}>
            {getTemplate()}
        </React.Suspense>
      </div>
    </div>
  );
};

const Input = ({ label, value, onChange, name, type = 'text', placeholder }) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <input type={type} name={name} value={value || ''} onChange={onChange} placeholder={placeholder}
      className="w-full px-3 py-2 mt-1 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

const Textarea = ({ label, value, onChange, name, placeholder }) => (
  <div>
    <label className="text-sm text-gray-400">{label}</label>
    <textarea name={name} value={value || ''} onChange={onChange} placeholder={placeholder} rows="4"
      className="w-full px-3 py-2 mt-1 text-white bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

const AccordionSection = ({ title, children, icon, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="mb-2 border border-gray-800 rounded-lg">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-3 bg-gray-900/60 hover:bg-gray-800/80 transition-colors">
                <div className="flex items-center gap-3">
                    {icon} <h3 className="font-semibold text-indigo-400">{title}</h3>
                </div>
                <ChevronDownIcon className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="p-4 space-y-4">{children}</div>}
        </div>
    );
};

const ResumeForm = () => {
  const { resumeData, updateResumeData } = useContext(AppContext);

  const handleChange = (section, index, field, value) => {
    const newData = JSON.parse(JSON.stringify(resumeData));
    const sectionPath = section.split('.');
    if (sectionPath.length > 1) {
        newData[sectionPath[0]][sectionPath[1]][index][field] = value;
    } else if (index === null) {
      newData[section][field] = value;
    } else {
      newData[section][index][field] = value;
    }
    updateResumeData(newData);
  };
  
  const addEntry = (section) => {
    const newData = JSON.parse(JSON.stringify(resumeData));

    // --- BULLETPROOFING LOGIC ---
    // This ensures the arrays exist before we try to push to them.
    if (!newData.languages) newData.languages = [];
    if (!newData.achievements) newData.achievements = [];
    // --- END OF FIX ---
    
    switch(section) {
        case 'experience': newData.experience.push({ title: '', company: '', duration: '', description: '' }); break;
        case 'education': newData.education.push({ degree: '', school: '', year: '' }); break;
        case 'skills': newData.skills.push({ skill: '' }); break;
        case 'projects': newData.projects.push({ name: '', description: '' }); break;
        case 'languages': newData.languages.push({ language: '', proficiency: '' }); break;
        case 'achievements': newData.achievements.push({ achievement: '' }); break;
        case 'personalInfo.links': newData.personalInfo.links.push({ label: 'LinkedIn', url: '' }); break;
        case 'customSections': newData.customSections.push({ id: crypto.randomUUID(), title: 'New Section', content: '' }); break;
        default: return;
    }
    updateResumeData(newData);
  };
  
  const removeEntry = (section, index) => {
    const newData = JSON.parse(JSON.stringify(resumeData));
    const sectionPath = section.split('.');
    if (sectionPath.length > 1) {
        newData[sectionPath[0]][sectionPath[1]].splice(index, 1);
    } else {
        newData[section].splice(index, 1);
    }
    updateResumeData(newData);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => { handleChange('personalInfo', null, 'photo', upload.target.result); };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form>
        <AccordionSection title="Personal Info" icon={<PhotoIcon />} defaultOpen={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Full Name" value={resumeData.personalInfo.name} onChange={(e) => handleChange('personalInfo', null, 'name', e.target.value)} />
              <Input label="Email" type="email" value={resumeData.personalInfo.email} onChange={(e) => handleChange('personalInfo', null, 'email', e.target.value)} />
              <Input label="Phone" value={resumeData.personalInfo.phone} onChange={(e) => handleChange('personalInfo', null, 'phone', e.target.value)} />
              <Input label="Location" value={resumeData.personalInfo.location} onChange={(e) => handleChange('personalInfo', null, 'location', e.target.value)} />
            </div>
             <div className="mt-4">
                <label className="text-sm text-gray-400">Profile Photo</label>
                <div className="flex items-center gap-4 mt-1">
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600"/>
                    {resumeData.personalInfo.photo && (<button type="button" onClick={() => handleChange('personalInfo', null, 'photo', null)} className="text-red-400 hover:text-red-600"><TrashIcon /></button>)}
                </div>
            </div>
        </AccordionSection>
        <AccordionSection title="Links" icon={<LinkIcon />}>
            {(resumeData.personalInfo.links || []).map((link, index) => (
              <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
                <button type="button" onClick={() => removeEntry('personalInfo.links', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Label" value={link.label} onChange={(e) => handleChange('personalInfo.links', index, 'label', e.target.value)} placeholder="e.g. Portfolio"/>
                    <Input label="URL" value={link.url} onChange={(e) => handleChange('personalInfo.links', index, 'url', e.target.value)} placeholder="https://..."/>
                </div>
              </div>
            ))}
            <button type="button" onClick={() => addEntry('personalInfo.links')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Link</button>
        </AccordionSection>
        <AccordionSection title="Experience" icon={<BriefcaseIcon />}>
            {(resumeData.experience || []).map((exp, index) => (
              <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
                <button type="button" onClick={() => removeEntry('experience', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
                <Input label="Job Title" value={exp.title} onChange={(e) => handleChange('experience', index, 'title', e.target.value)} />
                <Input label="Company" value={exp.company} onChange={(e) => handleChange('experience', index, 'company', e.target.value)} />
                <Input label="Duration" value={exp.duration} onChange={(e) => handleChange('experience', index, 'duration', e.target.value)} placeholder="e.g. Jan 2022 - Present"/>
                <Textarea label="Description" value={exp.description} onChange={(e) => handleChange('experience', index, 'description', e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={() => addEntry('experience')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Experience</button>
        </AccordionSection>
        <AccordionSection title="Projects" icon={<ProjectIcon />}>
            {(resumeData.projects || []).map((proj, index) => (
              <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
                <button type="button" onClick={() => removeEntry('projects', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
                <Input label="Project Name" value={proj.name} onChange={(e) => handleChange('projects', index, 'name', e.target.value)} />
                <Textarea label="Description" value={proj.description} onChange={(e) => handleChange('projects', index, 'description', e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={() => addEntry('projects')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Project</button>
        </AccordionSection>
        <AccordionSection title="Education" icon={<AcademicCapIcon />}>
            {(resumeData.education || []).map((edu, index) => (
              <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
                 <button type="button" onClick={() => removeEntry('education', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
                <Input label="Degree / Certificate" value={edu.degree} onChange={(e) => handleChange('education', index, 'degree', e.target.value)} />
                <Input label="School / University" value={edu.school} onChange={(e) => handleChange('education', index, 'school', e.target.value)} />
                <Input label="Year of Completion" value={edu.year} onChange={(e) => handleChange('education', index, 'year', e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={() => addEntry('education')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Education</button>
        </AccordionSection>
        <AccordionSection title="Skills" icon={<WrenchScrewdriverIcon />}>
            {(resumeData.skills || []).map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                    <Input label={`Skill #${index + 1}`} value={skill.skill} onChange={(e) => handleChange('skills', index, 'skill', e.target.value)} />
                    <button type="button" onClick={() => removeEntry('skills', index)} className="mt-5 text-red-400 hover:text-red-600"><TrashIcon /></button>
                </div>
            ))}
            <button type="button" onClick={() => addEntry('skills')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Skill</button>
        </AccordionSection>
        <AccordionSection title="Languages" icon={<LanguageIcon />}>
            {(resumeData.languages || []).map((lang, index) => (
              <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
                <button type="button" onClick={() => removeEntry('languages', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
                <div className="grid grid-cols-2 gap-4">
                    <Input label="Language" value={lang.language} onChange={(e) => handleChange('languages', index, 'language', e.target.value)} placeholder="e.g. English"/>
                    <Input label="Proficiency" value={lang.proficiency} onChange={(e) => handleChange('languages', index, 'proficiency', e.target.value)} placeholder="e.g. Native"/>
                </div>
              </div>
            ))}
            <button type="button" onClick={() => addEntry('languages')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Language</button>
        </AccordionSection>
        <AccordionSection title="Achievements" icon={<TrophyIcon />}>
            {(resumeData.achievements || []).map((ach, index) => (
              <div key={index} className="p-3 border border-gray-700 rounded-md space-y-2 relative">
                <button type="button" onClick={() => removeEntry('achievements', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
                <Textarea label={`Achievement #${index + 1}`} value={ach.achievement} onChange={(e) => handleChange('achievements', index, 'achievement', e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={() => addEntry('achievements')} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"><PlusIcon /> Add Achievement</button>
        </AccordionSection>
        {(resumeData.customSections || []).map((section, index) => (
           <AccordionSection key={section.id} title={section.title || 'Custom Section'} icon={<PlusIcon/>}>
              <div className="p-3 border border-gray-700 rounded-md space-y-2 relative">
                 <button type="button" onClick={() => removeEntry('customSections', index)} className="absolute top-2 right-2 text-red-400 hover:text-red-600"><TrashIcon /></button>
                <Input label="Section Title" value={section.title} onChange={(e) => handleChange('customSections', index, 'title', e.target.value)} />
                <Textarea label="Content" value={section.content} onChange={(e) => handleChange('customSections', index, 'content', e.target.value)} />
              </div>
            </AccordionSection>
        ))}
         <div className="mt-4">
             <button type="button" onClick={() => addEntry('customSections')} className="w-full py-2 flex items-center justify-center gap-2 text-indigo-400 border-2 border-dashed border-gray-600 rounded-lg hover:bg-gray-800/50 hover:border-indigo-500 transition-colors">
                <PlusIcon /> Add Custom Section
            </button>
         </div>
    </form>
  );
};


// --- Main Builder Component ---
const Builder = () => {
  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 0, filename: 'resume.pdf', image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      <main className="flex-1 flex flex-col lg:flex-row gap-4 p-4 overflow-hidden">
        <div className="w-full lg:w-2/5 overflow-y-auto glass-effect rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
              <LogoIcon /> <span className="text-xl font-bold text-white">Stellar Resume</span>
          </div>
          <ResumeForm />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-effect rounded-lg p-2">
            <TemplateSwitcher />
            <div className="flex items-center gap-4">
              <ColorSwitcher />
              <button onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md shadow-purple-500/20 transition-all">
                <DownloadIcon /> Download PDF
              </button>
            </div>
          </div>
          <div className="flex-grow rounded-lg overflow-hidden">
            <ResumePreview />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Builder;