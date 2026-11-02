# ⚡ CYBERSTRIKE 2099: ULTIMATE EDITION 3D

> A high-octane 3D Cyberpunk FPS Wave Survival game built with pure **Three.js**, **Tailwind CSS**, and WebGL.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Three.js](https://img.shields.io/badge/Three.js-r128-black)
![WebGL](https://img.shields.io/badge/WebGL-2.0-cyan)

---

## 🎮 Game Overview

**CYBERSTRIKE 2099** drops players into Sector 09, a high-tech arena under siege by waves of rogue synthetics, stealth drones, heavy mechs, and colossal warlord bosses. 

### Core Features
- **PBR Metallic Visuals & Atmospheric Effects:** Reflective rainy cyber grid, glowing neon pillars, volumetric dust particles, and dynamic point-light muzzle flashes.
- **5-Weapon Cyber Arsenal:** Laser Pistol, Vector Plasma Rifle, Tech Scatter-Shotgun, Arc Laser Railgun, and the devastating Omega Annihilator.
- **Precision Mechanics:** Aim-Down-Sights (ADS) zooming, smooth camera bobbing, recoils, and sound effects built on Web Audio API.
- **Overdrive Matrix Ability:** Land hits to fill your Overdrive meter and unleash a 6-second double damage burst.
- **Armory & Augment Shop (`[B]` Key):** Salvage Data Cores dropped by hostiles to purchase weapons and cybernetic stat upgrades (Max Health, Nano-Shields, Reload Speed, Damage Output).
- **Global Arcade Leaderboard Integration:** Automatically posts final numeric scores and pilot callsign to the online arcade leaderboard upon game over.

---

## 🕹️ Controls

| Action | Control Key / Button |
| :--- | :--- |
| **Move** | `W` `A` `S` `D` |
| **Sprint** | `Left Shift` |
| **Jump** | `Spacebar` |
| **Fire Weapon** | `Left Click` |
| **Precision Scope (ADS)** | `Right Click` (Hold) |
| **Reload** | `R` |
| **Switch Weapons** | `1` - `5` / Mouse Scroll Wheel |
| **Overdrive Matrix** | `E` |
| **Armory Shop** | `B` |

---

## 🏆 Scoring System

- **Standard Kill:** +100 Pts
- **Boss Purge:** +1,000 Pts
- **Data Core Salvaged:** +10 Pts
- **Wave Clear Bonus:** +(`Wave Level` × 500) Pts

---

## 🚀 Quick Start & Development

### Project Structure
```
cyberstrike-2099/
├── index.html        # Complete game source code
├── dist/             # Build output directory
├── tests/            # E2E Playwright test suite
│   └── game.spec.js
├── package.json      # NPM scripts and dependencies
└── README.md         # Project documentation
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cyberstrike-2099.git
   cd cyberstrike-2099
   ```

2. Install development dependencies:
   ```bash
   npm install
   ```

3. Run locally:
   ```bash
   npm run start
   ```

4. Build production bundle (`/dist` folder):
   ```bash
   npm run build
   ```

5. Run automated tests:
   ```bash
   npm run test
   ```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.