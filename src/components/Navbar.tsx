import { useState } from "react";

interface NavbarProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const links = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar({ onSignIn, onSignUp }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eef1f5] bg-white/95 backdrop-blur">
      <div className="container-width flex h-[72px] items-center justify-between">
        <button
          className="hidden text-2xl text-[#111827] max-md:block"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <a href="#home" className="flex items-center gap-2 max-md:mx-auto">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#a83be8] to-[#ef3c91] text-[10px] font-extrabold text-white">
            DS
          </span>
          <span className="text-[18px] font-extrabold tracking-[-0.5px]">
            Dev <span className="brand-gradient">Stack</span>
          </span>
        </a>

        <nav className="absolute left-1/2 flex -translate-x-1/2 gap-8 max-md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-[13px] font-medium transition hover:text-[#e12c79] ${
                link === "Home" ? "text-[#e12c79]" : "text-[#56657b]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 max-md:gap-2">
          <button
            onClick={onSignIn}
            className="text-[13px] font-medium text-[#56657b] hover:text-[#111827]"
          >
            Sign In
          </button>
          <button
            onClick={onSignUp}
            className="brand-button rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm"
          >
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#eef1f5] bg-white px-5 py-4 md:hidden">
          <div className="container-width flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#56657b]"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
