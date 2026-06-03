export interface ServiceStep {
  n: string;
  title: string;
  body: string;
}

export interface Service {
  slug: string;
  label: string;
  tagline: string;
  description: string;
  detail: string;
  photo: string;
  photoAlt: string;
  steps: ServiceStep[];
  designCta?: { label: string; href: string };
}

export const services: Service[] = [
  {
    slug: 'remodeling',
    label: 'Remodeling',
    tagline: 'A remodel you actually love to come home to.',
    description:
      "A good remodel changes the way a family uses their home. We've seen it happen on every project we're proud of. The key is being honest up front about what the space can do and what the budget can actually cover.",
    detail:
      "If you know you want a change but haven't figured out the look yet, our guided design process helps you get there. It's a series of conversations and visual exercises that gets you to a clear style and scope before any work starts.",
    photo:
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1400&auto=format&fit=crop&q=80',
    photoAlt: 'Modern kitchen remodel with white cabinetry and quartz countertops',
    steps: [
      { n: '01', title: 'Discovery Call', body: "We learn what you're hoping to do, your rough timeline, and what you're working with budget-wise. No pitch, no pressure." },
      { n: '02', title: 'Site Walk', body: "We come see the space, take a look at what's there, and flag anything structural or code-related you'll want to know about." },
      { n: '03', title: 'Design Session', body: 'If you want help on style and selections, this is where we work through it together — materials, finishes, layout, all of it.' },
      { n: '04', title: 'Detailed Quote', body: 'Itemized and line-by-line. You should know exactly what you\'re paying for.' },
      { n: '05', title: 'Build', body: "Your project gets a dedicated crew, weekly check-ins, and a point of contact you can actually reach." },
      { n: '06', title: 'Walkthrough', body: "We go through every item on the punch list together. Nothing gets checked off until you're satisfied." },
    ],
    designCta: { label: 'Find Your Design Style', href: '/style-selector' },
  },
  {
    slug: 'restoration',
    label: 'Restoration',
    tagline: "Old houses deserve honest contractors.",
    description:
      "Northern Arizona's older homes have something most new builds don't: character that took decades to earn. Restoration work is about keeping that while fixing what's actually broken — and being straight about which is which.",
    detail:
      "We focus on the structural stuff first: sill plates, foundations, roof systems, windows. Get those right and the house has a future. We'll tell you what it actually needs, not what generates the most work for us.",
    photo:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&auto=format&fit=crop&q=80',
    photoAlt: 'Restored Craftsman bungalow exterior',
    steps: [
      { n: '01', title: 'Condition Assessment', body: 'We walk the whole structure: foundation, envelope, systems. You get a written report with an honest priority order, not a list designed to scare you.' },
      { n: '02', title: 'Scope Definition', body: "We separate what has to happen from what would be nice to happen. That line stays clear throughout the project." },
      { n: '03', title: 'Phased Plan', body: "Restoration rarely happens all at once. We build a sequence that protects the structure while fitting your timeline and budget." },
      { n: '04', title: 'Careful Execution', body: "Original materials get saved where they make sense. Modern materials go in where they perform better. We make those calls with you." },
      { n: '05', title: 'Documentation', body: 'Photos and records of everything we open up. Useful for future owners, insurance, and the permit file.' },
    ],
  },
  {
    slug: 'new-construction',
    label: 'New Construction',
    tagline: 'From empty lot to front door.',
    description:
      "We build single-family and multi-family homes across northern Arizona. Custom owner-occupied builds, small investment properties, spec homes. Every project gets the same attention to structure, envelope, and systems regardless of size.",
    detail:
      "We can work from your architect's drawings or connect you with designers we trust. Either way, we get involved early: reviewing plans for buildability, catching coordination problems before they become field problems, and putting together a schedule and budget that's actually accurate.",
    photo:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&auto=format&fit=crop&q=80',
    photoAlt: 'New single-family home under blue sky',
    steps: [
      { n: '01', title: 'Pre-Construction Review', body: "We go through the plans, flag anything that needs attention, and put together the real schedule before breaking ground." },
      { n: '02', title: 'Permitting', body: "We handle the permit application and manage the inspection schedule so you don't have to." },
      { n: '03', title: 'Site Prep & Foundation', body: 'Excavation, form work, pour. The most important phase, done carefully.' },
      { n: '04', title: 'Framing & Envelope', body: 'Structure, sheathing, windows, roofing. Once this is right, everything else goes in right.' },
      { n: '05', title: 'Rough Systems', body: 'Plumbing, electrical, HVAC, insulation. All coordinated and inspected before drywall goes up.' },
      { n: '06', title: 'Finish & Close Out', body: 'Trim, paint, fixtures, appliances, final inspections. Then we hand you the keys.' },
    ],
  },
  {
    slug: 'repairs',
    label: 'Repairs',
    tagline: 'Find the real problem. Fix it properly.',
    description:
      "Sometimes a deck is failing, a roof keeps leaking, or a floor is soft somewhere it shouldn't be. We do repair work correctly, with permits where required, without inflating the scope to make the job worth our while.",
    detail:
      "Diagnostic work is something we're genuinely good at. A recurring leak has a root cause. A soft floor has a story. We'd rather spend an extra hour figuring out the actual problem than patch the visible symptom and come back in two years.",
    photo:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&fit=crop&q=80',
    photoAlt: 'Contractor doing structural repair work',
    steps: [
      { n: '01', title: 'Honest Assessment', body: "We look at what's actually happening, tell you the cause, and give you a straight number on what a proper fix costs." },
      { n: '02', title: 'Scope Agreement', body: "Written scope before any work starts. No verbal understandings, no surprise additions without your approval." },
      { n: '03', title: 'Permitted Work', body: 'Structural repairs, electrical, and plumbing get permitted and inspected when the code requires it.' },
      { n: '04', title: 'Clean Site', body: 'We leave the property cleaner than we found it.' },
    ],
  },
];
