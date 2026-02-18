# i18n Copy Map

This document maps every dictionary namespace to the page(s) and component(s) that consume it.
Use it to keep future translations deterministic: when adding a new locale, every entry below must have a corresponding translated value.

---

## Namespace: `nav`

**File:** `lib/i18n/dictionaries/types.ts` → `NavDictionary`

| Key                                | Consumer                                                              |
| ---------------------------------- | --------------------------------------------------------------------- |
| `nav.home`                         | `components/main-nav.tsx` — desktop Home link, mobile Home link       |
| `nav.rooms`                        | `components/main-nav.tsx` — desktop Rooms trigger, mobile Rooms label |
| `nav.roomItems.deluxe.title`       | `components/main-nav.tsx` — desktop room dropdown, mobile room list   |
| `nav.roomItems.deluxe.description` | `components/main-nav.tsx` — desktop room dropdown description         |
| `nav.roomItems.suite.title`        | `components/main-nav.tsx` — desktop room dropdown, mobile room list   |
| `nav.roomItems.suite.description`  | `components/main-nav.tsx` — desktop room dropdown description         |
| `nav.conferenceHall`               | `components/main-nav.tsx` — OTHER_LINKS list                          |
| `nav.gallery`                      | `components/main-nav.tsx` — OTHER_LINKS list                          |
| `nav.aboutUs`                      | `components/main-nav.tsx` — OTHER_LINKS list                          |
| `nav.contact`                      | `components/main-nav.tsx` — OTHER_LINKS list                          |
| `nav.openMenu`                     | `components/main-nav.tsx` — mobile menu button aria-label             |
| `nav.closeMenu`                    | `components/main-nav.tsx` — mobile menu button aria-label             |

---

## Namespace: `footer`

**File:** `lib/i18n/dictionaries/types.ts` → `FooterDictionary`

| Key                               | Consumer                                              |
| --------------------------------- | ----------------------------------------------------- |
| `footer.aboutUs.heading`          | `components/footer.tsx` — About Us column heading     |
| `footer.aboutUs.body`             | `components/footer.tsx` — About Us column body text   |
| `footer.quickMenu.heading`        | `components/footer.tsx` — Quick Menu column heading   |
| `footer.quickMenu.links.*`        | `components/footer.tsx` — MENU_LINKS list labels      |
| `footer.contactUs.heading`        | `components/footer.tsx` — Contact Us column heading   |
| `footer.contactUs.phoneLabel`     | `components/footer.tsx` — phone prefix label          |
| `footer.contactUs.emailLabel`     | `components/footer.tsx` — email prefix label          |
| `footer.followUs.heading`         | `components/footer.tsx` — Follow Us column heading    |
| `footer.followUs.facebookSrOnly`  | `components/footer.tsx` — Facebook icon sr-only text  |
| `footer.followUs.instagramSrOnly` | `components/footer.tsx` — Instagram icon sr-only text |
| `footer.copyright`                | `components/footer.tsx` — copyright line suffix       |

---

## Namespace: `home`

**File:** `lib/i18n/dictionaries/types.ts` → `HomeDictionary`

| Key                              | Consumer                                                        |
| -------------------------------- | --------------------------------------------------------------- |
| `home.meta.title`                | `app/[locale]/page.tsx` — `<Metadata>.title`                    |
| `home.meta.description`          | `app/[locale]/page.tsx` — `<Metadata>.description`              |
| `home.meta.keywords`             | `app/[locale]/page.tsx` — `<Metadata>.keywords`                 |
| `home.hero.title`                | `app/[locale]/page.tsx` → `<HeroSection title>`                 |
| `home.hero.description`          | `app/[locale]/page.tsx` → `<HeroSection description>`           |
| `home.hero.imageAlt`             | `app/[locale]/page.tsx` → `<HeroSection imageAlt>`              |
| `home.hero.imageTitle`           | `app/[locale]/page.tsx` → `<HeroSection imageTitle>`            |
| `home.partnerBadge.label`        | `app/[locale]/page.tsx` — "Official hotel partner of" paragraph |
| `home.partnerBadge.drukairAlt`   | `app/[locale]/page.tsx` — Drukair `<Image alt>`                 |
| `home.partnerBadge.drukairTitle` | `app/[locale]/page.tsx` — Drukair `<Image title>`               |
| `home.rooms.sectionTitle`        | `app/[locale]/page.tsx` → `<SectionTitle title>`                |
| `home.rooms.sectionDescription`  | `app/[locale]/page.tsx` → `<SectionTitle description>`          |
| `home.howToFindUs.heading`       | `app/[locale]/page.tsx` — `<CardTitle>`                         |
| `home.howToFindUs.videoTitle`    | `app/[locale]/page.tsx` → `<LiteYoutube title>`                 |

---

## Namespace: `aboutUs`

**File:** `lib/i18n/dictionaries/types.ts` → `AboutUsDictionary`

