# To-Do Liste

# Projekt-Dokumentation

Jeanneret

## 1 Informieren

### 1.1 Ihr Projekt

In diesem Projekt entwickle ich eine Anwendung, mit der man Aufgaben erstellen, verwalten und löschen kann.

### 1.2 Userstories

| US-№ | Verbindlichkeit | Typ           | Beschreibung                                                                                                                                                |
| ---- | --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional    | Als Benutzer möchte ich eine Startseite haben, damit ich einen Überblick über die Applikation habe.                                                      |
| 2    | Muss            | Funktional    | Als Benutzer möchte ich Aufgaben hinzufügen können, damit ich meine zu erledigenden Aufgaben verfolgen kann. |
| 3    | Muss            | Funktional    | Als Benutzer möchte ich Aufgaben abhaken können, damit ich sehe, welche Aufgaben erledigt sind.                        |
| 4    | Muss            | Funktional    | Als Benutzer möchte ich Aufgaben löschen können, damit ich meine Aufgabenliste aktuell halten kann.                                       |
| 5    | Soll            | Funktional    | Als Benutzer möchte ich die Aufgaben bearbeiten können, damit ich Änderungen vornehmen kann.  |
| 6    | Soll            | Funktional    | Als Benutzer möchte ich Aufgaben priorisieren können, damit ich wichtige Aufgaben zuerst sehe.              |
| 7    | Soll            | Funktional    | Als Benutzer möchte ich Aufgaben in Kategorien einteilen können, damit ich sie besser organisieren kann.                                |
| 8    | Soll            | Funktional    | Als Benutzer möchte ich ein Fälligkeitsdatum für Aufgaben setzen können, damit ich Deadlines nicht verpasse.                                        |
| 9    | Kann            | Funktional    | Als Benutzer möchte ich eine Suchfunktion haben, damit ich bestimmte Aufgaben schnell finden kann.           |
| 10   | Muss            | Qualität      | Als Benutzer möchte ich, dass Fehleingaben abgefangen werden, damit sichergestellt ist, dass meine Aufgaben korrekt erfasst werden.                            |
| 11   | Muss            | Randbedingung | Als Benutzer möchte ich, dass die Applikation benutzerfreundlich ist, damit ich sie intuitiv und effizient nutzen kann.                      |


### 1.3 Diagramme

