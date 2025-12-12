import { createContext, useContext, useState, type ReactNode } from 'react';
import { PORTFOLIO_DATA, type Language } from '../data/portfolioData';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    content: typeof PORTFOLIO_DATA['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
    };

    const value = {
        language,
        toggleLanguage,
        content: PORTFOLIO_DATA[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
