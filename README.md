# IUB Course Planner by IMZ

> A fast, intuitive timetable builder for Independent University, Bangladesh — without the chaos.

[![Live App](https://img.shields.io/badge/Live-App-brightgreen)](https://iub-course-plan-by-imz.vercel.app/)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-blue)](https://iub-course-plan-by-imz.vercel.app/)
[![License](https://img.shields.io/badge/license-Apache%202-blue)](LICENSE)

---

## The Motivation

Every semester, IUB students face the same nightmare: logging into iRAS, hunting through cluttered course lists, manually verifying prerequisites, cross-checking timings on paper, and starting over after every clash. I built this planner to replace that frustration with a single, clean interface that does the hard work for you automatically validating what you can take and letting you experiment with as many conflict-free schedules as you like.

---

## What It Does

- **Authenticate with iRAS** – Pull your actual course offerings using your iRAS credentials (nothing is ever stored).
- **Eligibility‑Aware Display** – Every course is colour‑coded according to your personal eligibility status (e.g., prerequisites satisfied, already completed, blocked).
- **Prerequisite Guard** – Courses that you can’t take yet are visibly marked, and the planner prevents you from adding them to any timetable.
- **Conflict‑Free Plan Building** – No more overlapping sections. Add courses freely — the tool automatically blocks selections that cause time conflicts.
- **Unlimited Plans** – Create, rename, duplicate, and delete multiple timetables to compare different combinations.
- **Powerful Search & Filters** – Find what you need by course code, title, or faculty. Narrow results by day group (ST, MW, AR), open seats, and eligibility tags (e.g., “PC”).
- **One‑Click Export to JPG** – Download a clean snapshot of your weekly grid plus the chosen section details as a single image — perfect for registration day.
- **Local Backup** – Even if iRAS suddenly shows empty data, your last fetched course list remains cached in your browser so you’re never left guessing.
- **Installable (PWA)** – Add the app to your phone’s home screen for a native‑like experience.
- **Dark / Light Mode** – Comfortable viewing on any device, any time.
- **Privacy by Design** – No ads, no trackers, no credential storage. Logging out instantly wipes your session data.

---

## Getting Started

1. Open the **[Live App](https://iub-course-plan-by-imz.vercel.app/)** in your browser (or launch the installed PWA).
2. Click **“iRAS Login”** and sign in with your university credentials.
3. Browse the fetched course list — use the search bar and filters to zero in on what you need.
4. For any eligible section, click **“Add To Plan”** — the planner will automatically reject overlaps or ineligible courses.
5. Create as many alternative plans as you want, each automatically kept conflict‑free.
6. When you’re ready, tap **“Export this plan (JPG)”** to save your timetable as an image.
7. That’s it — no saving, no syncing, no mess.

---

## Why It Makes a Difference

| Pain Point | How the Planner Solves It |
|------------|---------------------------|
| Manually checking prerequisites | Real‑time eligibility tracking blocks ineligible courses instantly. |
| Endless restarts after a clash | Conflict detection is automatic — you can’t create overlapping sections. |
| Only one plan to work with | Build and compare unlimited timetables side by side. |
| iRAS shows empty course lists | Local cache retains your last valid offers; you always have a reference. |
| Works only on a desktop | Fully responsive UI; installable as a PWA on mobile. |

---

## A Few Important Notes

- **Backup relies on browser cache** – To keep the local backup working, avoid using incognito/private mode, or enable persistent storage in your browser settings.
- This is **not an official IUB tool** — it’s a personal side project created to simplify registration for fellow students.
- Your **iRAS login is never saved** locally or transmitted anywhere other than directly to iRAS.
- No advertisements, no analytics, no external requests.
- Logging out completely removes your data from the device.

---

## Upcoming Improvements

- [ ] More robust plan restoration (surviving cache clears and incognito sessions)
- [ ] Import / export plans as shareable files
- [ ] Additional filter options and minor UX polish
- [ ] Accessibility refinements

---

**Thank you for using the IUB Course Planner!**  
If it saves you even five minutes of stress during registration, it’s done its job.