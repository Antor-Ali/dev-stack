import type { Technology } from "../types";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="h-fit rounded-xl border border-[#e8edf3] bg-white p-5 shadow-[0_5px_18px_rgba(15,23,42,0.03)] lg:sticky lg:top-24">
      <div>
        <h2 className="text-[16px] font-bold text-[#182133]">Your Stack</h2>
        <p className="mt-1 text-[11px] text-[#a0aaba]">
          {stack.length} Technology{stack.length === 1 ? "" : "s"} Selected
        </p>
      </div>

      <div className="mt-5 space-y-2">
        {stack.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[#dfe5ec] px-4 py-8 text-center text-xs text-[#8b96a6]">
            No technologies selected yet.
            <br />
            Add technologies from the list.
          </div>
        ) : (
          stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-[#e5eaf0] px-3 py-2.5"
            >
              <img
                src={technology.icon}
                alt=""
                className="h-7 w-7 object-contain"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-[#293448]">
                  {technology.name}
                </p>
                <p className="text-[10px] text-[#8b96a6]">
                  {technology.category}
                </p>
              </div>
              <button
                onClick={() => onRemove(technology)}
                aria-label={`Remove ${technology.name}`}
                className="text-lg leading-none text-[#a9b2bf] hover:text-[#ed476c]"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="mt-5 w-full rounded-md border border-[#ffb8b8] py-2.5 text-[11px] font-semibold text-[#e94a4a] transition hover:bg-[#fff5f5] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </aside>
  );
}
