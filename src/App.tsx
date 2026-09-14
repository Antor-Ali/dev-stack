import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import type { Technology } from "./types";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        // The technology data is loaded from a JSON file.
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch {
        toast.error("Could not load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const stackIds = useMemo(() => new Set(stack.map((item) => item.id)), [stack]);

  const handleAdd = (technology: Technology) => {
    if (stackIds.has(technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (technology: Technology) => {
    setStack((current) =>
      current.filter((item) => item.id !== technology.id)
    );
    toast.info(`${technology.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  const scrollToTechnologies = () => {
    document.getElementById("technologies")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const showComingSoon = () => {
    toast.info("This action is ready for your next step.");
  };

  return (
    <>
      <Navbar onSignIn={showComingSoon} onSignUp={showComingSoon} />

      <main>
        <Hero onExplore={scrollToTechnologies} />

        <section id="technologies" className="container-width scroll-mt-24 py-16">
          <div className="mb-7">
            <h2 className="text-[29px] font-extrabold tracking-[-1px] text-[#162033]">
              Explore the <span className="brand-gradient">Technologies</span>
            </h2>
            <p className="mt-2 text-[13px] text-[#8290a3]">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid items-start grid-cols-[minmax(0,1fr)_300px] gap-7 max-lg:grid-cols-1">
            <div>
              {loading ? (
                <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-[#e8edf3] bg-white">
                  <div className="flex flex-col items-center gap-3 text-sm text-[#7c899a]">
                    <span className="h-8 w-8 animate-spin rounded-full border-2 border-[#e7d7f8] border-t-[#e13c81]" />
                    Loading technologies...
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isAdded={stackIds.has(technology.id)}
                      onAdd={handleAdd}
                    />
                  ))}
                </div>
              )}
            </div>

            <StackSidebar
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </section>

        <section id="projects" className="container-width scroll-mt-24 py-16">
          <div className="rounded-2xl border border-[#e8edf3] bg-[#fafbfc] p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e13c81]">
              Projects
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#172033]">
              Build a stack that fits your project.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#7c899a]">
              Compare technologies, select your favorites, and keep your
              development choices organized in one place.
            </p>
          </div>
        </section>

        <section id="about" className="container-width scroll-mt-24 py-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#e13c81]">
              About
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#172033]">
              Your development stack, simplified.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#7c899a]">
              Dev Stack is a clean technology explorer for developers who want
              to compare tools and quickly create a shortlist for their next
              application.
            </p>
          </div>
        </section>

        <section id="contact" className="container-width scroll-mt-24 py-16">
          <div className="rounded-2xl bg-[#101625] p-8 text-white md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Ready to build?</h2>
              <p className="mt-2 text-sm text-slate-300">
                Choose your technologies and create your ideal stack.
              </p>
            </div>
            <button
              onClick={scrollToTechnologies}
              className="brand-button mt-5 rounded-md px-5 py-3 text-sm font-semibold md:mt-0"
            >
              Explore Technologies
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2200}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}
