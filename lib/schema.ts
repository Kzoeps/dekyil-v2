import { Hotel, HotelRoom, LocalBusiness, PostalAddress, WithContext } from "schema-dts";

export const AboutUsSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  currenciesAccepted: "EUR, USD, BTN, INR",
  name: "Dekyil Guest House",
  address: {
    '@type': "PostalAddress",
    streetAddress: "Chamkhar",
    addressLocality: "Chhokhor",
    addressRegion: "Bumthang",
    addressCountry: "BT",
    postalCode: "32001"
  },
  contactPoint: {
    '@type': "ContactPoint",
    email: "dekyilguesthouse@gmail.com",
    telephone: "+975-17554152"
  },
  founder: {
    '@type': "Person",
    name: "Karma"
  },
  logo: "https://www.dekyilguesthouse.com/images/logo.webp"
}

export const SuiteRoomSchema: WithContext<HotelRoom> = {
  '@context': "https://schema.org",
  "@type": "HotelRoom",
  name: "Suite Room",
  description: "Suite rooms available with twin or double beds. Packed with all amenities from underfloor heating, dental kits and heaters",
  bed: [
    {
      "@type": "BedDetails",
      numberOfBeds: 2,
      typeOfBed: "Twin XL"
    },
    {
      "@type": "BedDetails",
      numberOfBeds: 1,
      typeOfBed: "King-Size"
    }
  ],
  occupancy: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 3
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Underfloor Bathroom Heating",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free WiFi",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Hot Water",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Complimentary Tea/Coffee Station",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Complimentary Toilet Kit",
      value: true
    }
  ],
  address: {
    '@type': "PostalAddress",
    streetAddress: "Chamkhar",
    addressLocality: "Chhokhor",
    addressRegion: "Bumthang",
    addressCountry: "BT",
    postalCode: "32001"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.546484,
    longitude: 90.753263
  },
  smokingAllowed: false,
  numberOfFullBathrooms: 1,
  containedInPlace: {
    "@type": "Place",
    name: "Dekyil Guest House",
    address: {
      '@type': "PostalAddress",
      streetAddress: "Chamkhar",
      addressLocality: "Chhokhor",
      addressRegion: "Bumthang",
      addressCountry: "BT",
      postalCode: "32001"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.546484,
      longitude: 90.753263
    }
  }
}
export const DeluxeRoomSchema: WithContext<HotelRoom> = {
  '@context': "https://schema.org",
  "@type": "HotelRoom",
  name: "Deluxe Room",
  description: "Deluxe rooms available with twin or double beds. Packed with all amenities from underfloor heating, dental kits and heaters",
  bed: [
    {
      "@type": "BedDetails",
      numberOfBeds: 2,
      typeOfBed: "Twin XL"
    },
    {
      "@type": "BedDetails",
      numberOfBeds: 1,
      typeOfBed: "Queen"
    }
  ],
  occupancy: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 3
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Underfloor Bathroom Heating",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free WiFi",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Hot Water",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Complimentary Tea/Coffee Station",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Complimentary Toilet Kit",
      value: true
    }
  ],
  address: {
    '@type': "PostalAddress",
    streetAddress: "Chamkhar",
    addressLocality: "Chhokhor",
    addressRegion: "Bumthang",
    addressCountry: "BT",
    postalCode: "32001"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.546484,
    longitude: 90.753263
  },
  smokingAllowed: false,
  numberOfFullBathrooms: 1,
  containedInPlace: {
    "@type": "Place",
    name: "Dekyil Guest House",
    address: {
      '@type': "PostalAddress",
      streetAddress: "Chamkhar",
      addressLocality: "Chhokhor",
      addressRegion: "Bumthang",
      addressCountry: "BT",
      postalCode: "32001"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.546484,
      longitude: 90.753263
    }
  }
}

const Addy: PostalAddress = {
  '@type': "PostalAddress",
  streetAddress: "Chamkhar",
  addressLocality: "Chhokhor",
  addressRegion: "Bumthang",
  addressCountry: "BT",
  postalCode: "32001"
}

