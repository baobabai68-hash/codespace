# PALABA - Contexte Technique

## Technologies utilisées
- **Framework** : Next.js (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Base de données** : Supabase
- **Authentification** : Supabase Auth
- **Linting** : ESLint

## Configuration de développement
- Initialisation avec : `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "/*"`
- Racine du projet : /workspaces/codespace
- Répertoire source : src/

## Structure du projet
```
src/
  app/
    layout.tsx      - Racine avec navigation mobile en bas
    page.tsx        - Page d'accueil avec flux vidéo
```

## Dépendances
- next
- react
- react-dom
- typescript
- tailwindcss
- @supabase/supabase-js (à ajouter)

## Services de paiement externe
- **Fapshi API** : Utilisé uniquement pour la collecte (achats de likes, Marketplace).
- Les reversements (versements aux créateurs, vendeurs, affiliés) sont gérés via des agrégateurs externes (Fapshi, Neero, Paysika, CinetPay) — l'app n'effectue pas les virements directs.
- L'application expose des endpoints/métriques pour que l'administration puisse vérifier les montants dus et enregistrer les paiements effectués.

## Dépendances (à venir)
- next
- react
- react-dom
- typescript
- tailwindcss
- @supabase/supabase-js (à ajouter)
- fapshi-client (optionnel, pour la collecte des likes)
- midtrans/hermes (optionnel, pour la Marketplace)

## Règles Techniques (Décisions d'implémentation)

### Logique like = achat 10 FCFA
- Le composant `ActionButton` avec `HeartIcon` dans `/feed/page.tsx` et `/page.tsx` déclenche une modale confirmant le coût (10 FCFA).
- L'événement `onLike` est capturé côté client ; le backend Supabase enregistre le like + statut payé.
- Plus de bouton "Gifting" séparé n'existe pas dans le code source.

### Programme Créateurs (critère admin)
- L'interface d'administration (à construire) devra fournir un champ de vérification "720h de visionnage last 30 days".
- Une fois vérifié, l'admin coche une case "Intégré au programme" qui met à jour le statut dans Supabase.

### Paiements sortants (administration)
- L'admin dispose d'une page `/admin/payments` listant les requêtes de retrait.
- Pour chaque requête : montant, utilisateur, agrégateur choisi (Fapshi/Neero/Paysika/CinetPay).
- L'admin coche "Payé" → le statut du paiement est mis à jour en BDD, et le système externe (Fapshi etc.) est notifié via webhook ou API manuelle.
