import React from 'react';

const colorMap = {
  default: { text: 'text-indigo-800' },
  pink: { text: 'text-pink-800' },
  blue: { text: 'text-blue-800' },
  green: { text: 'text-green-800' },
};

const Section = ({ title, children, color }) => (
  <section className="mb-6">
    <h2 className={`text-xl font-bold ${color} border-b-2 border-gray-400 pb-1 mb-3`}>{title}</h2>
    <div style={{ whiteSpace: 'pre-wrap' }}>{children}</div>
  </section>
);

const CorporateTemplate = ({ data, colorScheme }) => {
  const colors = colorMap[colorScheme] || colorMap.default;
  const { personalInfo, experience, projects, education, skills, languages, achievements, customSections } = data;

  return (
    <div className="p-10 bg-white font-['Georgia',_serif] text-gray-900">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <hr className="my-2 w-1/4 mx-auto border-t-2 border-gray-300" />
        <p className="text-sm">{personalInfo.location} | {personalInfo.phone} | {personalInfo.email}</p>
        <div className="flex justify-center gap-4 mt-1 text-sm">{(personalInfo.links || []).map((link, i) => (<a key={i} href={link.url} className={`underline ${colors.text}`}>{link.label}</a>))}</div>
      </header>
      <main>
        <Section title="Experience" color={colors.text}>
          {(experience || []).map((exp, i) => (<div key={i} className="mb-4"><div className="flex justify-between items-end"><h3 className="text-lg font-semibold">{exp.title}</h3><p className="text-sm font-light">{exp.duration}</p></div><p className="text-md italic">{exp.company}</p><p className="text-sm mt-1">{exp.description}</p></div>))}
        </Section>
        <Section title="Projects" color={colors.text}>
          {(projects || []).map((proj, i) => (<div key={i} className="mb-4"><h3 className="text-lg font-semibold">{proj.name}</h3><p className="text-sm mt-1">{proj.description}</p></div>))}
        </Section>
        <Section title="Education" color={colors.text}>
          {(education || []).map((edu, i) => (<div key={i} className="mb-2"><div className="flex justify-between items-end"><h3 className="text-lg font-semibold">{edu.school}</h3><p className="text-sm font-light">{edu.year}</p></div><p className="text-md italic">{edu.degree}</p></div>))}
        </Section>
        <Section title="Skills" color={colors.text}><p className="text-sm leading-relaxed">{(skills || []).map(s => s.skill).join(', ')}.</p></Section>
        <Section title="Languages" color={colors.text}><p className="text-sm leading-relaxed">{(languages || []).map(l => `${l.language} (${l.proficiency})`).join(', ')}.</p></Section>
        <Section title="Achievements" color={colors.text}><ul className="list-disc list-inside text-sm">{(achievements || []).map((a, i) => <li key={i}>{a.achievement}</li>)}</ul></Section>
        {(customSections || []).map(section => (<Section key={section.id} title={section.title} color={colors.text}><p className="text-sm">{section.content}</p></Section>))}
      </main>
    </div>
  );
};
export default CorporateTemplate;