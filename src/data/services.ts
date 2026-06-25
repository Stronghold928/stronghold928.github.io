export interface ServiceStep {
  n: string;
  title: string;
  body: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
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
  faqs: ServiceFaq[];
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
    designCta: { label: 'Find Your Design Style', href: '/design' },
    faqs: [
      { q: "How long does a home remodel take in Flagstaff, AZ?", a: "Most kitchen remodels take 6–10 weeks; bathroom remodels 3–5 weeks; full home remodels 3–6 months. Timing depends on scope, permit schedules, and material lead times. We give you a real schedule before work starts, not an optimistic guess." },
      { q: "Do you handle permits for remodeling projects?", a: "Yes. We pull all required permits and manage the inspection schedule. Structural changes, electrical, and plumbing work require permits in Flagstaff under the Coconino County building codes — we handle it so you don't have to." },
      { q: "Do I need an architect before hiring you for a remodel?", a: "For most remodels, no. We can design the scope and selections with you. For significant structural changes or additions, we'll tell you when an architect is the right call and can connect you with designers we trust." },
      { q: "What is included in a remodeling quote from Stronghold?", a: "Our quotes are itemized line by line — labor, materials, subcontractors, permits. No lump sums. You should know exactly what you're paying for before you sign anything." },
      { q: "Do you serve areas outside of Flagstaff for remodeling?", a: "Yes. We regularly remodel homes in Williams, Sedona, Camp Verde, Winslow, Show Low, Payson, and Prescott Valley. If you're in northern Arizona, reach out and we'll confirm coverage." },
    ],
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
    faqs: [
      { q: "What makes older homes in northern Arizona different to restore?", a: "Northern Arizona homes face altitude-specific challenges: freeze-thaw cycles that stress foundations and sill plates, UV exposure at 7,000+ feet that degrades roofing and siding faster, and historic building codes that require careful coordination when updating systems." },
      { q: "How do you decide what to preserve versus replace in a restoration?", a: "We start with a condition assessment and give you a written report separating what must be addressed from what's optional. Original materials stay when they're structurally sound and can be matched. Modern materials go in where they perform better — we make those calls with you, not around you." },
      { q: "Do you work on historic properties in Flagstaff?", a: "Yes. We have experience with pre-1950 homes in Flagstaff's historic districts and understand the documentation and permit requirements for those projects." },
      { q: "Can restoration work be phased over time?", a: "Almost always, yes. We build a phased plan that protects the structure first, then works outward based on your timeline and budget. Most restoration projects happen over 1–3 years." },
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
    faqs: [
      { q: "Do you build custom homes in northern Arizona?", a: "Yes. We build single-family and multi-family homes across northern Arizona — Flagstaff, Williams, Winslow, Show Low, and surrounding areas. Custom owner-occupied builds, spec homes, and small investment properties." },
      { q: "Can I bring my own architect's plans?", a: "Absolutely. We work from your architect's drawings and get involved early to review for buildability, catch coordination issues before they become field problems, and put together an accurate schedule and budget." },
      { q: "How long does it take to build a new home in Flagstaff?", a: "For a typical 2,000–3,000 sq ft single-family home, expect 8–14 months from groundbreaking to keys — depending on complexity, weather, and permit timing. We'll give you a realistic schedule in the pre-construction phase." },
      { q: "Do you handle the permit and inspection process for new construction?", a: "Yes. We manage the permit application, municipal coordination, and the full inspection schedule. You don't have to navigate Coconino County building department timelines on your own." },
      { q: "What does building in Flagstaff at elevation require?", a: "At 6,900 feet, Flagstaff building requires attention to snow load (up to 55 psf on roofs), freeze-thaw cycles, UV degradation of materials, and Arizona Energy Code compliance for insulation. We design and build to these requirements as a standard practice." },
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
    faqs: [
      { q: "What kinds of repairs do you handle?", a: "Structural repairs (foundation, sill plates, beams), roof repairs, deck repair and replacement, water damage remediation, window and door replacements, soft floors, and recurring leaks where the root cause needs diagnosis, not just patching." },
      { q: "Do you do small jobs or only large projects?", a: "We do repair work at any scope if it requires a licensed contractor. We won't take a job just to inflate the invoice, but we also won't turn away a legitimate repair because it's small." },
      { q: "Do repairs require permits?", a: "Structural repairs, electrical, and plumbing work require permits under Arizona code. We pull them when required and handle the inspection. We won't skip the permit to save time — it protects you when you sell." },
      { q: "How quickly can you respond to a repair need?", a: "We respond within one business day for all inquiries. For urgent structural or safety issues, call us directly and we'll prioritize accordingly." },
    ],
  },
];
