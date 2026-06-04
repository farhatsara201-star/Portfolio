# PointClickCare Interview Study Guide
*Phone interview: Tuesday*

---

## 1. THE SNF WORLD — NUMBERS TO KNOW

| Stat | Number |
|---|---|
| SNFs in the US | ~14,700 |
| Medicare SNF stays/year | ~1.8 million |
| Medicare SNF spend/year | $29 billion |
| PCC customers | 30,000+ provider orgs |
| Average LOS (Medicare short stay) | ~22 days |
| Medicare pays 100% | Days 1–20 |
| Patient copay kicks in | Day 21 ($217/day in 2026) |
| Medicare max coverage | 100 days per benefit period |
| Discharge spike | Day 20 (cost-sharing trigger) |

**Why LOS matters to a PM:** Day 20 is a product signal, not just a clinical one. Discharge spikes at 7, 14, 20, and 100 days — all driven by reimbursement mechanics, not clinical status. PCC's products influence when and how that decision gets made.

**To get into SNF, patient must have:**
- 3-day inpatient hospital stay (the "3-day rule")
- Need for skilled care (PT, OT, nursing, IV meds)
- Medicare Part A coverage

---

## 2. MDS 3.0 — EVERY SECTION

**What it is:** A federally mandated standardized assessment tool. Every Medicare/Medicaid SNF resident must be assessed using it. It drives care planning, quality reporting, AND Medicare reimbursement (PDPM).

**Who fills it:** The MDS Coordinator (usually a registered nurse) pulls data from the entire interdisciplinary team — nursing, therapy, social work, dietary, pharmacy.

### Full Section Map

| Section | Name | What's in it | Who contributes |
|---|---|---|---|
| **A** | Identification Info | Name, DOB, gender, race, facility ID, admission date, Medicare/Medicaid numbers | Admin |
| **B** | Hearing, Speech & Vision | Can the resident hear/see? Do they use hearing aids? Communication ability | Nursing |
| **C** | Cognitive Patterns | BIMS (Brief Interview for Mental Status) — orientation, memory, attention. Detects dementia | Nursing |
| **D** | Mood | PHQ-9 depression screen — sadness, sleep, energy, appetite, self-worth | Social work / Nursing |
| **E** | Behavior | Wandering, physical/verbal behavioral symptoms, rejection of care | Nursing |
| **F** | Preferences for Routine & Activities | What does the resident want? Sleep habits, daily routines, activity preferences | Social work |
| **G** | Functional Status (legacy) | ADLs — bed mobility, transfers, walking, dressing, eating, toileting | Nursing / Therapy |
| **GG** | Functional Abilities & Goals | NEW standard for function. Self-care (eating, oral hygiene, bathing) + mobility (walking, stairs). Drives PT/OT payment under PDPM | PT / OT / Nursing |
| **H** | Bladder & Bowel | Continence status, catheter use, bowel patterns, toileting programs | Nursing |
| **I** | Active Diagnoses | All current diagnoses coded — the PRIMARY dx determines PDPM payment category | MDS Coordinator / Physician |
| **J** | Health Conditions | Pain (frequency, intensity), dyspnea, tobacco use, falls (number and type), prior surgeries | Nursing |
| **K** | Swallowing & Nutritional Status | **← SARA OWNED THIS** Swallowing disorders, height/weight, weight loss (5% in 30 days or 10% in 180 days), nutritional approaches (tube feeds, therapeutic diets, mechanically altered) | **Dietitian** |
| **L** | Oral/Dental Status | Tooth pain, broken/loose teeth, dental issues that affect eating | Nursing |
| **M** | Skin Conditions | Pressure injuries (stage 1–4), wounds, burns, skin tears — location and dimensions | Nursing / Wound care |
| **N** | Medications | Antipsychotics, antianxiety, hypnotics, anticoagulants, opioids, antibiotics, insulin — flagged for quality reporting | Pharmacy / Nursing |
| **O** | Special Treatments & Programs | Therapy minutes (PT, OT, SLP), IV meds, suctioning, trach, vent, dialysis, chemo, isolation | Therapy / Nursing |
| **P** | Restraints & Alarms | Physical restraints, bed/chair alarms | Nursing |
| **Q** | Participation & Goals | Did the resident/family participate? Does resident want to return to community? | Social work |
| **V** | Care Area Assessment Summary | Which of 20 Care Area Triggers fired? Each trigger = must document whether a care plan was made | MDS Coordinator |
| **X** | Correction Request | Used to correct submitted MDS data | MDS Coordinator |
| **Z** | Assessment Administration | Dates, signatures, attestations | MDS Coordinator |

