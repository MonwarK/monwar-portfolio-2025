import { Database, ExternalLink, Github, Languages, Tv } from "lucide-react";

export const projects = [
  {
    title: "CineWave",
    thumbnail: "https://i.ibb.co/GvdRJs7r/Untitled-1.jpg",
    tech: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Clerk",
      "Supabase",
      "Stripe",
      "TMDB API",
      "Framer Motion",
      "Vercel",
    ],
    description:
      "CineWave is a fully responsive, Netflix-inspired streaming web application built with Next.js, Tailwind CSS, and TypeScript. Users can securely sign up or log in using Clerk, explore trending and popular titles via the TMDB API, and unlock premium features through Stripe-powered subscriptions. CineWave integrates video APIs to deliver access to thousands of movies and TV shows, with support for genre-based browsing, title search, and detailed movie pages featuring trailers and metadata. Smooth transitions are handled with Framer Motion, and the app is deployed on Vercel for fast, scalable performance.",
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
