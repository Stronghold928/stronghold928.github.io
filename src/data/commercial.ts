/**
 * Commercial service lines. Mirrors the shape of `services.ts` so the same
 * pattern applies: add an entry here and the hub, the nav dropdown, the footer,
 * the city pages, and the sitemap all pick it up.
 *
 * Ground-up commercial construction is deliberately absent. It is a planned
 * addition, not an oversight — see TODO.md.
 */

export interface CommercialStep {
  n: string;
  title: string;
  body: string;
}

export interface CommercialFaq {
  q: string;
  a: string;
}

export interface CommercialService {
  slug: string;
  label: string;
  /** Short label for nav and footer, where the full label is too long. */
  navLabel: string;
  tagline: string;
  /** Hub-only blurb. Must not repeat `intro` — the hub and the child page are separate URLs. */
  hubSummary: string;
  metaTitle: string;
  /** Kept under 160 characters. */
  metaDescription: string;
  intro: string;
  /** Second paragraph of the hero. Carries the thing that differentiates this line. */
  introDetail: string;
  scopeEyebrow: string;
  scopeHeading: string;
  scopeIntro: string;
  scope: string[];
  steps: CommercialStep[];
  faqs: CommercialFaq[];
  /** Primary button label. Commercial buyers are not asking for a "free quote". */
  ctaLabel: string;
}

