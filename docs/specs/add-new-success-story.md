# Add EncuentraYa Success Story

**Project:** landing  
**Mode:** Existing system  
**Generated:** 2026-04-29T06:08:05.011Z

## Problem

The success-stories listing page and detail route only cover LeanZupply. A new client, EncuentraYa, needs to be showcased with its own card on the listing page and a dedicated detail page, in both English and Spanish, so prospective clients can discover the engagement.

## Goal

Add EncuentraYa as a fully published success story — visible immediately on the listing page with a card, and accessible via its own localized detail route (/en/success-stories/encuentraya and /es/success-stories/encuentraya) — with complete bilingual content and a link to https://encuentraya.uy.

## In scope

- New EncuentraYa card on the success-stories listing page (SuccessStories.tsx), immediately visible
- New dedicated detail page component mirroring the LeanZupplySuccessStory.tsx pattern, at route /[lang]/success-stories/encuentraya
- New English locale file: src/locales/en/encuentraya.json with all content sections (meta, badge, h1, intro, overview, challenge, solution, results, contact CTA)
- New Spanish locale file: src/locales/es/encuentraya.json with all content sections translated
- Updates to src/locales/en/success-stories.json to add an 'encuentraya' key (title, subtitle, description, viewSuccessStory label)
- Updates to src/locales/es/success-stories.json to add an 'encuentraya' key (title, subtitle, description, viewSuccessStory label)
- Update to the collectionPageSchema structured data in SuccessStories.tsx to include EncuentraYa as ListItem position 2
- Breadcrumb structured data on the EncuentraYa detail page
- External link to https://encuentraya.uy on the detail page (equivalent to 'Visit LeanZupply →' pattern)
- Placeholder avatar/initials badge (e.g., 'EY') on the listing card and detail page, matching the LZ style

## Out of scope

- Any changes to existing LeanZupply content or routes
- Real logo/image asset for EncuentraYa (placeholder initials only)
- CMS or admin UI for managing success stories
- Any new routing infrastructure beyond adding the new route entry
- Analytics or tracking specific to the new story
- A/B testing or feature-flag gating of the new story

## Actors

- Site visitor (prospective client browsing success stories)
- Urruty Labs team (content owner)

## User flows

- Visitor navigates to /en/success-stories (or /es/success-stories) → sees EncuentraYa card alongside LeanZupply card → clicks 'View Success Story' → lands on /en/success-stories/encuentraya (or /es/success-stories/encuentraya) detail page → reads full story → clicks 'Visit EncuentraYa →' to open https://encuentraya.uy in a new tab
- Visitor navigates directly to /en/success-stories/encuentraya or /es/success-stories/encuentraya via a shared link → lands on the detail page with correct language content
- Visitor on the detail page clicks breadcrumb or 'View all success stories' link → returns to the listing page

## UI states

- Listing page — EncuentraYa card rendered in the grid alongside LeanZupply, showing placeholder 'EY' initials avatar, localized title, subtitle, description excerpt, and a 'View Success Story' / 'Ver Historia de Éxito' link
- Detail page — full story rendered with badge, h1, intro paragraph, overview section, challenge section, solution section, results section, external link to https://encuentraya.uy, and a contact/CTA section — all in the active language
- Detail page — breadcrumb trail: Home → Success Stories → EncuentraYa, with correct localized labels per language
- External link — 'Visit EncuentraYa →' opens https://encuentraya.uy in a new browser tab (target=_blank, rel=noopener noreferrer)

## Business rules

- The EncuentraYa story must be live and publicly accessible immediately upon deployment — no draft or hidden state
- Both /en/ and /es/ routes must be functional from day one; neither language may be missing or fall back to the other
- The external link must point exactly to https://encuentraya.uy and open in a new tab
- The placeholder avatar must use initials-style treatment consistent with the existing 'LZ' badge (e.g., 'EY' on a gray background)
- The collectionPageSchema on the listing page must include EncuentraYa as a second ListItem so structured data stays accurate
- Content tone and structure must match the existing LeanZupply story conventions (badge, h1, overview, challenge, solution, results, CTA)

## Data changes

- Create src/locales/en/encuentraya.json — full English content for the detail page (meta SEO fields, badge, h1, intro, viewAll, learnApproach, overview, challenge, solution, results, contact CTA)
- Create src/locales/es/encuentraya.json — full Spanish content for the detail page (same structure as English file)
- Update src/locales/en/success-stories.json — add 'encuentraya' key with title, subtitle, description, and viewSuccessStory label
- Update src/locales/es/success-stories.json — add 'encuentraya' key with title, subtitle, description (in Spanish), and viewSuccessStory label

## API changes

- No API changes required — site is statically rendered with i18n locale files

## Acceptance criteria

- Navigating to /en/success-stories shows an EncuentraYa card in the story grid with an 'EY' placeholder avatar, English title, subtitle, and a 'View Success Story' link
- Navigating to /es/success-stories shows the same card with Spanish-localized title, subtitle, and 'Ver Historia de Éxito' link
- Clicking the card link on /en/success-stories navigates to /en/success-stories/encuentraya without a 404
- Clicking the card link on /es/success-stories navigates to /es/success-stories/encuentraya without a 404
- The /en/success-stories/encuentraya detail page renders all content sections (badge, h1, intro, overview, challenge, solution, results, contact CTA) in English
- The /es/success-stories/encuentraya detail page renders all content sections in Spanish
- The detail page displays a breadcrumb: Home → Success Stories → EncuentraYa with correct localized labels for each language
- The detail page contains a 'Visit EncuentraYa →' (EN) / 'Visitar EncuentraYa →' (ES) link that opens https://encuentraya.uy in a new tab
- The page <title> and meta description on the detail page are correctly set per language via the SEO component
- The collectionPageSchema on /en/success-stories and /es/success-stories includes EncuentraYa as a second ListItem with the correct URL
- No existing LeanZupply pages, routes, or locale content are altered or broken
- The 'EY' placeholder avatar on both the card and detail page matches the visual style of the existing 'LZ' avatar

## Assumptions

- The router already supports a wildcard or parameterized route pattern for /[lang]/success-stories/[slug]; adding a new static route entry for 'encuentraya' is sufficient without infrastructure changes
- The i18n namespace for the detail page will be named 'encuentraya' (camelCase: 'encuentraya'), consistent with the 'leanZupply' namespace pattern
- Placeholder initials 'EY' (EncuentraYa) will be used in the same gray-background rounded badge style as 'LZ'
- Content (English and Spanish copy) for the detail page sections will be drafted as part of this feature's delivery, since the user requested help structuring it — the content must be written to match the tone and structure of the LeanZupply story
- The external link follows the same inline pattern as LeanZupply's 'Visit LeanZupply →' link in the overview section
- The listing page grid layout accommodates a second card without layout changes (existing md:grid-cols-2 already supports two cards)

## Open questions

- What is the actual content for EncuentraYa? Specifically: What does EncuentraYa do (product/service description)? What was the engagement challenge? What solution did Urruty Labs deliver? What were the measurable results? This is needed to write the overview, challenge, solution, and results sections.
- What is the subtitle/tagline for the EncuentraYa card on the listing page (e.g., LeanZupply uses 'Strengthening the technical foundation of a D2B procurement platform')?
- Should the EncuentraYa card appear before or after LeanZupply in the listing grid, or is order not important?
- Should the detail page SEO meta title follow the same pattern as LeanZupply (e.g., 'EncuentraYa Success Story — [descriptor] | Urruty Labs')?
- Is there a specific engagement duration or timeframe to highlight (e.g., '90 days' like LeanZupply), or is that not applicable for EncuentraYa?
