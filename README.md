# Nauč se na maturu hravě

Interaktivní webová aplikace pro přípravu na maturitu z předmětů Informatika, Informační technologie a Čeština.

## Popis aplikace

Tato aplikace nabízí zábavnou formu přípravy na maturitní zkoušku. Obsahuje otázky z následujících předmětů:

- Informatika
- Informační technologie
- Čeština

### Funkcionalita

- 3 okruhy (předměty)
- 20 témat v každém okruhu
- 10 otázek ke každému tématu
- Celkem 600 otázek

### Herní mechaniky

- Každý hráč začíná se 3 srdíčky (životy)
- Za každou správnou odpověď získává 1 auru
- Za každých 10 získaných aur si může koupit 1 srdíčko
- Za každou špatnou odpověď ztrácí 1 srdíčko
- Když hráč odpoví na všechny otázky v tématu bez chyby, stane se "Sigmou" a spustí se speciální animace

## Technologie

- HTML5
- CSS3
- JavaScript (Vanilla)

## Instalace a spuštění

1. Stáhněte nebo naklonujte repozitář
2. Otevřete soubor `index.html` v prohlížeči

## Přidávání vlastních otázek

Otázky jsou uloženy v souboru `questions.js`. Pro přidání vlastních otázek upravte jednotlivá pole pro každý předmět podle následující struktury:

```js
const predmetQuestions = [
  {
    title: "Název tématu",
    questions: [
      {
        question: "Text otázky?",
        options: ["Odpověď 1", "Odpověď 2", "Odpověď 3", "Odpověď 4"],
        correctAnswer: 0, // Index správné odpovědi (0-3)
      },
      // Další otázky...
    ],
  },
  // Další témata...
];
```

## Licence

Tato aplikace je vytvořena za účelem maturitní přípravy a nabízena zdarma k používání.

---

Vytvořeno 2023
