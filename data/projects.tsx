import { Database, ExternalLink, Github, Languages, Tv } from "lucide-react";

export const projects = [
  {
    title: "CineWave",
    thumbnail: "https://i.ibb.co/pBKXRmhG/image.png",
    tech: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Clerk",
      "Stripe",
      "TMDB API",
      "Framer Motion",
      "Vercel",
    ],
    description:
      "CineWave is a fully responsive, Netflix-inspired web application built with Next.js, Tailwind CSS, and TypeScript. It allows users to sign up or log in securely with Clerk, explore trending movies and shows using data from the TMDB API, and manage subscriptions through Stripe for access to premium features. Users can browse by genre, search titles, and view detailed movie pages with trailers and descriptions. The app includes smooth transitions via Framer Motion and is deployed on Vercel for fast, global performance.",
    icon: <Tv className="w-6 h-6" />,
    link: [
      {
        link: "https://cine-wave-opal.vercel.app/",
        caption: "View Project",
        logo: <ExternalLink className="w-5 h-5 mr-3" />,
      },
      {
        link: "https://github.com/MonwarK/CineWave",
        caption: "GitHub Repo",
        logo: <Github className="w-5 h-5 mr-3 " />,
      },
    ],
  },
  {
    title: "Language Learn",
    thumbnail: "https://i.ibb.co/ZpkBWpnG/language-learn-1.jpg",
    tech: [
      "React Native",
      "TypeScript",
      "Clerk",
      "Supabase",
      "Google Gemini",
      "Expo",
      "NativeWind",
      "Voice/Audio APIs",
    ],
    description:
      "A cross-platform mobile language learning app built with React Native, designed to help users practice vocabulary, grammar, and pronunciation interactively. The app uses AI-driven question generation to provide personalised practice exercises, with real-time feedback on answers. Authentication is handled with Clerk, while user progress, friends, and learning modules are stored using Supabase. Users can track their learning journey, unlock new modules, and even compare progress with friends. The app includes voice input, multiple-choice quizzes, and a clean, responsive UI for an engaging learning experience.",
    icon: <Languages className="w-6 h-6" />,
    link: [
      {
        link: "https://github.com/MonwarK/language-learn",
        caption: "GitHub Repo",
        logo: <Github className="w-5 h-5 mr-3 " />,
      },
    ],
  },
];
