/**
 * SHAHEEL Photography Services Configuration
 * Clean editorial service definitions with associated preview imagery and inquiry pre-selection
 */

export interface PhotographyService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  formValue: string;
}

export const photographyServices: PhotographyService[] = [
  {
    id: 'portrait',
    number: '01',
    title: 'Portrait Photography',
    tagline: 'Personal portraits shaped by character, natural expression, and considered light.',
    description: 'A relaxed, collaborative session focused on capturing authentic human presence without stiff poses or contrived smiles. Working with natural and subtle ambient light to uncover the quiet truth of who you are.',
    features: ['Editorial styling guidance', 'Indoor natural-light studio or location', 'Curated digital selection with fine-art color grading'],
    image: '/images/portrait_editorial_monograph_1793288280204.jpg',
    alt: 'Natural light portrait by Shaheel',
    formValue: 'Portraits'
  },
  {
    id: 'wedding',
    number: '02',
    title: 'Wedding Photography',
    tagline: 'Meaningful celebrations documented through honest moments and emotional storytelling.',
    description: 'An unobtrusive documentary approach that preserves the unchoreographed glances, tearful laughter, and atmospheric beauty of your commitment, allowing you to immerse fully in the celebration.',
    features: ['Full-day unobtrusive storytelling', 'Fine-art couples portrait session', 'Archival print box & high-resolution digital gallery'],
    image: '/images/wedding_emotional_moment_1793288281539.jpg',
    alt: 'Emotional documentary wedding photograph by Shaheel',
    formValue: 'Weddings'
  },
  {
    id: 'fashion',
    number: '03',
    title: 'Fashion & Editorial',
    tagline: 'Visual concepts brought to life through composition, styling, atmosphere, and detail.',
    description: 'Art direction and photography for designers, lookbooks, and editorial publications. Emphasizing sculptural lines, architectural light, and high-impact tactile presence.',
    features: ['Creative direction & moodboard consultation', 'On-set lighting & digital tech capture', 'Editorial retouching & color grade suites'],
    image: '/images/fashion_avant_garde_1793288282001.jpg',
    alt: 'Sculptural fashion editorial by Shaheel',
    formValue: 'Fashion'
  },
  {
    id: 'events',
    number: '04',
    title: 'Events & Celebrations',
    tagline: 'Important gatherings captured with an eye for genuine moments and memorable details.',
    description: 'From intimate private dinners to cultural milestones and launch events, documenting the energy, connections, and atmosphere as they naturally unfold.',
    features: ['Low-light documentary capture', 'Atmospheric details & candid guest portraits', 'Next-day editorial preview selections'],
    image: '/images/events_celebration_candid_1793288300289.jpg',
    alt: 'Atmospheric evening celebration with golden sparklers',
    formValue: 'Events'
  },
  {
    id: 'lifestyle',
    number: '05',
    title: 'Lifestyle Photography',
    tagline: 'Natural, expressive imagery that reflects people, places, and the way life unfolds.',
    description: 'Quiet, observational imagery for personal brands, artisans, and makers. Framing daily rituals, tactile workspaces, and organic everyday aesthetics.',
    features: ['Documentary environmental portraits', 'Tactile process & artisan detail shots', 'Versatile multi-format asset package'],
    image: '/images/lifestyle_golden_interior_1793288301262.jpg',
    alt: 'Warm sunlit lifestyle scene with pottery and morning light',
    formValue: 'Lifestyle'
  },
  {
    id: 'travel',
    number: '06',
    title: 'Travel & Documentary',
    tagline: 'Visual stories inspired by places, cultures, everyday encounters, and the beauty of discovery.',
    description: 'Available for international commissions, editorial reportage, and expeditions exploring geographical character, human relationships with landscape, and cultural memory.',
    features: ['Worldwide location availability', 'Remote expedition capability', 'High-res archival publishing license'],
    image: '/images/hero_cinematic_light_1793288280398.jpg',
    alt: 'Ethereal coastal travel landscape in golden mist',
    formValue: 'Travel'
  },
  {
    id: 'commercial',
    number: '07',
    title: 'Commercial Photography',
    tagline: 'Purposeful imagery for brands, products, campaigns, and creative projects.',
    description: 'Distinctive visual storytelling that aligns brand identity with considered artistic composition, clean lighting, and authentic luxury appeal.',
    features: ['Brand asset library creation', 'Studio & on-location product staging', 'Full commercial usage rights included'],
    image: '/images/commercial_luxury_vessel_1793288304148.jpg',
    alt: 'Luxury product photography on wet stone',
    formValue: 'Commercial'
  }
];
