import React from 'react';

const colorMap = {
  default: { text: 'text-indigo-700' },
  pink: { text: 'text-pink-700' },
  blue: { text: 'text-blue-700' },
  green: { text: 'text-green-700' },
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">{title}</h2>
    <div style={{ whiteSpace: 'pre-wrap' }}>{children}</div>
  </section>
);

const MinimalistTemplate = ({ data, colorScheme }) => {
  const colors = colorMap[colorScheme] || colorMap.default;
  const { personalInfo, experience, projects, education, skills, languages, achievements, customSections } = data;

  return (
    <div className="p-12 bg-white font-['Helvetica_Neue'] text-gray-700">
      <header className="mb-10 text-center">
        {personalInfo.photo && <img src={personalInfo.photo} alt="Profile" className="w-28 h-28 rounded-full mb-6 mx-auto object-cover" />}
        <h1 className="text-5xl font-extrabold tracking-tight">{personalInfo.name}</h1>
        <p className="mt-2 text-sm text-gray-500 tracking-widest">{personalInfo.email} &bull; {personalInfo.phone} &bull; {personalInfo.location}</p>
        <div className="flex justify-center gap-4 mt-2 text-sm">{(personalInfo.links || []).map((link, i) => (<a key={i} href={link.url} className={`underline text-gray-500`}>{link.label}</a>))}</div>
      </header>
      <main>
        <Section title="Experience">
          {(experience || []).map((exp, i) => (<div key={i} className="mb-5 grid grid-cols-4 gap-4"><div className="col-span-1 text-xs text-gray-500"><p>{exp.duration}</p><p>{exp.company}</p></div><div className="col-span-3"><h3 className={`font-bold ${colors.text}`}>{exp.title}</h3><p className="text-sm mt-1">{exp.description}</p></div></div>))}
        </Section>
        <Section title="Projects">
            {(projects || []).map((proj, i) => (<div key={i} className="mb-5"><h3 className={`font-bold ${colors.text}`}>{proj.name}</h3><p className="text-sm mt-1">{proj.description}</p></div>))}
        </Section>
        <Section title="Education">
          {(education || []).map((edu, i) => (<div key={i} className="mb-3 grid grid-cols-4 gap-4"><div className="col-span-1 text-xs text-gray-500"><p>{edu.year}</p></div><div className="col-span-3"><h3 className={`font-bold ${colors.text}`}>{edu.school}</h3><p className="text-sm">{edu.degree}</p></div></div>))}
        </Section>
        <Section title="Skills"><p className="text-sm">{(skills || []).map(s => s.skill).join(' / ')}</p></Section>
        <Section title="Languages"><p className="text-sm">{(languages || []).map(l => `${l.language} (${l.proficiency})`).join(' / ')}</p></Section>
        <Section title="Achievements"><ul className="list-disc list-inside text-sm">{(achievements || []).map((a, i) => <li key={i}>{a.achievement}</li>)}</ul></Section>
        {(customSections || []).map(section => (<Section key={section.id} title={section.title}><p className="text-sm">{section.content}</p></Section>))}
      </main>
    </div>
  );
};
export default MinimalistTemplate;