export const HotelSchema: WithContext<Hotel> = {
  '@context': "https://schema.org",
  '@type': "Hotel",
  name: "Dekyil Guest House",
  address: Addy,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.546484,
    longitude: 90.753263
  },
  telephone: "+975-17554152",
  email: "dekyilguesthouse@gmail.com",
  starRating: {
    "@type": "Rating",
    ratingValue: 3,
    ratingExplanation: "Tourism Council of Bhutan accredits hotels every 2 years. Dekyil Guest House was accredited a 3 star hotel in 2024",
    author: {
      "@type": "Organization",
      name: "Tourism Council Of Bhutan",
      url: "tourism.gov.bt"
    }
  },
  numberOfRooms: 13,
  checkinTime: "11:00",
  checkoutTime: "13:00",
  availableLanguage: "en, dz, hi, ne",
  petsAllowed: false,
  currenciesAccepted: "EUR, USD, INR, BTN",
  paymentAccepted: "Cash, Credit Card",
  openingHours: "Mo, Tu, We, Th, Fr, Sa, Su 07:00-18:00",
  priceRange: "$50 - $100",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Free WiFi",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Parking",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Restaurant",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Laundry Service",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Bathroom Floor Heating",
      value: true
    }
  ],
  review: [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        name: "Ranveer Singh"
      },
      datePublished: "2025-03-03",
      reviewBody: "I stayed at Dekyil Guest House in early January 2025 while exploring Central Bhutan. I was lucky enough to be the only guest here at that time. It was a unique experience. The room was really comfortable and cosy.I feel like I got the best one as I was able to over look the valley while still enjoying the view of Jakar Dzong The food was amazing.I really loved having the homemade jam, honey and buckwheat pancakes.Kinley and the staff were incredibly helpful.Kinley would sit by the wood burner and have conversations after dinner and dinner.I found that very thoughtful and I learnt a lot from her too. Thank you for the wonderful stay",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        name: "Cheryl Battan"
      },
      datePublished: "2022-12-09",
      reviewBody: "On your trip to Bhutan, don't miss this wonderful guest house in Bumthang. The room was very cozy and well-appointed. The hostess Kinley Gyem was absolutely wonderful and made sure we had everything we needed. The food was excellent and authentic; it was some of the best food we had during our 12 days touring throughout Bhutan.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      }
    },

    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        name: "tingdiver"
      },
      datePublished: "2024-10-02",
      reviewBody: "So far the best accommodations I've had in Bhutan. The guesthouse itself is small, simple but has a lovely, authentic looking design made of wood and sits on a small hill overlooking the valley. Inside the rooms are fully equipped with clean, comfortable amenities such as heaters, hot shower and even their own brand of toiletries. The staff demonstrated typical Bhutanese hospitality- showing extreme attentiveness and service especially during meal times. The owners also make it a point to chat to you during breakfast and when I was shown my room, the owner herself gave me a simple briefing of how things worked. Such personal attention cannot be taken for granted and it really enhances the guest experience.I highly recommend this place and will stay here again when I come back to Bumthang and assuming they have space... cuz apparently they're very popular!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
      }
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    author: {
      "@type": "Organization",
      name: "TripAdvisor",
      url: "https://www.tripadvisor.com/"
    }
  },
  contactPoint: {
    '@type': "ContactPoint",
    name: "Kinley Gyem",
    email: "dekyilguesthouse@gmail.com",
    telephone: "+975-17554152"
  },
  location: Addy,
  keywords: "hotels in bumthang, dekyil guest house, chamkhar, bumthang, bhutan, guest house in bumthang",
  slogan: "Hospitality is our speciality",
  image: "https://www.dekyilguesthouse.com/images/drone.webp",
  photo: "https://www.dekyilguesthouse.com/images/drone.webp",
  logo: "https://www.dekyilguesthouse.com/images/logo.webp"
}
