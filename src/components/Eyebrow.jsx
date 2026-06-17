// Section eyebrow: red square + uppercase label. `dark` flips text for dark sections.
export default function Eyebrow({ children, dark = false, className = '' }) {
  return (
    <div className={`eyebrow ${className}`}>
      <span className="eyebrow-square" />
      <span className={`eyebrow-label ${dark ? 'text-cream' : 'text-ink'}`}>{children}</span>
    </div>
  )
}
