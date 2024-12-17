import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";


export const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#feature" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#price" },
  { label: "Testimonials", href: "#testimonial" },
];

export const testimonials = [
  {
    user: "Egwumgba Felix .C.",
    company: "Stellar Solutions",
    image: user1,
    text: "This tool has transformed our business!",
  },
  {
    user: "Ogunlade Ayobami Jr",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. T",
  },
  {
    user: "Ewurum Immanuel",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure.",
  },
  
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Task Automation",
    description:
      "Say goodbye to monotonous tasks. Our tool automates routine processes, allowing you to focus on what truly matters.",
  },
  {
    icon: <Fingerprint />,
    text: "Real-Time Collaboration",
    description:
      "Work seamlessly with your team, no matter where they are. Including shared documents, live chat, and instant updates.",
  },
  {
    icon: <ShieldHalf />,
    text: "Advanced Analytics",
    description:
      "Make data-driven decisions with our powerful analytics tools.",
  },
  {
    icon: <BatteryCharging />,
    text: "Customizable Workflows",
    description:
      "Design and customize workflows that fit your unique business processes.",
  },
  {
    icon: <PlugZap />,
    text: "Secure Data Storage",
    description:
      "Your data's security is our top priority. We provide robust encryption and secure storage solutions",
  },
  {
    icon: <GlobeLock />,
    text: "Integration with Popular Tools",
    description:
      "Easily connect with the tools you already use.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
