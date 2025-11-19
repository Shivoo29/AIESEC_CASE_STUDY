export interface TeamMember {
  name: string;
  image: string;
  role: string;
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    email: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Shivam Kumar Jha",
    image: "/shivam.jpg",
    role: "Team Lead",
    socials: {
      linkedin: "https://www.linkedin.com/in/shivam-kumar-jha-35686a238/",
      github: "https://github.com/Shivoo29",
      twitter: "https://x.com/skj_thinker",
      email: "mailto:2004skj@gmail.com"
    }
  },
  {
    name: "Ashish Negi",
    image: "/ashish.jpg",
    role: "Technology Lead",
    socials: {
      linkedin: "https://www.linkedin.com/in/ashish-negi-6754181a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/05Ashish",
      twitter: "https://x.com/AshishN10520427",
      email: "mailto:ashish.negi@example.com"
    }
  },
  {
    name: "Ahaann Wadhwa",
    image: "/ahaann.jpg",
    role: "Development Lead",
    socials: {
      linkedin: "https://www.linkedin.com/in/ahaann-wadhwa-741b60311/",
      github: "https://github.com/ahaann",
      twitter: "https://twitter.com/ahaann",
      email: "mailto:ahaannwadhwa@gmail.com"
    }
  },
  {
    name: "Vaibhav Jain",
    image: "/vaibhav.jpg",
    role: "Research Lead",
    socials: {
      linkedin: "https://www.linkedin.com/in/vaibhav-jain-879263324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/vaibhavj22-05",
      twitter: "https://x.com/Vaibhavj_26?t=L17HhpO_7GjE61QlNL8ysw&s=09",
      email: "mailto:vaibhav646348@gmail.com"
    }
  }
];
  