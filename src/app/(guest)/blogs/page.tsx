import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function BlogsPage() {
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