---

## 3. HOW OFTEN IS MDS COMPLETED?

```
ADMISSION
    │
    ├── Day 1-3:  Admission assessment (OBRA)
    │
    ├── Day 5:    Medicare 5-day PPS assessment (PDPM)  ← MOST IMPORTANT FOR PAYMENT
    │
    ├── Day 14:   Medicare 14-day (if needed)
    │
    ├── Day 30, 60, 90: Medicare PPS assessments
    │
    ├── Every 92 days:  Quarterly review (OBRA)
    │
    ├── Every 366 days: Annual comprehensive (OBRA)
    │
    ├── Anytime:  Significant Change in Status (SCSA)
    │             — meaningful decline or improvement
    │
    └── DISCHARGE: Discharge assessment
```

**Key fact:** The Day 5 assessment is the most financially critical. It locks in the PDPM payment rate for the entire stay. If diagnoses are under-coded on Day 5, the SNF loses money for every subsequent day. This is why PDPM Coach exists.

---

## 4. PDPM — HOW MEDICARE PAYS THE SNF

**Before PDPM (pre-2019):** SNFs were paid based on therapy minutes. More minutes = more money. Led to unnecessary therapy.

**After PDPM (2019-present):** Payment based on patient's clinical characteristics from the MDS.

```
PDPM Daily Rate = PT + OT + SLP + Nursing + NTA
                  ↑    ↑    ↑       ↑           ↑
              Each driven by different MDS sections
```

| Component | Driven by MDS... |
|---|---|
| PT | Primary diagnosis (Section I) + functional status (Section GG) |
| OT | Primary diagnosis + functional status (GG) |
| SLP | Primary diagnosis + cognition (Section C) + swallowing (Section K) |
| Nursing | Diagnoses + clinical conditions + depression (Section D) |
| NTA | High-cost drugs, dialysis, infections, IV meds (Section N, O) |

**Sara's connection:** Section K (nutrition/swallowing) directly feeds SLP payment. When Sara documented a swallowing disorder or mechanically altered diet as a dietitian, she was increasing SLP reimbursement. She was financially material and probably didn't know it at the time.

---

## 5. THE PHYSICIAN WORKFLOW PROBLEM — SARA'S INSIDER INSIGHT

*Source: Sara's husband, a physician who refers patients to SNFs.*

### What Actually Happens

```
Physician wants to document in PCC
        ↓
Opens portal → locked out → password reset required
        ↓
Gives up. Writes documentation by hand.
        ↓
Nurse scans it → uploads as PDF into PCC
        ↓
Unstructured image sitting in PCC
        ↓
Billing/coding team manually reads the PDF
manually enters ICD-10 diagnosis codes
        ↓
MDS Coordinator pulls codes into Section I
        ↓
Section I feeds PDPM payment classification
        ↓
Manual entry = missed/incomplete diagnoses = undercoding
        ↓
SNF gets paid less than it should for every day of that stay
```

### Why This Is a Product Problem

- **Practitioner adoption failure:** PCC has a Practitioner Engagement module. Physicians aren't using it. Password friction alone is enough to kill the workflow.
- **Unstructured data problem:** Scanned PDFs can't be queried. Diagnoses on paper don't auto-populate Section I. The MDS Coordinator codes from incomplete structured data.
- **Reimbursement leakage:** Day 5 assessment gets locked in with under-coded diagnoses. That rate applies for the entire stay — every missed diagnosis is permanent revenue loss.
- **Nursing burden:** Nurses spend time scanning and uploading documentation that should never have been on paper.

