import React from 'react';

const colorMap = {
  default: { bg: 'bg-indigo-700', text: 'text-indigo-700' },
  pink: { bg: 'bg-pink-700', text: 'text-pink-700' },
  blue: { bg: 'bg-blue-700', text: 'text-blue-700' },
  green: { bg: 'bg-green-700', text: 'text-green-700' },
};

const Section = ({ title, children, color }) => (
  <section className="mb-6">
    <h2 className={`text-xl font-bold border-b-2 pb-1 mb-3 ${color}`}>{title}</h2>
    <div className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{children}</div>
  </section>
);

const ModernTemplate = ({ data, colorScheme }) => {
  const colors = colorMap[colorScheme] || colorMap.default;
  const { personalInfo, experience, projects, education, skills, languages, achievements, customSections } = data;

  return (
    <div className="text-gray-800 bg-gray-50 font-sans p-8">
      <header className={`p-6 text-white text-center ${colors.bg} flex flex-col items-center rounded-md`}>
        {personalInfo.photo && <img src={personalInfo.photo} alt="Profile" className="w-28 h-28 rounded-full mb-3 border-4 border-white object-cover" />}
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <div className="flex justify-center gap-x-4 gap-y-1 mt-3 text-xs flex-wrap">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
          {(personalInfo.links || []).map((link, i) => ( <a key={i} href={link.url} className="underline">{link.label}</a> ))}
        </div>
      </header>
      
      <main className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Section title="Experience" color={colors.text}>
            {(experience || []).map((exp, i) => (
              <div key={i} className="mb-4">
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="mt-1 text-sm">{exp.description}</p>
              </div>
            ))}
          </Section>
          <Section title="Projects" color={colors.text}>
            {(projects || []).map((proj, i) => (
                <div key={i} className="mb-4">
                    <h3 className="font-bold text-lg">{proj.name}</h3>
                    <p className="mt-1 text-sm">{proj.description}</p>
                </div>
            ))}
          </Section>
          {(customSections || []).map(section => (
            <Section key={section.id} title={section.title} color={colors.text}>{section.content}</Section>
          ))}
        </div>
        <div>
          <Section title="Education" color={colors.text}>
            {(education || []).map((edu, i) => (
              <div key={i} className="mb-2">
                <h3 className="font-bold">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.school} - {edu.year}</p>
              </div>
            ))}
          </Section>
          <Section title="Skills" color={colors.text}>
            <ul className="flex flex-wrap gap-2">
              {(skills || []).map((skill, i) => (
                <li key={i} className={`text-sm text-white px-3 py-1 rounded-full ${colors.bg}`}>{skill.skill}</li>
              ))}
            </ul>
          </Section>
          <Section title="Languages" color={colors.text}>
            {(languages || []).map((lang, i) => (<p key={i} className="text-sm">{lang.language} ({lang.proficiency})</p>))}
          </Section>
          <Section title="Achievements" color={colors.text}>
            <ul className="list-disc list-inside">
              {(achievements || []).map((ach, i) => (<li key={i}>{ach.achievement}</li>))}
            </ul>
          </Section>
        </div>
      </main>
    </div>
  );
};
export default ModernTemplate;