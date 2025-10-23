import { PortableTextBlock } from "@portabletext/types";

// INTERFACE
export interface Post {
  _id: number;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  tags?: string;
  quote?: string;
  quote_author?: string;
  teaser: string;
  body: PortableTextBlock[];
  is_featured: boolean;
  author: {
    name: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
  publishedAt: string;
}

export interface Article {
  _id: number;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  tags?: string;
  teaser: string;
  body: PortableTextBlock[];
  is_featured: boolean;
  author: {
    name: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
  publishedAt: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

export interface Author {
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  intro: PortableTextBlock[];
  bio: PortableTextBlock[];
  socialLinks: SocialLink[];
}

export interface City {
  id: number;
  name: string;
  slug: string;
  country: string;
  image: string;
  description: string;
}

export interface Location {
  id: number;
  city_id: number;
  name: string;
  type: string;
  address?: string;
  description?: string;
  image?: string;
  link?: string;
}

export interface CityWithLocations extends City {
  locations: Location[];
}

export interface CityLink {
  id: number;
  name: string;
  slug: string;
}

export interface NextTripInterface {
  title: string;
  slug: {
    current: string;
  };
  departureDate: string;
  intro: string;
  carouselSlides: Slide[];
}

export interface Slide {
  title: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

// PROPS
export interface FlickityCarouselProps {
  slides: Slide[];
}

export interface CountDownTimerProps {
  departureDate: string;
}
