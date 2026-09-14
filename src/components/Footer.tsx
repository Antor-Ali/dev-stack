export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#e9edf2]">
      <div className="container-width grid grid-cols-[1.7fr_0.8fr_0.8fr_0.8fr] gap-10 py-12 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#a83be8] to-[#ef3c91] text-[10px] font-extrabold text-white">
              DS
            </span>
            <span className="text-[18px] font-extrabold">
              Dev <span className="brand-gradient">Stack</span>
            </span>
          </a>
          <p className="mt-4 max-w-[310px] text-xs leading-6 text-[#8995a7]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-5 flex gap-5 text-[11px] font-semibold text-[#526074]">
            <a href="#contact">GitHub</a>
            <a href="#contact">Twitter</a>
            <a href="#contact">LinkedIn</a>
          </div>
        </div>

        <FooterGroup title="PRODUCT" links={["Home", "Technologies", "Projects"]} />
        <FooterGroup title="COMPANY" links={["About", "Contact", "Careers"]} />
        <FooterGroup title="LEGAL" links={["Privacy Policy", "Terms of Service"]} />
      </div>

      <div className="container-width flex items-center justify-between border-t border-[#eef1f4] py-6 text-[11px] text-[#a0aaba] max-sm:flex-col max-sm:gap-3">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-[10px] font-bold tracking-wide text-[#39465a]">{title}</h3>
      <div className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="text-[11px] text-[#8290a3] hover:text-[#e13b7d]">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
