import { Search } from 'lucide-react';
import { memo, useState } from 'react';

import { Button, DateRangePicker, Input, Stepper } from '@/components/ui';

const ListingFilters = ({ onChange }) => {
  const [dates, setDates] = useState();
  const [guests, setGuests] = useState(0);
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    onChange({ dates, guests, search });
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2 sm:flex-row'>
      <Input
        className=' w-[80vw] md:w-[300px] lg:w-[400px]'
        placeholder='Search destinations'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DateRangePicker
        className=' w-[80vw] md:w-[300px] '
        value={dates}
        onChange={setDates}
        minDate={new Date()}
        placeholder='Add dates'
      />
      <Stepper
        className=' w-[80vw] md:w-[200px] '
        label='guest'
        value={guests}
        onChange={setGuests}
      />
      <Button className=' w-[80vw] md:w-[50px] ' onClick={handleSubmit}>
        <Search className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default memo(ListingFilters);
