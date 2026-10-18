import type { StaticImageData } from "next/image";
import heroImg from "@/public/images/hero.jpg";
import roomImg from "@/public/images/room1.jpg";
import equipmentImg from "@/public/images/equipment.jpg";
import equipment2Img from "@/public/images/equipment2.jpg";
import strengthImg from "@/public/images/strengthtrainer.jpg";
import conditioningImg from "@/public/images/conditioningtrainer.jpg";
import boxingImg from "@/public/images/boxingcoach.jpg";

export const heroImage: StaticImageData = heroImg;

export const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#schedule", label: "Schedule" },
  { href: "#coaches", label: "Coaches" },
  { href: "#membership", label: "Membership" },
];

export const disciplines = [
  "Strength",
  "Conditioning",
  "Olympic lifting",
  "Mobility",
  "Boxing",
  "Open gym",
];

export type Program = {
  number: string;
  name: string;
  description: string;
  meta: string;
};

export const programs: Program[] = [
  {
    number: "01",
    name: "Barbell Strength",
    description:
      "Squat, bench, deadlift and press, coached in small groups with your numbers logged every session.",
    meta: "60 min · All levels",
  },
  {
    number: "02",
    name: "Engine",
    description:
      "Rowers, sleds, bikes and carries. Interval conditioning that builds a gas tank you can actually use.",
    meta: "45 min · All levels",
  },
  {
    number: "03",
    name: "Fight Club",
    description:
      "Pad work, bag rounds and footwork drills. Boxing fundamentals for fitness — sparring optional.",
    meta: "50 min · Beginner+",
  },
  {
    number: "04",
    name: "Restore",
    description:
      "Mobility, breathwork and guided stretching to keep you training hard without breaking down.",
    meta: "40 min · All levels",
  },
];

export const facilityPhotos: { src: StaticImageData; alt: string; wide: boolean }[] = [
  { src: roomImg, alt: "Bright training room with treadmills, cross trainers, dumbbell rack, cable machine and lockers", wide: true },
  { src: equipmentImg, alt: "Rack of medicine balls beside stacked weight plates and sled posts", wide: false },
  { src: equipment2Img, alt: "Rubber-floored training area with kettlebells, medicine ball shelves, gymnastic rings, barbell rack and pull-up rig", wide: false },
];

export const facilityFeatures = [
  "Barbell racks, rigs & calibrated plates",
  "Kettlebells, medicine balls and gymnastic rings",
  "Treadmills, cross trainers and cable machines",
  "Lockers, showers and towel service",
];

export const scheduleDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

// "—" renders muted (no class); "Team WOD" renders as the highlighted badge.
export const schedule: { time: string; classes: string[] }[] = [
  { time: "6:00am", classes: ["Strength", "Engine", "Strength", "Engine", "Strength", "—"] },
  { time: "9:00am", classes: ["Restore", "Fight Club", "Restore", "Fight Club", "Restore", "Team WOD"] },
  { time: "12:15pm", classes: ["Engine", "Strength", "Engine", "Strength", "Engine", "Open gym"] },
  { time: "6:00pm", classes: ["Strength", "Fight Club", "Strength", "Fight Club", "Engine", "—"] },
];

export const highlightedClass = "Team WOD";

export const coaches = [
  { name: "Marcus Reed", role: "Head of Strength · USAW Level 2", image: strengthImg, position: "55%" },
  { name: "Daniel Reyes", role: "Conditioning · CSCS", image: conditioningImg, position: "35%" },
  { name: "Jason Brooks", role: "Boxing · USA Boxing Coach", image: boxingImg, position: "55%" },
];

export type Plan = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Open Gym",
    price: "$59",
    features: ["Full floor access, 5am – 11pm", "Locker & shower access", "One intro session with a coach"],
  },
  {
    name: "Unlimited",
    price: "$129",
    featured: true,
    features: [
      "Everything in Open Gym",
      "All classes, every program",
      "Quarterly progress check-in",
      "Bring a friend free, once a month",
    ],
  },
  {
    name: "Coached",
    price: "$249",
    features: ["Everything in Unlimited", "Weekly 1:1 session", "Individual program in the app", "Nutrition guidance"],
  },
];

export const goals = ["Get stronger", "Improve conditioning", "Learn to box", "Move better"] as const;

export const footer = {
  address: ["214 Foundry Street", "Portland, OR 97214"],
  hours: ["Mon – Fri · 5am – 11pm", "Sat – Sun · 7am – 8pm"],
  contact: [
    { label: "(503) 555-0142", href: "tel:+15035550142" },
    { label: "hello@ironworksgym.com", href: "mailto:hello@ironworksgym.com" },
    { label: "Instagram", href: "#join" },
  ],
};
