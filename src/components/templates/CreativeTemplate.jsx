import React from 'react';

const colorMap = {
  default: { bg: 'bg-indigo-500', text: 'text-indigo-500' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-500' },
  blue: { bg: 'bg-blue-500', text: 'text-blue-500' },
  green: { bg: 'bg-green-500', text: 'text-green-500' },
};

const Section = ({ title, children, color = 'text-white', border = 'border-white' }) => (
  <section className="mb-6">
    <h2 className={`text-xl font-bold border-b-2 pb-1 mb-3 ${color} ${border}`}>{title}</h2>
    <div className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{children}</div>
  </section>
);

const CreativeTemplate = ({ data, colorScheme }) => {
  const colors = colorMap[colorScheme] || colorMap.default;
  const { personalInfo, experience, projects, education, skills, languages, achievements, customSections } = data;

  return (
    <div className="bg-white text-gray-800 font-['Lato'] flex flex-col md:flex-row min-h-full">
      <aside className={`w-full md:w-1/3 p-6 ${colors.bg} text-white`}>
        <div className="flex flex-col items-center text-center">
            {personalInfo.photo ? <img src={personalInfo.photo} alt="Profile" className="w-32 h-32 bg-gray-300 rounded-full mb-4 border-4 border-white object-cover" /> : <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 border-4 border-white"></div>}
          <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
        </div>
        <div className="mt-8">
          <Section title="Contact">
            <p className="text-sm break-words">{personalInfo.email}</p>
            <p className="text-sm">{personalInfo.phone}</p>
            <p className="text-sm">{personalInfo.location}</p>
             {(personalInfo.links || []).map((link, i) => (<a key={i} href={link.url} className="text-sm underline block break-words">{link.label}</a>))}
          </Section>
          <Section title="Education">
            {(education || []).map((edu, i) => (<div key={i} className="mb-2"><h3 className="font-semibold">{edu.degree}</h3><p className="text-xs">{edu.school} - {edu.year}</p></div>))}
          </Section>
          <Section title="Skills">
            <ul className="flex flex-wrap gap-2">{(skills || []).map((skill, i) => (<li key={i} className="text-xs bg-white text-gray-800 px-2 py-1 rounded">{skill.skill}</li>))}</ul>
          </Section>
          <Section title="Languages">
            {(languages || []).map((lang, i) => (<p key={i} className="text-sm">{lang.language} ({lang.proficiency})</p>))}
          </Section>
        </div>
      </aside>
      <main className="w-full md:w-2/3 p-8">
        <Section title="Experience" color={colors.text} border="border-gray-300">
          {(experience || []).map((exp, i) => (<div key={i} className="mb-4"><h3 className="text-xl font-bold">{exp.title}</h3><p className="text-gray-600 font-medium">{exp.company} | {exp.duration}</p><p className="mt-1 text-sm">{exp.description}</p></div>))}
        </Section>
        <Section title="Projects" color={colors.text} border="border-gray-300">
          {(projects || []).map((proj, i) => (<div key={i} className="mb-4"><h3 className="text-lg font-bold">{proj.name}</h3><p className="mt-1 text-sm">{proj.description}</p></div>))}
        </Section>
        <Section title="Achievements" color={colors.text} border="border-gray-300">
            <ul className="list-disc list-inside">{(achievements || []).map((ach, i) => (<li key={i}>{ach.achievement}</li>))}</ul>
        </Section>
        {(customSections || []).map(section => (<Section key={section.id} title={section.title} color={colors.text} border="border-gray-300">{section.content}</Section>))}
      </main>
    </div>
  );
};
export default CreativeTemplate;