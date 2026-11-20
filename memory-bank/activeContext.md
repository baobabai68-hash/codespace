# PALABA - Contexte Actuel

## Focus actuel
Phase 1 : Fondations du projet - Terminé

## Changements récents
- Initialisation du dossier memory-bank/ avec protocole de mémoire externe
- Initialisation du projet Next.js (TypeScript, Tailwind, ESLint, App Router, dossier src)
- Création du layout.tsx avec barre de navigation mobile-first en bas
- Création de la page d'accueil avec feed TikTok-style
- Correction de l'erreur d'hydratation (lang="fr" côté serveur et client)
- Construction du feed d'accueil : en-tête gold/orange, scroll snap-y, video cards en gradient, boutons d'action Like/Comment/Share, infos créateur en bas à gauche, navigation fixe en bas

## Étapes suivantes
- Mise en place du client Supabase et schéma de base de données
- Implémentation de l'authentification (connexion/inscription)
- Implémentation de la monétisation (Gifting, Marketplace)
- Création des pages Découvrir, Créer, Messages, Profil
- Connexion du feed aux données Supabase réelles

## Décisions actives
- Utilisation de Next.js App Router avec dossier src
- Utilisation de Tailwind CSS pour le styling
- Utilisation de Supabase pour la base de données et l'authentification
- Couleur primaire : violet foncé (#4A0E5C) pour la navigation
- Langue par défaut du système : français (lang="fr") pour éviter les erreurs d'hydratation
- Interface bilingue FR/EN prévue pour le futur
