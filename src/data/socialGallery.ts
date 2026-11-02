/**
 * Curated social / Instagram showcase frames
 * Hand-curated stills from Shaheel's visual journey
 */

export interface SocialFrame {
  id: string;
  image: string;
  alt: string;
  caption: string;
  date: string;
}

export const socialFrames: SocialFrame[] = [
  {
    id: 'frame-1',
    image: '/images/portrait_editorial_monograph_1793288280204.jpg',
    alt: 'Window light portrait study',
    caption: 'Soft window light on slow afternoons.',
    date: 'Recent Frame'
  },
  {
    id: 'frame-2',
    image: '/images/hero_cinematic_light_1793288280398.jpg',
    alt: 'Atlantic cliff sunbeams',
    caption: 'Chasing the first morning rays across the headland.',
    date: 'Recent Frame'
  },
  {
    id: 'frame-3',
    image: '/images/fashion_avant_garde_1793288282001.jpg',
    alt: 'Sculptural silhouette in brutalist interior',
    caption: 'Form, fabric, and concrete geometry.',
    date: 'Recent Frame'
  },
  {
    id: 'frame-4',
    image: '/images/wedding_emotional_moment_1793288281539.jpg',
    alt: 'Candid twilight vows in the countryside',
    caption: 'The moments that need no direction.',
    date: 'Recent Frame'
  },
  {
    id: 'frame-5',
    image: '/images/story_nordic_shoreline_1793288301824.jpg',
    alt: 'Nordic shoreline at blue hour',
    caption: 'Walking the black sand edge as night falls.',
    date: 'Recent Frame'
  },
  {
    id: 'frame-6',
    image: '/images/lifestyle_golden_interior_1793288301262.jpg',
    alt: 'Ceramic tea cups and sunlit linen',
    caption: 'Simplicity in the rituals of morning.',
    date: 'Recent Frame'
  }
];
