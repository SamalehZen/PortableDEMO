# PortableDEMO – Rota-le

Objectif: préparer et exposer une démo publique du composant « Rota-le » via Next.js (App Router) avec une page `/demo`, en utilisant pnpm et Node >= 18, prête pour un déploiement Vercel (équipe `poius-projects-be9e984c`).

## Structure
```
.
├─ app/
│  ├─ page.tsx            # Accueil
│  ├─ demo/page.tsx       # Démo publique
│  └─ globals.css         # Styles globaux légers
├─ src/
│  └─ components/rota-le/ # Intégration composant (placeholder en attendant l’archive)
├─ next.config.ts
├─ package.json
├─ tsconfig.json
├─ vercel.json
└─ .gitignore
```

## Lancer en local
- Prérequis: Node >= 18 et pnpm
- Installation: `pnpm install`
- Développement: `pnpm dev` puis ouvrir http://localhost:3000
- Build: `pnpm build` | Production: `pnpm start`

La démo est accessible sur `/demo`. Elle inclut des contrôles (vitesse, taille, variante, etc.).

## Intégration du composant « Rota-le » (depuis l’archive)
1. Dézipper l’archive localement et copier fichiers du composant, styles et assets dans `src/components/rota-le/` et `public/` si nécessaire.
2. Adapter les imports éventuels (ex: `framer-motion`, `tailwind`, images/fonts). Ajouter les dépendances via `pnpm add ...`.
3. Vérifier que la page `/demo` importe le composant réel et expose bien les props de démonstration.

Note: à ce stade, le repo contient un placeholder « Rota-le » animé pour valider la route `/demo`. Dès réception de l’archive, il sera remplacé 1:1 par le composant réel.

## Vercel (équipe: poius-projects-be9e984c)
- Le fichier `vercel.json` force l’usage de pnpm pour l’installation et le build.
- Associer le repo GitHub à Vercel dans l’équipe `poius-projects-be9e984c` (Git Integration) puis déclencher un déploiement.
- Node >= 18 est déclaré via `engines` dans `package.json`.

Si vous préférez un déploiement par token, fournissez un `VERCEL_TOKEN` et je pourrai automatiser un premier déploiement. Sinon, via l’UI Vercel: Import Repo → sélectionner `SamalehZen/PortableDEMO` → Framework détecté: Next.js → Build/Install: pnpm → Deploy.

## Licence
MIT
