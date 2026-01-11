# Portfolio Site ✨

**A polished resume and portfolio site - With scheduled updates to sync data from GitHub**

[![Build - GitHub Actions](https://img.shields.io/badge/build-GitHub%20Actions-blue?style=for-the-badge&logo=github-actions)](https://github.com/gauthumjs-projects/v0-resume-portfolio-site/actions)
[![Deployed on Vercel](https://img.shields.io/badge/deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/gauthumjs-projects/v0-resume-portfolio-site)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fgauthumj.in)](https://gauthumj.in)

**Credit:** Initial design by [v0.app](https://v0.app). All subsequent changes and polish were made manually.

---

## Overview

This repository contains a customized Next.js portfolio site. The project was bootstrapped from a v0.app starter design and has since been manually extended and maintained.


## Features ✅

- **GitHub-powered site stats** - repository and contribution stats are surfaced on the site and are refreshed via GitHub Actions (output stored under `lib/stats.json`).
- **Self-hosted contact form** - a built-in `components/contact-form.tsx` to send messages to your configured endpoint (serverless or self-hosted handler).
  - self hosted contact form webhook server example: [Contact form webhook server](https://github.com/gauthumj/contact-form-server)
- **Interactive design elements**:
  - Animated counters (`components/animated-counter.tsx`) 🔢
  - Bento-style grid layout (`components/bento-grid.tsx`) 🧩
  - Supply-chain visuals & development lab components (`components/supply-chain-visuals.tsx`, `components/development-lab.tsx`) 🔬
  - Work status & live indicators (`components/work-status.tsx`) 🚦
  - Theme support (`components/theme-provider.tsx`) for light/dark UI 🎨
- **Reusable UI primitives** in `components/ui/` (badge, button, card, progress, notifications).
- **Lightweight, static-first** approach with Next.js + Vercel for fast, secure deployments.

## Deployment

- Live site: **https://gauthumj.in**
- Continuous updates: changes from `v0.app` push to this repository and trigger deploys.

## Contributing / Extending 🔧

- Edit layout and components in the `components/` and `app/` folders.
- Update or extend the GitHub Actions workflow to change how `lib/stats.json` is generated.
- Customize the contact form to point to your preferred backend (serverless function, self-hosted endpoint, or third-party form handler).

---

Made with ❤️ and a starting point from [v0.app](https://v0.app).

