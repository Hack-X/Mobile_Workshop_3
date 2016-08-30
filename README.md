Mobile Workshop #1
=======


Objectifs de l'atelier :

* Lancer une première application mobile avec Ionic
* Modifier cette application pour que les vues correspondantes à nos mockups de l'application "Show Tonight".


Pré-requis :

* Avoir installé l'environnement de travail décrit dans le [workshop Back #1](https://github.com/Workshop-Polytechnique/Back_Workshop_1) et en particulier `node`, `cordova` et `ionic`, ainsi que la création d'un compte Github.


## Création d'une application mobile avec Ionic et sauvegarde sous Github

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

<img src="tutorial_resources/ionic_serve_1.png" alt="Chrome with Ionic" style="width:600px">

## Création du projet sur Git & Github

* Sur Github, on va créer un nouveau projet public avec le nom de son choix, `showTonightApp` ici, sans aucun fichier (pas de Readme). Vous arriverez alors sur une page qui ressemble à ça :

<img src="tutorial_resources/github.png" alt="Github" style="width:600px">

* On va maintenant suivre les instructions de Github pour "create a new repository on the command line" et dans le dossier `showTonightApp` sur son terminal, on va exécuter :


        $ git init
        $ git add -A
        $ git commit -m "first commit"
        $ git remote add origin https://github.com/Workshop-Polytechnique/showTonightApp.git
        $ git push -u origin master
        
* En rafraichissant la page, on va maintenant avoir accès à son projet sur Github !
* Optionel : on peut ajouter à ce moment là un fichier `README.md` afin de décrire son projet.

## Personnalisation de l'application ShowTonight

On va maintenant s'attaquer à notre application en la faisant correspondre à nos mockups, sans la brancher sur l'API pour l'instant. 
Notre objectif sera :
* d'avoir un premier onglet présentant l'application
* d'avoir une liste des spectacles disponibles sur le second onglet
* de pouvoir cliquer sur un spectacle pour voir le détail

Pour commencer, nous allons ouvrir le dossier de notre application avec Sublime Text et lancer l'application avec la commande `ionic serve`.

### Découverte de la structure et suppression du 3ème onglet.

L'essentiel du code de l'application est situé dans le dossier `www`. On y trouvera :

* `www/css/` : le dossier contenant les fichiers de style.
* `www/img/` : le dossier contenant les images nécessaires en local (qui ne seront pas chargées depuis internet)
* `www/js/` : le dossier contenant l'essentiel de la logique, dans les fichiers `app.js` (qui comprend notamment le système de routes), `controllers.js` (qui contient la logique propre à chaque page) et (`services.js` qui contient la logique de récupération des données, en local pour le moment)
* `www/lib/` : le dossier contenant les librairies externes nécessaires à faire fonctionner notre application.
* `www/templates/` : le dossier contenant les templates des pages ainsi que du système d'onglets dans le fichier `tabs.html`.
* `www/index.html` : c'est le fichier central chargé au lancement de l'application.


Nous allons effectuer un certain nombre de modifications dans ces fichiers. Nous garderons le nom de la Home `Dashboard` inchangé, mais nous allons modifier les noms des fichiers et des routes `chats` en `shows` et `chat-detail` en `show-detail`.

Voilà ce qu'il faut modifier pour avoir les bonnes routes et les bons fichiers (n'hésiter pas à aller voir les modifications précises dans les fichiers de ce projets.

* Dans le fichier `www/js/app.js`, on va modifier les routes (c'est à dire les URLs) : on va commencer par retirer complètement la partie `tab.account` qui ne nous intéresse pas ici. On va ensuite modifier les routes `tab.chats` et `tab.shows` avec ces éléments :
    * tab.chats : `chats` devient partout `shows`, on va donc avoir un `tab.shows`, dont l'url est `/shows` et la vue associée est `templates/tab-shows.html`. Dans un temps 1, on ne va pas modifier le controller associé.
    * tab.chat-detail : `tab.chat-detail` va devenir `tab.show-detail`, l'url va devenir `/shows/:showId` et la vue associée est `templates/show-detail.html`. Dans un temps 1, on ne va pas modifier le controller associé.

```

          .state('tab.dash', {
            url: '/dash',
            views: {
              'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
              }
            }
          })
          .state('tab.shows', {
              url: '/shows',
              views: {
                'tab-shows': {
                  templateUrl: 'templates/tab-shows.html',
                  controller: 'ChatsCtrl'
                }
              }
            })
            .state('tab.show-detail', {
              url: '/shows/:showId',
              views: {
                'tab-shows': {
                  templateUrl: 'templates/show-detail.html',
                  controller: 'ChatDetailCtrl'
                }
              }
          });
``` 

* On va ensuite renommer les 2 fichiers de templates qu'on vient de décrire dans le dossier `templates` et on va supprimer le fichier `tab-account.html`.
* Dans le fichier `tab-dash.html`, on va modifier le contenu pour lui mettre un titre adapté et un contenu correspondant à notre application :


        <ion-view view-title="Accueil">
          <ion-content class="padding">
            <h2>Bienvenue dans ShowTonight</h2>
            <p>
            Vous trouverez dans cette application des idées de spectacles fantastiques à aller voir.
            </p>
          </ion-content>
        </ion-view>
      
      
* Dans le fichier `tab-shows.html`, on va simplement modifier le titre pour le moment en précisant `view-title="Spectacles"`
* Et enfin, dans le fichier `tabs.html` on va enlever la référence au 3ème onglet en la supprimant simplement, et on va modifier à la fois les icones (`icon-off` et `icon-on`) des 2 onglets, leur `title` ainsi que la route `href` pour les faire correspondre aux urls qu'on a mises dans le fichier `app.js` :


      <ion-tabs class="tabs-icon-top tabs-color-active-positive">
      
        <!-- Home Tab -->
        <ion-tab title="Home" icon-off="ion-ios-home-outline" icon-on="ion-ios-home" href="#/tab/dash">
          <ion-nav-view name="tab-dash"></ion-nav-view>
        </ion-tab>
      
        <!-- Shows Tab -->
        <ion-tab title="Spectacles" icon-off="ion-ios-calendar-outline" icon-on="ion-ios-calendar" href="#/tab/shows">
          <ion-nav-view name="tab-shows"></ion-nav-view>
        </ion-tab>
      
      </ion-tabs>


* Vous trouverez un point complet sur les modifications dans ce [commit]( https://github.com/Workshop-Polytechnique/Mobile_Workshop_1/commit/685a854cb16d919d33529a8f5c9a5ca3e5f78691)

Voilà ce que donne votre application maintenant :
<img src="tutorial_resources/685a854cb16d919d33529a8f5c9a5ca3e5f78691.png" alt="685a854cb16d919d33529a8f5c9a5ca3e5f78691" style="width:600px">



https://github.com/Workshop-Polytechnique/Mobile_Workshop_1/commit/825032e4700b6dac87a1cbd017f98a0e15dfc943

https://github.com/Workshop-Polytechnique/Mobile_Workshop_1/commit/3a1ba2aee617e217ad8b60218618ec5c924c0e76