| Key                                   | Consumer                                                         |
| ------------------------------------- | ---------------------------------------------------------------- |
| `aboutUs.meta.*`                      | `app/about-us/page.tsx` — `<Metadata>`                           |
| `aboutUs.hero.*`                      | `app/about-us/page.tsx` → `<HeroSection>` props                  |
| `aboutUs.section.heading`             | `components/about-section.tsx` — `<h2>`                          |
| `aboutUs.section.body1`               | `components/about-section.tsx` — first paragraph                 |
| `aboutUs.section.body2`               | `components/about-section.tsx` — second paragraph                |
| `aboutUs.section.body3`               | `components/about-section.tsx` — third paragraph                 |
| `aboutUs.section.flowersAlt`          | `components/about-section.tsx` — flowers `<Image alt>`           |
| `aboutUs.section.flowersTitle`        | `components/about-section.tsx` — flowers `<Image title>`         |
| `aboutUs.section.motherDaughterAlt`   | `components/about-section.tsx` — mother-daughter `<Image alt>`   |
| `aboutUs.section.motherDaughterTitle` | `components/about-section.tsx` — mother-daughter `<Image title>` |

---

## Namespace: `rooms`

**File:** `lib/i18n/dictionaries/types.ts` → `RoomsDictionary`

| Key                        | Consumer                                            |
| -------------------------- | --------------------------------------------------- |
| `rooms.meta.*`             | `app/rooms/page.tsx` — `<Metadata>`                 |
| `rooms.hero.*`             | `app/rooms/page.tsx` → `<HeroSection>` props        |
| `rooms.sectionTitle`       | `app/rooms/page.tsx` → `<SectionTitle title>`       |
| `rooms.sectionDescription` | `app/rooms/page.tsx` → `<SectionTitle description>` |

---

## Namespace: `deluxeRoom`

**File:** `lib/i18n/dictionaries/types.ts` → `DeluxeRoomDictionary`

| Key                             | Consumer                                                          |
| ------------------------------- | ----------------------------------------------------------------- |
| `deluxeRoom.meta.*`             | `app/rooms/deluxe/page.tsx` — `<Metadata>`                        |
| `deluxeRoom.hero.*`             | `app/rooms/deluxe/page.tsx` → `<HeroSection>` props               |
| `deluxeRoom.sectionTitle`       | `app/rooms/deluxe/page.tsx` → `<SectionTitle title>`              |
| `deluxeRoom.sectionDescription` | `app/rooms/deluxe/page.tsx` → `<SectionTitle description>`        |
| `deluxeRoom.room205Title`       | `app/rooms/deluxe/page.tsx` → `<SectionTitle title>` for Room 205 |
| `deluxeRoom.room206Title`       | `app/rooms/deluxe/page.tsx` → `<SectionTitle title>` for Room 206 |
| `deluxeRoom.room207Title`       | `app/rooms/deluxe/page.tsx` → `<SectionTitle title>` for Room 207 |

---

## Namespace: `suiteRoom`

**File:** `lib/i18n/dictionaries/types.ts` → `SuiteRoomDictionary`

| Key                            | Consumer                                                      |
| ------------------------------ | ------------------------------------------------------------- |
| `suiteRoom.meta.*`             | `app/rooms/suite/page.tsx` — `<Metadata>`                     |
| `suiteRoom.hero.*`             | `app/rooms/suite/page.tsx` → `<HeroSection>` props            |
| `suiteRoom.sectionTitle`       | `app/rooms/suite/page.tsx` → `<SectionTitle title>`           |
| `suiteRoom.sectionDescription` | `app/rooms/suite/page.tsx` — body paragraph                   |
| `suiteRoom.room204Title`       | `app/rooms/suite/page.tsx` → `<ImageGrid title>` for Room 204 |
| `suiteRoom.room203Title`       | `app/rooms/suite/page.tsx` → `<ImageGrid title>` for Room 203 |
| `suiteRoom.room202Title`       | `app/rooms/suite/page.tsx` → `<ImageGrid title>` for Room 202 |
| `suiteRoom.bathroomTitle`      | `app/rooms/suite/page.tsx` → `<ImageGrid title>` for Bathroom |

---

## Namespace: `conferenceHall`

**File:** `lib/i18n/dictionaries/types.ts` → `ConferenceHallDictionary`

| Key                                 | Consumer                                                      |
| ----------------------------------- | ------------------------------------------------------------- |
| `conferenceHall.meta.*`             | `app/conference-hall/page.tsx` — `<Metadata>`                 |
| `conferenceHall.hero.*`             | `app/conference-hall/page.tsx` → `<HeroSection>` props        |
| `conferenceHall.sectionTitle`       | `app/conference-hall/page.tsx` → `<SectionTitle title>`       |
| `conferenceHall.sectionDescription` | `app/conference-hall/page.tsx` → `<SectionTitle description>` |
| `conferenceHall.videoTitle`         | `app/conference-hall/page.tsx` → `<LiteYoutube title>`        |

