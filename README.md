# LOF Simulations — Team Guide

Live site: https://laboffuture.github.io/LOF_SIMULATIONS/

## One-time setup (each person, each system)

```
git clone https://github.com/laboffuture/LOF_SIMULATIONS.git
cd LOF_SIMULATIONS
```

## Every time before you start editing

```
git pull
```

Pulls in everyone else's latest changes first — avoids conflicts, especially in `data/projects.js`.

## Adding a new simulation

1. Pick a category: `robotics`, `aerospace`, or `space-astronomy`.
2. Create a folder for it: `sims/<category>/<short-slug>/`
   e.g. `sims/robotics/line-follower-bot/`
3. Put your finished HTML file inside that folder (any filename, e.g. `index.html`).
4. Open `data/projects.js`.
5. Find an existing "coming-soon" placeholder in that category and replace it with your real entry:

   ```js
   // before
   { id: "robotics-coming-soon-5", title: "Robotics Project 05", category: "robotics", status: "coming-soon", description: "Coming soon." },

   // after
   { id: "line-follower-bot", title: "Line Follower Bot", category: "robotics", status: "live", url: "../sims/robotics/line-follower-bot/index.html", description: "One-sentence description of what it does." },
   ```

6. Save.

## Publish it

```
git add -A
git commit -m "Add Line Follower Bot simulation"
git push
```

GitHub Pages rebuilds automatically within about 1-2 minutes.

If `git push` is rejected because someone else pushed first, run `git pull` then `git push` again.

## Rules of thumb

- One folder per sim under `sims/<category>/`. Don't edit someone else's sim folder.
- `data/projects.js` is the only shared file — always `git pull` before editing it, and `git push` right after your edit so the next person's pull picks it up.
- If a sim uses `<script type="module">` or `fetch()`, it must be viewed over http, not opened directly by double-clicking the file. GitHub Pages already serves everything over http, so the live site is always fine; only local double-click testing is affected.
