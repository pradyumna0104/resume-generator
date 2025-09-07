import React from 'react';

const Section = ({ title, children }) => (
    <section className="mb-4">
      <h2 className="text-lg font-bold border-b border-black mb-2">{title.toUpperCase()}</h2>
      <div style={{ whiteSpace: 'pre-wrap' }}>{children}</div>
    </section>
);

const AtsFriendlyTemplate = ({ data }) => {
  const { personalInfo, experience, projects, education, skills, languages, achievements, customSections } = data;
  return (
    <div className="text-black bg-white font-['Times_New_Roman'] p-8 text-sm">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
        <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</p>
        <div className="flex justify-center gap-4 mt-1">{(personalInfo.links || []).map((link, i) => (<span key={i}>{link.label}: {link.url}</span>))}</div>
      </header>
      <Section title="Experience">
        {(experience || []).map((exp, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-bold">{exp.title}</h3>
            <div className="flex justify-between"><p className="italic">{exp.company}</p><p className="italic">{exp.duration}</p></div>
            <p className="mt-1">{exp.description}</p>
          </div>
        ))}
      </Section>
      <Section title="Projects">
        {(projects || []).map((proj, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-bold">{proj.name}</h3>
            <p className="mt-1">{proj.description}</p>
          </div>
        ))}
      </Section>
      <Section title="Education">
        {(education || []).map((edu, i) => (
          <div key={i} className="mb-2 flex justify-between">
            <div><h3 className="font-bold">{edu.school}</h3><p>{edu.degree}</p></div>
            <p>{edu.year}</p>
          </div>
        ))}
      </Section>
      <Section title="Skills"><p>{(skills || []).map(s => s.skill).join(' | ')}</p></Section>
      <Section title="Languages"><p>{(languages || []).map(l => `${l.language} (${l.proficiency})`).join(' | ')}</p></Section>
      <Section title="Achievements"><ul className="list-disc list-inside">{(achievements || []).map((a, i) => <li key={i}>{a.achievement}</li>)}</ul></Section>
      {(customSections || []).map(section => (<Section key={section.id} title={section.title}><p>{section.content}</p></Section>))}
    </div>
  );
};
export default AtsFriendlyTemplate;