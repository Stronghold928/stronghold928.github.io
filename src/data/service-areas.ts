export interface ServiceAreaFaq {
  q: string;
  a: string;
}

export interface ServiceArea {
  slug: string;
  cityName: string;
  county: string;
  stateAbbr: string;
  headline: string;
  description: string;
  highlights: string[];
  /**
   * Second body paragraph: what building in this city actually involves.
   * `description` sells the city, this one earns it. Kept to climate, terrain,
   * jurisdiction, and housing stock - things that are true of the place rather
   * than claims about our track record in it.
   */
  buildingNotes: string;
  /**
   * Rendered on the page and serialised into FAQPage schema, the same way the
   * service pages do it. This is where most of the per-city word count lives,
   * and it is the reason these pages read as written-for-the-city rather than
   * filled-in-for-the-city.
   */
  faqs: ServiceAreaFaq[];
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
    description: "Flagstaff is our home base. We've built and remodeled homes throughout the city, from the historic neighborhoods near downtown to newer subdivisions on the east and west sides. Working in Flagstaff means understanding 6,900-foot elevation construction: snow load design, freeze-thaw cycles, UV-resistant materials, and energy code compliance that actually matters at altitude.",
    highlights: [
      'Full range of services: remodeling, restoration, new builds, and repairs',
      'Experience with Flagstaff historic districts and older home restoration',
      'Familiar with Coconino County and City of Flagstaff permitting',
      'Snow load and altitude-specific building practices',
    ],
    buildingNotes:
      "Flagstaff enforces one of the more demanding energy codes in the state, and at 6,900 feet it earns it. Ground snow load drives roof framing and deck structure, frost depth drives footing design, and the freeze-thaw cycle eventually finds every gap in an exterior envelope. The practical effect on a remodel is that opening up a wall or a roof here tends to surface something a lower-elevation crew would not think to look for. We plan for that rather than discovering it on your dime.",
    faqs: [
      { q: "Do I need a permit to remodel a home in Flagstaff?", a: "For most projects, yes. Structural changes, electrical, plumbing, mechanical, and anything altering the building envelope require a permit through the City of Flagstaff inside city limits, or Coconino County outside them. Cosmetic work such as paint, flooring, and cabinet replacement generally does not. We pull the permits and manage the inspection schedule on every job that needs one." },
      { q: "How do snow loads affect a remodel or addition in Flagstaff?", a: "More than most people expect. Ground snow load governs roof framing, deck structure, and any addition tying into an existing roof. It is the most common reason a Flagstaff addition costs more than the same addition at lower elevation: the structure underneath has to carry more. It is also why an older deck here often needs replacing rather than resurfacing." },
      { q: "Do you work in Flagstaff's historic districts?", a: "Yes. The Townsite and Railroad Addition districts carry design review on top of the standard permit path, and pre-1950 homes come with their own structural realities: sill plates, foundations, knob-and-tube remnants, and windows that are worth saving more often than not. We handle the review coordination and the work." },
      { q: "Do you work outside Flagstaff city limits?", a: "Yes. We work throughout Coconino County and across northern Arizona, including Williams, Sedona, the Verde Valley, Winslow, the White Mountains, and the Prescott area. Outside city limits the permit path runs through the county rather than the City, which changes the submittal and inspection process but not the work itself." },
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
    description: "We regularly work in Williams and the surrounding area, including wooded lot builds, vacation property renovations, and year-round home improvements. Williams sits at 6,700 feet with a climate and building environment similar to Flagstaff. We're familiar with the terrain, the permit process through Coconino County, and the challenges of building on private wooded lots.",
    highlights: [
      'New home construction on wooded and rural lots',
      'Vacation home and STR property renovations',
      'Well and septic coordination for rural builds',
      'Williams and Coconino County permitting experience',
    ],
    buildingNotes:
      "Williams builds much like Flagstaff, with the same snow loads, the same freeze-thaw, and the same pine-country soils. What changes is that a lot of the work sits on private wooded lots outside town where the utility situation drives the job. Well and septic coordination, long power runs, and whether a concrete truck can reach the pour are the things that move a Williams budget, and they are worth settling before a design gets far.",
    faqs: [
      { q: "Who issues building permits in Williams?", a: "The City of Williams handles permits inside the city limits; anything outside runs through Coconino County. The county path is the more common one for the wooded-lot builds around Williams, and it carries its own septic and driveway-access requirements on top of the building permit itself." },
      { q: "Do I need a well and septic for a build outside Williams?", a: "On most unincorporated lots, yes. Septic requires a site evaluation and a county permit, and well drilling is its own contractor on its own timeline. Both need to start early. They are the two items most likely to hold up a rural build, and neither is something you want to discover after the foundation has been designed." },
      { q: "Do you work on vacation rental properties in Williams?", a: "Yes. Williams carries a lot of second-home and short-term rental property, and that work is usually renovation between guest seasons against a hard end date. We schedule those tight and tell you up front whether the window is realistic rather than finding out in week six." },
      { q: "Is Williams far enough that it changes scheduling?", a: "No. Williams is about 35 miles west on I-40, roughly a 35-minute drive, which puts it inside our normal daily range. Crews work there the same way they do in Flagstaff, and every service we offer is available." },
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
    description: "Sedona's high-end residential market, strict HOA requirements, and Yavapai County permitting make it a different environment than Flagstaff, and one we're comfortable in. We work on custom home remodels, luxury bathroom and kitchen renovations, exterior restoration, and new construction on difficult desert terrain. If your project requires meeting specific design guidelines or HOA approval, we've done it.",
    highlights: [
      'Custom home remodeling and luxury renovations',
      'HOA compliance coordination for Sedona communities',
      'Yavapai County and City of Sedona permitting',
      'Exterior restoration on high-exposure desert-facing properties',
    ],
    buildingNotes:
      "Sedona is the most design-controlled market we work in. City ordinances protect views, night sky, and the red rock setting, which means exterior color, roof reflectivity, lighting, and height all get scrutiny they would not get in Flagstaff. Add HOA review in most of the subdivisions and there are two approval tracks running at once. The build is often the straightforward part. Approvals are where a Sedona project is won or lost, and they need to be sequenced first.",
    faqs: [
      { q: "What makes permitting in Sedona different?", a: "Sedona layers design review on top of the standard building permit. Exterior colors have to fall within an approved range, lighting has to meet dark-sky requirements, and height and setback are read strictly against view protection. Properties fall under the City of Sedona or under Yavapai or Coconino County depending on location, so the first question on any Sedona job is which jurisdiction you are actually in." },
      { q: "Do you handle HOA approval?", a: "We coordinate it. Most Sedona subdivisions require the HOA to sign off on exterior changes before the city will move, and the submittal usually wants drawings, material samples, and color specifications. We prepare that package and work through the revisions rather than handing you a form and wishing you luck." },
      { q: "Do you take on high-end kitchen and bath work in Sedona?", a: "Yes, and it is most of what we do there. Sedona's housing stock skews toward custom homes where finishes and millwork carry the project and the tolerances are tighter than a standard remodel. That work needs a longer selections phase up front, which we build into the schedule rather than compressing later." },
      { q: "How does the desert exposure affect exterior work?", a: "At roughly 4,300 feet with very little shade, UV and heat cycling are the main enemies of a Sedona exterior. Stucco, sealants, south- and west-facing windows, and any exposed wood all age faster than they would up on the rim. We specify for that rather than reaching for what works in Flagstaff." },
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
    description: "Camp Verde sits at the bottom of the Verde Valley at 3,100 feet, a noticeably different climate from Flagstaff that affects material selection, insulation requirements, and exterior durability. We handle remodeling, repairs, and renovation work in Camp Verde and the surrounding Cornville, Clarkdale, and Cottonwood corridor, coordinating with Yavapai County for permits.",
    highlights: [
      'Home remodeling and renovations at lower elevation',
      'Verde Valley climate building experience',
      'Yavapai County permitting coordination',
      'Agricultural and rural property builds and repairs',
    ],
    buildingNotes:
      "Camp Verde is the lowest and hottest place we work, and that flips most of the assumptions that hold in Flagstaff. Insulation strategy shifts from keeping heat in to keeping it out, roof and window specification follow, and cooling load rather than heating load drives mechanical sizing. The Verde River bottom also brings floodplain considerations on some parcels, which is worth checking before a design is committed.",
    faqs: [
      { q: "Who issues permits in Camp Verde?", a: "The Town of Camp Verde handles permits within town limits, and Yavapai County covers the unincorporated Verde Valley around it, including Cornville and the river corridor. Which one applies comes down to the parcel, and it is the first thing we confirm. The submittal requirements and inspection schedules are not the same." },
      { q: "Does the lower elevation actually change how you build?", a: "Yes, meaningfully. At 3,100 feet Camp Verde runs far warmer than Flagstaff through the summer, so the building envelope is working in the opposite direction. Insulation, roof color and material, window glazing, and HVAC sizing all get specified for cooling load rather than heating load. Applying a Flagstaff spec down here is a common and expensive mistake." },
      { q: "Do you work on rural and agricultural properties?", a: "Yes. A lot of Camp Verde sits on acreage with wells, septic, outbuildings, and shops, and that work carries its own requirements around setbacks, access, and utility runs that can be long. We handle barns, shops, and garages alongside the house itself." },
      { q: "Could my property be in a floodplain?", a: "It is worth checking. The Verde River and its tributaries put parts of Camp Verde inside mapped flood zones, which affects finished floor elevation, foundation design, and in some cases whether an addition is permittable at all. Yavapai County maintains the maps. We check before design rather than after, because it is the kind of finding that changes a project rather than adjusting it." },
    ],
    distanceFromFlagstaff: '~40 miles south on I-17',
    servicesNote: 'Remodeling, restoration, repairs, and new construction all available.',
  },
  {
    slug: 'cottonwood',
    cityName: 'Cottonwood',
    county: 'Yavapai',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Cottonwood, AZ',
    description: "Cottonwood is the working center of the Verde Valley at 3,300 feet, which puts it in a different building climate than anything up on the rim. Heat and UV drive material selection here, and insulation requirements are nothing like Flagstaff's. We work the whole corridor from here, including Clarkdale, Cornville, and Verde Village, on remodels, additions, and repairs. Permits go through the City of Cottonwood or Yavapai County depending on where the property sits.",
    highlights: [
      'Home remodeling and additions across the Verde Valley',
      'Low-elevation material and insulation selection',
      'City of Cottonwood and Yavapai County permitting',
      'Old Town Cottonwood renovation and older home repair',
    ],
    buildingNotes:
      "Cottonwood is the service center for the Verde Valley, and its housing splits cleanly in two. The older stock around Old Town predates modern insulation and wiring standards, while the newer subdivisions out toward Verde Village are conventional tract construction. The two need different things. Old Town work tends toward systems and structure, meaning rewiring, plumbing, foundations, and windows, while the newer areas are mostly kitchens, baths, and additions.",
    faqs: [
      { q: "Who issues building permits in Cottonwood?", a: "The City of Cottonwood inside city limits, Yavapai County outside them. Verde Village, Cornville, and much of the surrounding area are unincorporated and go through the county. We confirm the jurisdiction before drawing anything, because the two have different submittal packages and different inspection lead times." },
      { q: "Do you work on older homes in Old Town Cottonwood?", a: "Yes, and it is some of the more interesting work in the valley. Older Cottonwood homes commonly need electrical service upgrades, plumbing replacement, and foundation or framing repair before any cosmetic remodel is worth doing. We assess that first and tell you honestly what has to happen versus what you might want to happen." },
      { q: "How is building in Cottonwood different from Flagstaff?", a: "About 3,600 feet of elevation different. Cottonwood at 3,300 feet is a cooling climate rather than a heating one, so insulation, roofing, glazing, and HVAC are all specified the other way round. Snow load is not a factor. UV and summer heat are what age an exterior here." },
      { q: "Do you take on additions in Cottonwood?", a: "Yes. Additions are common in Verde Village and the newer subdivisions where lots have room and the original houses were built small. The usual constraints are setbacks, septic capacity if the property is not on city sewer, and whether the existing electrical service can carry the added load. We check all three before scoping." },
    ],
    distanceFromFlagstaff: '~50 miles south via I-17 and AZ-260',
    servicesNote: 'Remodeling, restoration, repairs, and new construction all available.',
  },
  {
    slug: 'winslow',
    cityName: 'Winslow',
    county: 'Navajo',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Winslow, AZ',
    description: "Winslow sits at 4,850 feet on the high desert plateau east of Flagstaff. We take on remodeling and repair work in Winslow for homeowners who want a licensed contractor but can't find local options that meet their standards. The older housing stock in Winslow often needs structural attention. We're experienced in diagnosing and repairing deferred maintenance issues in homes that were built decades ago.",
    highlights: [
      'Structural repair and renovation of older homes',
      'Deferred maintenance diagnosis and prioritized repair plans',
      'Navajo County permitting coordination',
      'Straightforward travel from Flagstaff with no logistical issues',
    ],
    buildingNotes:
      "Winslow's housing stock is older than almost anywhere else we work, and much of it has been carrying deferred maintenance for a long time. The pattern repeats: a house that needs three or four structural things addressed in the right order before any cosmetic money is worth spending. High desert conditions are hard on roofs, siding, and sealants in particular, with large daily temperature swings, persistent wind, and hard UV at very low humidity.",
    faqs: [
      { q: "Who issues permits in Winslow?", a: "The City of Winslow handles permits inside city limits; Navajo County covers the unincorporated areas around it. The county process is straightforward, but lead times can run longer than Coconino's. We build that into the schedule rather than promising around it." },
      { q: "My Winslow house has a long list of problems. Where do we start?", a: "With an assessment, not a quote. We walk the whole structure, including foundation, framing, roof, envelope, and systems, and give you a written report in priority order: what is actively causing damage, what will soon, and what is cosmetic. Then you decide how much of that list to take on and in what order. Spending on finishes before the structure is right is the most common way money gets wasted on an older home." },
      { q: "Do you take on small repair jobs in Winslow?", a: "Usually as part of a larger visit rather than on their own. Winslow is about 60 miles east on I-40, so a single small item rarely justifies the trip, though grouping several into one scope works well. Tell us the full list and we will be straight about whether it makes sense." },
      { q: "Do you build new homes in Winslow?", a: "By project. Our regular Winslow work is remodeling, restoration, and repair. New construction there is something we take on case by case depending on scope and schedule, so it is worth a conversation rather than an assumption either way." },
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
    description: "Show Low and the White Mountains area at 6,300 feet share many building characteristics with Flagstaff: snow loads, pine country terrain, and the same mix of year-round residents and vacation properties. We work in Show Low for homeowners doing major remodels, custom builds, and restoration on properties that need more than a handyman but can't find a reliable licensed contractor locally.",
    highlights: [
      'Custom home construction in the White Mountains',
      'Major remodeling for year-round and vacation homes',
      'Snow country building practices at high elevation',
      'Navajo County permitting experience',
    ],
    buildingNotes:
      "Show Low builds a lot like Flagstaff, with snow loads, pine country terrain, and the same split between year-round residents and seasonal owners. What differs is the drive. Ninety miles southeast on AZ-260 is a trip rather than a commute, and that shapes how we work there: fewer and larger mobilizations, more material staged on site, and a schedule built around the crew being present for stretches rather than days. It suits major remodels and builds, and suits one-afternoon jobs poorly.",
    faqs: [
      { q: "Who issues permits in Show Low?", a: "The City of Show Low inside city limits, Navajo County outside. Much of the surrounding White Mountains area is unincorporated, so the county path is the common one. Both are workable, though county lead times tend to run longer." },
      { q: "Is Show Low too far for you?", a: "Not for the right project. It is about 90 miles southeast on AZ-260, so we take on larger remodels, custom builds, and restoration work there rather than small repairs. We would rather tell you up front that a job does not pencil at that distance than take it and do it badly." },
      { q: "How does building at 6,300 feet compare to Flagstaff?", a: "Closely. Show Low sits a few hundred feet below Flagstaff and shares the same fundamentals: ground snow load driving roof and deck structure, frost depth driving footings, and freeze-thaw working on every exterior joint. A spec that works in Flagstaff generally works in Show Low, which is not true of anywhere down in the Verde Valley." },
      { q: "Do you work on vacation and second homes in Show Low?", a: "Regularly. A lot of White Mountains property belongs to people who are there part of the year, which means working unsupervised and reporting honestly on what we find. Photos and weekly updates are how those jobs run by default, not on request." },
    ],
    distanceFromFlagstaff: '~90 miles southeast on AZ-260',
    servicesNote: 'Available for larger projects. Contact us to discuss scope and scheduling.',
  },
  {
    slug: 'pinetop-lakeside',
    cityName: 'Pinetop-Lakeside',
    county: 'Navajo',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Pinetop-Lakeside, AZ',
    description: "Pinetop-Lakeside sits at 6,800 feet in the White Mountains, eight miles up AZ-260 from Show Low. It's cabin and second-home country, and a lot of that housing stock went up quickly in the seventies and eighties and has been taking snow loads ever since. We handle structural repair, deck and roof replacement, and full remodels here, usually for owners who see the property a few weekends a year and need someone they can trust to work unsupervised.",
    highlights: [
      'Cabin and vacation property remodeling and structural repair',
      'Snow load roof and deck replacement at high elevation',
      'WUI (wildland-urban interface) fire code compliance for forested lots',
      'Town of Pinetop-Lakeside and Navajo County permitting',
    ],
    buildingNotes:
      "Pinetop-Lakeside is cabin country, and the housing tells you when it was built. A large share went up quickly through the seventies and eighties and has been taking 6,800-foot snow loads ever since, which is why decks and roof structures are the two things we are asked to look at most. The other constant is fire. These are forested lots inside the wildland-urban interface, and WUI requirements shape roofing, siding, decking, venting, and defensible space in ways that surprise owners who last built somewhere else.",
    faqs: [
      { q: "What is WUI code and does it apply to my lot?", a: "Wildland-urban interface code governs construction on forested lots where wildfire risk is elevated, and most of Pinetop-Lakeside qualifies. It affects roofing class, exterior siding and decking materials, soffit and attic venting, and the defensible space around the structure. It is neither optional nor cosmetic. On a roof or deck replacement here it usually drives material selection outright." },
      { q: "My cabin's deck is sagging. Repair or replace?", a: "More often replace, and the reason is snow. A deck framed in the seventies at 6,800 feet has been carrying loads that current code sizes for far more conservatively, and thirty-plus winters of freeze-thaw have worked on every fastener and ledger connection. We will tell you which one you are looking at once we can see the framing, but replacement is the honest base rate here." },
      { q: "Can you work while I'm not there?", a: "Yes, and that is how most Pinetop-Lakeside jobs run. Much of the property here is second homes seen a few weekends a year. We work unsupervised, document what we open up with photos, and call before any decision that changes scope or cost rather than after." },
      { q: "Who issues permits in Pinetop-Lakeside?", a: "The Town of Pinetop-Lakeside inside town limits and Navajo County outside. Either way, WUI compliance is reviewed as part of the permit on forested parcels, which is one more reason to settle material selections before submittal rather than during." },
    ],
    distanceFromFlagstaff: '~100 miles southeast on AZ-260',
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
    buildingNotes:
      "Payson sits under the Mogollon Rim at 4,900 feet, between the two climates we work at either end: real winters, but nothing like the snow loads up on the plateau, and summers warm enough that cooling matters. The housing skews toward retirement and second homes, often well built originally and now twenty to forty years old, which is the age where roofs, decks, windows, and mechanical systems tend to come due at once. Forested parcels here carry WUI requirements.",
    faqs: [
      { q: "Who issues building permits in Payson?", a: "The Town of Payson inside town limits and Gila County outside. Gila is a different jurisdiction from the Coconino, Yavapai, and Navajo county offices that cover the rest of our service area, with its own submittal package and inspection process. We handle it, but it is worth knowing the process is not identical." },
      { q: "Is Payson too far for a remodel?", a: "It is about 95 miles south via AZ-87, so we take on larger projects there, including additions, major remodels, restoration, and new construction, rather than small repairs. Anything substantial enough to justify a sustained crew presence works well. A single afternoon's work does not." },
      { q: "Does WUI fire code apply in Payson?", a: "On many parcels, yes. Payson is surrounded by the Tonto National Forest and a good share of residential lots sit in the wildland-urban interface, where roofing class, siding and decking materials, venting, and defensible space are all regulated. If you are replacing a roof or a deck, it is the first thing to settle." },
      { q: "Do you work on retirement and second homes in Payson?", a: "Frequently. It is a large share of the housing there, and the common thread is an owner who wants the work done properly and is not always on site to watch it. We document as we go, and we are direct about what a house actually needs versus what would simply generate more work for us." },
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
    description: "Prescott Valley and the broader Prescott metro at 5,100 feet is one of the fastest-growing markets in northern Arizona. We take on remodeling and renovation work in Prescott Valley for homeowners doing major projects: kitchen and bathroom remodels, home additions, and restoration of older properties, where quality and a licensed contractor matter more than finding the lowest bid.",
    highlights: [
      'Kitchen and bathroom remodeling in a growing market',
      'Home additions and square-footage expansions',
      'Yavapai County and Town of Prescott Valley permitting',
      'Experienced with Prescott area HOA requirements',
    ],
    buildingNotes:
      "Prescott Valley is newer than almost anywhere else we work, most of it built from the 1990s on, and that changes the nature of the job. There is very little structural restoration here and a great deal of kitchens, baths, and additions on houses built to a builder's budget and now being improved by their second or third owners. Tract construction has its own patterns: predictable framing, predictable service sizes, and predictable places where the original build cut corners. Knowing them shortens the discovery phase.",
    faqs: [
      { q: "Who issues permits in Prescott Valley?", a: "The Town of Prescott Valley inside town limits, Yavapai County outside. The town's process is well organised and generally moves faster than the county's, which is one of the practical advantages of working inside the town limits." },
      { q: "Will my HOA need to approve the work?", a: "Very likely. Most Prescott Valley subdivisions are governed by an HOA with architectural review over anything visible from the street, including additions, exterior color, roofing, windows, and sometimes landscaping. We prepare the submittal package and work it through alongside the building permit rather than treating them as sequential." },
      { q: "Can you add square footage to a tract home?", a: "Usually. The constraints are lot setbacks, HOA architectural guidelines, and whether the existing electrical service and HVAC can carry the addition, since tract homes are frequently sized with no headroom. We check all three before scoping, because any one of them can change what is worth building." },
      { q: "Do you build new homes in Prescott Valley?", a: "Our focus there is remodeling and renovation. New construction is something we will discuss case by case depending on the lot and the scope, but it is not our regular work in that market, so it is worth a conversation rather than an assumption." },
    ],
    distanceFromFlagstaff: '~80 miles south on I-17 to AZ-69',
    servicesNote: 'Remodeling and renovation focus. Contact us for new construction inquiry.',
  },
  {
    slug: 'prescott',
    cityName: 'Prescott',
    county: 'Yavapai',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Prescott, AZ',
    description: "Prescott sits at 5,400 feet and holds the oldest housing stock in Yavapai County. The neighborhoods around the courthouse square and Mount Vernon Avenue are full of Victorian and Craftsman homes built between the 1890s and the 1930s, and most of them need the same three things: foundation and sill work, roof systems, and windows. We take that work on, along with kitchen and bath remodels in the newer subdivisions west of town. Permits run through the City of Prescott inside city limits and Yavapai County outside them.",
    highlights: [
      'Restoration of Victorian and Craftsman homes in the historic districts',
      'Kitchen and bathroom remodeling across the Prescott area',
      'City of Prescott and Yavapai County permitting',
      'Historic district design review coordination',
    ],
    buildingNotes:
      "Prescott holds the oldest housing stock in Yavapai County and one of the largest concentrations of intact Victorian and Craftsman homes in Arizona. The neighborhoods around the courthouse square and Mount Vernon Avenue were built between the 1890s and the 1930s, and a century on they need the same short list with remarkable consistency: foundations and sill plates, roof systems, and windows. Get those three right and the house has another century in it. The design review that comes with the historic districts is an additional track, and it rewards being planned for rather than worked around.",
    faqs: [
      { q: "Do you work on historic homes in Prescott?", a: "Yes, it is a core part of what we do there. Victorian and Craftsman homes from the 1890s through the 1930s have predictable failure points, starting with sill plates and foundations, then roof systems, then windows. The order matters more than the individual line items. We assess the whole structure and give you a written priority list before quoting any of it." },
      { q: "What does historic district design review involve?", a: "For properties in Prescott's historic districts, exterior changes go through review in addition to the standard building permit. Windows, siding, roofing, porches, and anything else visible from the street get looked at for appropriateness to the period. It adds time and it constrains material choices. We plan the submittal around it rather than discovering the constraints mid-project." },
      { q: "Should I replace or restore original windows?", a: "More often restore than owners expect. Original double-hung windows in a Prescott Victorian were built from old-growth wood and are frequently repairable when a modern replacement would not be, and inside a historic district replacement may not be approvable anyway. We will tell you honestly when a window is past saving, because some are, but we look first." },
      { q: "Who issues permits in Prescott?", a: "The City of Prescott inside city limits, Yavapai County outside. Inside the historic districts there is the additional design review step. Which set of rules applies comes down to the parcel, and it is the first thing we confirm." },
    ],
    distanceFromFlagstaff: '~90 miles southwest on I-17 and AZ-69',
    servicesNote: 'Remodeling, restoration, and repair work available. New construction by project.',
  },
  {
    slug: 'chino-valley',
    cityName: 'Chino Valley',
    county: 'Yavapai',
    stateAbbr: 'AZ',
    headline: 'General Contractor in Chino Valley, AZ',
    description: "Chino Valley at 4,700 feet is one of the fastest-growing parts of Yavapai County, and most of the work here is new: builds on acreage lots north of Prescott where the nearest utility connection can be a long way off. We handle ground-up construction, well and septic coordination, and shop and outbuilding work, along with remodels on the older ranch properties along AZ-89. Permits run through the Town of Chino Valley or Yavapai County.",
    highlights: [
      'New home construction on rural and acreage lots',
      'Well and septic coordination for off-utility builds',
      'Shops, garages, and outbuilding construction',
      'Town of Chino Valley and Yavapai County permitting',
    ],
    buildingNotes:
      "Most of what gets built in Chino Valley is new, and most of it sits on acreage where the utilities are the project. Power can be a long run from the nearest pole, water usually means a well, and waste means a septic system that needs a site evaluation before anything is designed. None of that is unusual, but all of it has to be sequenced early, because the answers change the building's siting and sometimes its footprint. The older ranch properties along AZ-89 are the other half of the work, and those are remodels.",
    faqs: [
      { q: "What's involved in building on acreage near Chino Valley?", a: "Three things a lot inside a town already has: water, power, and waste. A well means a drilling contractor and a timeline you do not fully control. Power may be a long run from the nearest connection, priced by the foot. Septic requires a site evaluation and a county permit before the design is final. These get settled first, because they influence where on the lot the house can go." },
      { q: "Do you build shops, garages, and outbuildings?", a: "Yes, and on Chino Valley acreage they are frequently the first thing built. A shop or garage can go up ahead of the house, which gives you secure storage and a staging point for the main build. They carry their own permit requirements and, if they are getting power or water, their own utility runs." },
      { q: "Who issues permits in Chino Valley?", a: "The Town of Chino Valley inside town limits and Yavapai County outside. Most acreage builds fall under the county, which also handles septic permitting and the site evaluation that goes with it." },
      { q: "Do you remodel the older ranch properties along AZ-89?", a: "Yes. Those houses tend to be well built but dated, and the common scope is systems and envelope, meaning electrical service upgrades, plumbing, insulation, windows, and roofing, before anything cosmetic. Additions are often straightforward there because the lots have room and the setbacks are generous." },
    ],
    distanceFromFlagstaff: '~85 miles southwest via I-40 and AZ-89',
    servicesNote: 'New construction and remodeling available. Contact us to discuss scheduling.',
  },
];
