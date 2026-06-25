export interface ServiceArea {
  slug: string;
  cityName: string;
  county: string;
  stateAbbr: string;
  headline: string;
  description: string;
  highlights: string[];
  distanceFromFlagstaff: string;
  servicesNote: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'flagstaff',
    cityName: 'Flagstaff',
    county: 'Coconino',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Flagstaff, AZ',
    description: "Flagstaff is our home base. We've built and remodeled homes throughout the city — from the historic neighborhoods near downtown to newer subdivisions on the east and west sides. Working in Flagstaff means understanding 6,900-foot elevation construction: snow load design, freeze-thaw cycles, UV-resistant materials, and energy code compliance that actually matters at altitude.",
    highlights: [
      'Full range of services: remodeling, restoration, new builds, and repairs',
      'Experience with Flagstaff historic districts and older home restoration',
      'Familiar with Coconino County and City of Flagstaff permitting',
      'Snow load and altitude-specific building practices',
    ],
    distanceFromFlagstaff: 'Home base',
    servicesNote: 'All services available.',
  },
  {
    slug: 'williams',
    cityName: 'Williams',
    county: 'Coconino',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Williams, AZ',
    description: "We regularly work in Williams and the surrounding area, including wooded lot builds, vacation property renovations, and year-round home improvements. Williams sits at 6,700 feet with a climate and building environment similar to Flagstaff — we're familiar with the terrain, the permit process through Coconino County, and the challenges of building on private wooded lots.",
    highlights: [
      'New home construction on wooded and rural lots',
      'Vacation home and STR property renovations',
      'Well and septic coordination for rural builds',
      'Williams and Coconino County permitting experience',
    ],
    distanceFromFlagstaff: '~35 miles west on I-40',
    servicesNote: 'All services available. Drive time from Flagstaff is approximately 35 minutes.',
  },
  {
    slug: 'sedona',
    cityName: 'Sedona',
    county: 'Yavapai / Coconino',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Sedona, AZ',
    description: "Sedona's high-end residential market, strict HOA requirements, and Yavapai County permitting make it a different environment than Flagstaff — and one we're comfortable in. We work on custom home remodels, luxury bathroom and kitchen renovations, exterior restoration, and new construction on difficult desert terrain. If your project requires meeting specific design guidelines or HOA approval, we've done it.",
    highlights: [
      'Custom home remodeling and luxury renovations',
      'HOA compliance coordination for Sedona communities',
      'Yavapai County and City of Sedona permitting',
      'Exterior restoration on high-exposure desert-facing properties',
    ],
    distanceFromFlagstaff: '~30 miles south on AZ-89A',
    servicesNote: 'All services available. Sedona work is a regular part of our schedule.',
  },
  {
    slug: 'camp-verde',
    cityName: 'Camp Verde',
    county: 'Yavapai',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Camp Verde, AZ',
    description: "Camp Verde sits at the bottom of the Verde Valley at 3,100 feet — a noticeably different climate from Flagstaff that affects material selection, insulation requirements, and exterior durability. We handle remodeling, repairs, and renovation work in Camp Verde and the surrounding Cornville, Clarkdale, and Cottonwood corridor, coordinating with Yavapai County for permits.",
    highlights: [
      'Home remodeling and renovations at lower elevation',
      'Verde Valley climate building experience',
      'Yavapai County permitting coordination',
      'Agricultural and rural property builds and repairs',
    ],
    distanceFromFlagstaff: '~40 miles south on I-17',
    servicesNote: 'Remodeling, restoration, repairs, and new construction all available.',
  },
  {
    slug: 'winslow',
    cityName: 'Winslow',
    county: 'Navajo',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Winslow, AZ',
    description: "Winslow sits at 4,850 feet on the high desert plateau east of Flagstaff. We take on remodeling and repair work in Winslow for homeowners who want a licensed contractor but can't find local options that meet their standards. The older housing stock in Winslow often needs structural attention — we're experienced in diagnosing and repairing deferred maintenance issues in homes that were built decades ago.",
    highlights: [
      'Structural repair and renovation of older homes',
      'Deferred maintenance diagnosis and prioritized repair plans',
      'Navajo County permitting coordination',
      'Straightforward travel from Flagstaff — no logistical issues',
    ],
    distanceFromFlagstaff: '~60 miles east on I-40',
    servicesNote: 'Remodeling, restoration, and repair work available. New construction by project.',
  },
  {
    slug: 'show-low',
    cityName: 'Show Low',
    county: 'Navajo',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Show Low, AZ',
    description: "Show Low and the White Mountains area at 6,300 feet share many building characteristics with Flagstaff — snow loads, pine country terrain, and the same mix of year-round residents and vacation properties. We work in Show Low for homeowners doing major remodels, custom builds, and restoration on properties that need more than a handyman but can't find a reliable licensed contractor locally.",
    highlights: [
      'Custom home construction in the White Mountains',
      'Major remodeling for year-round and vacation homes',
      'Snow country building practices at high elevation',
      'Navajo County permitting experience',
    ],
    distanceFromFlagstaff: '~90 miles southeast on AZ-260',
    servicesNote: 'Available for larger projects. Contact us to discuss scope and scheduling.',
  },
  {
    slug: 'payson',
    cityName: 'Payson',
    county: 'Gila',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Payson, AZ',
    description: "Payson at 4,900 feet in the Mogollon Rim country is home to a significant population of retirees, vacation property owners, and remote workers who have invested in homes that deserve real contractor quality. We work in Payson for larger remodeling projects, home additions, restoration of older properties, and new construction where the scope demands a licensed general contractor.",
    highlights: [
      'Home remodeling and additions in the Rim country',
      'Vacation and retirement property renovation',
      'Gila County permitting coordination',
      'WUI (wildland-urban interface) fire code compliance experience',
    ],
    distanceFromFlagstaff: '~95 miles south via AZ-87',
    servicesNote: 'Available for larger projects and new construction. Contact us to discuss.',
  },
  {
    slug: 'prescott-valley',
    cityName: 'Prescott Valley',
    county: 'Yavapai',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Prescott Valley, AZ',
    description: "Prescott Valley and the broader Prescott metro at 5,100 feet is one of the fastest-growing markets in northern Arizona. We take on remodeling and renovation work in Prescott Valley for homeowners doing major projects — kitchen and bathroom remodels, home additions, and restoration of older properties — where quality and a licensed contractor matter more than finding the lowest bid.",
    highlights: [
      'Kitchen and bathroom remodeling in a growing market',
      'Home additions and square-footage expansions',
      'Yavapai County and Town of Prescott Valley permitting',
      'Experienced with Prescott area HOA requirements',
    ],
    distanceFromFlagstaff: '~80 miles south on I-17 to AZ-69',
    servicesNote: 'Remodeling and renovation focus. Contact us for new construction inquiry.',
  },
];
