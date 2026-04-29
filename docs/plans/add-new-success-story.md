# Implementation plan: Add new success story

**Project:** landing  
**Mode:** Existing system  
**Generated:** 2026-04-29T06:03:08.374Z

## Summary

Add EncuentraYa as a second success story by mirroring the existing LeanZupply pattern: create EN/ES locale files for the detail page content, extend the shared success-stories locale files with an 'encuentraya' entry, build a new detail page component, register the new localized route, add an EncuentraYa card to the listing grid, and update the collectionPageSchema structured data. No existing LeanZupply assets are modified.

## Affected areas

- Frontend
- Docs

## File changes

- `[create]` `src/locales/en/encuentraya.json` — English content for the EncuentraYa detail page: meta (title, description), badge, h1, intro, viewAll, learnApproach, overview, challenge, solution, results, and contact CTA — structurally identical to en/leanzupply.json.
- `[create]` `src/locales/es/encuentraya.json` — Spanish translation of the EncuentraYa detail page content, structurally identical to the English file.
- `[modify]` `src/locales/en/success-stories.json` — Add an 'encuentraya' key alongside the existing 'leanZupply' key with title, subtitle, description, and viewSuccessStory label in English.
- `[modify]` `src/locales/es/success-stories.json` — Add an 'encuentraya' key with the equivalent fields in Spanish (viewSuccessStory => 'Ver Historia de Éxito').
- `[modify]` `src/i18n/index.ts` — Register the new 'encuentraya' i18n namespace by importing the new EN/ES JSON files and wiring them into the resources object (mirroring how 'leanZupply' is registered). Path is a best guess — adjust to wherever existing namespaces are loaded.
- `[create]` `src/pages/EncuentraYaSuccessStory.tsx` — New detail page component cloned from LeanZupplySuccessStory.tsx: SEO meta, breadcrumb structured data (Home → Success Stories → EncuentraYa), 'EY' initials avatar in the LZ-style gray badge, all content sections sourced from the 'encuentraya' namespace, and a 'Visit EncuentraYa →' external link to https://encuentraya.uy with target=_blank rel=noopener noreferrer.
- `[modify]` `src/App.tsx` — Register the new route /[lang]/success-stories/encuentraya rendering EncuentraYaSuccessStory for both 'en' and 'es' locales, mirroring the LeanZupply route registration. Path is a best guess — apply alongside the existing leanzupply route entry.
- `[modify]` `src/pages/SuccessStories.tsx` — Add an EncuentraYa card to the grid with 'EY' initials avatar, localized title/subtitle/description from the 'encuentraya' key, and a link to /[lang]/success-stories/encuentraya. Extend collectionPageSchema's itemListElement to include EncuentraYa as ListItem with position 2 and the correct localized URL.

## Steps

### Docs

1. **Draft EN/ES copy for EncuentraYa** — Write English and Spanish content for all sections (meta, badge, h1, intro, overview, challenge, solution, results, contact CTA) plus the listing-card fields (title, subtitle, description). Match the tone, length, and structure of the LeanZupply copy. Resolve open questions on product description, challenge, solution, results, subtitle, and timeframe with the content owner before coding; capture answers inline in the JSON.

### Frontend

1. **Create EN locale file for the detail page** — Create src/locales/en/encuentraya.json with the same key shape as src/locales/en/leanzupply.json (or whatever the existing file is called). Populate with the approved English copy.
2. **Create ES locale file for the detail page** — Create src/locales/es/encuentraya.json with identical key structure and the approved Spanish translations.
3. **Extend shared success-stories locale files** — Add an 'encuentraya' object to both src/locales/en/success-stories.json and src/locales/es/success-stories.json containing title, subtitle, description, and viewSuccessStory ('View Success Story' / 'Ver Historia de Éxito'). Do not touch the existing 'leanZupply' entry.
4. **Register the new i18n namespace** — Import the two new JSON files in the i18n bootstrap module and add them to the resources map under the 'encuentraya' namespace key for both 'en' and 'es', following the exact pattern used for the LeanZupply namespace.
5. **Build the EncuentraYaSuccessStory detail page** — Copy LeanZupplySuccessStory.tsx as a starting point. Swap the namespace to 'encuentraya', change initials from 'LZ' to 'EY' (keeping the gray rounded badge styles), update breadcrumb structured data to point to .../success-stories/encuentraya with the EncuentraYa label, change the external link to https://encuentraya.uy with target=_blank rel=noopener noreferrer and the localized 'Visit EncuentraYa →' / 'Visitar EncuentraYa →' label, and ensure SEO meta pulls title/description from the new namespace.
6. **Register the new localized route** — Add /[lang]/success-stories/encuentraya entries (or one parameterized entry, depending on existing router structure) so both /en/success-stories/encuentraya and /es/success-stories/encuentraya render EncuentraYaSuccessStory. Mirror the LeanZupply route configuration exactly.
7. **Add EncuentraYa card to the listing page** — In SuccessStories.tsx, render a second card identical in structure to the LeanZupply card, sourcing content from t('encuentraya.*'). Use 'EY' initials in the same avatar component/styles. Link the card's CTA to /${lang}/success-stories/encuentraya.
8. **Update collectionPageSchema structured data** — Extend the itemListElement array in SuccessStories.tsx's collectionPageSchema to include EncuentraYa as a ListItem with position 2, the correct absolute URL per locale, and the EncuentraYa name. Verify the JSON-LD still validates.
9. **Cross-check accessibility, SEO, and visual parity** — Confirm h1, breadcrumb, external link rel/target, alt text on the avatar, and meta tags for both languages. Visually compare the EncuentraYa card and detail page side-by-side with LeanZupply to ensure layout parity.

