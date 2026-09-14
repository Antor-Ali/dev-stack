import type { Technology } from "../types";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="card-shadow flex min-h-[250px] flex-col rounded-xl border border-[#e8edf3] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#dce3ec]">
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-8 w-8 object-contain"
          loading="lazy"
        />
        <span className="rounded-full bg-[#f4f8ff] px-3 py-1 text-[10px] font-semibold text-[#2291cf]">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-[17px] font-bold text-[#172033]">
        {technology.name}
      </h3>

      <p className="mt-2 line-clamp-3 text-[12px] leading-5 text-[#78869a]">
        {technology.description}
      </p>

      <div className="mt-auto">
        <div className="mt-4 flex items-center justify-between gap-2 text-[10px]">
          <span className="rounded bg-[#f4f6f8] px-2 py-1 text-[#667386]">
            {technology.category}
          </span>
          <span className="text-[#8994a5]">{technology.difficulty}</span>
          <span className="font-semibold text-[#667386]">
            <span className="text-[#f4b400]">★</span> {technology.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`mt-4 w-full rounded-md py-2.5 text-[11px] font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-[#eef2f5] text-[#7c8795]"
              : "bg-[#0d1320] text-white hover:bg-[#1b2434]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}
