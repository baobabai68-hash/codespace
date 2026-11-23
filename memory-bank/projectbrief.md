# PALABA - Project Brief

## Vision
PALABA est un réseau social mobile-first, bilingue français/anglais, conçu pour l'Afrique. Il permet le partage de contenu vidéo, texte et audio dans un format inspiré de TikTok (flux vertical). La plateforme intègre un système de monétisation double : **Gifting** (cadeaux virtuels envoyés en direct aux créateurs) et **Marketplace** (achat/vente de produits et services entre utilisateurs).

## Objectifs Produit
- Réseau social optimisé pour les marchés africains (mobile-first, faible bande passante)
- Flux vertical vidéo type TikTok avec navigation par swipe
- Prise en charge des posts vidéo, texte et audio
- Interface bilingue FR/EN par défaut
- Système de monétisation : Gifting + Marketplace
- Identité visuelle : violet (#4A0E5C), orange (#F59E0B), or (#D4AF37)
- Stack technique : Next.js, Tailwind CSS, Supabase

## Utilisateurs Cibles
- Utilisateurs mobiles en Afrique francophone et anglophone
- Créateurs de contenu (vidéo, audio, texte)
- Consommateurs de contenu court et engageant
- Vendeurs et acheteurs sur la Marketplace intégrée

## Phases du Projet
- Phase 1 : Fondations du projet (Next.js, Tailwind, layout, page d'accueil) ✅
- Phase 2 : Intégration Supabase (base de données, authentification, stockage)
- Phase 3 : Monétisation (Gifting, Marketplace)
- Phase 4 : Pages secondaires (Découvrir, Créer, Messages, Profil)

## Règles Stratégiques (Décisions Actives)

### Paiements sortants (Reversements)
- **Fapshi API** sert uniquement à la **collecte** (achats de likes et Marketplace).
- Les **reversments aux créateurs, vendeurs et affiliés** sont gérés **manuellement par l'administration** via des agrégateurs (Fapshi, Neero, Paysika, CinetPay).
- L'application calcule et affiche les montants dus.
- L'admin coche les paiements effectués (interface d'administration interne).

### Programme Créateurs
- **Critère d'éligibilité** : 720 heures de visionnage cumulées sur les 30 derniers jours (plus accessible que YouTube).
- L'administration doit pouvoir **vérifier un compte** et l'**intégrer manuellement** au programme.

### Logique des Likes
- Un **like est obligatoirement un achat de 10 FCFA** via le bouton unique **'J'aime'** (icône cœur).
- Le bouton déclenche une modale confirmant : "Envoyer un like coûte 10 FCFA".
- Plus de bouton "Gifting" séparé — J'aime = envoi d'un cadeau payant.
