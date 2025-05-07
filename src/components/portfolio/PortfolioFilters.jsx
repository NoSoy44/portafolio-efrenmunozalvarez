export default function PortfolioFilters({ tags, activeTag, setActiveTag }) {
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeTag === tag
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "bg-transparent text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }