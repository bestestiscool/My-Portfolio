const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://danielmakalski.com', // Replace with your website URL
  title: 'DM',
}

const about = {
  name: 'Daniel Makalski', 
  role: 'Full Stack Developer',
  description:
    'Passionate full stack developer skilled in React, PostgreSQL, Python, JavaScript, Django, Flask, CSS, and HTML. Committed to building efficient and scalable web applications.',
  resume: 'https://drive.google.com/file/d/1HoI0FNGkvtfZqlIXw0zX-6E2SZmdhKD1/view', // Reference the resume in the public directory
  social: {
    linkedin: 'https://www.linkedin.com/in/danielmakalski',
    github: 'https://github.com/bestestiscool',
  },
}


const projects = [
  // Add your projects here
  {
    name: 'TechRepair-Experts',
    description:
      'A brief description of your project. Explain what it does, the problem it solves, and any notable features.',
    stack: ['React', 'JavaScript','Node','CSS','Bootstrap','HTML', 'PostgreSQL'], 
    sourceCode: 'https://github.com/bestestiscool/TechRepair-Experts', 
    livePreview: 'https://project-one-live.com', 
  },
  {
    name: 'SpeakPeak',
    description:
      'A brief description of your second project. Highlight its purpose and what technologies you used.',
    stack: ['Django', 'Python',"Flask", "PostgreSQL", 'HTML', 'CSS'],
    sourceCode: 'https://github.com/bestestiscool/SpeakPeak',
    livePreview: 'https://project-two-live.com',
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
  'Flask',
  'jQuery'
  // Add any other skills you have
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Daniel_Makalski13@hotmail.ca', // Replace with your email address
}

export { header, about, projects, skills, contact }
