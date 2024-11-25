const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://my-portfolio-zjhc.onrender.com', // Replace with your website URL
  title: 'DM',
}

const about = {
  name: 'Daniel Makalski',
  role: 'Full Stack Developer',
  description:
    'Passionate full stack developer skilled in React, PostgreSQL, Python, JavaScript, Django, Flask, CSS, and HTML. Committed to building efficient and scalable web applications.',
  resume: 'https://drive.google.com/file/d/1EY6o-qFnRbTqnR7DWtkg8fxWdVVFXGOe/view?usp=sharing', // Reference the resume in the public directory
  social: {
    linkedin: 'https://www.linkedin.com/in/danielmakalski',
    github: 'https://github.com/bestestiscool',
  },
}

const projects = [
  {
    name: 'TechRepair-Experts',
    description:
      'A comprehensive tool for estimating device repair costs and showcasing related YouTube videos. Features a multi-step form with dynamic cost calculations and integrates YouTube API for video displays.',
    stack: [
      'React.js',
      'Bootstrap',
      'Express.js',
      'Prisma',
      'PostgreSQL',
      'YouTube API',
    ],
    sourceCode: 'https://github.com/bestestiscool/TechRepair-Experts',
    livePreview: 'https://techrepair-experts-live.com', // Replace with actual live URL
  },
  {
    name: 'SpeakPeak Dictionary',
    description:
      'A web application that allows users to search for word definitions and listen to pronunciations using the Merriam-Webster API.',
    stack: [
      'Django',
      'Python',
      'Flask',
      'PostgreSQL',
      'HTML',
      'CSS',
      'Merriam-Webster API',
    ],
    sourceCode: 'https://github.com/bestestiscool/SpeakPeak',
    livePreview: 'https://speakpeak-dictionary-live.com', // Replace with actual live URL
  },
  {
    name: 'Next.js Fundamentals Project',
    description:
      'A modern web application built as part of the Vercel Next.js course, featuring server-side rendering, static site generation, and optimized API routes. Deployed on Vercel for seamless performance.',
    stack: [
      'Next.js',
      'React',
      'JavaScript',
      'CSS',
      'Vercel',
    ],
    sourceCode: 'https://github.com/bestestiscool/nextjs-dashboard', 
    livePreview: 'https://nextjs-dashboard-sigma-two-95.vercel.app/', 
  },
  // Add more projects as needed
]

const skills = [
  // Add or remove skills as needed
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Python',
  'Django',
  'Flask',
  'PostgreSQL',
  'Git',
  'GitHub',
  'REST APIs',
  'jQuery',
  'NextJS'
  // Add any other skills you have
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Daniel_Makalski13@hotmail.ca', // Replace with your email address
}

export { header, about, projects, skills, contact }
