import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DataRenderer from '@/components/DataRenderer';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator } from '@/components/ui';
import { setFilters } from '@/state/listings/filtersSlice';
import { fetchListings } from '@/state/listings/listingsSlice';

const HomePage = () => {
  const { listings, error, status } = useSelector((store) => store.listings);
  const { dates, guests, search } = useSelector((store) => store.filters);
  const dispatch = useDispatch();

  // udělat filtry jako global state - použítí redux?

  const filters = useMemo(
    () => ({ dates, guests, search }),
    [dates, guests, search],
  );

  useEffect(() => {
    const request = dispatch(fetchListings(filters));
    //  console.log(filters);
    return () => {
      request.abort();
    };
  }, [dispatch, filters]);

  const handleFilters = (filters) => {
    dispatch(setFilters(filters));
    //   dispatch(fetchListings(filters)); // Spustí nové načtení dle aktualizovaných filtrů
  };

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>
      <DataRenderer error={error} isLoading={status === 'loading'}>
        <ListingList listings={listings} />
      </DataRenderer>
    </div>
  );
};

export default HomePage;
