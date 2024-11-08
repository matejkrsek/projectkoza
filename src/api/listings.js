import { isListingAvailable } from './data/listings';
import { getDatabaseTable } from './helpers';

// Gets listing by id
export const getListingById = (id) => {
  const listings = getDatabaseTable('listings');
  if (!listings) {
    console.log('No listings table found');
    return;
  }

  return listings.find((listing) => listing.id === id);
};

// Gets listings using optional date range and search parameters
export const getListings = (params = {}) => {
  const { dates, guests, search } = params;

  // Gets the listings table
  const listings = getDatabaseTable('listings');
  if (!listings) {
    console.log('No listings table found');
    return;
  }

  // Sets a new variable for the filtered listings
  let filteredListings = listings;

  // Handles date range
  if (dates) {
    filteredListings = filteredListings.filter((listing) =>
      isListingAvailable(listing, dates),
    );
  }

  // Handles guests
  if (guests) {
    console.log('i was here ' + guests);
    filteredListings = filteredListings.filter(
      (listing) => guests <= listing.maxGuests,
    );
  }

  // Handles search
  if (search) {
    filteredListings = filteredListings.filter((listing) =>
      listing.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return filteredListings;
};
