// The Journey — every stop on the path from June 2000 to now.
// Edit this file to tell the story. Anything wrapped in [square brackets] is a placeholder
// and shows on the page with a dashed "to fill in" style until you replace it.
//
// people: the good humans of each chapter. Name or role is fine ("My first team lead").
// skills: bricks Bitty collects at this stop.
// event: optional scenery — 'storm' (dot-com bust), 'flight' (move countries), 'finish'.

export type Person = { who: string; line: string };
export type Stop = {
  id: string;
  year: number;          // year this stop starts (used by the year scrubber)
  when: string;          // label shown on the card
  company: string;       // kept small on purpose — it was never about the logo
  role: string;
  place: string;
  title: string;         // the chapter name
  story: string;
  skills: string[];
  people: Person[];
  proud?: string;
  event?: 'storm' | 'flight' | 'finish';
};

export const journey: Stop[] = [
  {
    id: 'start',
    year: 2000,
    when: '22 June 2000 – 2005',
    company: 'Webdunia (later SUVI Infotech)',
    role: 'Flash Developer Engineer',
    place: '[City]',
    title: 'A kid walks into the big IT world',
    story:
      'Day one in the industry, as a Flash developer. Then came the 2001–02 dot-com bust — so he learned everything he could to survive it: from Flash to .NET, C and C++ on BREW for early mobile phones, plus ASP and JSP for the web. When the industry shrank, he grew.',
    skills: ['Flash', '.NET', 'C / C++'],
    people: [
      { who: '[First mentor]', line: '[What they taught you]' },
      { who: '[Friends from the Flash days]', line: '[A memory you shared]' },
    ],
    proud: '[First project you were proud of]',
    event: 'storm',
  },
  {
    id: 'impetus',
    year: 2005,
    when: 'Mar 2005 – May 2008',
    company: 'Impetus · with Dun & Bradstreet',
    role: 'Sr. Software Engineer / Sr. Web Developer',
    place: '[City]',
    title: 'The J2EE crew, and the day jQuery arrived',
    story:
      'Joined a J2EE crew building for a global client, and learned JavaScript end to end — the full flow. Then jQuery showed up and suddenly changed all our lives.',
    skills: ['J2EE', 'jQuery'],
    people: [
      { who: '[Someone from Impetus / D&B]', line: '[What they meant to you]' },
      { who: '[Team or friend]', line: '[A moment you remember]' },
    ],
  },
  {
    id: 'symantec',
    year: 2008,
    when: 'May 2008 – Jan 2015',
    company: 'Symantec',
    role: 'Sr. Principal Web Developer → Sr. Software Engineer',
    place: 'Pune',
    title: 'Hardcore JavaScript and a security mindset',
    story:
      'The longest stop — almost seven years. Went deep on hardcore JavaScript, Apache, XML and XPath, and picked up a lot of security thinking that still shapes how he builds today.',
    skills: ['JavaScript', 'Security'],
    people: [
      { who: '[Mentor or lead]', line: '[What they taught you]' },
      { who: '[The Symantec crew]', line: '[Why this team was special]' },
    ],
  },
  {
    id: 'capgemini',
    year: 2015,
    when: 'Feb 2015 – Apr 2016',
    company: 'Capgemini',
    role: 'Lead Consultant / Architect',
    place: 'Pune',
    title: 'Seeing it from the client’s side',
    story:
      'A move into services: learning how delivery really works for clients — expectations, trust, and turning needs into architecture. On the tech side, leaning into React and GraphQL.',
    skills: ['Client delivery', 'React'],
    people: [{ who: '[Someone from this chapter]', line: '[What you learned from them]' }],
  },
  {
    id: 'bmc',
    year: 2016,
    when: 'May 2016 – Aug 2019',
    company: 'BMC Software',
    role: 'Lead Product Developer',
    place: 'Pune',
    title: 'Real full-stack, and the architect’s view',
    story:
      'A true full-stack chapter — Angular on the front, Java on the back — with a solid understanding of the ITSM business the product served. The role grew into architecture: thinking in systems, not just features.',
    skills: ['Angular', 'Architecture'],
    people: [{ who: '[Someone from BMC]', line: '[A moment together]' }],
  },
  {
    id: 'move',
    year: 2019,
    when: '2019',
    company: 'Pune → Sydney',
    role: 'The big move',
    place: 'Pune → Sydney',
    title: 'A new country, a new chapter',
    story: '[What made you take the leap to Australia, and what the first days felt like]',
    skills: [],
    people: [{ who: '[Family / friends who helped]', line: '[How they made it possible]' }],
    event: 'flight',
  },
  {
    id: 'vedantus',
    year: 2019,
    when: 'Aug 2019 – Jun 2020',
    company: 'Vedantus Solutions',
    role: 'Principal Engineer',
    place: 'Sydney',
    title: 'First Sydney team: designing systems',
    story:
      'Starting over in a new country, as a Principal Engineer. Deep in system design and framework implementation — building the foundations other developers build on. [The people who welcomed you]',
    skills: ['System design'],
    people: [{ who: '[First Sydney colleague]', line: '[How they welcomed you]' }],
  },
  {
    id: 'aurion',
    year: 2020,
    when: 'Jun 2020 – Oct 2021',
    company: 'Aurion Systems',
    role: 'Principal Engineer',
    place: 'Sydney',
    title: 'Security, and a look at blockchain',
    story:
      'Building through 2020–21 in the security domain, and exploring blockchain along the way — curiosity has always been part of the job. [What kept the team together]',
    skills: ['Blockchain'],
    people: [{ who: '[Someone from this chapter]', line: '[What you shared]' }],
  },
  {
    id: 'now',
    year: 2022,
    when: 'Mar 2022 – now',
    company: 'IAG',
    role: 'Senior Software Engineer',
    place: 'Sydney',
    title: 'Full-stack at scale',
    story:
      'Back to hands-on full-stack: large-scale customer-facing web apps with React, TypeScript and NestJS. Microfrontends, microservices, and a lot of cross-team collaboration to ship safely on AWS.',
    skills: ['Full-stack', 'TypeScript', 'AWS'],
    people: [{ who: '[Current team]', line: '[What makes this crew good]' }],
  },
  {
    id: 'next',
    year: 2026,
    when: 'Now → next',
    company: 'amitcode.dev',
    role: 'Engineer by day, creator by weekend',
    place: 'Sydney',
    title: 'Full-stack + AI: still learning, still upgrading',
    story:
      'Still full-stack every day at IAG — and now bringing AI into it: learning Python, RAG and how to take AI from prototype to production. The same kid who learned Flash in 2000 is upgrading again. Plus side projects like apibird, and videos for GameGeek and AusiDesi. The path keeps going, and the best part is still who walks it with you.',
    skills: ['AI adoption', 'Python'],
    people: [],
    event: 'finish',
  },
];

export const isPlaceholder = (s = '') => /\[[^\]]+\]/.test(s);