### The IDP Solution — Sara's Exact Background

This is an Intelligent Document Processing problem. The fix:

```
AI-assisted extraction from scanned physician note
        ↓
Auto-suggested ICD-10 diagnosis codes
        ↓
Billing team reviews and confirms (human-in-the-loop)
        ↓
Feeds directly into Section I before Day 5 assessment locks
        ↓
Accurate PDPM coding → correct reimbursement
```

This is what Sara was building at Concord for payer document intake. The application is pointed at SNF billing workflow instead of payer intake — but the product architecture is identical.

### How to Use This in the Interview

*Save for when they ask about product opportunities, legacy modernization, or where you'd focus:*

> "My husband is a physician who refers patients to SNFs. He told me he stopped using PCC's practitioner portal entirely because every time he logs in he's locked out and has to reset his password. He handwrites his documentation, nurses scan and upload it, and a billing team manually enters the diagnosis codes. I can trace the full downstream consequence of that — scanned PDFs can't feed the MDS the way structured data would, and if Section I is undercoded on Day 5, the SNF is leaving money on the table for the entire stay. The fix is AI-assisted extraction from that scanned document — which is exactly the IDP work I was doing at Concord."

---

## 6. PHYSICIAN WORKFLOW — PRODUCT STRATEGY INSIGHT

### The Sign-In Fix (Surface Level)
Standard solutions to the password/login problem:
- **SSO** — integrate with the hospital's existing identity provider. Physician never has a separate PCC password.
- **Magic links via SMS** — tap a link, you're in. No password to remember.
- **Biometric login on mobile** — Face ID / fingerprint. Zero friction.

Any of these eliminates the reset loop. But this is the wrong framing.

### The Real Insight (Deeper Level)

Most SNF physicians are older and paper-preferring. Even with perfect SSO, a physician who has written notes by hand for 30 years isn't switching to a portal. The behavior is structural — not fixable by UX alone.

**The right product strategy: don't fight the paper. Make the paper intelligent.**

Accept that scanned PDFs will keep coming in. Build the IDP layer that extracts structured data from them automatically:

```
Scanned physician note arrives in PCC
        ↓
AI extracts diagnoses → suggests ICD-10 codes
        ↓
Billing team reviews and confirms (human-in-the-loop)
        ↓
Section I auto-populated before Day 5 locks
        ↓
Accurate PDPM coding → correct reimbursement
        ↓
Works whether the physician ever logs in or not
```

This is more realistic and higher-impact than fixing the login screen. It meets users where they are instead of trying to change 30-year-old behavior.

### Why Does PCC Keep Forcing Password Resets?

Several things stack on top of each other:

1. **Outdated security policy** — Healthcare IT has historically required resets every 30–90 days based on old NIST guidelines. NIST reversed this in 2017 — they now say forced resets make security *worse* because users write passwords down. Healthcare IT is slow to update.

2. **Infrequent use triggers lockout** — A visiting physician rounds once or twice a week. Many systems lock accounts after X days of inactivity. Weekly rounds + 30-day inactivity policy = locked out almost every visit.

3. **Visiting physicians are external users** — SNF physicians aren't employed by the facility. External/guest accounts get treated more aggressively: shorter sessions, faster expiration, no SSO with their home hospital credentials.

4. **No SSO** — Without SSO, PCC credentials are completely separate from everything else the physician uses. They don't log in daily like a nurse. Credentials expire while they're not paying attention.

**The bitter irony:** The password reset policy exists to satisfy a HIPAA security requirement. The outcome is a folder of plaintext passwords in a laptop bag — a far bigger security risk than leaving the password unchanged.

> "The reset policy exists to satisfy a compliance requirement. The outcome is a folder of plaintext passwords in a laptop bag. That's the gap between compliance theater and actual security — and it's a product design problem that PCC owns."

---

