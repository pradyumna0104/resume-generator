import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

import ModernTemplate from './templates/ModernTemplate';
import CleanTemplate from './templates/CleanTemplate';
import AtsFriendlyTemplate from './templates/AtsFriendlyTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import MinimalistTemplate from './templates/MinimalistTemplate';
import CorporateTemplate from './templates/CorporateTemplate';

const ResumePreview = () => {
  const { resumeData, template, colorScheme } = useContext(AppContext);

  const getTemplate = () => {
    const props = { data: resumeData, colorScheme };
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
        {getTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;