export default function ProgressHeader({ step, percent, title, subtitle }) {
  return (
    <div className="mb-stack-lg">
      <div className="mb-unit flex items-end justify-between">
        <span className="tracking-[0.1em] text-xs font-semibold uppercase text-secondary">
          Step {step} of 4
        </span>
        <span className="text-xs text-on-surface-variant">{percent}% Complete</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
        <div className="h-full rounded-full bg-secondary" style={{ width: `${percent}%` }} />
      </div>
      <h1 className="mt-stack-md font-heading text-2xl font-semibold">{title}</h1>
      {subtitle ? <p className="mt-unit text-on-surface-variant">{subtitle}</p> : null}
    </div>
  );
}