---

## Namespace: `gallery`

**File:** `lib/i18n/dictionaries/types.ts` → `GalleryDictionary`

| Key                           | Consumer                                              |
| ----------------------------- | ----------------------------------------------------- |
| `gallery.meta.*`              | `app/gallery/page.tsx` — `<Metadata>`                 |
| `gallery.hero.*`              | `app/gallery/page.tsx` → `<HeroSection>` props        |
| `gallery.sectionTitle`        | `app/gallery/page.tsx` → `<SectionTitle title>`       |
| `gallery.sectionDescription`  | `app/gallery/page.tsx` → `<SectionTitle description>` |
| `gallery.images.nightShot.*`  | `app/gallery/page.tsx` — GALLERY_IMAGES array entry   |
| `gallery.images.flowers.*`    | `app/gallery/page.tsx` — GALLERY_IMAGES array entry   |
| `gallery.images.conference.*` | `app/gallery/page.tsx` — GALLERY_IMAGES array entry   |
| `gallery.images.view.*`       | `app/gallery/page.tsx` — GALLERY_IMAGES array entry   |
| `gallery.images.teaCup.*`     | `app/gallery/page.tsx` — GALLERY_IMAGES array entry   |
| `gallery.images.sceneWire.*`  | `app/gallery/page.tsx` — GALLERY_IMAGES array entry   |
| `gallery.images.jakarDzong.*` | `app/gallery/page.tsx` — GALLERY_IMAGES array entry   |
| `gallery.images.glassHouse.*` | `app/gallery/page.tsx` — GALLERY_IMAGES array entry   |

---

## Namespace: `contact`

**File:** `lib/i18n/dictionaries/types.ts` → `ContactDictionary`

| Key                              | Consumer                                                   |
| -------------------------------- | ---------------------------------------------------------- |
| `contact.meta.*`                 | `app/contact/page.tsx` — `<Metadata>`                      |
| `contact.hero.*`                 | `app/contact/page.tsx` → `<HeroSection>` props             |
| `contact.pageHeading`            | `app/contact/page.tsx` — `<h2>` heading                    |
| `contact.contactInfo.heading`    | `app/contact/page.tsx` — Contact Information `<CardTitle>` |
| `contact.contactInfo.checkInOut` | `app/contact/page.tsx` — check-in/out paragraph            |
| `contact.location.heading`       | `app/contact/page.tsx` — Location `<CardTitle>`            |
| `contact.location.mapTitle`      | `app/contact/page.tsx` — Google Maps iframe `title`        |
| `contact.aboutLocation.heading`  | `app/contact/page.tsx` — About Our Location `<CardTitle>`  |
| `contact.aboutLocation.body1`    | `app/contact/page.tsx` — first location paragraph          |
| `contact.aboutLocation.body2`    | `app/contact/page.tsx` — second location paragraph         |
| `contact.scenicViews.heading`    | `app/contact/page.tsx` — Scenic Views `<CardTitle>`        |
| `contact.scenicViews.imageAlt`   | `app/contact/page.tsx` — scenic view `<Image alt>`         |
| `contact.scenicViews.imageTitle` | `app/contact/page.tsx` — scenic view `<Image title>`       |
| `contact.scenicViews.body`       | `app/contact/page.tsx` — scenic views paragraph            |

---

## Namespace: `price`

**File:** `lib/i18n/dictionaries/types.ts` → `PriceDictionary`

| Key                      | Consumer                                        |
| ------------------------ | ----------------------------------------------- |
| `price.perNight`         | `components/price-info.tsx` — "per night" label |
| `price.taxesNotIncluded` | `components/price-info.tsx` — taxes disclaimer  |
| `price.peakSeasonNote`   | `components/price-info.tsx` — peak season note  |

---

## Namespace: `roomCard`

**File:** `lib/i18n/dictionaries/types.ts` → `RoomCardDictionary`

| Key                   | Consumer                                            |
| --------------------- | --------------------------------------------------- |
| `roomCard.exploreCta` | `components/room-card.tsx` — "Explore" button label |

---

## Approved Proper Nouns (never translate)

The following strings must remain unchanged in all locales:

- **Dekyil Guest House** — brand name
- **Bumthang** — place name
- **Chamkhar** — place name
- **Bhutan** / **Bhutanese** — country/demonym
- **Jakar Dzong** — landmark name
- **Drukair** / **Drukair - Royal Bhutan Airlines** — airline brand
- **Nu** — Bhutanese currency symbol (Ngultrum)
- Phone numbers (e.g. `+975-17-55-41-52`)
- Email addresses
- URLs / canonical paths
- Numeric literals in room names (Room 202, Room 203, etc.)
- Check-in/check-out times (`11:00 AM`, `01:00 PM`)
