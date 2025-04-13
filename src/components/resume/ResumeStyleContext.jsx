import { createContext, useContext, useState } from 'react';

const ResumeStyleContext = createContext();

export const useResumeStyle = () => useContext(ResumeStyleContext);

export const ResumeStyleProvider = ({ children }) => {
  const [style, setStyle] = useState('thin'); // 'thin' or 'bold'

  const toggleStyle = () => {
    setStyle(prev => (prev === 'thin' ? 'bold' : 'thin'));
  };

  return (
    <ResumeStyleContext.Provider value={{ style, toggleStyle }}>
      {children}
    </ResumeStyleContext.Provider>
  );
};
