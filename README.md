# EtatNotes Pro v1

Application web de gestion des notes scolaires (feuilles de résultats, saisie des notes, élèves, répartitions de matières, listes et statistiques en PDF, sauvegarde et restauration).

Concepteur et auteur : **ZONTE Omer**
Infoline : 0757707557 – 0151677474
Email : zonte.om@gmail.com

## Contenu du dépôt

- `index.html` : l'application complète (un seul fichier, sans installation)
- `.nojekyll` : désactive le traitement Jekyll de GitHub Pages
- `.gitignore` : fichiers à ignorer par Git

## Utilisation locale

Ouvrir `index.html` dans un navigateur récent (Chrome, Edge, Firefox). Une connexion Internet est nécessaire au premier chargement pour les bibliothèques XLSX et html2pdf (CDN cdnjs).

## Mise en ligne sur GitHub Pages

1. Créer un dépôt vide sur GitHub, par exemple `etatnotes-pro`.
2. Dans le dossier de ce projet :

```bash
git init
git add .
git commit -m "EtatNotes Pro v1 - version initiale"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/etatnotes-pro.git
git push -u origin main
```

3. Sur GitHub : **Settings > Pages**, puis **Build and deployment > Source : Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une minute environ, le site est disponible à l'adresse `https://VOTRE-COMPTE.github.io/etatnotes-pro/`.

## Mise à jour

Remplacer `index.html` par la nouvelle version, puis :

```bash
git add index.html
git commit -m "Mise à jour de l'application"
git push
```

## Remarque

Les données sont enregistrées dans le navigateur de chaque utilisateur. Utiliser régulièrement la fonction **Sauvegarder** (barre du bas, administrateur) pour exporter une copie, et **Restaurer** pour la recharger.
