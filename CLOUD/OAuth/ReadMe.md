# OAuth 2.0 (Eigene Notizen)

Quelle: Haiges, Sven . Oauth 2.0 - Client & Server (German Edition) . entwickler.press. Kindle Edition.

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Management Summary](#management-summary)
- [Rollen](#rollen)
  - [Der Resource Owner](#der-resource-owner)
  - [Der Resource Server](#der-resource-server)
  - [Der Client](#der-client)
  - [Der Authorization Server](#der-authorization-server)

<!-- /code_chunk_output -->

## Management Summary

OAuth 2.0 ist ein Protokoll zur Autorisierung von API-Zugriffen. (Used by Facebook, Google, Foursquare oder Pinterest,..)

## Rollen

> Der Authorization Server und der Resource Server sind oftmals das gleiche System.

### Der Resource Owner

ist oftmals der Endanwender, beispielsweise ein Benutzer, der auf seine in der Cloud gespeicherten Bilder zugreifen möchte.

### Der Resource Server

ist ein Server, auf dem die Daten/Dienste des Resource Owners vorliegen. Diese Ressourcen sind dadurch geschützt, dass der Resource Server ein so genanntes Access Token verlangt. Nur wenn das Access Token validiert werden konnte, genehmigt der Resource Server den Zugriff.

### Der Client

ist eine Applikation, die für den Resource Owner auf die Daten/Dienste zugreift. Um auf diese zugreifen zu können, muss er im Besitz eines Access Tokens sein.

### Der Authorization Server

vergibt die Access Tokens, die den Zugriff auf den Resource Server ermöglichen, nach erfolgreicher Authentifizierung des Resource Owners und dessen Autorisierung für den entsprechenden Client.
