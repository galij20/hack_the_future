export interface Trip {
    id: number
    destination: string
    description: string
    hotels: Hotel[]
  }
  
  export interface Hotel {
    id: number
    name: string
    description: string
    price: number
    rating: number
    imageUrl: string
  }
  
  const DUMMY_TRIPS: Trip[] = [
    {
      id: 1,
      destination: "Kathmandu, Nepal",
      description: "Explore the ancient temples and vibrant streets of Kathmandu, where tradition meets modernity in Nepal's bustling capital.",
      hotels: [
        {
          id: 101,
          name: "Hyatt Regency Kathmandu",
          description: "5-star luxury hotel with traditional architecture, featuring a spa, multiple restaurants, and views of the Boudhanath Stupa.",
          price: 200,
          rating: 4.9,
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/4e/d9/5b/exterior.jpg?w=700&h=-1&s=1"
        },
        {
          id: 102,
          name: "Dwarika's Hotel",
          description: "Heritage hotel showcasing Newari architecture and artifacts, offering luxury accommodations and authentic Nepali experiences.",
          price: 250,
          rating: 4.8,
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/84/f4/ed/facade.jpg?w=700&h=-1&s=1"
        }
      ]
    },
    {
      id: 2,
      destination: "Nagarkot, Nepal",
      description: "Experience breathtaking Himalayan sunrise views and peaceful mountain atmosphere in this scenic hill station.",
      hotels: [
        {
          id: 201,
          name: "Club Himalaya",
          description: "Mountain resort offering panoramic views of the Himalayas, with comfortable rooms and traditional hospitality.",
          price: 120,
          rating: 4.5,
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/3c/12/f6/club-himalaya-resort.jpg?w=700&h=-1&s=1"
        },
        {
          id: 202,
          name: "Mystic Mountain",
          description: "Modern resort with infinity pool and spectacular mountain views, perfect for romantic getaways.",
          price: 150,
          rating: 4.7,
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/46/05/4f/swimming-pool.jpg?w=700&h=-1&s=1"
        }
      ]
    },
    {
      id: 3,
      destination: "Bhaktapur, Nepal",
      description: "Step back in time in this ancient city, known for its preserved architecture, traditional pottery, and rich cultural heritage.",
      hotels: [
        {
          id: 301,
          name: "Heritage Hotel",
          description: "Traditional Newari-style hotel in the heart of ancient Bhaktapur, offering cultural experiences and comfort.",
          price: 80,
          rating: 4.4,
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/0b/cf/f6/heritage-hotel.jpg?w=700&h=-1&s=1"
        },
        {
          id: 302,
          name: "Planet Bhaktapur",
          description: "Boutique hotel with rooftop views of Bhaktapur Durbar Square, combining modern amenities with traditional charm.",
          price: 70,
          rating: 4.3,
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d0/6a/c1/planet-bhaktapur-hotel.jpg?w=700&h=-1&s=1"
        }
      ]
    }
  ];
  
  export const getAIRecommendations = async (
    destination: string, 
    days: number, 
    budget?: number
  ): Promise<Trip[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Filter trips based on destination if provided
    let filteredTrips = DUMMY_TRIPS;
    if (destination) {
      const searchTerm = destination.toLowerCase();
      filteredTrips = DUMMY_TRIPS.filter(trip => 
        trip.destination.toLowerCase().includes(searchTerm)
      );
    }

    // If no matches found, return all trips
    return filteredTrips.length > 0 ? filteredTrips : DUMMY_TRIPS;
  };
  
  export async function bookTrip(tripId: number): Promise<{ success: boolean }> {
    // Mock API call - replace with actual API call
    return { success: true }
  }
  
  export async function bookHotel(hotelId: number): Promise<{ success: boolean }> {
    // Mock API call - replace with actual API call
    return { success: true }
  }
  
  export interface TripHistory {
    id: number;
    destination: string;
    startDate: string;
    endDate: string;
    status: 'completed' | 'cancelled' | 'upcoming';
    cost: number;
    hotelName: string;
    imageUrl: string;
    highlights?: string[];
    rating?: number;
    review?: string;
  }
  
  const DUMMY_TRIP_HISTORY: TripHistory[] = [
    {
      id: 1,
      destination: "Mustang, Nepal",
      startDate: "2024-01-15",
      endDate: "2024-01-20",
      status: "completed",
      cost: 850,
      hotelName: "Royal Mustang Resort",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d4/a3/71/upper-mustang.jpg?w=700&h=-1&s=1",
      highlights: ["Upper Mustang Trek", "Lo Manthang Visit", "Apple Farm Tour"],
      rating: 4.8,
      review: "Amazing experience in the hidden kingdom. The landscapes were breathtaking and the cultural experience was unforgettable."
    },
    {
      id: 2,
      destination: "Lumbini, Nepal",
      startDate: "2023-11-10",
      endDate: "2023-11-13",
      status: "completed",
      cost: 450,
      hotelName: "Buddha Maya Garden Hotel",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/1f/07/36/maya-devi-temple-lumbini.jpg?w=700&h=-1&s=1",
      highlights: ["Maya Devi Temple", "World Peace Pagoda", "Monastery Tour"],
      rating: 4.6,
      review: "Peaceful spiritual journey to the birthplace of Buddha. The gardens and monasteries were serene and beautiful."
    },
    {
      id: 3,
      destination: "Chitwan, Nepal",
      startDate: "2023-09-05",
      endDate: "2023-09-09",
      status: "completed",
      cost: 650,
      hotelName: "Jungle Crown Resort",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d8/f6/5f/chitwan-national-park.jpg?w=700&h=-1&s=1",
      highlights: ["Safari Tour", "Elephant Bathing", "Tharu Cultural Show"],
      rating: 4.7,
      review: "Excellent wildlife experience. Saw rhinos, crocodiles, and various birds. The resort was comfortable and staff were friendly."
    },
    {
      id: 4,
      destination: "Bandipur, Nepal",
      startDate: "2024-04-15",
      endDate: "2024-04-18",
      status: "upcoming",
      cost: 380,
      hotelName: "Old Inn Bandipur",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/87/c7/e7/bandipur-nepal.jpg?w=700&h=-1&s=1",
      highlights: ["Heritage Walk", "Sunrise View", "Local Food Tour"]
    },
    {
      id: 5,
      destination: "Ilam, Nepal",
      startDate: "2023-12-01",
      endDate: "2023-12-04",
      status: "cancelled",
      cost: 420,
      hotelName: "Ilam Tea Resort",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d1/a6/6c/ilam-tea-gardens.jpg?w=700&h=-1&s=1",
      highlights: ["Tea Garden Visit", "Sunrise from Sandakpur", "Mai Pokhari"]
    }
  ];
  
  export const getTripHistory = async (): Promise<TripHistory[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return DUMMY_TRIP_HISTORY;
  };
  
  export const getTripById = async (id: number): Promise<TripHistory | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return DUMMY_TRIP_HISTORY.find(trip => trip.id === id);
  };
  
  export const filterTripsByStatus = async (status: 'completed' | 'cancelled' | 'upcoming'): Promise<TripHistory[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return DUMMY_TRIP_HISTORY.filter(trip => trip.status === status);
  };
  