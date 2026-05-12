import { geoApi } from '@/services/api';
import { filterIndiaCities } from '@/utils/indiaCityFilter';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

type Props = {
  value: string;
  onChange: (next: string) => void;
  error?: string | null;
  onBlur?: () => void;
};

export default function IndiaCityCombobox({
  value,
  onChange,
  error,
  onBlur,
}: Props) {
  const [allCities, setAllCities] = useState<string[]>([]);
  const [loadState, setLoadState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [loadMessage, setLoadMessage] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    let cancelled = false;
    setLoadState('loading');
    setLoadMessage('');
    geoApi
      .getIndiaCities()
      .then((cities) => {
        if (!cancelled) {
          setAllCities(cities);
          setLoadState('idle');
        }
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setLoadState('error');
          setLoadMessage(
            e instanceof Error ? e.message : 'Unable to load cities.',
          );
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(
    () => filterIndiaCities(allCities, query, 250),
    [allCities, query],
  );

  const showClear = Boolean(value || query);

  const clear = useCallback(() => {
    onChange('');
    setQuery('');
  }, [onChange]);

  const borderClass = error ? 'border-red-400' : 'border-gray-300';

  return (
    <div className="relative">
      <input type="hidden" name="city" value={value} required readOnly />
      <Combobox
        value={value || null}
        onChange={(next) => {
          onChange(next ?? '');
          setQuery('');
        }}
        onClose={() => setQuery('')}
        nullable
      >
        <div className="relative">
          <ComboboxInput
            id="contact-city-combobox"
            autoComplete="off"
            displayValue={(v: string | null) => query || (v ?? '')}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={onBlur}
            placeholder={
              loadState === 'loading' ? 'Loading cities...' : 'Search city...'
            }
            disabled={loadState === 'loading' || loadState === 'error'}
            className={`w-full rounded-md border bg-white py-2.5 pl-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:py-3 ${borderClass}`}
            aria-invalid={Boolean(error)}
            aria-busy={loadState === 'loading'}
          />
          {showClear ? (
            <button
              type="button"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-2xl font-semibold leading-none text-gray-600 hover:text-gray-900"
              aria-label="Clear city"
              onMouseDown={(e) => e.preventDefault()}
              onClick={clear}
            >
              ×
            </button>
          ) : null}
        </div>
        <ComboboxOptions
          modal
          portal
          anchor={{ to: 'bottom start', gap: '4px' }}
          className="z-[200] max-h-60 overflow-auto rounded-md border border-gray-200 bg-white py-1 text-sm shadow-xl outline-none"
        >
          {loadState === 'loading' ? (
            <div className="px-3 py-2 text-gray-500">Loading cities...</div>
          ) : loadState === 'error' ? (
            <div className="px-3 py-2 text-red-700">{loadMessage}</div>
          ) : filtered.length === 0 ? (
            <div className="px-3 py-2 text-gray-500">No cities found.</div>
          ) : (
            filtered.map((line) => (
              <ComboboxOption
                key={line}
                value={line}
                className="cursor-pointer px-3 py-2 text-gray-900 data-[focus]:bg-emerald-50"
              >
                {line}
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      </Combobox>
      {error ? <p className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
