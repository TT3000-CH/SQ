SWIZQUIZ - TABLET EDITION 2.0.0
===============================

Auf Basis der bereitgestellten Datei "SwizQuiz (1).html".
Die Anwendung behandelt die 26 Schweizer Kantone, nicht Länder weltweit.

GITHUB-UPLOAD
-------------
ZIP entpacken. Diese sechs Dateien gemeinsam in dasselbe Verzeichnis laden:
  index.html
  manifest.webmanifest
  sw.js
  icon.svg
  icon-192.png
  icon-512.png

Vorhandene index.html ersetzen. Die ZIP selbst nicht statt der Dateien
hochladen. README.txt, QUELLEN.txt und PRUEFPROTOKOLL.txt sind optional.
GitHub Pages kann die Dateien ohne Build-Schritt oder Serverprogramm ausliefern.
Alle Programmdateien liegen im ZIP direkt auf der obersten Ebene.

Auf dem Tablet die GitHub-Pages-Adresse in Chrome aufrufen, quer drehen
und oben auf "Vollbild" tippen. Erneutes Antippen verlässt Vollbild.
Falls der Browser "App installieren" bzw. "Zum Startbildschirm hinzufügen"
anbietet, kann die Anwendung auch als installierte Web-App gestartet werden.
Die App-Installation wurde in dieser Umgebung nicht auf echter Hardware geprüft.

ERSTES LADEN DER ECHTEN FLAGGEN UND KARTEN
----------------------------------------
Die Original-HTML enthält keine eingebetteten echten Flaggenbilder oder
Kantonsgeometrien. Sie bezog diese live aus Wikimedia Commons sowie swiss-maps.
Die Tablet-Version behält diese Grafikquellen bei und speichert erfolgreiche
Downloads im Gerätespeicher (IndexedDB; bei PWA-Nutzung zusätzlich im Cache).

Für das erste vollständige Laden ist Internet erforderlich. Der Startbildschirm
ist sofort bedienbar. Textbasierte Kategorien wie Hauptstädte oder Einwohner
funktionieren auch, während die Bilder noch laden. Grafikabhängige Modi zeigen
einen ausdrücklichen Ladebildschirm und eine Wiederholungsfunktion. Keine
falschen Ersatzflaggen oder erfundenen Kartengrenzen werden eingesetzt.

Bei teilweise geladenen Flaggen ist ein Start mit der geladenen Teilmenge
möglich, sobald genug Bilder vorhanden sind. Diese Option muss bewusst
gewählt werden. Fehlende Flaggen werden dann nicht abgefragt.

Oben bzw. auf der Startseite ist der Ladezustand sichtbar. In Einstellungen:
  "Flaggen & Karten" -> "Neu laden"

Wenn 26 Flaggen und die Karte lokal vorliegen:
  Einstellungen -> "Offlinekopie speichern"

Dies erstellt eine weitere HTML mit eingebetteten echten Grafiken.
Die exportierte Offlinekopie enthält keine persönlichen Spielstände.
Bitte diese separat exportieren und bei Bedarf in der Offlinekopie importieren.

EINSCHRÄNKUNG DER PRÜFUNG
------------------------
Externe Grafikdownloads waren in der Entwicklungsumgebung gesperrt.
Deshalb konnten die Live-Erreichbarkeit aller 26 Wikimedia-Bilder und der
Kartendienste hier nicht abschliessend verifiziert werden. Browserprüfungen
verwendeten ausdrücklich markierte TEST-Grafiken und synthetische Kartendaten;
diese sind NICHT Bestandteil dieses Pakets. Details im Prüfprotokoll.

WAS ERHALTEN BLEIBT
------------------
- Name SwizQuiz und alle 26 Kantonsdatensätze der Vorlage.
- Namen, Hauptstädte, Sprachen, Flächen, Einwohnerzahlen, Berge, Flüsse,
  Nachbarkantone und Nachbarländer sind unverändert.
- Quiz mit 9 Kategorien und gemischten Fragen.
- Flaggen-Blitz: bis zu 30 Fragen in 60 Sekunden.
- Hauptstadt-Duell, Umrisse, Auf Karte finden und Flaggen-Memory.
- Freier Lernmodus und interaktive Schweizkarte.
- Bis zu drei benannte Spieler mit getrenntem Fortschritt.
- Lernfilter und Liste schwieriger Kantone.
- Original-EP-System: maximal 3 EP pro Kanton/Kategorie, insgesamt 858 EP.

Die Zahlen wurden nicht als aktuelle amtliche Statistik nachrecherchiert.
Ein neuer weltweiter Länderbestand oder zusätzliche Schwierigkeitsregeln
wurden nicht unbemerkt eingeführt.

SPIELSTAND UND KOMPATIBILITÄT
----------------------------
Der bisherige localStorage-Schlüssel "swizquizV1" und die Exportstruktur bleiben
kompatibel. Bei gleicher Website-Adresse/gleichem Browserprofil sollte ein
gültiger vorhandener Stand erkannt werden.

Bei Wechsel auf eine andere Website oder von GitHub zu einer lokalen Datei:
1. In der alten Anwendung den Spielstand exportieren.
2. In der neuen Anwendung: Einstellungen -> Import.
3. Die Ersetzung der Spieler ausdrücklich bestätigen.

Ein Zurücksetzen betrifft nur den aktiven Spieler. Die Anwendung löscht nicht
vorsorglich die gespeicherten Daten anderer Apps. Keine Website-Daten löschen,
ohne den Fortschritt vorher zu exportieren.

BEDIENUNG UND DARSTELLUNG
------------------------
- Querformat, grosse Touch-Antworten, acht Startkacheln und kompakter Header.
- Kein Seiten-Scroll in den geprüften Tablet-Fenstergrössen.
- Flaggen werden mit erhaltenem Seitenverhältnis dargestellt.
- Nachbarn und Sprachen: mehrere Antworten wählen und bestätigen.
- Optional automatisch zur nächsten Frage, in Einstellungen abschaltbar.
- Karten: antippen, mit + / - zoomen oder mit zwei Fingern zoomen;
  Ziehen verschiebt die Ansicht und wird nicht als Antwort gewertet.
- Lernmodus: vor/zurück und Kantonsauswahl.
- Helle, dunkle und automatische Darstellung.

DATEIEN / TECHNIK
----------------
Die Spiellogik und das Layout stehen komplett in index.html.
Keine Build-Tools, kein Backend und keine externen Schriftdateien notwendig.
Der Service Worker ist nur für die installierte/offline Web-App erforderlich.
Nach einem Update die Seite einmal online neu laden; die eigene Cache-Version
ist getrennt von anderen Anwendungen.