export const commercialServices: CommercialService[] = [
  {
    slug: 'tenant-improvement-flagstaff-az',
    label: 'Tenant Improvement & Build-Out in Flagstaff, AZ',
    navLabel: 'Tenant Improvement',
    tagline: 'Leased space, finished to suit.',
    hubSummary:
      'Build-outs and improvements in leased space, for tenants taking a suite and landlords turning one around. We handle the landlord coordination as well as the work.',
    metaTitle: 'Tenant Improvement & Commercial Build-Out in Flagstaff, AZ',
    metaDescription:
      'Commercial tenant improvement and build-out in Flagstaff and northern Arizona. Office and retail space, landlord coordination handled, licensed KB-1 Dual.',
    intro:
      "Most commercial work starts the same way: somebody signs a lease on a space that is not what they need yet. We take it from there. Demising walls, offices, storefronts, the electrical and data behind them, and the finishes that make it look like a business rather than a shell.",
    introDetail:
      "We work for tenants building out a suite and for landlords turning one around between occupants. Either way the landlord relationship is part of the job, not a side issue: work letters, certificates of insurance, building rules, access hours. We handle that so it does not land on you.",
    scopeEyebrow: 'Scope of Work',
    scopeHeading: 'What a build-out covers',
    scopeIntro:
      'We run the whole scope rather than handing you a set of gaps to fill. If something falls outside what we do, we say so before you sign, not halfway through.',
    scope: [
      'Demolition and disposal of existing improvements',
      'Demising walls, partitions, and interior framing',
      'Doors, hardware, and storefront glazing',
      'Electrical: circuits, panels, lighting, and controls',
      'Data, low-voltage, and rough-in for tenant equipment',
      'HVAC modification and distribution to the new layout',
      'Plumbing for break rooms and restrooms',
      'Ceilings, grid, and acoustic treatment',
      'Flooring, paint, and finish carpentry',
      'ADA path of travel, restrooms, and signage compliance',
      'Permit applications and inspection scheduling',
      'Certificate of occupancy coordination',
    ],
    steps: [
      {
        n: '1',
        title: 'Walk the Space',
        body: 'We meet you at the suite, look at what is actually there, and flag the things that cost money before they surprise you.',
      },
      {
        n: '2',
        title: 'Read the Work Letter',
        body: 'If a landlord is contributing, we read what they have committed to and price against it, so you know what the allowance really covers.',
      },
      {
        n: '3',
        title: 'Itemized Bid',
        body: 'Line by line, in writing. Labor, materials, subcontractors, permits. No lump sums.',
      },
      {
        n: '4',
        title: 'Permit & Build',
        body: 'We pull the permits, run the inspection schedule, and keep the building manager in the loop on access and noise.',
      },
      {
        n: '5',
        title: 'Punch & Close Out',
        body: 'We walk it with you, clear the list, and hand over the paperwork the landlord and the city both want.',
      },
    ],
    faqs: [
      {
        q: 'Do you work with the landlord or just with me?',
        a: "Both, and it is part of the job. We deal with the work letter, building rules, insurance certificates, and access hours directly with the property manager. You should not have to relay messages between your contractor and your landlord.",
      },
      {
        q: 'Can you give me a number before I sign the lease?',
        a: "Yes, and you should ask for one. A rough build-out number before you sign is what tells you whether the tenant improvement allowance on the table is realistic. We will walk a space you have not leased yet and give you a range at no charge.",
      },
      {
        q: 'How long does a commercial build-out take in Flagstaff?',
        a: "For a straightforward office or retail suite, four to ten weeks of construction is typical. Permits are the variable, not the work — commercial review through the City of Flagstaff takes longer than residential, and we build that into the schedule we give you rather than discovering it later.",
      },
      {
        q: 'Is there a minimum project size?',
        a: "No. We take small commercial work, including single-room changes and repairs that a larger general contractor will not return a call about. Same licensed crew either way.",
      },
      {
        q: 'Can you provide a certificate of insurance naming my landlord?',
        a: "Yes. Most commercial leases require the contractor to name the landlord and the property manager as additional insured before work starts. Tell us who needs to be on it and we will get it issued.",
      },
    ],
    ctaLabel: 'Request a Bid',
  },
  {
    slug: 'renovation-repair-flagstaff-az',
    label: 'Commercial Renovation & Repair in Flagstaff, AZ',
    navLabel: 'Renovation & Repair',
    tagline: 'We work around you, not the other way round.',
    hubSummary:
      'Renovation and repair for buildings that cannot close. Phased work, after-hours crews when the schedule needs it, and a clean site every morning.',
    metaTitle: 'Commercial Renovation & Repair in Flagstaff, AZ',
    metaDescription:
      'Commercial renovation, facility repair, and code upgrades in Flagstaff and northern Arizona. We work nights and weekends so your business stays open.',
    intro:
      "Refreshing an office that people are working in. Replacing a failing roof over a store that has to open Saturday. Fixing the thing that the fire inspector flagged. Most commercial repair work happens in buildings that cannot shut down for it, and that constraint shapes everything about how the job gets run.",
    introDetail:
      "We work nights and weekends when the schedule needs it. We phase the work so there is always a way in and a way out. We put up real dust containment rather than a sheet of plastic, and we leave the space usable at the end of every shift. Your customers should not be able to tell we were there.",
    scopeEyebrow: 'Scope of Work',
    scopeHeading: 'What we take on',
    scopeIntro:
      'Anything from a single failing system to a full interior refresh. If it is smaller than a general contractor usually bothers with, call anyway — we would rather tell you honestly than have you chase five people for a quote.',
    scope: [
      'Interior refresh: paint, flooring, ceilings, lighting',
      'Occupied-building remodels, phased around operations',
      'Roof repair and replacement',
      'Storefront, entry, and door repair',
      'Deferred maintenance assessment and prioritized repair plans',
      'Water intrusion diagnosis and remediation',
      'Structural repair and reinforcement',
      'ADA compliance upgrades',
      'Life-safety and code-correction work',
      'Restroom renovation and fixture replacement',
      'Parking lot, walkway, and exterior repair',
      'Emergency repair and make-safe',
    ],
    steps: [
      {
        n: '1',
        title: 'Assessment',
        body: 'We look at what is failing and tell you what has to happen now versus what can wait. In writing, in priority order.',
      },
      {
        n: '2',
        title: 'Schedule Around You',
        body: 'We plan the work against your operating hours before we price it, because when the work happens changes what it costs.',
      },
      {
        n: '3',
        title: 'Itemized Bid',
        body: 'Line by line, including the after-hours premium if there is one. You should be able to see what you are paying for.',
      },
      {
        n: '4',
        title: 'Phased Execution',
        body: 'Containment up, work done, site returned to usable at the end of each shift. Every shift.',
      },
      {
        n: '5',
        title: 'Walkthrough',
        body: 'We go through it with you and nothing is called done until you have signed off on it.',
      },
    ],
    faqs: [
      {
        q: 'Can you work nights and weekends?',
        a: "Yes. For occupied retail, offices, and anywhere with customers coming through the door, after-hours work is usually the right answer and we schedule it that way. It carries a premium and we show it as a separate line so you can decide whether it is worth it.",
      },
      {
        q: 'Do we have to close while you work?',
        a: "Almost never. We phase the work and contain it so the business keeps running. On the rare job where a short closure is genuinely cheaper or safer than working around you, we will tell you that up front and let you make the call.",
      },
      {
        q: 'How do you handle dust and noise in an occupied building?',
        a: "Proper temporary partitions, negative air where the work warrants it, and floor protection on the path in and out. Noisy work gets scheduled outside your hours. This is the part most contractors skimp on and it is the part your tenants and customers actually notice.",
      },
      {
        q: 'Do you take small commercial repairs?',
        a: "Yes. There is no minimum. A single door that will not latch, one section of failing roof, a restroom that needs bringing up to code — all of it is work we take, done by the same licensed crew that runs the larger jobs.",
      },
      {
        q: 'What if the repair turns out to be bigger than it looked?',
        a: "We stop and tell you before we keep going, not after. That is the whole point of opening something up carefully. You get a revised number and a decision to make, rather than a surprise on the invoice.",
      },
    ],
    ctaLabel: 'Request a Bid',
  },
  {
    slug: 'design-build-flagstaff-az',
    label: 'Design-Build & Preconstruction in Flagstaff, AZ',
    navLabel: 'Design-Build',
    tagline: 'One contract. One number. One team to hold accountable.',
    hubSummary:
      'Design and construction under a single contract, with real budget numbers early enough to act on them. For projects where the drawings do not exist yet.',
    metaTitle: 'Design-Build & Preconstruction in Flagstaff, AZ',
    metaDescription:
      'Commercial design-build and preconstruction in Flagstaff, AZ. One contract for design and construction, with real budget numbers before drawings are finished.',
    intro:
      "The traditional way to do this is to hire an architect, finish the drawings, then find out what it costs. That works until the bid comes back forty percent over and you spend two months cutting scope out of a design you already paid for.",
    introDetail:
      "Design-build puts the design and the construction under one contract, with us pricing the thing as it is being drawn. You get a real number at the point where changing it is still cheap. Industry-wide, bringing a contractor in during schematic design saves eight to fifteen percent on hard costs against the same project value-engineered late. More usefully, it means the number you are given early is the number you end up paying.",
    scopeEyebrow: 'What You Get',
    scopeHeading: 'Preconstruction, before anything is committed',
    scopeIntro:
      'This is the work that happens before a shovel moves, and it is where the money is either saved or lost. This service suits projects with real scope to them — for straightforward suite work, our tenant improvement service is the better fit and costs you less.',
    scope: [
      'Feasibility review before you commit to a site or a lease',
      'Budget estimating at each design milestone',
      'Constructability review of drawings in progress',
      'Value engineering while changes are still cheap',
      'Long-lead material identification and procurement planning',
      'Realistic permit timeline for the jurisdiction you are in',
      'Trade contractor selection and prequalification',
      'A single contract covering design and construction',
      'One point of accountability for the finished result',
    ],
    steps: [
      {
        n: '1',
        title: 'Define the Problem',
        body: 'What the space has to do, what it can cost, and when you need to be in it. Before anyone draws anything.',
      },
      {
        n: '2',
        title: 'Concept & First Budget',
        body: 'A design direction and a real cost range attached to it. If those two do not agree, this is the cheapest moment to find out.',
      },
      {
        n: '3',
        title: 'Design Development',
        body: 'We price as the drawings develop and flag anything that is about to get expensive while it can still be changed.',
      },
      {
        n: '4',
        title: 'Fixed Number',
        body: 'Drawings finished, scope locked, a firm price you can plan against. No bid-day surprise.',
      },
      {
        n: '5',
        title: 'Build & Close Out',
        body: 'Same team, same accountability. Nobody gets to blame the drawings, because we priced them.',
      },
    ],
    faqs: [
      {
        q: 'What is design-build, in plain terms?',
        a: "One contract instead of two. Normally you hire an architect and then separately hire a builder, and when something goes wrong each points at the other. Under design-build you hire us, we bring the design team, and there is one party responsible for the result.",
      },
      {
        q: 'Do I still get an architect?',
        a: "Yes. Design-build does not mean unlicensed design. It means the architect works under our contract instead of a separate one, so the design and the budget stay in the same conversation from the start.",
      },
      {
        q: 'Can I bring my own architect?',
        a: "Yes, and we often prefer it if you already have a working relationship. We come in for preconstruction alongside them, price the drawings as they develop, and build the result. You get the budget discipline without changing designers.",
      },
      {
        q: 'When should I bring you in?',
        a: "Earlier than feels natural. The most useful conversation is usually before you sign a lease or close on a site, because that is when knowing the real number can still change your decision. By the time drawings are complete, most of the cost is already locked in.",
      },
      {
        q: 'Is this worth it for a small project?',
        a: "Often not, and we will tell you. If you need a suite built out to a standard layout, our tenant improvement service does the job with less process and less cost. Design-build earns its keep when the scope is genuinely undefined or the project is complex enough that a late redesign would hurt.",
      },
    ],
    ctaLabel: 'Start a Conversation',
  },
];

