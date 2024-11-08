import * as React from 'react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

const Stepper = React.forwardRef(
  ({ className, label, onChange, value, ...props }, ref) => {
    // Funkce pro změnu hodnoty při zadání pouze číselných znaků
    const handleChange = (e) => {
      const newValue = e.target.value;

      // Povoluje pouze číslice od 0 do 9
      if (/^\d*$/.test(newValue)) {
        onChange(newValue === '' ? '' : Number(newValue));
      }
    };

    return (
      <div
        className={cn(
          'flex h-10 min-w-[150px] items-center justify-between gap-2 rounded-md border border-input bg-background py-2 text-sm',
          className,
        )}
      >
        <Button
          disabled={value === 0 || value === ''}
          variant='link'
          onClick={() => onChange(value - 1)}
        >
          -
        </Button>

        {/* Input pro zadání hodnoty pouze číselných znaků */}
        <input
          type='text'
          value={value === '' ? '' : value} // Zobrazení prázdného pole, pokud je hodnota ''
          onChange={handleChange}
          className='h-full w-full border-none bg-transparent text-center outline-none'
          ref={ref}
          {...props}
          placeholder='guests' // Výchozí text v placeholder
        />

        <Button
          // Tlačítko + je aktivní, pokud je hodnota prázdná (placeholder) nebo mezi 0 a 100
          disabled={value === 100}
          variant='link'
          onClick={() => onChange(value === '' ? 1 : value + 1)} // Pokud je prázdné, nastavíme hodnotu na 1
        >
          +
        </Button>
      </div>
    );
  },
);

Stepper.displayName = 'Stepper';

export { Stepper };
