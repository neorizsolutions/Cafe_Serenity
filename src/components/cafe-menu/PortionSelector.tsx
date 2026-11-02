'use client';

export default function PortionSelector({ name, portions, selected, onSelect }: { name: string; portions: { half: number; full: number }; selected: 'half' | 'full'; onSelect: (portion: 'half' | 'full') => void }) {
  return (
    <div>
      <div className="portion-selector" role="group" aria-label={`Portion size for ${name}`}>
        <span className="portion-selector-highlight" data-full={selected === 'full'} aria-hidden="true" />
        {(['half', 'full'] as const).map(portion => (
          <button key={portion} type="button" aria-pressed={selected === portion} onClick={() => onSelect(portion)} className="portion-option">
            <span className="text-xs font-medium capitalize">{portion}</span>
            <span className="mt-1 block text-xl font-bold">₹{portions[portion]}</span>
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground" aria-live="polite" aria-atomic="true">
        <span className="portion-size-symbol" data-full={selected === 'full'} aria-hidden="true" />
        <span key={selected} className="portion-selection-label">{selected === 'half' ? 'Half' : 'Full'} portion · ₹{portions[selected]}</span>
      </div>
    </div>
  );
}
