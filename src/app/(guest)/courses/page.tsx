import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
// const courses = [
//   {
//     id: 1,
//     name: "German for Beginners (A1)",
//     description:
//       "Start your German language journey with this comprehensive beginner&apos;s course. Learn essential vocabulary, grammar, and basic conversation skills.",
//     level: "Beginner",
//     duration: "12 weeks",
//     lessons: 48,
//     price: "€299",
//     features: [
//       "Basic vocabulary and grammar",
//       "Everyday conversations",
//       "Pronunciation practice",
//       "Cultural insights",
//     ],
//   },
//   {
//     id: 2,
//     name: "Intermediate German (B1)",
//     description:
//       "Take your German skills to the next level. Focus on complex grammar structures, expand your vocabulary, and improve your fluency.",
//     level: "Intermediate",
//     duration: "16 weeks",
//     lessons: 64,
//     price: "€399",
//     features: [
//       "Advanced grammar",
//       "Complex conversations",
//       "Writing skills",
//       "Business German basics",
//     ],
//   },
//   {
//     id: 3,
//     name: "Advanced German (C1)",
//     description:
//       "Master German at an advanced level. Perfect your grammar, expand your vocabulary, and achieve near-native fluency.",
//     level: "Advanced",
//     duration: "20 weeks",
//     lessons: 80,
//     price: "€499",
//     features: [
//       "Complex grammar structures",
//       "Academic writing",
//       "Professional communication",
//       "Cultural nuances",
//     ],
//   },
//   {
//     id: 4,
//     name: "Business German",
//     description:
//       "Specialized course for professionals. Learn business vocabulary, professional communication, and German business culture.",
//     level: "Intermediate",
//     duration: "8 weeks",
//     lessons: 32,
//     price: "€349",
//     features: [
//       "Business vocabulary",
//       "Professional emails",
//       "Meeting participation",
//       "Cultural business practices",
//     ],
//   },
// ];

// const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  return (
    <div className="">
      {/* Hero section */}
      <div className="h-[35rem] w-full flex items-center justify-center  antialiased relative">
        <div
          aria-hidden
          className="hidden dark:absolute top-[-40%] left-1/2 -translate-x-1/2 w-[400px] h-[800px] rotate-[-25deg] pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at top, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0.5) 0%, transparent 80%)`,
            filter: "blur(100px)",
          }}
        />

        <div className="p-4 max-w-7xl mx-auto  flex flex-col items-center justify-center relative z-10 w-full md:pt-0">
          <h1
            className="py-4 text-2xl md:text-4xl font-bold text-center bg-clip-text text-transparent 
              text-gray-900 dark:text-white  "
          >
            The Page is under maintenance
          </h1>
        </div>
        {/* Show these effects only in dark mode */}
        <div className="hidden dark:block absolute inset-0 z-0">
          <ShootingStars />
          <StarsBackground />
        </div>
      </div>
    </div>
  );
}
