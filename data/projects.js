// Central project registry for the LOF Simulations gallery.
// To add a new live project: drop its index.html in sims/<category>/<slug>/,
// then add one entry here with status "live" and the matching url.
// Placeholder entries (status "coming-soon") have no url and render as inert cards.

const PROJECTS = [
  // ---------------- ROBOTICS ----------------
  { id: "alien-waypoint-decoder", title: "Alien Waypoint Decoder", category: "robotics", status: "live", url: "../sims/robotics/alien-waypoint-decoder/index.html", description: "Decode alien signal waypoints and guide a rover through them." },
  { id: "heat-seeker-rover", title: "Heat Seeker Rover", category: "robotics", status: "live", url: "../sims/robotics/heat-seeker-rover/index.html", description: "A rover that tracks and homes in on heat signatures." },
  { id: "shadow-triggered-escape-bot", title: "Shadow-Triggered Escape Bot", category: "robotics", status: "live", url: "../sims/robotics/shadow-triggered-escape-bot/index.html", description: "A bot that reacts to shadow triggers to plan an escape route." },
  { id: "axes-3", title: "Axes 3 — Command-Controlled Pick and Place Arm", category: "robotics", status: "live", url: "../sims/robotics/axes-3/index.html", description: "Drive a 3DOF robotic arm with real Python-to-Arduino serial commands to pick and place objects." },
  { id: "invisible-line-patrol-bot", title: "Invisible Line Patrol Bot", category: "robotics", status: "live", url: "../sims/robotics/invisible-line-patrol-bot/index.html", description: "Track an invisible UV path with dual sensors, gear-driven walking legs, and spiral patrol search." },
  { id: "cosmic-pulse-tracker", title: "Cosmic Pulse Tracker — Lost Signal Lab", category: "robotics", status: "live", url: "../sims/robotics/CosmicPulseTracker/index.html", description: "Hunt a lost beacon in a dark alien zone: decode broken RF pulse patterns from signal strength, bars, and buzzer speed." },
  { id: "aquanova", title: "AquaNova Alert Station", category: "robotics", status: "live", url: "../sims/robotics/AquaNova/index.html", description: "Drive a patrol rover through a habitat of creatures and leaking ceiling pipes, and watch its motion and water sensors decide when to raise the alarm." },
  { id: "dj-bot", title: "Heartbeat DJ Bot — Crew Calmness Music", category: "robotics", status: "live", url: "../sims/robotics/DJ_Bot/index.html", description: "Read a crew member's pulse and the cabin noise, then watch two thresholds pick the music the DFPlayer sends to the speaker." },
  { id: "lost-bot-thermal-shield", title: "Lost Bot Thermal Shield", category: "robotics", status: "live", url: "../sims/robotics/lost-bot-thermal-shield/index.html", description: "Watch a temperature sensor and MQ-2 gas sensor drive automatic fan-speed and emergency-ventilation decisions inside a lost bot." },
  ...Array.from({ length: 21 }, (_, i) => ({
    id: `robotics-coming-soon-${i + 7}`,
    title: `Robotics Project ${String(i + 7).padStart(2, "0")}`,
    category: "robotics",
    status: "coming-soon",
    description: "Coming soon.",
  })),

  // ---------------- AEROSPACE ----------------
  { id: "airfoil-tester", title: "Airfoil Tester", category: "aerospace", status: "live", url: "../sims/aerospace/AirfoilTester/AirfoilTester.html", description: "Test airfoil shapes and see how they generate lift." },
  { id: "catapult-glider", title: "Catapult Glider", category: "aerospace", status: "live", url: "../sims/aerospace/CatapultGlider/CatapultGlider.html", description: "Launch a glider from a catapult and study its flight path." },
  { id: "uttm", title: "UTTM — Universal Thrust Testing Machine", category: "aerospace", status: "live", url: "../sims/aerospace/UTTM/UTTM.html", description: "Bench-test motor and propeller combinations to find the best safe thrust setup." },
  { id: "darrieus-turbine", title: "Darrieus Turbine", category: "aerospace", status: "live", url: "../sims/aerospace/DarrieusTurbine/DarrieusTurbine.html", description: "Spin up a helical vertical-axis wind turbine and charge a device with the power it generates." },
  ...Array.from({ length: 26 }, (_, i) => ({
    id: `aerospace-coming-soon-${i + 2}`,
    title: `Aerospace Project ${String(i + 2).padStart(2, "0")}`,
    category: "aerospace",
    status: "coming-soon",
    description: "Coming soon.",
  })),

  // ---------------- SPACE & ASTRONOMY ----------------
  { id: "solsync", title: "SolSync", category: "space-astronomy", status: "live", url: "../sims/space-astronomy/SolSync/simulation.html", description: "Explore Moon phases, tidal locking, and eclipses through orbit and telescope views." },
  { id: "apogee", title: "Apogee — Orbital Mechanics Sandbox", category: "space-astronomy", status: "live", url: "../sims/space-astronomy/apogee/simulation.html", description: "Launch satellites and shape their orbits in an interactive orbital mechanics sandbox." },
  { id: "leapfrog", title: "Project Leapfrog — Flight Physics Lab", category: "space-astronomy", status: "live", url: "../sims/space-astronomy/leapfrog/simulation.html", description: "Free-exploration flight physics lab: experiment with gravity, thrust, and trajectories." },
  { id: "mirror-maze-spectrum", title: "Mirror Maze Spectrum", category: "space-astronomy", status: "live", url: "../sims/space-astronomy/mirror-maze-spectrum/simulation.html", description: "An optics bench: bend, split, and color a light beam with mirrors, prisms, gratings, filters, and lenses." },
  { id: "aerovoyage", title: "AeroVoyage — Rotor Lift Lab", category: "space-astronomy", status: "live", url: "../sims/space-astronomy/aerovoyage/simulation.html", description: "Fly one rotor drone across Earth, Mars, Titan, and the Moon to see why the same design behaves differently on each world." },
  { id: "ascent-lab", title: "Ascent Lab", category: "space-astronomy", status: "live", url: "../sims/space-astronomy/ascent-lab/simulation.html", description: "Build a pressure rocket — nose, body, fins, and launch pressure — then launch it and read altitude, drag, and stability from the flight." },
  ...Array.from({ length: 24 }, (_, i) => ({
    id: `space-astronomy-coming-soon-${i + 5}`,
    title: `Space & Astronomy Project ${String(i + 5).padStart(2, "0")}`,
    category: "space-astronomy",
    status: "coming-soon",
    description: "Coming soon.",
  })),
];

const CATEGORIES = [
  {
    id: "robotics",
    title: "Robotics",
    description: "Rovers, bots, and autonomous machines.",
    accent: "#2563eb",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><circle cx="9" cy="14" r="1.4" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.4" fill="currentColor" stroke="none"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1.2" fill="currentColor" stroke="none"/><path d="M2 12v3M22 12v3"/></svg>`,
  },
  {
    id: "aerospace",
    title: "Aerospace",
    description: "Flight, propulsion, and aircraft systems.",
    accent: "#dc2626",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c1.8 1.8 2.5 4 2.5 7v4l6 3.5v2l-6-1.8V21l2 1.5v1.2l-3.5-1-3.5 1v-1.2l2-1.5v-3.8L5.5 19v-2l6-3.5V9.5c0-3 .7-5.2 2.5-7Z"/></svg>`,
  },
  {
    id: "space-astronomy",
    title: "Space & Astronomy",
    description: "Planets, orbits, and the cosmos.",
    accent: "#7c3aed",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><ellipse cx="12" cy="12" rx="10" ry="3.2" transform="rotate(-20 12 12)"/></svg>`,
  },
];
