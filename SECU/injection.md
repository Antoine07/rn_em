# SECU

## SQL injection

Voir le dossier SQL avec l'exemple détaillé

## Injection XSS

### 01 Exercice 

Proposez une chaîne de caractères pour la page page_xss afin de modifier le title pour insérer un script JS.

- Correction :

Il faut écrire dans les doubles cotes de la balise img dans le title qui se présente comme suit :

```html
<!-- On image que l'on peut dynamiquement renseigner le title à partir d'une interface utilisateur. -->
  <img src="./chap.png" title="" />
``` 

Le hack suivant dans le doubles cotes 

```js
Une image" /><script>alert('HACK');</script><p class="
```

### 02 Exercice

Récupérez le fichier page_xss_cookie.php sur le serveur. Volez le cookie de session de PHP en chargeant la page, enregistrez ce cookie de session dans un fichier. Puis utilisez ce cookie pour vous connectez à la page sécurisée admin.php

Indication : créez un fichier attaque.php qui vous servira de script malvaillant pour récupérer le hash du cookie.