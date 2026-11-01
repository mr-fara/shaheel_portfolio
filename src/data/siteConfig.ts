/**
 * SHAHEEL Portfolio - Centralized Site Configuration
 * All contact details, social links, and brand strings can be easily updated here.
 */

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  supportingTagline: string;
  heroCopy: string;
  aboutEyebrow: string;
  aboutHeading: string;
  aboutBio: string[];
  philosophy: {
    quote: string;
    statement: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    location: string;
    availability: string;
  };
  social: {
    instagram: string;
    behance?: string;
    vimeo?: string;
    twitter?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "SHAHEEL",
  title: "Photographer & Visual Storyteller",
  tagline: "Stories, Framed in Light.",
  supportingTagline: "Every frame holds a feeling. Every image tells a story.",
  heroCopy: "Capturing the beauty of real moments through thoughtful composition, natural light, and a personal perspective.",
  aboutEyebrow: "THE PERSON BEHIND THE CAMERA",
  aboutHeading: "I See Stories in the Smallest Details.",
  aboutBio: [
    "I'm Shaheel, a photographer drawn to the emotion, atmosphere, and unexpected beauty found in everyday life.",
    "My approach to photography is guided by light, thoughtful composition, and a genuine appreciation for the stories people and places have to tell.",
    "From meaningful celebrations to personal portraits and moments discovered along the way, my aim is to create photographs that feel authentic, expressive, and timeless.",
    "Because the best photographs do more than capture a moment. They help us feel it again."
  ],
  philosophy: {
    quote: "Finding meaning in the moments between moments.",
    statement: "Photography is not about forcing an image to exist; it is about paying enough attention until the light and truth reveal themselves.",
    pillars: [
      {
        title: "Considered Light",
        description: "Prioritizing natural and ambient luminance that shapes emotion, texture, and organic depth without synthetic artificiality."
      },
      {
        title: "Honest Emotion",
        description: "Seeking unscripted glances, genuine laughter, and quiet stillness that resonate long after the shutter clicks."
      },
      {
        title: "Timeless Restraint",
        description: "Composing with intent and editorial discipline, avoiding ephemeral trends in favor of enduring visual poetry."
      }
    ]
  },
  contact: {
    email: "inquiries@shaheelphotography.com",
    phone: "+1 (555) 234-8901",
    whatsappNumber: "+15552348901",
    location: "Available Worldwide",
    availability: "Booking Commissions for Current & Upcoming Seasons"
  },
  social: {
    instagram: "https://instagram.com",
    behance: "https://behance.net",
    vimeo: "https://vimeo.com"
  }
};
