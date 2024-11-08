import { Search } from 'lucide-react';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, DateRangePicker, Input, Stepper } from '@/components/ui';

const ListingFilters = ({ onChange }) => {
  const { dates, guests, search } = useSelector((store) => store.filters);

  const [datesX, setDates] = useState(dates);
  const [guestsX, setGuests] = useState(guests);
  const [searchX, setSearch] = useState(search);

  const handleSubmit = () => {
    onChange({ dates: datesX, guests: guestsX, search: searchX });
  };

  //odkud provádět dispatch... z filtrů, nebo z homepage

  return (
    <div className='flex flex-col items-center justify-center gap-2 sm:flex-row'>
      <Input
        className=' w-[80vw] md:w-[300px] lg:w-[400px]'
        placeholder='Search destinations'
        value={searchX}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DateRangePicker
        className=' w-[80vw] md:w-[300px] '
        value={datesX}
        onChange={setDates}
        minDate={new Date()}
        placeholder='Add dates'
      />
      <Stepper
        className='w-[80vw] md:w-[200px]'
        label='guests'
        value={guestsX}
        onChange={setGuests} // Převést na číslo
      />

      <Button className=' w-[80vw] md:w-[50px] ' onClick={handleSubmit}>
        <Search className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default memo(ListingFilters);
