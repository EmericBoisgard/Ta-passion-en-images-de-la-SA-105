# SAÉ 1.05 - Produire un site web : [E-SPACE - Voyage dans le Système Solaire]

## Informations générales

- **Auteur :** [Émeric Boisgard]
- **URL du site hébergé :** http://boisgard.projetsmmichamps.fr/sae105/
- **Lien vers le tableur Opquast (Notion) :** https://www.notion.so/Opquast-SA-1-05-Ta-passion-en-images-2e2679d43d37819db31ddeffa74fdb8d?source=copy_link

---

## Structure du projet

Le projet respecte une arborescence claire pour une meilleure maintenance :

- `index.html` : Page principale du site
- `styles.css` : Feuille de style CSS
- `script.js` : Logique JavaScript (navigation, zoom, formulaire)
- `data.js` : Fichier de données (tableaux images et textes)
- `Images/` : Dossier contenant toutes les images des planètes
- `.htaccess` : Configuration serveur

---

## Fonctionnalités techniques

1. **Chargement automatisé** : Les images et textes sont générés via JavaScript à partir d'un fichier de données (data.js), permettant une mise à jour facile.
2. **Design / Pattern** : Alternance automatique gauche/droite gérée par CSS Grid.
3. **Interactivité** : Système de zoom (popup) avec transition CSS. Validation de formulaire intégrée.

---

## Procédure d'installation sur serveur local XAMPP

### 1. **Configuration du serveur :**

- Télécharger et installer la distribution **XAMPP**.
- Lancer le **XAMPP Control Panel** et démarrer le module **Apache**. Une fois le voyant passé au vert, mon ordinateur est devenu un serveur web local capable d'interpréter mes fichiers.

### 2. **Déploiement des fichiers :**

- Se rendre dans le répertoire racine de XAMPP : `C:\xampp\htdocs`.
- Créer un dossier nommé `sae105` pour organiser mon projet.
- Copier l'intégralité de mes dossiers (`index.html`, `styles.css`, `script.js`, `data.js`, `Images/`) dans ce répertoire.

### 3. **Tests et Validation :**

- Accéder à mon site via l'URL : `http://localhost/sae105/`
  L’URL localhost n’est accessible que lorsque le serveur Apache de XAMPP est démarré.
- Cette étape m'a permis de vérifier que mon script **JavaScript** chargeait correctement mes données et que la fonctionnalité de **zoom** demandait fonctionnait parfaitement avant l'hébergement final.

---

## Preuves de fonctionnement

**Capture du site en local :** Images/site_local.jpg

**Test du site sur le serveur local :**

- URL : `http://localhost/sae105/`
- Toutes les fonctionnalités (navigation, zoom, formulaire) sont opérationnelles.

**Capture du panneau XAMPP :** Images/apache_lancé.jpg
