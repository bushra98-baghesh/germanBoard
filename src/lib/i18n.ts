export type Language = 'en' | 'de';

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blogs': 'Blogs',
    'nav.courses': 'Courses',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',
    'nav.certificates': 'Search for Certificates',
    
    // Common
    'common.welcome': 'Welcome to German Board',
    'common.language': 'Language',
    
    // Language Names
    'lang.en': 'English',
    'lang.de': 'Deutsch',
    
    // Training Programs Section
    'training.title': 'Our Training Programs',
    'training.subtitle': 'Flexible learning designed to fit your goals — wherever you are.',
    'training.live.name': 'Live Training',
    'training.live.description': 'Join real-time interactive sessions led by certified trainers. Engage, ask questions, and collaborate with peers from anywhere.',
    'training.online.name': 'Online Training',
    'training.online.description': 'Learn at your own pace with pre-recorded video lessons, quizzes, and progress tracking — anytime, on any device.',
    'training.onsite.name': 'Onsite Training',
    'training.onsite.description': 'Experience immersive, in-person sessions at our certified training centers, guided by expert instructors.',
    
    // Features Showcase Section
    'features.showcase.title': 'Our Features',
    'features.showcase.subtitle': 'This very extraordinary feature, can make learning activities more efficient',
    'features.showcase.title1': 'A User Interface Designed for Live Sessions',
    'features.showcase.bullet1.title': 'High-Quality Video Streaming',
    'features.showcase.bullet1.text': 'Seamless HD sessions with minimal latency and crystal-clear audio.',
    'features.showcase.bullet2.title': 'Real-Time Chat and Reactions',
    'features.showcase.bullet2.text': 'Interact instantly with trainers and other learners using emojis, questions, and polls.',
    'features.showcase.bullet3.title': 'Session Recording & Replays',
    'features.showcase.bullet3.text': 'Missed a session? Rewatch recordings anytime to review and catch up.',
    'features.showcase.title2': 'Tools for Trainers and Learners',
    'features.showcase.bullet4.title': 'Resource Management',
    'features.showcase.bullet4.text': 'Organize and share learning materials, documents, and multimedia content in a centralized hub.',
    'features.showcase.bullet5.title': 'Assignment Creation',
    'features.showcase.bullet5.text': 'Design interactive assignments, quizzes, and projects with customizable templates and grading rubrics.',
    'features.showcase.bullet6.title': 'Progress Analytics',
    'features.showcase.bullet6.text': 'Track learner progress, engagement metrics, and performance analytics with detailed reports and insights.',
    'features.showcase.title3': 'Assessments, Quizzes, Tests',
    'features.showcase.text3': 'Built-in tools for evaluations with instant feedback, grading automation, and certificates to celebrate progress and achievement.',
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.description': "We're here to help. Reach out to us anytime.",
    'contact.contacts': 'Contacts',
    'contact.social': 'Follow us',
    'contact.formAriaLabel': 'Contact form',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Type your message... ',
    'contact.success': 'Thank you for your message!',
    'contact.error': 'Something went wrong. Please try again.',
    
    // About Page
    'about.hero.title': 'About Us',
    'about.hero.subtitle': 'Learn more about our mission and values',
    'about.intro.title': 'Who We Are',
    'about.intro.content': 'German Board for Education and Consulting was founded on August 28, 2017, in Wuppertal as a UG (limited liability company). Initially, German Board conducted numerous training sessions for refugees on a voluntary basis across most federal states, training no fewer than 1,500 young men and women in management and business.\n\nIn 2019, the company relocated to Kleve and transformed from UG to GmbH. The company expanded its expertise beyond legal and business courses to include project establishment, administrative development, and refugee condition analysis. The focus on refugee integration into the labor market has achieved widespread recognition through addressing refugee needs.\n\nOn September 30, 2019, a branch office was opened in Essen. The company is dedicated to developing people\'s skills, preparing them academically and professionally, enhancing their leadership abilities to achieve excellence in societies and institutions, and integrating them into the German labor market. Beyond specialized courses for institutions and workers, the company focuses on developing leadership and functional capabilities, achieving optimal self-development investments, and realizing trainees\' ambitions and future vision.\n\nThe company is committed to improving women\'s competencies and integrating them into the labor market through specialized training in areas of interest, including cosmetics, administration, and legal courses. It supports women in establishing their own projects by assisting with setup and licensing.',
    
    'about.values.title': 'Our Company Values',
    'about.values.quality.title': 'Quality',
    'about.values.quality.description': 'Providing the best modern and innovative educational methods through the latest modern teaching approaches based on experience exchange.',
    'about.values.credibility.title': 'Credibility and Transparency',
    'about.values.credibility.description': 'Building trust through clarity, providing valuable information to institutions and individuals with original content based on international research and statistics, pursuing development, and keeping pace with various sciences through research.',
    'about.values.creativity.title': 'Creativity and Innovation',
    'about.values.creativity.description': 'Promoting the principles of cooperation and joint action among team members.',
    
    // Pricing Section
    'pricing.title': 'Simple, straightforward pricing',
    'pricing.subtitle': 'Get a membership now and join the training staff and professionals who use German Board to boost their skills',
    'pricing.certified.title': 'CERTIFIED TRAINER',
    'pricing.international.title': 'INTERNATIONAL TRAINER',
    'pricing.centers.title': 'CENTERS & INSTITUTIONS',
    'pricing.centers.subtitle': 'Training Centers and Institutions',
    'pricing.price.year': '/year',
    'pricing.button': 'Buy Now',
    'pricing.mostPopular': 'MOST POPULAR',
    
    // Pricing Features
    'pricing.features.publishing': 'Publishing and marketing for the courses',
    'pricing.features.approval': 'Approval of training bags',
    'pricing.features.connecting': 'Connecting members to training institutions',
    'pricing.features.marketing': 'Marketing for the Trainer',
    'pricing.features.support247': 'Technical support 24/7',
    'pricing.features.support2424': 'Technical support 24/24',
    'pricing.features.privatePage': 'A private page',
    'pricing.features.communicate': 'Communicate with students',
    'pricing.features.meetings': 'Periodic meetings',
    'pricing.features.discount3': '20% discount over 3 years',
    'pricing.features.discount5': '40% discount over 5 years',
    'pricing.features.accreditation': 'Accreditation and certification of courses',
    'pricing.features.accreditTrainers': 'Possibility to accredit trainers',
    'pricing.features.technicalSupport': 'Providing technical support during the course',
    'pricing.features.acceptTrainers': 'Accepting the accreditation of Trainers',
    'pricing.features.acceptCenters': 'Accepting the accreditation of Centers',
    'pricing.features.courseAccreditation': 'Accreditation of courses',
    'pricing.features.packageAccreditation': 'Accreditation of training packages',
    'pricing.features.businessAdvice': 'Providing advice on the company\'s business',
    'pricing.features.connectTrainers': 'Connect with certified trainers',
    
    // FAQ Section
    'faq.title': 'Common Questions',
    'faq.heading': 'Frequently asked questions',
    'faq.description': 'Find answers to the most common questions about our services and support. If you still need help, feel free to reach out to us.',
    
    // FAQ Questions
    'faq.question1': 'Why German Board?',
    'faq.answer1': 'The German Board is an officially licensed institution in Germany, and it has branches in Essen and Klefa, Germany',
    'faq.question2': 'Is it possible to grant certificates to accredited training institutions and centers?',
    'faq.answer2': 'Yes, the board grants certificates to all centers and institutions registered with it and they have membership',
    'faq.question3': 'How do I make sure that my certificate is issued by the board?',
    'faq.answer3': 'The matter is simple for each of the board certificates. There is an official code issued by the institution that you put on our website. If you find a copy of the certificate on it, it is official and issued by us.',
    'faq.question4': 'In case the institution granting the certificate is not recognized by the board',
    'faq.answer4': 'In the event that one of the persons or training centers grants fake certificates in the name of the board, we have the right to sue him before the courts in his country according to the regulations and laws issued in the country in which he is located.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.blogs': 'Blog',
    'nav.courses': 'Kurse',
    'nav.contact': 'Kontakt',
    'nav.login': 'Anmelden',
    'nav.getStarted': 'Jetzt starten',
    'nav.certificates': 'Zertifikate suchen',
    
    // Common
    'common.welcome': 'Willkommen bei German Board',
    'common.language': 'Sprache',
    
    // Language Names
    'lang.en': 'Englisch',
    'lang.de': 'Deutsch',
    
    // Training Programs Section
    'training.title': 'Unsere Trainingsprogramme',
    'training.subtitle': 'Flexibles Lernen, das zu Ihren Zielen passt — wo immer Sie sind.',
    'training.live.name': 'Live-Training',
    'training.live.description': 'Nehmen Sie an interaktiven Echtzeit-Sessions mit zertifizierten Trainern teil. Engagieren Sie sich, stellen Sie Fragen und arbeiten Sie mit Gleichgesinnten von überall aus zusammen.',
    'training.online.name': 'Online-Training',
    'training.online.description': 'Lernen Sie in Ihrem eigenen Tempo mit voraufgezeichneten Videolektionen, Quizzen und Fortschrittsverfolgung — jederzeit, auf jedem Gerät.',
    'training.onsite.name': 'Vor-Ort-Training',
    'training.onsite.description': 'Erleben Sie immersive Präsenzsessions in unseren zertifizierten Trainingszentren unter Anleitung erfahrener Trainer.',
    
    // Features Showcase Section
    'features.showcase.title': 'Unsere Features',
    'features.showcase.subtitle': 'Diese sehr außergewöhnliche Funktion kann das Lernen effizienter machen',
    'features.showcase.title1': 'Eine Benutzeroberfläche für Live-Sessions',
    'features.showcase.bullet1.title': 'Hochwertiges Video-Streaming',
    'features.showcase.bullet1.text': 'Nahtlose HD-Sessions mit minimaler Latenz und kristallklarem Audio.',
    'features.showcase.bullet2.title': 'Echtzeit-Chat und Reaktionen',
    'features.showcase.bullet2.text': 'Interagieren Sie sofort mit Trainern und anderen Lernenden durch Emojis, Fragen und Umfragen.',
    'features.showcase.bullet3.title': 'Session-Aufzeichnung & Wiederholungen',
    'features.showcase.bullet3.text': 'Eine Session verpasst? Schauen Sie sich die Aufzeichnungen jederzeit an, um zu wiederholen und aufzuholen.',
    'features.showcase.title2': 'Werkzeuge für Trainer und Lernende',
    'features.showcase.bullet4.title': 'Ressourcenverwaltung',
    'features.showcase.bullet4.text': 'Organisieren und teilen Sie Lernmaterialien, Dokumente und Multimedia-Inhalte in einem zentralen Hub.',
    'features.showcase.bullet5.title': 'Aufgabenerstellung',
    'features.showcase.bullet5.text': 'Gestalten Sie interaktive Aufgaben, Quizze und Projekte mit anpassbaren Vorlagen und Bewertungsrubriken.',
    'features.showcase.bullet6.title': 'Fortschrittsanalyse',
    'features.showcase.bullet6.text': 'Verfolgen Sie den Lernfortschritt, Engagement-Metriken und Leistungsanalysen mit detaillierten Berichten und Einblicken.',
    'features.showcase.title3': 'Bewertungen, Quizze, Tests',
    'features.showcase.text3': 'Integrierte Tools für Bewertungen mit sofortigem Feedback, automatischer Benotung und Zertifikaten zur Würdigung von Fortschritt und Leistung.',
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.description': 'Wir sind für Sie da. Kontaktieren Sie uns jederzeit.',
    'contact.contacts': 'Kontakte',
    'contact.social': 'Folgen Sie uns',
    'contact.formAriaLabel': 'Kontaktformular',
    'contact.namePlaceholder': 'Ihr Name',
    'contact.emailPlaceholder': 'sie@email.com',
    'contact.subject': 'Betreff',
    'contact.subjectPlaceholder': 'Betreff',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Geben Sie Ihre Nachricht ein... ',
    'contact.success': 'Vielen Dank für Ihre Nachricht!',
    'contact.error': 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
    
    // About Page
    'about.hero.title': 'Über Uns',
    'about.hero.subtitle': 'Erfahren Sie mehr über unsere Mission und Werte',
    'about.intro.title': 'German Board für Bildung und Beratung stellt sich vor',
    'about.intro.content': 'Das German Board für Bildung und Beratung wurde am 28.08.2017 in Wuppertal mit der Rechtsform UG gegründet. German Board hat zu Beginn seiner Gründung in den meisten Bundesländern auf ehrenamtlicher Basis eine Reihe von Schulungen für Flüchtlinge durchgeführt und nicht weniger als 1.500 junge Männer und Frauen in den Bereichen Management und Wirtschaft ausgebildet.\n\nIm Jahr 2019 wurde der Sitz der Firma in die Stadt Kleve und die Rechtsform von der UG in die GmbH übertragen. Die Fachgebiete des Unternehmens erweiterten sich nach der Durchführung von Rechts- und Wirtschaftskursen im Zusammenhang mit der Gründung von Projekten, der Verwaltungsentwicklung und der Untersuchung der Bedingungen von Flüchtlingen. Der Fokus liegt auf der Integration von Flüchtlingen in den Arbeitsmarkt und hat durch die Fokussierung auf die Bedürfnisse von Flüchtlingen eine gute Verbreitung erreicht.\n\nIm selben Jahr, konkret am 30. September 2019, wurde eine Niederlassung des Unternehmens in der Stadt Essen eröffnet. Das Unternehmen befasst sich damit, die Fähigkeiten von Menschen zu entwickeln, sie wissenschaftlich und beruflich vorzubereiten, ihre Führungsfähigkeiten zu entwickeln, um Exzellenz in Gesellschaften und Institutionen zu erreichen, und sie in den deutschen Arbeitsmarkt zu integrieren. Neben spezialisierten Kursen für Institutionen und Arbeiter in verschiedenen Lebensbereichen befasst sich das Unternehmen auch damit, Führungs- und Funktionsfähigkeiten zu entwickeln, optimale Investitionen für den Selbstaufbau zu erzielen und den Ehrgeiz der Auszubildenden und ihre Zukunftsvision zu erreichen.\n\nDas Unternehmen ist daran interessiert, die Kompetenzen von Frauen zu verbessern und sie in den Arbeitsmarkt zu integrieren, indem es sie in Spezialisierungen weiterbildet, die ihren Interessen entsprechen, einschließlich Kosmetikkursen, Verwaltungs- und Rechtskursen. Das Unternehmen hilft ihnen, ein eigenes Projekt zu eröffnen, indem es sie bei der Einrichtung und Vergabe von Lizenzen begleitet.',
    
    'about.values.title': 'Unsere Unternehmenswerte',
    'about.values.quality.title': 'Qualität',
    'about.values.quality.description': 'Bereitstellung der besten modernen und innovativen Methoden der Bildung durch die neuesten modernen Bildungsmethoden auf der Grundlage des Erfahrungsaustauschs.',
    'about.values.credibility.title': 'Glaubwürdigkeit und Transparenz',
    'about.values.credibility.description': 'Vertrauen auf Klarheit, Bereitstellung von Informationen, von denen Institutionen und Einzelpersonen profitieren, mit Originalinhalten, die auf internationalen Forschungsergebnissen und Statistiken basieren, das Streben nach Entwicklung und durch Forschung mit verschiedenen Wissenschaften Schritt halten.',
    'about.values.creativity.title': 'Kreativität und Innovation',
    'about.values.creativity.description': 'Vermittlung der Prinzipien der Zusammenarbeit und der gemeinsamen Aktion unter den Mitgliedern desselben Teams.',
    
    // Pricing Section
    'pricing.title': 'Einfache, transparente Preise',
    'pricing.subtitle': 'Holen Sie sich jetzt eine Mitgliedschaft und werden Sie Teil des Ausbildungspersonals und der Fachkräfte, die German Board nutzen, um ihre Fähigkeiten zu verbessern',
    'pricing.certified.title': 'ZERTIFIZIERTER TRAINER',
    'pricing.international.title': 'INTERNATIONALER TRAINER',
    'pricing.centers.title': 'ZENTREN & INSTITUTIONEN',
    'pricing.centers.subtitle': 'Ausbildungszentren und Institutionen',
    'pricing.price.year': '/Jahr',
    'pricing.button': 'Jetzt kaufen',
    'pricing.mostPopular': 'AM BELIEBTESTEN',
    
    // Pricing Features
    'pricing.features.publishing': 'Veröffentlichung und Marketing für die Kurse',
    'pricing.features.approval': 'Genehmigung von Schulungspaketen',
    'pricing.features.connecting': 'Vermittlung von Mitgliedern an Ausbildungseinrichtungen',
    'pricing.features.marketing': 'Marketing für den Trainer',
    'pricing.features.support247': 'Technischer Support 24/7',
    'pricing.features.support2424': 'Technischer Support 24/24',
    'pricing.features.privatePage': 'Eine private Seite',
    'pricing.features.communicate': 'Kommunikation mit Studenten',
    'pricing.features.meetings': 'Regelmäßige Treffen',
    'pricing.features.discount3': '20% Rabatt über 3 Jahre',
    'pricing.features.discount5': '40% Rabatt über 5 Jahre',
    'pricing.features.accreditation': 'Akkreditierung und Zertifizierung von Kursen',
    'pricing.features.accreditTrainers': 'Möglichkeit, Trainer zu akkreditieren',
    'pricing.features.technicalSupport': 'Bereitstellung von technischem Support während des Kurses',
    'pricing.features.acceptTrainers': 'Akkreditierung von Trainern akzeptieren',
    'pricing.features.acceptCenters': 'Akkreditierung von Zentren akzeptieren',
    'pricing.features.courseAccreditation': 'Akkreditierung von Kursen',
    'pricing.features.packageAccreditation': 'Akkreditierung von Schulungspaketen',
    'pricing.features.businessAdvice': 'Beratung zu geschäftlichen Angelegenheiten des Unternehmens',
    'pricing.features.connectTrainers': 'Vernetzung mit zertifizierten Trainern',
    
    // FAQ Section
    'faq.title': 'Häufige Fragen',
    'faq.heading': 'Häufig gestellte Fragen',
    'faq.description': 'Finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen und unserem Support. Wenn Sie weitere Hilfe benötigen, kontaktieren Sie uns gerne.',
    
    // FAQ Questions
    'faq.question1': 'Warum German Board?',
    'faq.answer1': 'Das German Board ist eine offiziell lizenzierte Institution in Deutschland und hat Niederlassungen in Essen und Kleve, Deutschland',
    'faq.question2': 'Ist es möglich, Zertifikate an akkreditierte Ausbildungseinrichtungen und Zentren zu vergeben?',
    'faq.answer2': 'Ja, das Board vergibt Zertifikate an alle bei ihm registrierten Zentren und Institutionen, die eine Mitgliedschaft haben',
    'faq.question3': 'Wie kann ich sicherstellen, dass mein Zertifikat vom Board ausgestellt wurde?',
    'faq.answer3': 'Die Sache ist einfach für jedes der Board-Zertifikate. Es gibt einen offiziellen Code, der von der Institution ausgestellt wird, den Sie auf unsere Website setzen. Wenn Sie dort eine Kopie des Zertifikats finden, ist es offiziell und von uns ausgestellt.',
    'faq.question4': 'Falls die Institution, die das Zertifikat vergibt, nicht vom Board anerkannt wird',
    'faq.answer4': 'Falls eine der Personen oder Ausbildungseinrichtungen gefälschte Zertifikate im Namen des Boards vergibt, haben wir das Recht, ihn vor den Gerichten in seinem Land gemäß den Vorschriften und Gesetzen zu verklagen, die in dem Land erlassen wurden, in dem er sich befindet.',
  },
};

export const defaultLanguage: Language = 'en';

export const getBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'de' ? 'de' : 'en';
};

export const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const stored = localStorage.getItem('language') as Language;
  return stored && (stored === 'en' || stored === 'de') ? stored : defaultLanguage;
};

export const setStoredLanguage = (lang: Language): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
}; 