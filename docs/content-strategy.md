# IloFit — content strategy, next phase

**Status:** planned, not built. **Written:** 2026-07-30.

Four themed content pages across two audience clusters. Each page is its own
search entry point; each feeds a service and, where it fits, a digital product
sold from `kauppa.ilofit.com`.

This document exists because most of what follows is *decisions*, not facts. The
pages will record what we built; they won't record why bone and muscle became one
page, why golf was dropped, or why there are two hubs rather than one. That
reasoning is here.

---

## 1. The three personas

"40+ women" is too broad to write for. A 41-year-old is managing symptoms she can
feel; a 67-year-old is managing risks she can't.

| | **1 — Perimenopause 40–52** | **2 — Early post 53–63** | **3 — Nainen 60-luvulla** |
|---|---|---|---|
| Felt problem | "Sama treeni ei enää toimi" — sleep, mood, keskivartalo | Often nothing; risk is invisible | Capability: matkat, mökki, lapsenlapset |
| Trigger for the search | Frustration, symptoms | A DEXA result, a doctor's remark | A life-stage shift; wanting to keep up |
| Language she uses | "miksi paino nousee vaikka treenaan" | "osteopenia mitä tehdä" | "kuntosali senioreille", "voimaharjoittelu 65-vuotiaalle" |
| Buys | Premium 1:1, digital, gear | 1:1 and group, gear | Group and 1:1; digital works too |

Average menopause age in Finland is ~51, almost exactly the midpoint of Ilona's
current client range (40–65).

**Persona 2 and 3 overlap at 60–63, deliberately.** At 54 a woman still identifies
with vaihdevuodet; at 62 she is eleven years past it and no longer searches those
terms. That band is served by the shared luusto page, reachable from both
clusters — see §3.

**Not building for 70+.** That's a copy decision, not an exclusion. Nobody turns
away a fit 72-year-old; we just don't write for her.

**Two rules that fall out of this:**

1. **Never put an age number in a page title.** "Treeni 50+" and "treeni 60+" as
   separate pages cannibalise each other and repel readers — a 61-year-old who
   feels 45 bounces off "senioreille" in an H1. Segment by *trigger and symptom*;
   let age skew happen through imagery and testimonials.
2. **Write H2s in trigger language, not clinical language.** "Miksi paino nousee
   vaikka treenaan yhtä paljon" outranks and outconverts "Painonhallinta
   vaihdevuosina". People search their frustration, not the medical term.

---

## 2. The four themes

| | Theme | Page | Product / offer | Persona |
|---|---|---|---|---|
| 1 | Vaihdevuodet ja treeni | `/vaihdevuodet-ja-treeni/` | Kuukausivalmennus | 1, 2 |
| 2 | Luusto ja lihakset | `/luusto-ja-lihakset/` | *Vahva perusta* -ohjelma | 2, 3 |
| 3 | Vahva seniori | `/vahva-seniori/` | Ryhmä + digital programme | 3 |
| 4 | Palautuminen ja uni | `/palautuminen-ja-uni/` | Kuormituksen säätö -opas | 1 |

### Naming convention

**Searchable page, brandable product.** The two have opposite jobs: a page title
must contain what people type, a product name must be memorable. So the page is
`/luusto-ja-lihakset/` and the thing you buy from it is *Vahva perusta*.

### 1. Vaihdevuodet ja treeni

Largest audience, the segment already paying, and the hub for cluster A.