### The Power User Signal

A physician friend who actually uses PCC carries his laptop to SNFs and keeps a physical folder of passwords. This matters more than the physician who gave up — because it shows the problem isn't resistance to technology. It's authentication UX so broken that even committed users route around it with paper.

The sticky note on the monitor. The password notebook in the drawer. The folder in the laptop bag. Every clinician who's worked in healthcare has seen these. They exist because EHR login is so broken that physical workarounds are faster than the digital ones.

**When the workaround is a folder, the fix isn't training. It's SSO.**

### How to Say This in the Interview

> "My husband gave up on PCC entirely — password resets every time. His friend, who actually uses it, carries a laptop to SNFs and keeps a physical folder of his passwords. That second story is the more important one. When your most committed user's solution is a paper folder, you don't have an adoption problem. You have an authentication problem. And the fix isn't better onboarding — it's SSO."

Then pivot: *"But even fixing SSO doesn't solve the underlying documentation problem, because most SNF physicians are older and paper-preferring regardless of login friction. So the durable product answer is IDP on scanned notes — make the paper intelligent rather than trying to eliminate it."*

This demonstrates: user behavior over user preference, realistic product thinking, and your IDP background all in one answer.

---

## 7. PCC PRODUCT SUITE — LIKELY PORTFOLIO FOR THIS ROLE

**Important:** The JD says "portfolio of Senior Care products" — you're owning multiple products, not one. The ones explicitly named in the JD are marked ★.

**Smart question to ask in the phone screen:**
> "Can you tell me which products are in scope for this role? I want to make sure I'm thinking about the right areas going in."

---

### ★ MDS / PDPM Coach
**What it is:** The tool MDS coordinators use to complete the Day 5 Medicare assessment. Shows them in real time how their coding decisions affect Medicare reimbursement. Flags diagnoses that are under-documented before the assessment gets submitted to CMS.

**Why it matters:** The Day 5 assessment locks in the payment rate for the entire stay. If diagnoses are missed, the SNF loses money on every subsequent day. This is PCC's most financially critical product for SNFs.

**Current state:** Guidance-based — helps coordinators code better, but doesn't automate intake. No AI extraction from physician notes. The gap Sara identified (scanned notes → manual entry → undercoding) is still unaddressed.

---

### ★ LTCF / interRAI
**What it is:** Canada's replacement for MDS. Instead of the US MDS 3.0, Canadian long-term care facilities use the interRAI LTCF assessment system. PCC is actively migrating its Canadian customers to this new standard right now.

**Why it matters:** PCC is a Canadian company (HQ in Mississauga). A significant portion of their customer base is Canadian. This transition is live and in progress — it's a major product initiative.

**In plain terms:** Think of it as MDS but for Canada, with different sections, different regulatory requirements, and a full platform migration underway.

---

### ★ Immunizations
**What it is:** Tracks resident immunization records inside the SNF — flu shots, COVID boosters, pneumococcal vaccines. Manages schedules, consent, and reporting.

**Why it matters:** CMS requires SNFs to report immunization rates as part of quality star ratings. Missing documentation = lower star rating = lower occupancy.

**In plain terms:** A compliance and scheduling tool for vaccines, tied directly to quality reporting.

---

### ★ Clinical Documentation
**What it is:** The core nursing workflow inside PCC — assessments, care plans, progress notes, point-of-care charting on tablets or mobile. This is what nurses use at the bedside every shift.

**Why it matters:** It's the foundation everything else feeds from. MDS pulls from nursing documentation. Care plans are generated from it. If the documentation is incomplete, downstream products break.

**In plain terms:** The EHR charting layer for nurses. The product most users touch most often.

---

### Nutrition Management
**What it is:** Tracks dietary assessments, meal preferences, weight, and nutritional interventions for each resident.

