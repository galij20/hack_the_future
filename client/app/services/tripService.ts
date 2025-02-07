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
  
  export const getAIRecommendations = async (
    destination: string, 
    days: number, 
    budget?: number
  ) => {
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ destination, days, budget }),
    });
    return response.json();
  };
  
  export async function bookTrip(tripId: number): Promise<{ success: boolean }> {
    // Mock API call - replace with actual API call
    return { success: true }
  }
  
  export async function bookHotel(hotelId: number): Promise<{ success: boolean }> {
    // Mock API call - replace with actual API call
    return { success: true }
  }
  