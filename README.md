Checkpoint backend vert
Crée un nouveau projet NodeJS Typescript.

Pour un meilleur confort de dev, utilise ts-node-dev.

Le but de cet exercice est de créer une API GraphQL avec Apollo Server et TypeGraphql pour enregistrer et lire des pays avec leur code, leur nom et leur emoji.

Utilise une base de données SQLite et TypeORM en ORM.

Voici les packages dont tu auras besoin et leur version :

"dependencies": {
    "@apollo/server": "^4.10.2",
    "reflect-metadata": "^0.2.2",
    "sqlite3": "^5.1.7",
    "ts-node-dev": "^2.0.0",
    "type-graphql": "^2.0.0-beta.6",
    "typeorm": "^0.3.20"
  }

Crée une mutation qui prend en paramètres :

un code (FR, BE, AN, ...),
un nom (France, Belgique, Andorre, ...),
un emoji ((🇫🇷, 🇧🇪, 🇦🇩, ...),
et qui enregistre cette entrée en BDD.
Crée ensuite 2 queries :

Une qui renvoie la liste de tous les pays (avec pour attributs, pour chaque pays, le code, le nom, l'emoji)
Une autre qui prend en paramètre le code du pays et qui renvoie le pays en question.
Enfin ajoute un code continent à la mutation d'ajout de pays et une query qui permet de récupérer tous les pays d'un continent.

Attention la dernière question attend une réponse obligatoire ! (et les autres vous permettent d'indiquer des commentaires si besoin, et nous permettent de correctement noter votre travail)












Indique en réponse un exemple de mutation GraphQL 3 exemples de queries que je pourrai utiliser pour tester (à copier/coller dans Apollo Studio) 