# Dokumentáció - FitZone Modern Weboldal

**Téma:** FitZone — modern, reszponzív edzőterem weboldal oktatási célra.

## Miről szól a weboldal
Az oldal egy képzeletbeli edzőtermet mutat be: szolgáltatások, csoportos órák, személyi edzés, interaktív kalkulátorok és edzéstervek generálása. Cél: bemutatni weboldal készítést és alapvető programozási elemeket (JavaScript).

## Milyen technológiákkal valósítottam meg
- HTML5 (több oldal: index, rolunk, kalkulatorok, edzesterv, kapcsolat)
- Tailwind CSS (CDN: gyors, modern megjelenés)
- JavaScript (script.js) - minden interaktív funkció itt található

## Mely részek és függvények mit csinálnak
- `calcBMI(weightKg, heightCm)` — paraméteres függvény; BMI kiszámítása (aritmetika).
- `estimateCalories(weightKg, met, minutes)` — paraméteres; MET alapú kalória-becslés (aritmetika).
- `generateWorkout()` — tömböt (EXERCISES) és ciklust használ; véletlenszerűen generál edzéstervet (kiválasztás).
- `isOpenAt(hour)` — logikai feltétel és elágazás; visszaadja, hogy az adott órában nyitva-e az edzőterem.
- `sumArray(arr)`, `findMax(arr)` — programozási tétel példák: összegzés és maximum keresés (ciklusok).
- `submitContact(e)` — front-end űrlapkezelés és validáció (nem küld kérést szerver felé, demo).


## Használt AI
A projekt fájlok előállításához chatgpt segítségét vettem igénybe a javascript és a dokumentáció elkészítéséhez. A prompt:
```
A script.js tartalmazzon BMI kalkulátort, kalória-becslőt, edzésterv-generátort és nyitvatartás-ellenőrzést. 
Írj dokumentációt.
```