**Why it matters:** Feeds directly into MDS Section K (Sara's section). Weight loss flags, therapeutic diet orders, and swallowing interventions documented here flow into the MDS and affect SLP reimbursement under PDPM.

**Sara's connection:** As a clinical dietitian, this is the product you used — or the equivalent of it.

---

### Medication Management
**What it is:** Electronic medication administration record (eMAR). Nurses document every medication given, flag missed doses, and reconcile pharmacy orders.

**Why it matters:** Medication errors are a top SNF quality measure. CMS tracks antipsychotic use specifically as a quality indicator — documented in MDS Section N.

---

### Skin & Wound
**What it is:** Tracks pressure injuries and wounds — location, stage, dimensions, photos, treatment history.

**Why it matters:** Pressure injuries are a major CMS quality measure and a litigation risk. SNFs are penalized for hospital-acquired pressure injuries. Feeds into MDS Section M.

---

### Practitioner Engagement
**What it is:** The physician/NP portal — where attending physicians are supposed to write orders, document notes, and ePrescribe from their phone or laptop.

**Why it matters:** Known adoption problem. See Section 6 of this guide.

---

### Care Insights
**What it is:** Analytics dashboard — population health views, early warning flags, census reporting, quality metrics.

**Why it matters:** Gives administrators and DONs visibility across their resident population without digging into individual charts.

---

## 7. KEY ACRONYMS

| Term | Meaning |
|---|---|
| MDS | Minimum Data Set |
| RAI | Resident Assessment Instrument (full framework MDS lives in) |
| OBRA | Omnibus Budget Reconciliation Act — law that mandates MDS |
| PDPM | Patient-Driven Payment Model — current Medicare SNF payment system |
| PPS | Prospective Payment System — how CMS pays SNFs |
| SCSA | Significant Change in Status Assessment |
| IDT | Interdisciplinary Team — nursing, therapy, social work, dietary, pharmacy |
| CMI | Case Mix Index — average acuity of a facility's patient population |
| iQIES | CMS's MDS submission portal (replaced QIES in 2022) |
| LTCF | Long-Term Care Facility (also interRAI's Canadian assessment tool) |
| SNF | Skilled Nursing Facility |
| LTACH | Long-Term Acute Care Hospital (higher acuity than SNF) |
| ADL | Activities of Daily Living |
| BIMS | Brief Interview for Mental Status (cognitive screen in Section C) |
| PHQ-9 | Depression screen in Section D |
| IDP | Intelligent Document Processing |

---

## 8. YOUR DIFFERENTIATORS — HOW TO CONNECT THEM

**On clinical domain:**
> "As a clinical dietitian I completed Section K of the MDS for every resident on my caseload — weight loss flags, swallowing assessments, therapeutic diet documentation. I understand that workflow from the inside, including what makes it hard to complete accurately under time pressure."

**On care transitions:**
> "At Kern Medical I was coordinating discharges INTO SNFs — I was on the sending side of what PCC's platform receives. I understand what information makes it through that transition and what gets lost, because I watched it happen."

**On the physician workflow problem:**
> See Section 5 above.

**On product modernization:**
> "What draws me to this role is modernizing regulatory products like MDS that clinicians experience as a burden. There's real opportunity to use AI to surface what the MDS coordinator needs without making them hunt — similar to what I was building with Tether and the IDP work at Concord."

---

## 9. LIKELY PHONE SCREEN QUESTIONS

| Question | Your angle |
|---|---|
| Walk me through your background | Clinician → care transitions → data → PM. The thread is always: I was inside the broken workflow. |
| Why PointClickCare / why senior care? | Section K + care transitions origin + IDP opportunity |
| Tell me about a product you owned end-to-end | DSM — 0→1, board investment, HIMSS 2026 launch |
| How do you handle regulatory complexity? | DSM had DirectTrust/HISP certification requirements. Vendor-agnostic architecture. |
| Balance legacy maintenance vs. new development? | Concord Connect usability testing (1→n) while simultaneously shipping DSM (0→1) |
| Where do you see product opportunity at PCC? | Physician workflow → IDP → PDPM coding accuracy (Section 5) |
| How do you work with engineering? | Led 8 engineers through DSM alpha to production |