![Screenshot 2024-06-22 114553](https://github.com/Plasticgun21/To-do-List/assets/110892742/9da61371-4673-4238-ae20-bdcc20f365bf)


## 2 Planen

### 2.1 Arbeitspakete

| AP-№ | Frist      | Zuständig   | Beschreibung                  | Geplante Zeit |
| ---- | ---------- | ----------- | ----------------------------- | ------------- |
| 1.A  | 20.6.24    | Jeanneret   | Startseite erstellen           | 20 min        |
| 2.A  | 20.6.24    | Jeanneret   | Aufgaben hinzufügen            | 30 min        |
| 3.A  | 20.6.24    | Jeanneret   | Aufgaben abhaken               | 20 min        |
| 4.A  | 20.6.24    | Jeanneret   | Aufgaben löschen               | 20 min        | 
| 5.A  | 20.6.24    | Jeanneret   | Aufgaben bearbeiten            | 30 min        |
| 6.A  | 20.6.24    | Jeanneret   | Aufgaben priorisieren          | 30 min        |
| 7.A  | 20.6.24    | Jeanneret   | Kategorien einteilen           | 30 min        |
| 8.A  | 20.6.24    | Jeanneret   | Fälligkeitsdatum setzen        | 30 min        |
| 9.A  | 20.6.24    | Jeanneret   | Suchfunktion implementieren    | 30 min        |
| 10.A | 20.6.24    | Jeanneret   | Fehleingaben abfangen          | 30 min        |
| 11.A   | 20.6.24    | Jeanneret   | Testen                         | 60 min        |
| 12.A    | 20.6.24    | Jeanneret   | Portfolio schreiben        | 120 min       |

Total: 510 min

### 2.2 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | PC ist gestartet | Applikation öffnen | Applikation öffnet sich. |
| 2.1  | Applikation ist gestartet | Aufgabe hinzufügen | Aufgabe erscheint in der Liste. |
| 3.1  | Aufgabe ist in der Liste      | Aufgabe abhaken | Aufgabe wird als erledigt markiert. |
| 4.1  | Aufgabe ist in der Liste   | Aufgabe löschen | Aufgabe wird aus der Liste entfernt. |
| 5.1  | Aufgabe ist in der Liste | Aufgabe bearbeiten | Geänderte Aufgabe wird in der Liste angezeigt. |
| 6.1  | Aufgabe ist in der Liste      | Priorität setzen | Aufgabe wird mit neuer Priorität angezeigt. |
| 7.1  | Aufgabe ist in der Liste | Kategorie zuweisen | Aufgabe wird unter der ausgewählten Kategorie angezeigt. |
| 8.1  | Aufgabe ist in der Liste | Fälligkeitsdatum setzen | Aufgabe wird mit Fälligkeitsdatum angezeigt. |
| 9.1  | Aufgabe ist in der Liste  | Aufgabe suchen | Gesuchte Aufgabe wird in der Liste hervorgehoben. |
| 10.1 | Eingabefeld | Leeres Feld absenden | Fehlermeldung wird angezeigt. |

## 3 Entscheiden

Ich habe beschlossen, gemäss dem Plan vorzugehen und mit dem Projekt zu beginnen.

## 4 Realisieren

| AP-№ | Datum             | Zuständig   | geplante Zeit | tatsächliche Zeit |
| ---- | ----------------- | ----------- | ------------- | ----------------- |
| 1.A  | 20.6.24           | Jeanneret   | 20 min        | 40 min            |
| 2.A  | 20.6.24           | Jeanneret   | 30 min        | 60 min            | 
| 3.A  | 20.6.24           | Jeanneret   | 20 min        | 30 min            |
| 4.A  | 20.6.24           | Jeanneret   | 20 min        | 50 min            |
| 5.A  | 20.6.24           | Jeanneret   | 30 min        | 35 min            |
| 6.A  | 20.6.24           | Jeanneret   | 30 min        | 45 min            |
| 7.A  | 20.6.24           | Jeanneret   | 30 min        | 35 min            |
| 8.A  | 20.6.24           | Jeanneret   | 30 min        | 50 min            |
| 9.A  | 20.6.24           | Jeanneret   | 30 min        | 60 min            |
| 10.A | 20.6.24           | Jeanneret   | 30 min        | 70 min            |
| 11.A    | 20.6.24           | Jeanneret   | 60 min        | 60 min            |
| 12.B    | 20.6.24           | Jeanneret   | 120 min       | 120 min           |

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum      | Resultat | Tester     |
| ---- | ---------- | -------- | ---------- |
| 1.1  | 20.6.24    | OK       | Jeanneret  |
| 2.1  | 20.6.24    | OK       | Jeanneret  |
| 3.1  | 20.6.24    | OK       | Jeanneret  |
| 4.1  | 20.6.24    | OK       | Jeanneret  |
| 5.1  | 20.6.24    | NOK       | Jeanneret  |
| 6.1  | 20.6.24    | NOK       | Jeanneret  |
| 7.1  | 20.6.24    | NOK       | Jeanneret  |
| 8.1  | 20.6.24    | NOK       | Jeanneret  |
| 9.1  | 20.6.24    | NOK       | Jeanneret  |
| 10.1 | 20.6.24    | NOK       | Jeanneret  |

### 5.2 Testbericht

Die To-Do-Liste-Anwendung wurde nicht ganz erfolgreich getestet. Das Hinzufügen und Löschen funktionieren gut. Aber der Rest von den Sachen haben nicht funktioniert. Es muss viel überarbeitet werden den das Produkt ist nicht fertig.

## 6 Auswerten
