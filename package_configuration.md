{
  "name": "cyberstrike-2099",
  "version": "1.0.0",
  "description": "A high-performance 3D Sci-Fi FPS Cyber Wave Survival game built with Three.js and WebGL",
  "main": "dist/index.html",
  "scripts": {
    "start": "vite",
    "build": "mkdir -p dist && cp index.html dist/index.html",
    "preview": "vite preview",
    "test": "playwright test"
  },
  "keywords": [
    "threejs",
    "fps",
    "webgl",
    "cyberpunk",
    "game",
    "wave-shooter"
  ],
  "author": "CyberWarrior",
  "license": "MIT",
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "vite": "^5.0.0"
  }
}