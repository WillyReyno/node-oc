// Appel à la bibliothèque http qui permet de créer un seveur
var http = require('http');

// Appel à la bibliothèque url qui permet de connaître l'url demandée par l'utilisateur
var url = require('url');

var querystring = require('querystring');

/* On lance un serveur web
 req (request) contient toutes les informations demandées par l'utilisateur
 res (response) contiendra globalement le html retourné
 */
var server = http.createServer(function(req, res) {

// Récupère tous les paramètres
    var params = querystring.parse(url.parse(req.url).query);

// récupère l'url /machin
    var page = url.parse(req.url).pathname;
    console.log(page);

// La réponse 200 indique tout est OK au serveur
    res.writeHead(200, {"Content-Type": "text/html"});
    if('prenom' in params && 'nom' in params) {
        res.write('<p>Hello ' + params['prenom'] + ' ' + params['nom'] + '</p>');
    } else {
        res.write('<p>Vous avez bien un nom et un prénom, non ?</p>');
    }

// On termine la réponse en envoyant un message brut
    res.end();
});

// On écoute le serveur sur le port 8080, en production il est recommandé d'utiliser le port 80
server.listen(8080); 