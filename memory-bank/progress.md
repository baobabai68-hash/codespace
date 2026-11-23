# PALABA - Progression

## Statut actuel
- La page d'accueil est terminée.

## Terminée (Phase 1 - Fondations)
- [x] Dossier `memory-bank/` créé avec les fichiers de protocole de mémoire externe
- [x] Projet Next.js initialisé (TypeScript, Tailwind, ESLint, App Router, dossier `src/`)
- [x] `layout.tsx` créé avec barre de navigation mobile-first en bas
- [x] `page.tsx` créée avec flux vidéo style TikTok (en-tête, défilement vertical snap-y, placeholders de gradient, boutons d'action Like/Comment/Share, infos créateur en bas à gauche, navigation fixe en bas)
- [x] Erreur d'hydratation corrigée : app par défaut en français uniquement (`lang="fr"`), pas de détection de langue côté client

## En cours
- Aucune

## Reste à faire (Phase 1)
- Aucune

## Écran ② : Inscription et Connexion créés
- [x] Page d'inscription `/register` : formulaire (Nom complet, Téléphone ou Email, Mot de passe), bouton « S'inscrire » en violet, boutons Google/Facebook/X en dessous, lien vers connexion
- [x] Page de connexion `/login` : formulaire (Email, Mot de passe), boutons Google/Facebook/X en dessous, lien vers inscription
- [x] Build validé (`/login` et `/register` générés statiquement)
- [x] Erreur d'hydratation corrigée (français par défaut)

## Écran ⑤ : Page de Publication (Créer) créée
- [x] Page `/create` créée avec design violet/or (bg purple-brand, cards black/80)
- [x] Accessible depuis le bouton `+ Publier` de la barre de navigation du bas
- [x] 3 onglets en haut : Vidéo, Texte, Audio (boutons, état actif en violet)
- [x] Zone de contenu selon l'onglet : uploader vidéo/audio, ou écrire du texte
- [x] Champs : Description, Ajouter un hashtag, Qui peut voir ? (Public, Abonnés, Privé)
- [x] Bouton "Publier" en violet tout en bas (hover orange)
- [x] Build validé (`/create` généré statiquement)

## Écran ③ : Fil d'actualité (TikTok-style) créé
- [x] Page `/feed` créée avec flux vertical snap-y, scroll mobile-first
- [x] Cartes de publications avec mock data (4 posts variés)
- [x] Chaque carte : avatar + nom créateur, média (placeholder gradient), boutons J'aime, Commenter, Partager
- [x] Bouton "J'aime" = envoi de cadeau payant : modale "Envoyer un like coûte 10 FCFA"
- [x] Barre de navigation fixe en bas : Accueil, Découvrir, + Publier, Messages, Profil
- [x] Navigation entre Accueil et Fil d'actualité via header link "Accueil" sur `/feed` et BottomNav
- [x] Build validé (`/feed` généré statiquement)

## Écran ② : Boutons CTA sur page d'accueil
- [x] Bouton "Se connecter" → `/login`
- [x] Bouton "Commencer" → `/register`
- [x] Bouton "Fil d'actualité" → `/feed`
- [x] Build validé

## Écran ⑥ : Profil Personnel créé
- [x] Page `/profile` créée, moderne, élégante et mobile-first (design violet/or de PALABA)
- [x] Accessible depuis l'icône 'Profil' (👤) dans la barre de navigation du bas (`layout.tsx`)
- [x] En haut : photo de profil (avatar emoji), nom d'utilisateur (@koffi_media), icône de vérification (blue check)
- [x] Sous l'avatar : courte biographie
- [x] Bouton "Modifier le profil" en violet (hover orange)
- [x] Statistiques alignées : Publications, Abonnés, Abonnements
- [x] Bas : grille de publications (3 colonnes, vidéos/images avec badges type vidéo)
- [x] Bouton retour vers Accueil en haut à gauche
- [x] Build validé (`/profile` généré statiquement)

## Reste à faire (Phase 1)
- Aucune

## Reste à faire (Phases futures)
- [ ] Mise en place du client Supabase et du schéma de base de données
- [ ] Implémentation de l'authentification
- [ ] Implémentation de l'upload vidéo
- [ ] Création des pages Découvrir, Créer, Messages, Profil
- [ ] Connexion du flux aux données Supabase réelles
- [ ] Implémentation du système de monétisation (Gifting, Marketplace)

## Décisions Stratégiques Récentes
- [x] Ajout des règles stratégiques à `projectbrief.md` et `techContext.md`
  - Paiements sortants : Fapshi API = collecte uniquement ; reversements via agrégateurs (Neero, Paysika, CinetPay) manuels par admin
  - Programme Créateurs : critère 720h de visionnage cumulées sur 30 jours ; intégration manuelle via admin
  - Logique des Likes : un like = un achat de 10 FCFA via bouton unique "J'aime" (modale de confirmation)
- [x] Fix scroll global sur `/create` et toutes les pages : `main` passe de `overflow-hidden` à `overflow-y-auto overscroll-y-contain pb-20` (`layout.tsx`)
- [x] Barre de navigation en bas reste fixe (`fixed bottom-0`) et ne masque plus le contenu grâce au `pb-20` + `safe-area-bottom`
- [x] Build validé après correction (`/create` généré statiquement)

## Blocants
- [x] Build validé après mise à jour des fichiers mémoire
- [ ] Connexion du flux aux données Supabase réelles
- [ ] Implémentation du système de monétisation (Gifting, Marketplace)

## Problèmes connus
- Aucun

## Blocants
- Aucun