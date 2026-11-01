/**
 * SHAHEEL Portfolio - Centralized Photography Projects & Works
 */

export type PortfolioCategory =
  | 'Portraits'
  | 'Weddings'
  | 'Fashion'
  | 'Events'
  | 'Lifestyle'
  | 'Travel'
  | 'Commercial';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
  location?: string;
  year?: string;
  description?: string;
  focalPosition?: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'cinematic';
  featured?: boolean;
  exif?: {
    camera?: string;
    lens?: string;
    aperture?: string;
    shutter?: string;
    iso?: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'solitude-by-the-sea',
    title: 'Solitude by the Sea',
    category: 'Portraits',
    image: '/src/assets/images/portrait_editorial_monograph_1793288280204.jpg',
    alt: 'Natural light portrait monograph of a woman in quiet contemplation near window',
    location: 'Coastal Haven',
    year: '2025',
    description: 'An intimate portrait study exploring character, natural window luminance, and the quiet beauty of authentic vulnerability.',
    aspect: 'portrait',
    featured: true,
    exif: {
      camera: 'Leica M11',
      lens: 'Summilux-M 50mm f/1.4 ASPH',
      aperture: 'f/1.8',
      shutter: '1/320s',
      iso: '100'
    }
  },
  {
    id: 'cotswold-twilight-vows',
    title: 'Twilight Vows',
    category: 'Weddings',
    image: '/src/assets/images/wedding_emotional_moment_1793288281539.jpg',
    alt: 'Bride and groom sharing an emotional authentic moment against limestone country estate at dusk',
    location: 'Cotswolds, UK',
    year: '2025',
    description: 'Documentary coverage of heartfelt vows as golden lanterns illuminated the historic courtyard at sunset.',
    aspect: 'landscape',
    featured: true,
    exif: {
      camera: 'Sony α7R V',
      lens: 'FE 35mm f/1.4 GM',
      aperture: 'f/1.6',
      shutter: '1/250s',
      iso: '400'
    }
  },
  {
    id: 'monolithic-sculpture',
    title: 'Monolithic Form',
    category: 'Fashion',
    image: '/src/assets/images/fashion_avant_garde_1793288282001.jpg',
    alt: 'Avant-garde fashion editorial silhouette in brutalist architectural interior',
    location: 'Metropolitan Pavilion',
    year: '2025',
    description: 'A study in architectural volume and sculptural wool silhouettes framed in raw concrete shadows.',
    aspect: 'portrait',
    featured: true,
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 55mm f/2.5 V',
      aperture: 'f/4.0',
      shutter: '1/500s',
      iso: '64'
    }
  },
  {
    id: 'golden-sparkler-revelry',
    title: 'Midnight Reverie',
    category: 'Events',
    image: '/src/assets/images/events_celebration_candid_1793288300289.jpg',
    alt: 'Candid night celebration with golden sparklers and laughter among friends',
    location: 'Open Garden Gala',
    year: '2025',
    description: 'Unrehearsed joy caught amidst a shower of sparkler light and shared spontaneous laughter.',
    aspect: 'landscape',
    featured: false,
    exif: {
      camera: 'Leica Q3',
      lens: 'Summilux 28mm f/1.7 ASPH',
      aperture: 'f/2.0',
      shutter: '1/160s',
      iso: '1600'
    }
  },
  {
    id: 'quiet-morning-linen',
    title: 'Morning Respite',
    category: 'Lifestyle',
    image: '/src/assets/images/lifestyle_golden_interior_1793288301262.jpg',
    alt: 'Sunlit morning room with ceramic tea cups, linen cloth and olive branches',
    location: 'Nordic Residence',
    year: '2024',
    description: 'Slow morning light playing across raw stone pottery, washed linen, and the simplicity of everyday rituals.',
    aspect: 'landscape',
    featured: false,
    exif: {
      camera: 'Fujifilm GFX 100 II',
      lens: 'GF 63mm f/2.8 R WR',
      aperture: 'f/3.2',
      shutter: '1/200s',
      iso: '125'
    }
  },
  {
    id: 'coastal-ridge-awakening',
    title: 'The Edge of Light',
    category: 'Travel',
    image: '/src/assets/images/hero_cinematic_light_1793288280398.jpg',
    alt: 'Atmospheric coastal cliff bathed in sunbeams breaking through ocean mist',
    location: 'Atlantic Headland',
    year: '2024',
    description: 'Morning marine mist parting over sheer ocean cliffs as early sunbeams cut across the Atlantic swell.',
    aspect: 'cinematic',
    featured: true,
    exif: {
      camera: 'Sony α7R V',
      lens: 'FE 24-70mm f/2.8 GM II',
      aperture: 'f/8.0',
      shutter: '1/800s',
      iso: '100'
    }
  },
  {
    id: 'essence-of-slate',
    title: 'L’Eau Minérale',
    category: 'Commercial',
    image: '/src/assets/images/commercial_luxury_vessel_1793288304148.jpg',
    alt: 'Luxury perfume flacon on wet textured slate with natural rim lighting',
    location: 'Studio Atelier',
    year: '2025',
    description: 'Refined product campaign capturing the raw mineral essence of glass, rainwater, and chiseled black slate.',
    aspect: 'square',
    featured: false,
    exif: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 120mm f/3.5 Macro',
      aperture: 'f/5.6',
      shutter: '1/250s',
      iso: '64'
    }
  },
  {
    id: 'highland-whisper',
    title: 'The Highland Sanctuary',
    category: 'Travel',
    image: '/src/assets/images/interlude_visual_light_1793288382.jpg', // will use interlude_visual_light_1793288283082.jpg
    alt: 'Rolling highlands with lone cottage surrounded by morning mist and mountain crests',
    location: 'Scottish Highlands',
    year: '2024',
    description: 'A solitary croft nestled in quiet valleys as dawn breaks through the mountain veil.',
    aspect: 'cinematic',
    featured: true,
    exif: {
      camera: 'Sony α7R V',
      lens: 'FE 70-200mm f/2.8 GM OSS II',
      aperture: 'f/7.1',
      shutter: '1/400s',
      iso: '160'
    }
  }
];

// Fix the image path for highland-whisper
portfolioItems[7].image = '/src/assets/images/interlude_visual_light_1793288283082.jpg';

export const featuredStory = {
  eyebrow: "BEHIND THE FRAME",
  heading: "Every Frame Has a Story.",
  subheading: "Beyond the composition and the light lies the feeling that makes a photograph worth remembering.",
  image: "/src/assets/images/story_nordic_shoreline_1793288301824.jpg",
  alt: "Solitary wanderer at blue hour along a black sand shoreline in the Nordic North",
  location: "Vík í Mýrdal, South Coast",
  date: "October Twilight",
  cameraNotes: "Leica M11 · 35mm Summicron · f/2.0 · 1/60s · ISO 800",
  storyNarrative: [
    "We reached the black sand coast just as the last amber traces of dusk dissolved into an oceanic blue hour. The Atlantic wind was sharp, cutting through salt spray and basalt sea stacks that rose like silent sentinels from the surf.",
    "A lone traveler walked the water’s edge, keeping pace with the rhythm of the waves. There was no direction, no urgency—only the quiet dialogue between human scale and elemental wildness.",
    "I raised the camera without hesitation. The photograph wasn’t about the grandeur of the landscape or the figure alone; it was about that fleeting, suspended moment where time seemed to fold in on itself."
  ],
  quote: "“The best photographs do not explain what happened. They preserve the silence of how it felt.”"
};
