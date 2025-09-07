import React from 'react';

const colorMap = {
  default: { text: 'text-indigo-600', accent: 'text-indigo-800' },
  pink: { text: 'text-pink-600', accent: 'text-pink-800' },
  blue: { text: 'text-blue-600', accent: 'text-blue-800' },
  green: { text: 'text-green-600', accent: 'text-green-800' },
};

const Section = ({ title, children, color }) => (
    <section className="mb-5">
      <h2 className={`text-xl font-semibold tracking-wider border-b-2 pb-1 mb-3 ${color} border-gray-200`}>{title.toUpperCase()}</h2>
      <div style={{ whiteSpace: 'pre-wrap' }}>{children}</div>
    </section>
);

const CleanTemplate = ({ data, colorScheme }) => {
  const colors = colorMap[colorScheme] || colorMap.default;
  const { personalInfo, experience, projects, education, skills, languages, achievements, customSections } = data;

  return (
    <div className="text-gray-700 bg-white font-serif p-10">
      <header className="text-center border-b-2 pb-4 flex flex-col items-center">
        {personalInfo.photo && <img src={personalInfo.photo} alt="Profile" className="w-24 h-24 rounded-full mb-4 object-cover" />}
        <h1 className="text-4xl font-bold tracking-widest">{personalInfo.name.toUpperCase()}</h1>
        <p className={`mt-2 text-sm ${colors.text}`}>{personalInfo.email} &bull; {personalInfo.phone} &bull; {personalInfo.location}</p>
        <div className="flex justify-center gap-4 mt-2 text-sm">{(personalInfo.links || []).map((link, i) => (<a key={i} href={link.url} className={`underline ${colors.text}`}>{link.label}</a>))}</div>
      </header>
      <main className="mt-6">
        <Section title="Experience" color={colors.text}>
          {(experience || []).map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-baseline"><h3 className={`font-bold text-lg ${colors.accent}`}>{exp.title}</h3><span className="text-sm font-light text-gray-500">{exp.duration}</span></div>
              <p className="text-md text-gray-600">{exp.company}</p>
              <p className="mt-1 text-sm text-gray-600">{exp.description}</p>
            </div>
          ))}
        </Section>
        <Section title="Projects" color={colors.text}>
            {(projects || []).map((proj, i) => (
                <div key={i} className="mb-4">
                    <h3 className={`font-bold text-lg ${colors.accent}`}>{proj.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{proj.description}</p>
                </div>
            ))}
        </Section>
        <Section title="Education" color={colors.text}>
          {(education || []).map((edu, i) => (
            <div key={i} className="flex justify-between items-baseline mb-1">
              <div><h3 className={`font-bold ${colors.accent}`}>{edu.degree}</h3><p className="text-sm text-gray-600">{edu.school}</p></div>
              <span className="text-sm font-light text-gray-500">{edu.year}</span>
            </div>
          ))}
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Section title="Skills" color={colors.text}><p className="text-sm text-gray-600">{(skills || []).map(s => s.skill).join(', ')}</p></Section>
            <Section title="Languages" color={colors.text}><p className="text-sm text-gray-600">{(languages || []).map(l => `${l.language} (${l.proficiency})`).join(', ')}</p></Section>
            <Section title="Achievements" color={colors.text}><ul className="list-disc list-inside text-sm text-gray-600">{(achievements || []).map((a, i) => <li key={i}>{a.achievement}</li>)}</ul></Section>
        </div>
        {(customSections || []).map(section => (<Section key={section.id} title={section.title} color={colors.text}><p className="text-sm text-gray-600">{section.content}</p></Section>))}
      </main>
    </div>
  );
};
export default CleanTemplate;