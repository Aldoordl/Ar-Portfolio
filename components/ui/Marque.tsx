type MarqueeProps = {
  items: string[];
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
  speed?: "slow" | "normal" | "fast";
  variant?: "ui" | "custom";
};

export default function Marquee({
  items,
  className = "",
  trackClassName = "",
  itemClassName = "",
  speed = "normal",
  variant = "ui",
}: MarqueeProps) {
  const duplicatedItems = [...items, ...items];

  const rootClassName =
    variant === "custom"
      ? className
      : ["ui-marquee", className].filter(Boolean).join(" ");

  const marqueeTrackClassName =
    variant === "custom"
      ? trackClassName
      : [
          "ui-marquee__track",
          `ui-marquee__track--${speed}`,
          trackClassName,
        ]
          .filter(Boolean)
          .join(" ");

  return (
    <div className={rootClassName} aria-hidden="true">
      <div className={marqueeTrackClassName}>
        {duplicatedItems.map((item, index) => (
          <span className={itemClassName} key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}