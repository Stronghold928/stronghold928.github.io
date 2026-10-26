/**
 * Every off-site profile for the business, in one place. Layout.astro serialises
 * `sameAsProfiles` into the Organization schema; the footer, contact sidebar and
 * About page render `profiles` as visible links. Add a profile here and all four
 * pick it up.
 *
 * Keep the name, address and phone on each profile identical to the site
 * (Stronghold Construction, 1155 W Kaibab Lane, Flagstaff AZ 86001, 928-962-7535).
 * sameAs only strengthens the entity match when the listings agree.
 */

export interface Profile {
  /** Anchor text. Words, not icons - it is what crawlers and screen readers read. */
  label: string;
  href: string;
  /** Goes into schema.org sameAs. The Google listing is excluded: Layout uses the CID form. */
  sameAs: boolean;
}

export const profiles: Profile[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/builtstronghold', sameAs: true },
  { label: 'Instagram', href: 'https://www.instagram.com/builtstronghold', sameAs: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/stronghold-construction-group/', sameAs: true },
  { label: 'Houzz', href: 'https://www.houzz.com/pro/builtstronghold/stronghold-construction', sameAs: true },
  { label: 'Yelp', href: 'https://www.yelp.com/biz/stronghold-construction-flagstaff', sameAs: true },
  { label: 'Nextdoor', href: 'https://nextdoor.com/pages/stronghold-construction-group-flagstaff-az/', sameAs: true },
];

/** Google Business Profile. Short link for visitors; the schema keeps the CID URL. */
export const googleProfile = {
  label: 'Google Reviews',
  href: 'https://g.page/r/Cd-w7FtupZ2REBM',
};

export const chamber = {
  name: 'Greater Flagstaff Chamber of Commerce',
  href: 'https://business.flagstaffchamber.com/list/member/stronghold-construction-18732',
};

export const sameAsProfiles = profiles.filter(p => p.sameAs).map(p => p.href);

/** Visible link order: Google first (highest trust for a contractor), then the rest. */
export const allProfiles: { label: string; href: string }[] = [googleProfile, ...profiles];
