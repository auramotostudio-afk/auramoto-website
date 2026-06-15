type ImagePanelProps = {
  src: string;
  label?: string;
  className?: string;
};

export function ImagePanel({
  src,
  label,
  className = '',
}: ImagePanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-zinc-900 ${className}`}
    >
      <img
        src={src}
        alt={label || 'AuraMoto'}
        className="h-full w-full object-cover"
      />

      {label && (
        <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur">
          {label}
        </div>
      )}
    </div>
  );
}