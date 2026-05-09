interface PhotoPlaceholderProps {
  label: string;
  aspectClass?: string;
  className?: string;
}

export default function PhotoPlaceholder({
  label,
  aspectClass = "aspect-video",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`${aspectClass} ${className} flex items-center justify-center border-2 border-dashed border-charcoal-light bg-charcoal-mid`}
    >
      <div className="text-center px-4">
        <div className="text-muted text-sm font-medium uppercase tracking-widest mb-1">
          Photo Placeholder
        </div>
        <div className="text-muted/60 text-xs">{label}</div>
      </div>
    </div>
  );
}
