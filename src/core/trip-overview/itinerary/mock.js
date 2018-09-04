export const mockItinerary = [
  {
    date: '2018-10-19T12:00:00-05:00',
    events: [
      {
        description: 'Arrive at Austin Bergstrom International Airport around 7:30 AM. Leave 20 minutes for security and plan on leaving at Gate 12. Please check for last minute updates at the airport!',
        name: 'Flight From Austin, TX to San Diego, CA ✈️',
        pricePerPerson: {
          for: 'airport breakfast',
          price: 10,
        },
        startTime: '2018-10-19T09:52:00-05:00',
        type: 'flightDepart',
      },
      {
        description: 'Arrive at San Diego International Airport around 10:54 Pacfic Time. You must be hungry, next up we will recommend some good grub to checkout!',
        name: 'Flight Arrival in ☀️ San Diego, CA',
        pricePerPerson: {
          for: '',
          price: 0,
        },
        startTime: '2018-10-19T10:54:00-05:00',
        type: 'flightArrival',
      },
      {
        description: `If you're in the mood for some fried chicken the Crack Shack is where it's at. `,
        name: 'Lunch at The Crack Shack',
        pricePerPerson: {
          for: 'Fried Chicken, Hell YEAH!',
          price: 15,
        },
        startTime: '2018-10-19T11:45:00-05:00',
        type: 'eatLunch',
      },
      {
        description: `This is what we've been waiting for. Time to get a taste of some Italian Dessert. Head over to Little Italy for some of the best gelato or cannoli that a man can ask for!`,
        name: 'How about some Italian Dessert?',
        pricePerPerson: {
          for: 'Gelato, Cannoli, whatever the hell you want!',
          price: 10,
        },
        startTime: '2018-10-19T20:30:00-05:00',
        type: 'eatDessert',
      }
    ]
  },
  {
    date: '2018-10-20T12:00:00-05:00',
    events: [

    ]
  },
]