- **Competition:** one real national specialist,
  [Anna Seppänen](https://www.annaseppanen.fi/), plus
  [Club Huuma](https://clubhuuma.fi/palvelut/hyvinvoiva-mina-valmennus/). Not
  crowded, not empty. Ilona's edge is **Turku + face-to-face**.
- **On-page:** a "Missä vaiheessa olet?" block sorting persona 1 from persona 2.
  Reuses the existing card pattern (`rounded-xl border border-soft-border bg-white
  p-6 shadow-warm`), needs no JS.
- **Affiliate:** kreatiini, proteiini, magnesium.

### 2. Luusto ja lihakset

Bone and muscle merged deliberately: same cause, same intervention, same
products. Two pages would have cannibalised each other.

**The cleanest gap of the four.** Every top result is institutional —
[Luustoliitto](https://luustoliitto.fi/osteoporoosi/osteoporoosin-hoito/perushoito/liikunta/),
[Mehiläinen](https://www.mehilainen.fi/ortopedia/osteoporoosi),
[Reumaliitto](https://reumaliitto.fi/reuma-lehti/osteoporoosia-voi-ehkaista-liikunnalla/),
[UKK-instituutti](https://ukkinstituutti.fi/elintapaohjaus/liikunta-ja-sairaudet/sarkopenia-ja-gerastenia/),
[Lääkärilehti](https://www.laakarilehti.fi/tieteessa/katsausartikkeli/sarkopenia-ndash-lihasmassan-ja-voiman-kato/).
They explain *why* loading builds bone, then stop. None gives a woman a programme;
none sells coaching.

The unmet query: **"tiedän että pitäisi treenata luustolle — mitä minä
konkreettisesti teen salilla?"**

- **Framed as prevention, not management.** The reader just got an osteopenia
  result and is otherwise healthy and active — not frail. Keeps the page clear of
  treatment claims a PT shouldn't make, and allows a demanding tone.
- **Affiliate:** painoliivi (most on-topic product in the plan), vastuskuminauhat,
  D3+K2, kalsium.
- **This is the shared spoke** — see §3.

On kreatiini, folded in here: the *informational* terms are institutional, but the
*commercial* terms belong to supplement retailers running affiliate content —
[Naturecan](https://www.naturecan.fi/blogs/news/kreatiini-naisille-hyodyt),
[Aminopörssi](https://www.aminoporssi.fi/blogs/treenaajan-tietopankki/paras-kreatiini-naiselle),
[fiilistele.fi](https://fiilistele.fi/paras-kreatiini-naisille-vertailu/). Don't
fight them on "paras kreatiini" — we lose to dedicated SEO budgets. What they
prove is that **affiliate monetisation already works in this space in Finnish**.
Our differentiator is what no retailer can write: what to eat *and* how to train,
from someone who coaches real clients.

### 3. Vahva seniori

- **Name:** `/vahva-seniori/` and the title tag carry the search term —
  *senioriliikunta*, *kuntosali senioreille*, *seniorijumppa* are real queries and
  established categories. But **the H1 and hero lead with capability, not
  category**: a 61-year-old still working won't click a headline that calls her a
  seniori. The word gets us found; the first paragraph decides whether she stays.
- **Photos of people mid-lift, not mid-stretch.**
- **Digital product applies here.** An earlier draft said in-person only, on the
  assumption the persona was 65–75. At 60–69 that's wrong — a 62-year-old buys a
  programme online without a second thought.
- **Some traffic will be adult children** searching for a parent. The page should
  read sensibly to both — mostly, avoid second-person assumptions about who's
  reading.
- **Affiliate:** vastuskuminauhat, kevyet käsipainot, kunnon kengät.

### 4. Palautuminen ja uni

Competitors are gadget-review sites
([KuntoGuru](https://kuntoguru.fi/blogi/palautumismittarit-vertailu)) and a sleep
coach ([Univalmentamo](https://www.univalmentamo.fi/unenavaimet)). Nobody owns the
PT angle: *how do I adjust training load when I've slept badly for three years?*

Commercially the strongest affiliate fit — Oura is Finnish, expensive, trusted
here. But it's furthest from Ilona's core offering, so **only build it if she
genuinely coaches recovery.**

- **Affiliate:** Oura, painopeitto, magnesium.

---

## 3. Two clusters, two hubs

**A — Vaihdevuodet ja treeni** (hub) → Luusto ja lihakset, Palautuminen ja uni
**B — Vahva seniori** (hub) → Luusto ja lihakset

A single hub was tried and rejected: a 68-year-old went through menopause
seventeen years ago and will never read a vaihdevuodet page, so it cannot route
her anywhere. Two clusters, split at the point where menopause stops being the
organising idea.

**Hubs and search entry are not alternatives.** Every page still earns its own
traffic from its own queries — someone searching "osteopenia treeni" lands on
luusto directly, never touching a hub. A hub adds three things on top: a landing
place for broad queries, internal linking that concentrates topical authority, and
somewhere coherent for word-of-mouth visitors to arrive.

| Theme | How she arrives | Links laterally to |
|---|---|---|
| Vaihdevuodet | "vaihdevuodet väsymys", "paino nousee vaikka treenaan" | Palautuminen, Luusto |
| Luusto ja lihakset | "osteopenia", "luukato", "lihaskato" | Vaihdevuodet *or* Vahva seniori |
| Vahva seniori | "kuntosali senioreille Turku", word of mouth | Luusto ja lihakset |
| Palautuminen ja uni | "uni ja palautuminen", "stressi ja treeni" | Vaihdevuodet |

**Luusto ja lihakset is the connective tissue** — persona 2 arrives from
vaihdevuodet, persona 3 from Vahva seniori. It's the only page a 56-year-old and a
68-year-old can both read without either feeling misplaced.

**Cluster B has one spoke, and it's shared. That's fine.** An earlier draft
proposed *tasapaino ja kaatumisen ehkäisy* as a second spoke to make the structure
symmetrical. Rejected: fall prevention is framed by UKK and THL for frail
populations, so the content that ranks is decline-coded — wrong readers, and it
contradicts the capability framing the rest of the cluster depends on. Balance
work stays in the **programme design**, not in a page title. Symmetry in a diagram
is not a user need.

If a second spoke emerges, the likeliest candidate is **matkakunto** —
aspirational rather than preventive, fits the profile, and connects to
treenimatkat, a product she already sells.

---

## 4. Webshop architecture

Simple white-label store on **`kauppa.ilofit.com`**:

- The main site **stays static, zero-JS, no cart, no payment scripts**.
- Theme pages are pure content that link out. Marketing on `ilofit.com`,
  transaction on `kauppa`. SEO value accrues where the content is — we are not
  trying to rank a checkout, so the subdomain tradeoff falls the right way.

**Two things to get right:**

1. **Attribution.** GA4 sets its cookie on the root domain, so `kauppa.ilofit.com`
   is tracked in the same property automatically — *if* the platform allows the
   GA4 tag. Many white-label stores don't. Either way, **UTM-tag every outbound
   shop link** so we can see which theme page drives sales.
2. **Two link types, visually distinct.** Shop links go to our own products;
   affiliate links go to third parties and legally require visible disclosure.
   Don't build one component for both.

Also check whether the shop provider is a processor under `/tietosuoja`, and how
it handles ALV on digital products. Neither blocks anything.

---

## 5. Build order

1. **Vaihdevuodet ja treeni** — largest audience, serves existing clients, hub for cluster A
2. **Luusto ja lihakset** — cleanest SERP gap, and the shared spoke both clusters need
3. **Vahva seniori** — hub for cluster B
4. **Palautuminen ja uni** — only if Ilona coaches recovery

This order has survived four structural revisions unchanged, which is mild
evidence it's right: each theme's priority comes from audience size and evidence
quality, not from where it sits in the diagram.

Vahva seniori was previously gated on a daytime-group pilot that would generate
testimonials. **That gate is largely gone** now the persona is 60–69 — Ilona's
clients already reach 65, so the page can be written from people she trains today.

---

## 6. Cross-cutting prerequisites

1. **Name Ilona's certification.** The site claims "Sertifioitu Personal Trainer"
   without saying which. These are health topics — YMYL in Google's terms — where
   sites without visible author credentials get suppressed regardless of content
   quality. Prerequisite, not a copy nit.
2. **Affiliate disclosure**, built into the link component from the start. KKV
   requires it clearly marked and visible *before* the link, not buried.
3. **Testimonials tagged by persona.** The single biggest conversion lever. A
   64-year-old converts when she sees a 63-year-old; the same page with only
   45-year-old faces loses her.
4. **UTM tagging** on every outbound link to `kauppa.ilofit.com`.
5. **Navigation must expose both hubs.** Word of mouth is a strong channel for
   persona 3, which means arriving at the homepage or bare domain. Today there's
   no path to either cluster.
6. **The homepage needs two doors.** It currently speaks to 40+ women in one voice
   and offers a 65-year-old nothing to recognise. With two clusters it has to fork
   early — a deliberate change to the page rewritten on 2026-07-30, not a bolt-on.

---

## 7. Decisions and why

| Decision | Reasoning |
|---|---|
| Bone + muscle merged | Same cause, same intervention, same products. Separate pages would cannibalise |
| Two hubs, not one | Persona 3 never reads a menopause page. See §3 |
| Luusto as shared spoke | The only page personas 2 and 3 can both read without either feeling misplaced |
| No second spoke for cluster B | Symmetry isn't a user need; tasapaino would attract the wrong readers |
| Golf deprioritised | Seasonal, hard September deadline, dependent on TPI certification or a club-pro partnership. Survives as an *example inside* Vahva seniori |
| "Vahva seniori" kept | Only candidate that's both status-neutral and a real search term. Risk managed by leading the H1 with capability |
| Persona 3 set at 60s | Ilona's call. Brings the persona close to existing clients, which dissolves the testimonial gate and re-enables a digital product |
| Daytime capacity dropped as a driver | Was the original business case for persona 3, but most 60–64-year-olds are still working. Audience coherence chosen over slot-filling |
| Shop on a subdomain | Keeps the main site zero-JS and static |
| 70+ not a focus | Copy decision, not exclusion |

### Rejected themes

- **Nivelkivut / polvi- ja selkäkipu** — high volume, but Fressi, Kuntoplus,
  Selkäkanava and Kuntokompassi are already there, and it's physiotherapist
  territory where a PT making treatment claims carries real liability.
- **Lantionpohja** — [TENA](https://www.tena.fi/naiset/elamaa-virtsankarkailun-kanssa/lantionpohjan-harjoittelu)
  has an incontinence-brand budget, [Käypä hoito](https://www.kaypahoito.fi/nix00565)
  owns the clinical term, and
  [Äitiysliikunta-Akatemia already sells the programme](https://aitiysliikuntaakatemia.fi/products/pelvic-health-mastery-lantionpohjan-lihasten-ohjelma).
- **Hiihto-/vaelluskunto** — low competition, but seasonal, poorly matched to
  Turku, and it pulls away from the 40+ women positioning.
- **Tasapaino ja kaatumisen ehkäisy** — decline-coded, institution-dominated,
  wrong persona.

---

## 8. Open questions

- Does Ilona genuinely coach recovery/sleep? Decides whether theme 4 gets built.
- Which certification, exactly? Blocks §6.1.
- Are there programmes already written for existing clients that could become the
  first digital product? If so, the shop becomes urgent sooner.
- How should the homepage fork between the two clusters without diluting either?

---

## 9. Evidence caveat

Competitive assessments come from reading who currently occupies the
Finnish-language results, using a US-localised search tool. That's a real picture
of *competition*, but it is **not volume data**. Before committing significant
work to any theme, run the shortlist through Google Keyword Planner or Ahrefs for
actual Finnish volumes. Confidence here is in the gaps, not the traffic.
