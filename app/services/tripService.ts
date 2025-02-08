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
    // Province 1
    {
      id: 1,
      destination: "Taplejung, Province 1",
      description: "Home to Kanchenjunga, the third highest mountain in the world.",
      hotels: [
        {
          id: 101,
          name: "Kanchenjunga View Resort",
          description: "Mountain view resort with basic amenities for trekkers.",
          price: 4000,
          rating: 4.0,
          imageUrl: "/hotels/taplejung1.jpg"
        },
        {
          id: 102,
          name: "Pathibhara Guest House",
          description: "Traditional guest house near Pathibhara temple.",
          price: 2500,
          rating: 3.8,
          imageUrl: "/hotels/taplejung2.jpg"
        }
      ]
    },
    {
      id: 2,
      destination: "Sankhuwasabha, Province 1",
      description: "Gateway to Makalu Barun National Park.",
      hotels: [
        {
          id: 201,
          name: "Makalu Base Camp Lodge",
          description: "Basic accommodation for mountaineers and trekkers.",
          price: 35000,
          rating: 4.1,
          imageUrl: "/hotels/sankhuwasabha1.jpg"
        },
        {
          id: 202,
          name: "Khandbari Hill Resort",
          description: "Comfortable stay with mountain views.",
          price: 45000,
          rating: 4.2,
          imageUrl: "/hotels/sankhuwasabha2.jpg"
        }
      ]
    },
    {
      id: 3,
      destination: "Solukhumbu, Province 1",
      description: "Home to Mount Everest and Sherpa culture.",
      hotels: [
        {
          id: 301,
          name: "Everest View Hotel",
          description: "Highest placed hotel with panoramic mountain views.",
          price: 200000,
          rating: 4.8,
          imageUrl: "/hotels/solukhumbu1.jpg"
        },
        {
          id: 302,
          name: "Namche Bazaar Lodge",
          description: "Traditional Sherpa hospitality in the heart of Khumbu.",
          price: 80000,
          rating: 4.5,
          imageUrl: "/hotels/solukhumbu2.jpg"
        }
      ]
    },
    // Continue with more districts...

    // Bagmati Province
    {
      id: 20,
      destination: "Kathmandu, Bagmati",
      description: "Capital city with rich cultural heritage and modern amenities.",
      hotels: [
        {
          id: 2001,
          name: "Hyatt Regency Kathmandu",
          description: "5-star luxury hotel near Boudhanath Stupa.",
          price: 25000,
          rating: 4.9,
          imageUrl: "/hotels/kathmandu1.jpg"
        },
        {
          id: 2002,
          name: "Dwarika's Hotel",
          description: "Heritage hotel with traditional Newari architecture.",
          price: 30000,
          rating: 4.8,
          imageUrl: "/hotels/kathmandu2.jpg"
        }
      ]
    },
    {
      id: 21,
      destination: "Lalitpur, Bagmati",
      description: "City of fine arts and cultural heritage.",
      hotels: [
        {
          id: 2101,
          name: "Patan Heritage Inn",
          description: "Boutique hotel in historic Patan Durbar area.",
          price: 120000,
          rating: 4.6,
          imageUrl: "/hotels/lalitpur1.jpg"
        },
        {
          id: 2102,
          name: "Traditional Comfort",
          description: "Modern hotel with traditional touch.",
          price: 100000,
          rating: 4.4,
          imageUrl: "/hotels/lalitpur2.jpg"
        }
      ]
    },

    // Gandaki Province
    {
      id: 30,
      destination: "Pokhara, Gandaki",
      description: "Lake city with stunning Annapurna range views and adventure sports.",
      hotels: [
        {
          id: 3001,
          name: "Fish Tail Lodge",
          description: "Luxury lakeside resort with mountain views.",
          price: 180000,
          rating: 4.7,
          imageUrl: "/hotels/pokhara1.jpg"
        },
        {
          id: 3002,
          name: "Temple Tree Resort & Spa",
          description: "Boutique resort with traditional architecture.",
          price: 150000,
          rating: 4.6,
          imageUrl: "/hotels/pokhara2.jpg"
        }
      ]
    },
    {
      id: 31,
      destination: "Mustang, Gandaki",
      description: "Ancient Buddhist kingdom with dramatic desert landscapes.",
      hotels: [
        {
          id: 3101,
          name: "Royal Mustang Resort",
          description: "Heritage hotel in Lo Manthang.",
          price: 120000,
          rating: 4.5,
          imageUrl: "/hotels/mustang1.jpg"
        },
        {
          id: 3102,
          name: "Himalayan Lodge Jomsom",
          description: "Comfortable lodge with mountain views.",
          price: 80000,
          rating: 4.3,
          imageUrl: "/hotels/mustang2.jpg"
        }
      ]
    },
    {
      id: 32,
      destination: "Manang, Gandaki",
      description: "High-altitude valley on the Annapurna Circuit.",
      hotels: [
        {
          id: 3201,
          name: "Tilicho Lake Hotel",
          description: "Basic but comfortable accommodation for trekkers.",
          price: 45000,
          rating: 4.2,
          imageUrl: "/hotels/manang1.jpg"
        },
        {
          id: 3202,
          name: "Yak Hotel Manang",
          description: "Traditional mountain lodge with good food.",
          price: 35000,
          rating: 4.0,
          imageUrl: "/hotels/manang2.jpg"
        }
      ]
    },
    {
      id: 33,
      destination: "Gorkha, Gandaki",
      description: "Historical kingdom and birthplace of modern Nepal.",
      hotels: [
        {
          id: 3301,
          name: "Gorkha Gaun Resort",
          description: "Heritage resort with palace views.",
          price: 70000,
          rating: 4.3,
          imageUrl: "/hotels/gorkha1.jpg"
        },
        {
          id: 3302,
          name: "Hotel Bisauni",
          description: "City center hotel with modern amenities.",
          price: 45000,
          rating: 4.0,
          imageUrl: "/hotels/gorkha2.jpg"
        }
      ]
    },

    // Lumbini Province
    {
      id: 40,
      destination: "Rupandehi, Lumbini",
      description: "Birthplace of Buddha with sacred gardens and monasteries.",
      hotels: [
        {
          id: 4001,
          name: "Buddha Maya Gardens Hotel",
          description: "Luxury hotel near sacred garden.",
          price: 150000,
          rating: 4.6,
          imageUrl: "/hotels/lumbini1.jpg"
        },
        {
          id: 4002,
          name: "Hotel Ananda Inn",
          description: "Peaceful stay with garden views.",
          price: 80000,
          rating: 4.3,
          imageUrl: "/hotels/lumbini2.jpg"
        }
      ]
    },
    {
      id: 41,
      destination: "Palpa, Lumbini",
      description: "Historical town known for Tansen and Rani Mahal.",
      hotels: [
        {
          id: 4101,
          name: "Hotel Srinagar",
          description: "Heritage hotel with valley views.",
          price: 60000,
          rating: 4.2,
          imageUrl: "/hotels/palpa1.jpg"
        },
        {
          id: 4102,
          name: "Tansen Resort",
          description: "Comfortable stay in historic setting.",
          price: 45000,
          rating: 4.0,
          imageUrl: "/hotels/palpa2.jpg"
        }
      ]
    },
    {
      id: 42,
      destination: "Dang, Lumbini",
      description: "Valley with rich Tharu culture and wildlife.",
      hotels: [
        {
          id: 4201,
          name: "Rapti Village Resort",
          description: "Riverside resort with Tharu cultural experience.",
          price: 70000,
          rating: 4.1,
          imageUrl: "/hotels/dang1.jpg"
        },
        {
          id: 4202,
          name: "Hotel Ghorahi Heights",
          description: "Modern city hotel with good facilities.",
          price: 50000,
          rating: 4.0,
          imageUrl: "/hotels/dang2.jpg"
        }
      ]
    },

    // Karnali Province
    {
      id: 50,
      destination: "Jumla, Karnali",
      description: "Ancient mountain kingdom known for red rice and apple farming.",
      hotels: [
        {
          id: 5001,
          name: "Hotel Kanjirowa",
          description: "Central hotel with mountain views and local cuisine.",
          price: 45000,
          rating: 4.0,
          imageUrl: "/hotels/jumla1.jpg"
        },
        {
          id: 5002,
          name: "Apple Garden Resort",
          description: "Unique stay in apple orchards with traditional rooms.",
          price: 35000,
          rating: 3.8,
          imageUrl: "/hotels/jumla2.jpg"
        }
      ]
    },
    {
      id: 51,
      destination: "Dolpa, Karnali",
      description: "Remote district with Shey Phoksundo Lake and rich Buddhist culture.",
      hotels: [
        {
          id: 5101,
          name: "Phoksundo Lake View Lodge",
          description: "Basic accommodation with stunning lake views.",
          price: 40000,
          rating: 4.1,
          imageUrl: "/hotels/dolpa1.jpg"
        },
        {
          id: 5102,
          name: "Dunai Guest House",
          description: "Traditional guest house with local hospitality.",
          price: 30000,
          rating: 3.9,
          imageUrl: "/hotels/dolpa2.jpg"
        }
      ]
    },
    {
      id: 52,
      destination: "Mugu, Karnali",
      description: "Home to Rara Lake, Nepal's largest lake.",
      hotels: [
        {
          id: 5201,
          name: "Rara Lake Resort",
          description: "Lakeside accommodation with stunning views.",
          price: 50000,
          rating: 4.2,
          imageUrl: "/hotels/mugu1.jpg"
        },
        {
          id: 5202,
          name: "Talcha Highland Lodge",
          description: "Mountain lodge with basic amenities.",
          price: 35000,
          rating: 3.8,
          imageUrl: "/hotels/mugu2.jpg"
        }
      ]
    },

    // Sudurpashchim Province
    {
      id: 60,
      destination: "Kailali, Sudurpashchim",
      description: "Gateway to Far-West with rich Tharu culture.",
      hotels: [
        {
          id: 6001,
          name: "Dhangadhi Resort",
          description: "Modern hotel with swimming pool and conference facilities.",
          price: 80000,
          rating: 4.3,
          imageUrl: "/hotels/kailali1.jpg"
        },
        {
          id: 6002,
          name: "Tharu Village Resort",
          description: "Cultural stay with traditional Tharu experience.",
          price: 60000,
          rating: 4.1,
          imageUrl: "/hotels/kailali2.jpg"
        }
      ]
    },
    {
      id: 61,
      destination: "Kanchanpur, Sudurpashchim",
      description: "Border district with Shuklaphanta National Park.",
      hotels: [
        {
          id: 6101,
          name: "Hotel Shuklaphanta",
          description: "Wildlife resort near national park.",
          price: 70000,
          rating: 4.2,
          imageUrl: "/hotels/kanchanpur1.jpg"
        },
        {
          id: 6102,
          name: "Mahendranagar Inn",
          description: "City center hotel with modern amenities.",
          price: 50000,
          rating: 4.0,
          imageUrl: "/hotels/kanchanpur2.jpg"
        }
      ]
    },
    {
      id: 62,
      destination: "Dadeldhura, Sudurpashchim",
      description: "Hill station with historical significance.",
      hotels: [
        {
          id: 6201,
          name: "Hotel Amargadhi Heights",
          description: "Hilltop hotel with panoramic views.",
          price: 45000,
          rating: 4.0,
          imageUrl: "/hotels/dadeldhura1.jpg"
        },
        {
          id: 6202,
          name: "Dadeldhura Resort",
          description: "Comfortable stay with garden and restaurant.",
          price: 40000,
          rating: 3.9,
          imageUrl: "/hotels/dadeldhura2.jpg"
        }
      ]
    },
    {
      id: 63,
      destination: "Baitadi, Sudurpashchim",
      description: "Ancient town with temples and traditional architecture.",
      hotels: [
        {
          id: 6301,
          name: "Hotel Siddhanath",
          description: "Heritage hotel near temple complex.",
          price: 40000,
          rating: 3.9,
          imageUrl: "/hotels/baitadi1.jpg"
        },
        {
          id: 6302,
          name: "Baitadi Village Resort",
          description: "Traditional stay with local experiences.",
          price: 35000,
          rating: 3.8,
          imageUrl: "/hotels/baitadi2.jpg"
        }
      ]
    },
    {
      id: 64,
      destination: "Darchula, Sudurpashchim",
      description: "Border district with Api Nampa Conservation Area.",
      hotels: [
        {
          id: 6401,
          name: "Api Hotel",
          description: "Basic but clean accommodation for trekkers.",
          price: 35000,
          rating: 3.8,
          imageUrl: "/hotels/darchula1.jpg"
        },
        {
          id: 6402,
          name: "Himalayan View Guest House",
          description: "Simple rooms with mountain views.",
          price: 30000,
          rating: 3.7,
          imageUrl: "/hotels/darchula2.jpg"
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
      cost: 85000,
      hotelName: "Royal Mustang Resort",
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000",
      highlights: ["Upper Mustang Trek", "Lo Manthang Visit", "Apple Farm Tour"],
      rating: 4.8,
      review: "Amazing experience in the hidden kingdom. The landscapes were breathtaking and the cultural experience was unforgettable."
    },
    // {
    //   id: 2,
    //   destination: "Lumbini, Nepal",
    //   startDate: "2023-11-10",
    //   endDate: "2023-11-13",
    //   status: "completed",
    //   cost: 45000,
    //   hotelName: "Buddha Maya Garden Hotel",
    //   imageUrl: "https://images.unsplash.com/photo-1588064310217-0a8dec2b3834?q=80&w=1000",
    //   highlights: ["Maya Devi Temple", "World Peace Pagoda", "Monastery Tour"],
    //   rating: 4.6,
    //   review: "Peaceful spiritual journey to the birthplace of Buddha. The gardens and monasteries were serene and beautiful."
    // },
    // {
    //   id: 3,
    //   destination: "Nagarkot, Nepal",
    //   startDate: "2024-02-20",
    //   endDate: "2024-02-23",
    //   status: "upcoming",
    //   cost: 35000,
    //   hotelName: "Hotel Mystic Mountain",
    //   imageUrl: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1000",
    //   highlights: ["Sunrise View", "Mountain Hiking", "Photography Tour"],
    //   rating: 4.4,
    //   review: "Perfect weekend getaway with stunning Himalayan views."
    // },
    {
      id: 4,
      destination: "Chitwan, Nepal",
      startDate: "2023-12-05",
      endDate: "2023-12-08",
      status: "completed",
      cost: 55000,
      hotelName: "Jungle Safari Resort",
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000",
      highlights: ["Elephant Safari", "Canoe Ride", "Tharu Cultural Show"],
      rating: 4.7,
      review: "Incredible wildlife experience. Saw rhinos and crocodiles up close!"
    },
    {
      id: 5,
      destination: "Bandipur, Nepal",
      startDate: "2024-03-15",
      endDate: "2024-03-18",
      status: "upcoming",
      cost: 40000,
      hotelName: "Old Inn Bandipur",
      imageUrl: "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1000",
      highlights: ["Heritage Walk", "Sunrise at Tundikhel", "Local Cuisine"],
      rating: 4.5,
      review: undefined
    },
    {
      id: 6,
      destination: "Ilam, Nepal",
      startDate: "2023-09-20",
      endDate: "2023-09-24",
      status: "completed",
      cost: 50000,
      hotelName: "Ilam Tea Resort",
      imageUrl: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1000",
      highlights: ["Tea Garden Tour", "Mai Pokhari Visit", "Tea Tasting"],
      rating: 4.3,
      review: "Beautiful tea gardens and amazing local hospitality."
    },
    {
      id: 7,
      destination: "Rara Lake, Nepal",
      startDate: "2024-04-10",
      endDate: "2024-04-15",
      status: "upcoming",
      cost: 75000,
      hotelName: "Rara Lake View Resort",
      imageUrl: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1000",
      highlights: ["Lake Boating", "Hiking", "Camping"],
      rating: undefined,
      review: undefined
    },
    {
      id: 8,
      destination: "Ghandruk, Nepal",
      startDate: "2023-10-15",
      endDate: "2023-10-18",
      status: "completed",
      cost: 45000,
      hotelName: "Himalayan Guest House",
      imageUrl: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=1000",
      highlights: ["Village Tour", "Mountain Views", "Cultural Experience"],
      rating: 4.8,
      review: "Traditional Gurung village with amazing hospitality and views."
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
  
  export const getAllTrips = (): Trip[] => {
    return DUMMY_TRIPS;
  };
  
  export const getHotelsByTripId = (tripId: number): Hotel[] => {
    const trip = DUMMY_TRIPS.find(trip => trip.id === tripId);
    return trip ? trip.hotels : [];
  };
  
  export const searchTrips = (query: string): Trip[] => {
    const lowercaseQuery = query.toLowerCase();
    return DUMMY_TRIPS.filter(trip => 
      trip.destination.toLowerCase().includes(lowercaseQuery) ||
      trip.description.toLowerCase().includes(lowercaseQuery) ||
      trip.hotels.some(hotel => 
        hotel.name.toLowerCase().includes(lowercaseQuery) ||
        hotel.description.toLowerCase().includes(lowercaseQuery)
      )
    );
  };
  
  export const formatPrice = (price: number): string => {
    return `₨ ${price.toLocaleString('en-NP')}`;
  };
  