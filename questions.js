// This file contains all questions for the game
// You will need to replace the dummy questions with your real questions
// Total: 600 questions (3 subjects × 20 topics × 10 questions)

// Structure:
// - Each subject has 20 topics
// - Each topic has a title and 10 questions
// - Each question has the question text, options array, and correctAnswer index

const informaticaQuestions = [
    {
        title: "1. Algoritmus, algoritmizace a programování",
        questions: [
            {
                question: "Co je algoritmus?",
                options: [
                    "Počítačový program napsaný v jazyce Python",
                    "Přesně definovaný postup k vyřešení problému",
                    "Software používaný k vývoji programů",
                    "Datová struktura pro ukládání hodnot"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je algoritmizace?",
                options: [
                    "Proces optimalizace programovacího jazyka",
                    "Proces tvorby algoritmů před programováním",
                    "Testování programového kódu",
                    "Překlad programu do strojového kódu"
                ],
                correctAnswer: 1
            },
            {
                question: "Které z následujících jazyků patří mezi programovací jazyky nízké úrovně?",
                options: [
                    "Java, Python",
                    "C#, JavaScript",
                    "Assembler",
                    "PHP, Ruby"
                ],
                correctAnswer: 2
            },
            {
                question: "Která část programu obvykle obsahuje deklarace proměnných?",
                options: [
                    "Hlavička",
                    "Tělo programu",
                    "Deklarace",
                    "Výstup"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaký je hlavní rozdíl mezi statickým a dynamickým typovým systémem?",
                options: [
                    "Statické typování určuje typy při běhu programu, dynamické při kompilaci",
                    "Dynamické typování umožňuje větší kontrolu nad daty než statické",
                    "Statické typování kontroluje typy při kompilaci, dynamické během běhu programu",
                    "Dynamické typování je rychlejší než statické"
                ],
                correctAnswer: 2
            },
            {
                question: "Který z následujících datových typů je primitivní?",
                options: [
                    "Array",
                    "Class",
                    "Int",
                    "List"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak se nazývá datový typ, který uchovává sekvenci znaků?",
                options: [
                    "Boolean",
                    "String",
                    "Float",
                    "Enum"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je hlavní rozdíl mezi globální a lokální proměnnou?",
                options: [
                    "Lokální proměnná je dostupná v celém programu, globální pouze ve funkci",
                    "Globální proměnná je dostupná v celém programu, lokální pouze ve funkci",
                    "Globální proměnnou lze měnit pouze jednou, lokální lze měnit vícekrát",
                    "Neexistuje žádný rozdíl"
                ],
                correctAnswer: 1
            },
            {
                question: "Která kolekce funguje na principu zásobníku (LIFO – Last In, First Out)?",
                options: [
                    "Queue",
                    "List",
                    "Stack",
                    "Dictionary"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je hlavní vlastnost pole (Array)?",
                options: [
                    "Má dynamickou velikost",
                    "Může obsahovat hodnoty různých datových typů",
                    "Má pevnou délku a uchovává prvky stejného typu",
                    "Pracuje pouze s celočíselnými hodnotami"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "2. Práce se soubory, JSON, CSV, LINQ a ORM",
        questions: [
            {
                question: "Jaký je hlavní rozdíl mezi textovými a binárními soubory?",
                options: [
                    "Binární soubory obsahují pouze textové znaky, zatímco textové mohou obsahovat i obrázky",
                    "Textové soubory jsou čitelné pro člověka, zatímco binární soubory jsou kódovány v bajtech",
                    "Textové soubory nelze upravovat, zatímco binární ano",
                    "Neexistuje žádný rozdíl"
                ],
                correctAnswer: 1
            },
            {
                question: "Která metoda v C# slouží pro čtení celého textového souboru najednou?",
                options: [
                    "File.ReadAllText()",
                    "StreamReader.Read()",
                    "File.Open()",
                    "File.AppendAllText()"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaký je hlavní účel formátu JSON?",
                options: [
                    "Ukládání velkých multimediálních souborů",
                    "Výměna dat mezi aplikacemi v čitelné podobě",
                    "Ukládání dat v relačních databázích",
                    "Komprese textových souborů"
                ],
                correctAnswer: 1
            },
            {
                question: "Která z následujících knihoven se používá v C# pro práci s JSON?",
                options: [
                    "Newtonsoft.Json",
                    "CsvHelper",
                    "System.IO.File",
                    "LINQ"
                ],
                correctAnswer: 0
            },
            {
                question: "Jak jsou data oddělena v souborech CSV?",
                options: [
                    "Novými řádky",
                    "Mezerami",
                    "Čárkami nebo jinými oddělovači",
                    "Znakem \\n"
                ],
                correctAnswer: 2
            },
            {
                question: "Která knihovna v C# usnadňuje práci s CSV soubory?",
                options: [
                    "Newtonsoft.Json",
                    "CsvHelper",
                    "System.Text.Json",
                    "Dapper"
                ],
                correctAnswer: 1
            },
            {
                question: "Která z následujících operací NENÍ součástí technologie LINQ?",
                options: [
                    "Select",
                    "Where",
                    "SortBy",
                    "GroupBy"
                ],
                correctAnswer: 2
            },
            {
                question: "Co je hlavní funkcí technologie ORM?",
                options: [
                    "Automatická konverze databázových tabulek na objekty v C#",
                    "Zrychlení přenosu dat po síti",
                    "Zabezpečení databázových připojení",
                    "Převod JSON na XML"
                ],
                correctAnswer: 0
            },
            {
                question: "Které z následujících ORM frameworků patří mezi populární v C#?",
                options: [
                    "LINQ",
                    "Entity Framework",
                    "CsvHelper",
                    "Newtonsoft.Json"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je hlavní výhoda použití ORM při práci s databázemi?",
                options: [
                    "Není potřeba SQL dotazů, protože ORM umožňuje práci s databází pomocí objektů",
                    "Umožňuje rychlejší přístup k souborům JSON",
                    "Pomáhá s manipulací CSV souborů",
                    "Zabraňuje přístupu k databázi z aplikace"
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "3. Řídící struktury v programování",
        questions: [
            {
                question: "Co jsou řídící struktury v programování?",
                options: [
                    "Prvky určující tok programu",
                    "Speciální proměnné v kódu",
                    "Grafická rozhraní aplikací",
                    "Pouze cykly v programu"
                ],
                correctAnswer: 0
            },
            {
                question: "Které z následujících tvrzení o přiřazovacím příkazu je správné?",
                options: [
                    "Používá se k porovnání dvou hodnot",
                    "Používá se k nastavení hodnoty proměnné",
                    "Vrací vždy true nebo false",
                    "Nemůže být součástí cyklu"
                ],
                correctAnswer: 1
            },
            {
                question: "Co vrátí logický výraz (5 > 3) && (10 < 20)?",
                options: [
                    "true",
                    "false",
                    "null",
                    "Chybu v programu"
                ],
                correctAnswer: 0
            },
            {
                question: "Který z následujících operátorů se používá k negaci výrazu?",
                options: [
                    "&&",
                    "||",
                    "!",
                    "=="
                ],
                correctAnswer: 2
            },
            {
                question: "Jak funguje podmínka if-else?",
                options: [
                    "Vždy provede všechny bloky kódu",
                    "Rozhoduje, který blok kódu se vykoná na základě podmínky",
                    "Slouží pouze k ukončení programu",
                    "Je to speciální typ cyklu"
                ],
                correctAnswer: 1
            },
            {
                question: "Který z těchto cyklů zaručuje provedení alespoň jednou?",
                options: [
                    "for",
                    "while",
                    "do-while",
                    "Žádný cyklus tuto vlastnost nemá"
                ],
                correctAnswer: 2
            },
            {
                question: "Co dělá následující kód?\n\nfor (int i = 0; i < 5; i++) {\n    Console.WriteLine(i);\n}",
                options: [
                    "Vypíše čísla 0 až 5",
                    "Vypíše čísla 1 až 5",
                    "Vypíše čísla 0 až 4",
                    "Program se zacyklí"
                ],
                correctAnswer: 2
            },
            {
                question: "Který cyklus se použije, pokud dopředu neznáme počet opakování?",
                options: [
                    "for",
                    "switch",
                    "while",
                    "if"
                ],
                correctAnswer: 2
            },
            {
                question: "K čemu slouží switch v programování?",
                options: [
                    "K iteraci přes seznam hodnot",
                    "K rozhodování mezi více možnostmi podle hodnoty výrazu",
                    "K provádění logických operací",
                    "K ukončení programu"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký výstup bude mít tento kód?\n\nint x = 10;\nif (x != 10) {\n    Console.WriteLine(\"x není 10\");\n} else {\n    Console.WriteLine(\"x je 10\");\n}",
                options: [
                    "x není 10",
                    "x je 10",
                    "Chyba v programu",
                    "Program nic nevypíše"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "4. Podprogramy a Událostmi řízené programování",
        questions: [
            {
                question: "Jaký je hlavní důvod pro použití podprogramů v programování?",
                options: [
                    "Zvýšení výkonu programu",
                    "Lepší organizace a znovupoužitelnost kódu",
                    "Zabránění chybám v programu",
                    "Automatická optimalizace kódu"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je rozdíl mezi funkcí a procedurou?",
                options: [
                    "Funkce vrací hodnotu, procedura ne",
                    "Procedura vrací hodnotu, funkce ne",
                    "Funkce i procedury musí vždy vracet hodnotu",
                    "Neexistuje žádný rozdíl"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaké typy parametrů mohou mít podprogramy?",
                options: [
                    "Pouze vstupní",
                    "Pouze výstupní",
                    "Vstupní, výstupní a volitelné",
                    "Pouze volitelné"
                ],
                correctAnswer: 2
            },
            {
                question: "Co je hlavní výhodou lokálních podprogramů oproti globálním?",
                options: [
                    "Jsou rychlejší",
                    "Jsou bezpečnější a snižují riziko kolize názvů",
                    "Jsou automaticky optimalizovány překladačem",
                    "Lze je volat odkudkoli v programu"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký typ volání podprogramu umožňuje jeho spuštění během běhu programu pomocí ukazatele nebo události?",
                options: [
                    "Statické volání",
                    "Dynamické volání",
                    "Lokální volání",
                    "Externí volání"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je událost v událostmi řízeném programování?",
                options: [
                    "Pouze chybový stav programu",
                    "Něco, co může nastat a vyvolat reakci programu",
                    "Funkce, která běží při spuštění programu",
                    "Speciální typ proměnné"
                ],
                correctAnswer: 1
            },
            {
                question: "Který prvek v událostmi řízeném programování zajišťuje reakci na události?",
                options: [
                    "Event listener (posluchač události)",
                    "Kompilátor",
                    "Proměnná",
                    "Hlavní metoda programu"
                ],
                correctAnswer: 0
            },
            {
                question: "Které aplikace typicky využívají událostmi řízené programování?",
                options: [
                    "Konzolové programy",
                    "Grafické uživatelské rozhraní (GUI) a webové aplikace",
                    "Systémové utility běžící na pozadí",
                    "Statické HTML stránky"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je hlavním úkolem událostní smyčky v událostmi řízeném programování?",
                options: [
                    "Opakovaně provádět kód bez ohledu na události",
                    "Sledovat události a aktivovat odpovídající handlery",
                    "Ukončit program při výskytu události",
                    "Kompilovat zdrojový kód při běhu programu"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je správný způsob registrace obslužné rutiny události v JavaScriptu?",
                options: [
                    "button.onclick = function() { console.log(\"Klik!\"); }",
                    "addEvent(button, \"click\", function() { console.log(\"Klik!\"); });",
                    "button.event(\"click\", function() { console.log(\"Klik!\"); });",
                    "button.addEventListener(\"click\", function() { console.log(\"Klik!\"); });"
                ],
                correctAnswer: 3
            }
        ]
        },
    {
        title: "5. Základy objektově orientovaného programování (OOP)",
        questions: [
            {
            question: "Co je hlavní myšlenkou objektově orientovaného programování (OOP)?",
            options: [
                "Používání funkcí místo objektů",
                "Strukturování kódu kolem objektů",
                "Používání pouze nízkoúrovňového jazyka",
                "Tvorba webových stránek"
            ],
            correctAnswer: 1
        },
        {
            question: "Co je třída v OOP?",
            options: [
                "Proměnná v programu",
                "Metoda používaná pro výpočty",
                "Předpis pro tvorbu objektů",
                "Datový typ pro čísla"
            ],
            correctAnswer: 2
        },
        {
            question: "Co je instance třídy?",
            options: [
                "Název třídy",
                "Objekt vytvořený podle třídy",
                "Modifikátor přístupu",
                "Datový typ"
            ],
            correctAnswer: 1
        },
        {
            question: "Který modifikátor přístupu zajišťuje, že atribut je přístupný pouze uvnitř třídy?",
            options: [
                "Public",
                "Protected",
                "Private",
                "Static"
            ],
            correctAnswer: 2
        },
        {
            question: "K čemu slouží statické členy třídy?",
            options: [
                "Patří ke konkrétní instanci objektu",
                "Jsou přístupné pouze přes metodu",
                "Patří ke třídě a sdílejí je všechny instance",
                "Slouží ke změně typu atributu"
            ],
            correctAnswer: 2
        },
        {
            question: "Jaká je správná vlastnost konstruktoru v OOP?",
            options: [
                "Mění přístupová práva třídy",
                "Jmenuje se jinak než třída",
                "Volá se při vytvoření instance a může přijímat parametry",
                "Umožňuje přetěžování metod"
            ],
            correctAnswer: 2
        },
        {
            question: "Co je metoda v OOP?",
            options: [
                "Proměnná uvnitř objektu",
                "Funkce reprezentující chování objektu",
                "Typ přístupového modifikátoru",
                "Datový typ objektu"
            ],
            correctAnswer: 1
        },
        {
            question: "Jaký je účel getteru a setteru ve vlastnostech třídy?",
            options: [
                "Zajišťují přímý přístup k atributům",
                "Slouží k přístupu a změně private atributů bezpečným způsobem",
                "Mění název atributů",
                "Slouží pouze k ladění programu"
            ],
            correctAnswer: 1
        },
        {
            question: "Co umožňuje přetěžování metod?",
            options: [
                "Používat stejné jméno třídy vícekrát",
                "Používat stejnou metodu pro různé typy dat pomocí různých parametrů",
                "Změnit typ návratové hodnoty",
                "Přistupovat k private atributům"
            ],
            correctAnswer: 1
        },
        {
            question: "Jaký je význam atributu třídy?",
            options: [
                "Představuje metodu třídy",
                "Je to proměnná definovaná uvnitř třídy, která uchovává data objektu",
                "Slouží k přetížení metod",
                "Definuje modifikátor přístupu"
            ],
            correctAnswer: 1
        }
    ]
}
]

const itQuestions = [
    {
        title: "Téma 1 - Informační technologie",
        questions: [
            {
                question: "Příklad otázky z IT?",
                options: ["Odpověď 1", "Odpověď 2", "Odpověď 3", "Odpověď 4"],
                correctAnswer: 1
            },
            // Add 9 more questions for this topic
        ]
    },
    // Add 19 more topics for IT
];

const cestinaQuestions = [
    {
        title: "Téma 1 - Čeština",
        questions: [
            {
                question: "Příklad otázky z češtiny?",
                options: ["Odpověď 1", "Odpověď 2", "Odpověď 3", "Odpověď 4"],
                correctAnswer: 2
            },
            // Add 9 more questions for this topic
        ]
    },
    // Add 19 more topics for Čeština
];

// Initialize questions in the game
document.addEventListener('DOMContentLoaded', () => {
    // Load real questions into the game
    loadRealQuestions('informatika', informaticaQuestions);
    loadRealQuestions('it', itQuestions);
    loadRealQuestions('cestina', cestinaQuestions);
}); 