# 🎬 Film Tax Strategy Pitch

Professional interactive presentation for tax structure optimization strategies for film production companies.

## 🌐 Live Development Server

**URL:** http://localhost:5173

The presentation is currently running and ready to view!

## 📊 Presentation Overview

Comprehensive 7-slide deck showcasing strategic tax optimization models for a $5M film production budget in Jersey City, NJ.

### 📑 Slide Deck Contents:

1. **Title Slide**
   - Professional gradient design
   - Company branding: Marsala Solutions
   - Project overview

2. **Executive Summary**
   - 4 animated KPI metrics
   - Strategic approach overview
   - Initial engagement terms

3. **Strategic Models Overview**
   - Model A: Standalone LLC ($1.85M benefit)
   - Model B: LLC + Offshore IP ($3.5-4M benefit)
   - Model C: LLC + 501(c)(3) ($3.8-4.5M benefit)
   - Model D: Advanced Full Stack ($8.165M benefit)

4. **Comparison Matrix**
   - Comprehensive benefit comparison
   - 7 tax components analyzed
   - Visual indicators (✓, ✗, ⚠)

5. **Risk-Return Assessment**
   - Detailed dimension analysis
   - Implementation timelines
   - Strategic insights

6. **Case Study: Model C**
   - $5M budget breakdown
   - Funding sources visualization
   - Structure flow diagram
   - Key advantages

7. **Next Steps & Engagement**
   - 4-phase implementation roadmap
   - $5K initial retainer details
   - Payment & contact information

## ⚡ Key Features

- **Interactive Navigation:** Keyboard shortcuts + mouse controls
- **Smooth Animations:** Framer Motion transitions
- **Animated Metrics:** CountUp.js for financial data
- **Responsive Design:** Works on all screen sizes
- **Professional Styling:** Tailwind CSS gradients & components
- **Icon Library:** Lucide React icons

## 🚀 Quick Start

### View the Presentation

The server is already running! Just open:
```
http://localhost:5173
```

### Control Commands

```bash
npm run dev     # Start development server (already running)
npm run build   # Build for production
npm run preview # Preview production build
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` / `Page Down` | Next slide |
| `←` / `Page Up` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `Esc` | Exit fullscreen |

## 🛠 Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Number Animations:** React CountUp
- **PDF Export:** jsPDF + html2canvas

## 📁 Project Structure

```
film-tax-strategy-pitch/
├── src/
│   ├── slides/
│   │   ├── Slide01Title.tsx                  # Title slide
│   │   ├── Slide02ExecutiveSummary.tsx       # KPIs & overview
│   │   ├── Slide03StrategicModels.tsx        # 4 models
│   │   ├── Slide04ComparisonMatrix.tsx       # Benefit comparison
│   │   ├── Slide05RiskReturnMatrix.tsx       # Risk assessment
│   │   ├── Slide06CaseStudy.tsx              # Model C example
│   │   ├── Slide07NextSteps.tsx              # Engagement process
│   │   └── index.ts                          # Exports
│   ├── types/
│   │   └── slides.ts                         # TypeScript definitions
│   ├── App.tsx                               # Main component
│   ├── main.tsx                              # Entry point
│   └── index.css                             # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Adding New Slides

1. Create new slide file in `src/slides/SlideXX[Name].tsx`
2. Export from `src/slides/index.ts`:
   ```typescript
   export { SlideXXName } from './SlideXXName';
   ```
3. Import and add to slides array in `src/App.tsx`:
   ```typescript
   import { SlideXXName } from './slides';
   const slides = [..., SlideXXName];
   ```

### Modifying Content

Edit slide components directly in `src/slides/` to update:
- Text content
- Financial figures
- Styling & colors
- Layouts & components

### Styling

Tailwind classes are used throughout. Common patterns:
- `bg-gradient-to-br from-blue-50 to-blue-100` - Gradient backgrounds
- `border-l-4 border-blue-600` - Accent borders
- `text-slate-900` - Typography colors

## 💼 Client Information

**Marsala Solutions Incorporate**  
221 River St, Hoboken, NJ 07030  
Strategic Tax Advisory Services

**Account:** 101354405  
**Routing:** 211370150

## 📄 Export Options

The presentation can be exported to PDF using the built-in functionality:
- Navigate through slides
- Use browser print (Ctrl/Cmd + P)
- Save as PDF

## 🔧 Build for Production

```bash
npm run build
```

Output will be in `dist/` directory, ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

**Confidential** - For Discussion Purposes Only

---

*Based on the Mira Labs pitch template, customized for film tax strategy consulting.*

**Project Created:** October 2025  
**Template Source:** Mira Labs Pitch Deck  
**Adapted For:** Film Production Tax Optimization Strategy