/** Sectors we name publicly. Only what we have actually built for. */
export const commercialSectors = [
  {
    name: 'Office & professional suites',
    body: 'Offices, professional practices, and coworking. Demising, private offices, conference rooms, and the data and power to run them.',
  },
  {
    name: 'Retail & storefront',
    body: 'Shops, showrooms, and storefront conversions. Sales floor, back of house, entry, and the signage and ADA path that come with public access.',
  },
];

/**
 * Capability facts shown on /commercial/capabilities/ and summarised on the hub.
 *
 * `value: null` renders as "Available on request", which is honest and still
 * clears most first-pass procurement filters. Replace with a real figure when
 * one is confirmed — do not invent one.
 */
export interface Capability {
  label: string;
  value: string | null;
  note: string;
}

export const capabilities: Capability[] = [
  {
    label: 'License',
    value: 'AZ ROC #354046 — KB-1 Dual',
    note: 'A KB-1 Dual combines the B-1 General Commercial and residential building classifications. It carries no project size limit, commercial or residential.',
  },
  {
    label: 'Bonding capacity',
    value: null,
    note: 'Single-project and aggregate capacity confirmed through our surety on request.',
  },
  {
    label: 'General liability',
    value: null,
    note: 'Commercial limits above what residential work requires. Certificates issued naming the landlord and property manager as additional insured.',
  },
  {
    label: 'Workers compensation',
    value: null,
    note: 'Carried on all field personnel. Certificate available before work starts.',
  },
  {
    label: 'Service area',
    value: 'Flagstaff and northern Arizona',
    note: 'Twelve communities across Coconino, Yavapai, Navajo, and Gila counties.',
  },
  {
    label: 'Delivery methods',
    value: 'General contracting, design-build',
    note: 'Negotiated or competitively bid. We will work to your contract or ours.',
  },
];
