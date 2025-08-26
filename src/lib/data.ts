import { Education, Experience, VolunteerWork, Certification, Skill } from '@/types';

export const personalInfo = {
  name: "Rahnuma Rued",
  tagline: "Motivated Computer Science student passionate about using technology in corporate and startup environments.",
  bio: "Skilled in leadership, project management, and teamwork, with experience in managing databases, organizing events, and curating tech products. Flexible, creative, and focused on delivering results.",
  contact: {
    location: "Agargaon, Dhaka-1207",
    email: "adhorarued@gmail.com",
    phone: "+8801531339190",
    linkedin: "https://www.linkedin.com/in/rahnuma-rued-6a46bb15b",
    github: "https://github.com/Adhora16"
  },
  profileImage: "/images/profile.jpg"
};

export const education: Education[] = [
  {
    id: "bracu",
    institution: "BRAC University",
    degree: "Bachelor's Degree in Computer Science",
    period: "2021 - Present (September 2025)",
    location: "Dhaka",
    description: "Currently pursuing Computer Science with focus on software development, database management, and technology innovation.",
    image: "/images/education/bracu-certificate.jpg"
  },
  {
    id: "vnsc-hsc",
    institution: "Viqarunnisa Noon School & College",
    degree: "Higher School Certificate",
    period: "2020",
    location: "Dhaka",
    gpa: "5.00",
    description: "Completed Higher Secondary education with perfect GPA in Science group.",
    image: "/images/education/hsc-certificate.jpg"
  },
  {
    id: "vnsc-ssc",
    institution: "Viqarunnisa Noon School & College",
    degree: "Secondary School Certificate",
    period: "2018",
    location: "Dhaka",
    gpa: "5.00",
    description: "Completed Secondary education with perfect GPA in Science group.",
    image: "/images/education/ssc-certificate.jpg"
  }
];

export const experience: Experience[] = [
  {
    id: "banglalink",
    company: "Banglalink",
    position: "Digitalyst Intern",
    department: "Business Assurance, Internal Control & Risk Management",
    period: "August 2025 - Present",
    responsibilities: [
      "Assist in risk assessments, revenue monitoring, and fraud detection through data analysis and process evaluation",
      "Support compliance, strengthened internal controls, and provide risk insights for management"
    ],
    companyLogo: "/images/experience/banglalink-logo.png"
  },
  {
    id: "ocsar",
    company: "Office of Career Services & Alumni Relations - OCSAR, BRAC University",
    position: "Database Assistant",
    period: "February 2025 - August 2025",
    responsibilities: [
      "Manage and update databases, ensuring accuracy, confidentiality, and support for career events and rankings",
      "Provide insights to counsellors and organizers, regularly reviewing records for efficiency"
    ],
    companyLogo: "/images/experience/bracu-logo.png"
  },
  {
    id: "ced",
    company: "Centre for Entrepreneurship Development-CED, BRAC University",
    position: "Student Ambassador",
    period: "September 2024 - February 2025",
    responsibilities: [
      "Organize events, workshops, and networking opportunities to engage students in entrepreneurship and connect them with resources",
      "Collaborate with faculty and partners to promote a campus culture of innovation and entrepreneurial thinking"
    ],
    companyLogo: "/images/experience/ced-logo.png"
  },
  {
    id: "ecomilli",
    company: "Ecomilli, Inc",
    position: "Product Curator",
    period: "September 2023 - February 2024",
    responsibilities: [
      "Select eco-friendly products and work with ethical suppliers to ensure sustainability",
      "Maintain standards and educate customers on environmentally responsible choices"
    ],
    companyLogo: "/images/experience/ecomilli-logo.png"
  },
  {
    id: "bongobd",
    company: "BongoBD",
    position: "Junior Executive",
    department: "Content Idea & Research",
    period: "November 2022 - August 2023",
    responsibilities: [
      "Researched video content trends, consumer behavior, and social media insights to develop creative strategies for boosting views across Facebook, Instagram, YouTube, and TikTok",
      "Planned and pitched show concepts to secure approvals and sponsorships"
    ],
    companyLogo: "/images/experience/bongobd-logo.png"
  }
];

export const volunteerWork: VolunteerWork[] = [
  {
    id: "buedf",
    organization: "BRAC University Entrepreneurship Development Forum - BUEDF",
    position: "President",
    period: "2024-2025",
    description: "Leading the entrepreneurship development initiatives at BRAC University",
    achievements: [
      "Organised 'Winter Fest 2024' and 'Entrepreneurs Talk' under BUEDF, along with many other fests and seminars",
      "Hosted the BRAC University Career Fair 2024",
      "Served as a Management Volunteer in the 16th Convocation of BRAC University"
    ],
    image: "/images/volunteer/buedf-events.jpg"
  },
  {
    id: "bylc",
    organization: "Bangladesh Youth Leadership Center - BYLC",
    position: "CareerX 41 Graduate",
    period: "November 2024",
    description: "Leadership development program graduate",
    achievements: [
      "Equipped with essential leadership, communication, and career readiness skills",
      "Emphasized personal development, strategic thinking, and effective communication crucial for professional success"
    ],
    image: "/images/volunteer/bylc-certificate.jpg"
  },
  {
    id: "eu-dialogue",
    organization: "Youth Roundtable Dialogue by European Union",
    position: "Student Representee",
    period: "April 2025",
    description: "Represented youth perspectives in EU-Bangladesh dialogue",
    achievements: [
      "Shared insights on education, climate action, governance, and economic cooperation",
      "Emphasized youth challenges, skills development, and green innovation",
      "Offered actionable recommendations to strengthen EU-Bangladesh partnerships with H.E. Michael Miller"
    ],
    image: "/images/volunteer/eu-dialogue.jpg"
  },
  {
    id: "brac-global",
    organization: "BRAC Global Discussion at BRAC University",
    position: "Student Representee",
    period: "December 2024",
    description: "Student representative in global strategic discussions",
    achievements: [
      "Engaged with BRAC International Holdings B.V. (BIHBV) & SBI board members",
      "Discussed student opportunities and improvements",
      "Highlighted achievements, fostered collaboration, and showcased leadership and strategic vision"
    ],
    image: "/images/volunteer/brac-global.jpg"
  },
  {
    id: "ilo-un",
    organization: "Youth Consultation: Young Women & Employment by ILO & UN Women",
    position: "Youth Panelist",
    period: "October 2024",
    description: "Panelist for youth employment consultation",
    achievements: [
      "Exchanged ideas on challenges and opportunities for young women in employment",
      "Focused on empowerment and workforce inclusion initiatives"
    ],
    image: "/images/volunteer/ilo-un-panel.jpg"
  }
];

export const certifications: Certification[] = [
  {
    id: "hult-prize",
    name: "HULT PRIZE at BRAC University",
    organization: "HULT PRIZE Foundation",
    period: "2021-2024",
    description: "Multi-year involvement in the world's largest student competition for social good",
    achievements: [
      "Head of Team Management (2023-24)",
      "Volunteer (2022-23)",
      "Semi-Finalist in On Campus Round (2021-22)",
      "Awarded Best Department for Operational Excellence, Email Etiquette, Recruiting, Project Management",
      "Served as liaison between Judges and Participants"
    ],
    image: "/images/certifications/hult-prize.jpg"
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { name: "Python", level: 85, category: "technical" },
  { name: "Java", level: 80, category: "technical" },
  { name: "M
