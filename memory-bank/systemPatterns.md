# PALABA - Patterns Système

## Architecture
- Next.js App Router avec structure de répertoire src
- Rendering côté client pour une expérience type application mobile
- Supabase comme backend (base de données, authentification, stockage)

## Composants clés
- **Layout** : Layout racine avec barre de navigation mobile-first en bas
- **Page** : Page d'accueil avec feed vertical vidéo
- **Navigation** : Barre de navigation en bas avec 5 items (Accueil, Découvrir, Créer, Messages, Profil)

## Patterns de conception
- Design responsive mobile-first
- Pattern de navigation en bas (style application mobile)
- Pattern de feed vertical avec snap-y snap-mandatory
- Affichage de contenu basé sur des cartes (VideoCard)
- Gradients de couleur pour les placeholders vidéo

## Système de couleurs
- Primary : Violet (#4A0E5C) - navigation, headers, actions principales
- Accent : Orange (#F59E0B) - CTAs, highlights, états actifs
- Secondaire : Or (#D4AF37) - accents, décorations, éléments premium
