import GitHubLogo from "../../../public/GitHubLogo.svg";
import LinkedInLogo from "../../../public/LinkedInLogo.svg";
import { Github, Linkedin, Mail } from "lucide-react";

export const Links = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export const Socials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/hasnain-khan-b05b3b252/",
    logo: LinkedInLogo,
  },
  { name: "GitHub", href: "https://github.com/HK9750", logo: GitHubLogo },
];

export const Info = [
  { value: "3", label: "Programming Languages" },
  { value: "6+", label: "Development Tools" },
  { value: "1", label: "Years of Experience" },
];

export const footerLinks = [
  {
    icon: <Github className="h-6 w-6" />,
    href: "https://github.com/HK9750",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: "https://www.linkedin.com/in/hasnain-khan-b05b3b252/",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    href: "mailto:hasnainkhan9750@gmail.com",
    label: "Email",
  },
];
