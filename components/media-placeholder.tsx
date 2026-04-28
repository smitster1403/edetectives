type MediaPlaceholderProps = {
  label: string;
  detail: string;
  ratio?: "wide" | "square" | "portrait";
};

const ratioClass: Record<NonNullable<MediaPlaceholderProps["ratio"]>, string> = {
  wide: "aspect-[16/9]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

export function MediaPlaceholder({
  label,
  detail,
  ratio = "wide",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`group relative overflow-hidden ${ratioClass[ratio]}`}
      style={{ border: "1px solid var(--border)", background: "var(--bg-muted)" }}
      aria-label={`${label} placeholder`}
    >
      <div className="relative flex h-full flex-col justify-between p-5">
        <span className="data-label">Image Placeholder</span>
        <div>
          <p className="text-sm font-semibold leading-6" style={{ color: "var(--text-body)" }}>{label}</p>
          <p className="mt-1.5 text-xs leading-5" style={{ color: "var(--text-muted)" }}>{detail}</p>
        </div>
      </div>
    </div>
  );
}
