# TypeScript Workshop

`npm install -g typescript` 

[Visual Studio Code](https://code.visualstudio.com/) || [Atom](https://atom.io/)|| [Sublime](https://www.sublimetext.com/) || [WebStorm](https://www.jetbrains.com/webstorm/)

[Cheatsheet](https://devhints.io/typescript)

## Oppgaver

### Oppgave 1
+ Finn feilen i `invalidArgs.js`

### Oppgave 2
+ Initialiser et nytt TypeScript prosjekt i mappen `oppgave2/` med `tsc --init`
+ Lag en klasse som holder rede på Jedi i et [_Jedi Council_](https://en.wikipedia.org/wiki/Jedi#Jedi_High_Council)
+ Lag en funksjon som legger til en Jedi til Jedi Council.
+ Lag en funksjon fjerner (les: _dreper_) en Jedi fra Jedi Council

### Oppgave 3
+ Lag et `Jedi`-interface som holder rede på `navn` og`rank` (initiate, padawan, knight eller master)
+ Refaktorer "Legg til Jedi", slik at det bare er en Master som kan være i et Jedi Council-
+ Refaktorer "Fjern en Jedi", slik at man må spesifisere en grunn for at man fjerner en Jedi (Hint: Union types og typeguards)

### Oppgave 4
+ Fortsett på [deklarsjonsfilen](https://www.typescriptlang.org/docs/handbook/declaration-files/templates.html) som ligger her: `oppgave4/lib/swapi-wrapper/index.d.ts`
+ Gjør det samme for `React` og `ReactDOM`

### Oppgave 5
+ Refaktorer `searchItem` i `App.tsx` slik at man kan søker etter:
  + People
  + Films
  + Planets
  + Species
  + Starships
  + Vehicles

+ Endre grensesnittet slik at man kan velge hva man søker etter 