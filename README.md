# Mobile_Workshop_1


Objectifs de l'atelier :

* Lancer une première application mobile avec Ionic
* Modifier cette application pour que les vues correspondantes à nos mockups de l'application "Show Tonight".


Pré-requis :

* Avoir installé l'environnement de travail décrit dans le [workshop Back #1](https://github.com/Workshop-Polytechnique/Back_Workshop_1) et en particulier `node`, `cordova` et `ionic`.


# Création d'une application mobile avec Ionic et sauvegarde sous Github

### Création de l'application

* On va commencer par générer avec Ionic une application basée sur le template `tabs` avec la commande `ionic start showTonightApp tabs` : cela va créer un dossier `showTonightApp` et y installer une application avec le template demandé.

* On va ensuite aller dans le dossier et lister les fichiers générés :


        $ cd showTonightApp
        $ ls
         bower.json        gulpfile.js       ionic.config.json package.json      plugins           scss
         config.xml        hooks             node_modules      platforms         resources         www


* On va maintenant lancer l'application avec la commande `ionic serve` : un petit serveur local va se lancer dans notre terminal, et un navigateur va se lancer sur l'URL `http://localhost:8100` qui correspond à votre application.
* A ce stade, on vous recommande **très fortement** d'utiliser Chrome comme navigateur si ce n'est pas votre navigateur par défaut.
* En faisant un clic-droit puis `Inspecter l'élément` sur la page, vous allez ouvrir l'inspecteur Chrome. En cliquant sur la petit icone de mobile / tablette, vous pourrez ainsi simuler un téléphone mobile de votre choix. À ce stade, l'application doit ressembler à ça :

<img src="tutorial_resources.ionic_serve_1.png" alt="Chrome with Ionic" style="width:600px">