## Test plan

- Manual: Visit /en/success-stories and verify both LeanZupply and EncuentraYa cards render; the EncuentraYa card shows 'EY' avatar, English title/subtitle/description, and a 'View Success Story' link.
- Manual: Visit /es/success-stories and verify the EncuentraYa card shows Spanish title/subtitle/description and a 'Ver Historia de Éxito' link.
- Manual: Click the EncuentraYa card on /en/success-stories and confirm it routes to /en/success-stories/encuentraya with a 200 (no 404). Repeat for ES.
- Manual: On /en/success-stories/encuentraya, verify all sections render in English (badge, h1, intro, overview, challenge, solution, results, contact CTA), the breadcrumb reads Home → Success Stories → EncuentraYa, and the page <title>/meta description match the en/encuentraya.json meta values. Repeat for ES with Spanish strings.
- Manual: Click 'Visit EncuentraYa →' on the detail page and confirm it opens https://encuentraya.uy in a new tab; inspect the anchor for target=_blank and rel=noopener noreferrer.
- Manual: Visit /en/success-stories/encuentraya and /es/success-stories/encuentraya directly (deep-link) and confirm correct content with no fallback to the other language.
- Integration: View page source on both /en/success-stories and /es/success-stories and confirm the collectionPageSchema JSON-LD now contains two itemListElement entries with EncuentraYa at position 2 and the correct URL. Validate with Google's Rich Results Test.
- Integration: View page source on the detail page and validate the BreadcrumbList JSON-LD includes the three items with localized names and correct URLs.
- Manual: Smoke test existing LeanZupply listing card and detail pages in both languages to confirm no regressions in copy, links, or structured data.
- Manual: Inspect the 'EY' avatar on both card and detail page and confirm it matches the gray rounded background, font weight, and sizing of the 'LZ' avatar.

## Risks & edge cases

- **Detail-page copy (overview/challenge/solution/results) is unresolved per the spec's open questions; shipping with placeholder text would violate the 'live and publicly accessible immediately' business rule.**
  Mitigation: Block step 1 (drafting copy) on written sign-off from the content owner for all five open questions before any JSON files are committed; treat the JSON files as the single source of truth and have the content owner review them in PR.
- **Cloning LeanZupplySuccessStory.tsx risks leaving stray references (namespace strings, 'LZ' initials, leanzupply URLs, breadcrumb labels) that silently render LeanZupply data on the EncuentraYa page.**
  Mitigation: Do a global search/replace pass for 'leanzupply', 'leanZupply', 'LeanZupply', and 'LZ' inside the new file and add a manual visual diff step in the PR checklist; reviewer must confirm no leakage before merge.
- **i18n namespace registration is environment-specific; if the new namespace isn't added to the resources map, t('encuentraya.*') will silently render keys instead of copy.**
  Mitigation: After wiring, smoke test both pages in dev for both locales and assert no raw keys appear; add a brief unit/render test that mounts the detail page and asserts the h1 text matches the locale value.
- **collectionPageSchema is structured data consumed by search engines; a malformed update could break rich results for the entire listing page.**
  Mitigation: Run the rendered HTML through Google's Rich Results Test and a JSON-LD validator before merging, and keep the schema change isolated to a single, easily-revertable commit.
- **Assumed file paths (App.tsx, src/i18n/index.ts, leanzupply.json filename) may differ from the actual repo layout, leading to confusion during execution.**
  Mitigation: First action of the implementing engineer is to grep the repo for the existing LeanZupply route registration, namespace registration, and JSON file to confirm exact paths; update this plan's paths in the PR description if they differ.
