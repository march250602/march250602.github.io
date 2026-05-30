// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'march250602', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['march250602/Rps_test','march250602/My-Event-Webapp','march250602/Bitkub-Crypto-currency-enchange-ETL','march250602/Yellow-Taxi-Data-Analytics','march250602/Covid19-tweet-sentiment-analysis'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      }
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'HomePartner360 LINE CRM',
          description:
            'A simple CRM for an air-conditioner cleaning business. Customers chat in LINE as usual, while the system collects messages, reads important details with AI, calculates the service price, tracks booking status, reminds the team to follow up, and shows new leads on a real-time dashboard.',
          link: 'https://github.com/march250602/lead-collector-homepartner-360',
        },
        {
          title: 'Coach Naen',
          description:
            'Calories tracker LIFF and LINE chatbot for the Thai market. Built and launched an AI-powered nutrition tracking SaaS using TypeScript, Next.js, Supabase, PostgreSQL, and Vercel.',
          imageUrl: '/coach-naen-logo.png',
          link: 'https://line.me/R/ti/p/@619vzabj',
        },
        {
          title: 'BG Remover Web App',
          description:
            'Background remover web application built with Next.js, focused on a simple image upload flow and fast browser-based user experience.',
          link: 'https://bgremover-th.site/th',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ratchanon Pawanja', description: '', imageURL: '' },
  social: {
    linkedin: 'ratchanon-pawanja',
    researchGate: 'Ratchanon-Pawanja',
    website: 'https://march250602.github.io/',
    phone: '+66928388730',
    email: 'march250602@gmail.com',
  },
  resume: {
    fileUrl:'https://drive.google.com/file/d/1_A0aXGYv7El9BV8Z-y9M6AyUqxZSlMnk/view?usp=sharing'
       // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'REST API',
    'SQL',
    'PostgreSQL',
    'Firebase',
    'Supabase',
    'Vector DB',
    'Git',
    'Docker',
    'Python',
    'Java',
    'ETL',
    'Data Validation',
    'NLP',
    'AI/ML',
    'GCP',
    'Google Cloud Functions',
    'Vercel',
    'Control-M',
    'RAG',
  ],
  experiences: [
    {
      company: 'Coach Naen',
      position: 'Creator & Founder',
      from: 'August 2025',
      to: 'Present',
      companyLink: 'https://line.me/R/ti/p/@619vzabj',
    },
    {
      company: 'Algoma University',
      position: 'Graduate Research Assistant & Web Developer (Part Time)',
      from: 'September 2024',
      to: 'August 2025',
    },
    {
      company: 'BizBridge',
      position: 'Backend Developer (Intern)',
      from: 'May 2024',
      to: 'August 2024',
      
    },
     {
      company: 'Yip IN Tsoi',
      position: 'Data Engineer',
      from: 'October 2022',
      to: 'June 2023',
      
    },
  ],
  certifications: [
    {
      name: 'IELTS General Training',
      body: 'Overall 7.0',
      year: 'English proficiency',
    },
  ],
  educations: [
    {
      institution: 'Algoma University, Canada',
      degree: 'Master of Computer Science, GPA: 3.78',
      from: 'September 2024',
      to: 'August 2025',
    },
    {
      institution: 'George Brown College, Canada',
      degree: 'Postgraduate Certificate - Cloud Computing Technologies, GPA: 3.98',
      from: 'September 2023',
      to: 'August 2024',
    },
    {
      institution: 'Silpakorn University, Thailand',
      degree: 'Bachelor of Science - Computer Science, GPA: 3.69, First Class Honor',
      from: 'January 2018',
      to: 'March 2022',
    },
  ],
  publications: [
    {
      title: 'The Passwordless Authentication with Passkey Technology from an Implementation Perspective',
      conferenceName: '2nd IEEE/ACISInternational Conference on Software Engineering, ArtiﬁcialIntelligence, Networking and Parallel/Distributed Computing(SNPD2025-Summer IV)',
      authors: 'Lien Tran, Boyuan Zhang, Ratchanon Pawanja, and Rashid Hussain Khokhar',
      link: 'https://www.researchgate.net/publication/394540335_The_Passwordless_Authentication_with_Passkey_Technology_from_an_Implementation_Perspective',
      description:
        'With the rise of sophisticated authentication by-pass techniques, passwords are no longer considered a reliablemethod for securing authentication systems. In recent years,new authentication technologies have shifted from traditionalpassword-based logins to passwordless security. Among these,Time-Based One-Time Passwords (TOTP) remain one of themost widely used mechanisms, while Passkeys are emergingas a promising alternative with growing adoption. This paperhighlights the key techniques used during the implementationof the authentication system with Passkey technology. It alsosuggests considerations for integrating components during systemdevelopment to ensure that users can securely access theiraccounts with minimal complexity, while still meeting the require-ments of a robust authentication system that balances security,usability, and performance. Additionally, by examining TOTPand Passkey mechanisms from an implementation perspective,this work not only addresses major security concerns such aspassword leaks, phishing attacks, and susceptibility to brute-force attacks, but also evaluates the feasibility and effectivenessof these mechanisms in real-world implementations. This paperdemonstrates the superior security of Passkey technology and itspotential for broader adoption in secure authentication systems.Index Terms—Passkey, TOTP, OAuth2, Rate Limiting, Two-Factor Authentication (2FA',
    },
    {
      title: 'Interpretable Deep Learning for Automated MRI-Based Brain Tumor Diagnosis Using MobileNet and DenseNet',
      journalName: 'Academic Project',
      description:
        'Academic project using deep learning models for medical image analysis, focused on automated MRI-based brain tumor diagnosis.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 0, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: 'G-P0V0SJ5XVC', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      
    ],
  },

  enablePWA: true,
};

export default CONFIG;