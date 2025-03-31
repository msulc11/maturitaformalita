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
    },
    {
        title: "6. Principy OOP ❌",
        questions: [
            {
            question: "Příklad otázky z IT?",
            options: ["Odpověď 1", "Odpověď 2", "Odpověď 3", "Odpověď 4"],
            correctAnswer: 1
        },
        // Add 9 more questions for this topic
        ]
    },
    {
        title: "7. Návrhové vzory",
        questions: [
            {
                question: "Co jsou návrhové vzory v softwarovém inženýrství?",
                options: [
                    "Osvědčená řešení opakujících se problémů",
                    "Specifické implementace kódu",
                    "Náhodné principy programování",
                    "Nepraktické koncepty"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaká je hlavní výhoda používání návrhových vzorů?",
                options: [
                    "Zlepšují čitelnost a udržovatelnost kódu",
                    "Zvyšují složitost kódu",
                    "Omezují flexibilitu systému",
                    "Jsou vhodné pouze pro konkrétní programovací jazyky"
                ],
                correctAnswer: 0
            },
            {
                question: "Které vzory patří mezi tvořivé vzory?",
                options: [
                    "Observer a Strategy",
                    "Factory a Singleton",
                    "Adapter a Decorator",
                    "Dependency Injection a MVC"
                ],
                correctAnswer: 1
            },
            {
                question: "Který návrhový vzor zajišťuje existenci pouze jedné instance třídy?",
                options: [
                    "Factory Pattern",
                    "Singleton Pattern",
                    "MVVM",
                    "Dependency Injection"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je hlavní rozdíl mezi MVC a MVVM?",
                options: [
                    "MVVM přidává vrstvu ViewModel",
                    "MVC zahrnuje vrstvu ViewModel",
                    "MVVM se používá pouze ve webových aplikacích",
                    "MVC se používá pouze pro desktopové aplikace"
                ],
                correctAnswer: 0
            },
            {
                question: "K čemu se používá Factory Pattern?",
                options: [
                    "Ke správě závislostí mezi objekty",
                    "Ke centralizovanému řízení tvorby objektů",
                    "K zajištění pouze jedné instance objektu",
                    "K rozdělení aplikace na části"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký návrhový vzor zlepšuje testovatelnost díky správě závislostí?",
                options: [
                    "MVC",
                    "MVVM",
                    "Dependency Injection",
                    "Singleton Pattern"
                ],
                correctAnswer: 2
            },
            {
                question: "Které z následujících tvrzení platí pro Singleton Pattern?",
                options: [
                    "Je to dynamický vzor",
                    "Vytváří centrální přístupový bod k instanci třídy",
                    "Je nahrazen Factory Patternem",
                    "Není vhodný pro databázové připojení"
                ],
                correctAnswer: 1
            },
            {
                question: "Který návrhový vzor se často používá v frameworku Angular?",
                options: [
                    "Dependency Injection",
                    "Factory Pattern",
                    "Singleton Pattern",
                    "MVC"
                ],
                correctAnswer: 0
            },
            {
                question: "Které kategorie návrhových vzorů zahrnují Observer a Strategy?",
                options: [
                    "Tvořivé vzory (Creational Patterns)",
                    "Strukturální vzory (Structural Patterns)",
                    "Behaviorální vzory (Behavioral Patterns)",
                    "Architektonické vzory"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "8. Tvorba GUI",
        questions: [
            {
                question: "Co znamená zkratka XAML?",
                options: [
                    "Extensible Application Markup Language",
                    "Executable Application Markup Language",
                    "Extended Application Markup Logic",
                    "Exclusive Application Markup Logic"
                ],
                correctAnswer: 0
            },
            {
                question: "K čemu se používá XAML v softwarovém vývoji?",
                options: [
                    "K psaní business logiky",
                    "K správě databázových dotazů",
                    "K definování uživatelských rozhraní",
                    "K optimalizaci výkonu aplikací"
                ],
                correctAnswer: 2
            },
            {
                question: "Které frameworky využívají XAML?",
                options: [
                    "React, Angular, Vue.js",
                    "Spring, Hibernate, Struts",
                    "Bootstrap, Tailwind, Foundation",
                    "WPF, UWP, .NET MAUI",
                ],
                correctAnswer: 3
            },
            {
                question: "Jaký je hlavní rozdíl mezi XAML a HTML?",
                options: [
                    "XAML je značkovací jazyk od Microsoftu zaměřený na UI",
                    "XAML nelze použít s CSS",
                    "HTML není deklarativní",
                    "HTML má složitější syntax než XAML"
                ],
                correctAnswer: 0
            },
            {
                question: "Co je základním prvkem XAML pro rozložení prvků?",
                options: [
                    "TextBlock",
                    "Window",
                    "Grid",
                    "Button"
                ],
                correctAnswer: 2
            },
            {
                question: "Který prvek v XAML slouží pro vytvoření tlačítka?",
                options: [
                    "Button",
                    "Grid",
                    "Viewbox",
                    "TextBlock"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaká je hlavní výhoda použití Viewboxu v XAML?",
                options: [
                    "Zlepšuje datové vazby",
                    "Automaticky škáluje prvky",
                    "Vytváří adaptivní rozložení",
                    "Přidává interaktivitu tlačítkům"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je AdaptiveTrigger v UWP?",
                options: [
                    "Nástroj pro správu dat",
                    "Komponenta pro zpracování událostí",
                    "Změna vzhledu podle velikosti okna",
                    "Šablona pro definování tlačítek"
                ],
                correctAnswer: 2
            },
            {
                question: "Které z následujících platí pro deklarativní syntax v XAML?",
                options: [
                    "Není kompatibilní s C#",
                    "Odděluje uživatelské rozhraní od kódu",
                    "Používá se pouze pro mobilní aplikace",
                    "Závisí na databázovém připojení"
                ],
                correctAnswer: 1
            },
            {
                question: "Co zajišťuje Data Binding v XAML?",
                options: [
                    "Stylování komponent",
                    "Animace v uživatelském rozhraní",
                    "Definici rozložení prvků",
                    "Propojení uživatelského rozhraní s daty"
                ],
                correctAnswer: 3
            }
        ]
    },
    {
        title: "9. Tvorba statických www stránek - jazyk HTML",
        questions: [
            {
                question: "Co je HTML?",
                options: ["Programovací jazyk pro tvorbu webových aplikací", "Značkovací jazyk pro tvorbu webových stránek", "Skriptovací jazyk pro dynamické weby", "Databázový jazyk pro webové servery"],
                correctAnswer: 1
            },
            {
                "question": "Co je HTML?",
                "options": [
                  "Programovací jazyk pro tvorbu webových aplikací",
                  "Značkovací jazyk pro tvorbu webových stránek",
                  "Skriptovací jazyk pro dynamické weby",
                  "Databázový jazyk pro webové servery"
                ],
                "correctAnswer": 1
              },
              {
                "question": "Který tag slouží k definování hlavního obsahu HTML stránky?",
                "options": ["<main>", "<body>", "<content>", "<section>"],
                "correctAnswer": 0
              },
              {
                "question": "Jaký atribut použijeme k určení zdroje obrázku v HTML?",
                "options": ["href", "src", "alt", "link"],
                "correctAnswer": 1
              },
              {
                "question": "Jaká značka se používá pro vytvoření číslovaného seznamu?",
                "options": ["<ul>", "<ol>", "<li>", "<dl>"],
                "correctAnswer": 1
              },
              {
                "question": "Jaký HTML tag se používá k vložení videa?",
                "options": ["<video>", "<media>", "<embed>", "<movie>"],
                "correctAnswer": 0
              },
              {
                "question": "Který prvek slouží k vytvoření tabulky v HTML?",
                "options": ["<table>", "<tr>", "<td>", "<th>"],
                "correctAnswer": 0
              },
              {
                "question": "Jaký atribut v HTML se používá pro zadání alternativního textu k obrázku?",
                "options": ["title", "alt", "src", "description"],
                "correctAnswer": 1
              },
              {
                "question": "Jaká značka definuje nadpis nejvyšší úrovně?",
                "options": ["<h6>", "<title>", "<h1>", "<header>"],
                "correctAnswer": 2
              },
              {
                "question": "Která technologie se běžně používá k definování vzhledu HTML stránek?",
                "options": ["JavaScript", "CSS", "PHP", "Python"],
                "correctAnswer": 1
              },
              {
                "question": "Který z následujících faktorů pomáhá zlepšit SEO webové stránky?",
                "options": [
                  "Použití správné HTML struktury a nadpisů",
                  "Použití pouze obrázků místo textu",
                  "Použití co nejvíce JavaScriptu",
                  "Ignorování meta tagů"
                ],
                "correctAnswer": 0
              }
            ]
          },
          { 
            title: "10. Tvorba statických www stránek - jazyk CSS",
            questions: [
            {
                "question": "Co je CSS?",
                "options": [
                    "Programovací jazyk pro tvorbu dynamických webových aplikací",
                    "Jazyk pro strukturování obsahu webových stránek",
                    "Kaskádové styly pro vizuální vzhled webových stránek",
                    "Jazyk pro interakci mezi uživatelem a webovou stránkou"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Který z následujících CSS selektorů vybere všechny odstavce (<p>) na stránce?",
                "options": [
                    ".p { color: red; }",
                    "#p { color: red; }",
                    "p { color: red; }",
                    "* { color: red; }"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Jaký CSS selektor se používá k výběru prvku s konkrétní třídou?",
                "options": [
                    "#classname { color: blue; }",
                    ".classname { color: blue; }",
                    "classname { color: blue; }",
                    "classname { color: blue; }"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Který CSS pseudo-element se používá pro přidání obsahu před prvek?",
                "options": [
                    "::after",
                    ":before",
                    "::before",
                    ":after"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Která CSS pseudo-třída umožňuje změnit styl prvku při najetí myší?",
                "options": [
                    ":focus",
                    ":hover",
                    ":nth-child(n)",
                    ":active"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Která z těchto jednotek je relativní?",
                "options": [
                    "px",
                    "cm",
                    "em",
                    "mm"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Jaké pravidlo CSS se používá pro responzivní design?",
                "options": [
                    "@query",
                    "@media",
                    "@screen",
                    "@responsive"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Který model se používá v CSS pro zarovnání prvků podél hlavní osy?",
                "options": [
                    "Box Model",
                    "Flexbox",
                    "CSS Grid",
                    "Positioning"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Jaká vlastnost v CSS definuje zarovnání prvků v Grid layoutu?",
                "options": [
                    "display",
                    "justify-content",
                    "grid-template-columns",
                    "align-items"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Které z následujících není způsob zarovnání prvků v CSS?",
                "options": [
                    "Flexbox",
                    "CSS Grid",
                    "Box Model",
                    "Float"
                ],
                "correctAnswer": 2
            }
        ]
    },
    { 
      title: "11. Skriptovací jazyk pro frontend webové stránky - JavaScript",
      questions: [
        {
          "question": "Které tvrzení o JavaScriptu je pravdivé?",
          "options": [
            "JavaScript je kompilovaný jazyk", 
            "JavaScript běží pouze na serveru", 
            "JavaScript je interpretovaný jazyk běžící v prohlížeči", 
            "JavaScript nepodporuje práci s DOM"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Jak se v JavaScriptu vybere element s ID mojeID?",
          "options": [
            "document.select(\"mojeID\")", 
            "document.getElementById(\"mojeID\")", 
            "document.query(\"mojeID\")", 
            "document.getElementByClass(\"mojeID\")"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Který z těchto operátorů slouží k přísnému porovnání (porovnává hodnotu i datový typ)?",
          "options": ["==", "===", "!=", "!=="],
          "correctAnswer": 1
        },
        {
          "question": "Která metoda slouží k načítání dat ze serveru?",
          "options": ["fetch()", "getData()", "loadServerData()", "request()"],
          "correctAnswer": 0
        },
        {
          "question": "Jaký výstup vrátí následující kód?\nconsole.log(typeof 42);",
          "options": ["\"integer\"", "\"number\"", "\"float\"", "\"string\""],
          "correctAnswer": 1
        },
        {
          "question": "Který způsob vkládání JavaScriptu do HTML je doporučený pro oddělení kódu?",
          "options": [
            "Vkládání skriptů do HTML atributů (onclick=\"alert('Hello'))", 
            "Použití document.write()", 
            "Externí soubor s .js a připojení přes <script src=\"script.js\"></script>", 
            "Přímé vložení do <body> pomocí <script>"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Co se stane při použití const pro proměnnou?",
          "options": [
            "Hodnotu lze přepsat i předefinovat", 
            "Lze ji přepsat, ale ne předefinovat", 
            "Nelze ji přepsat ani předefinovat", 
            "Nelze ji použít v JavaScriptu"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Jak lze v JavaScriptu vytvořit nový HTML element a přidat ho na stránku?",
          "options": [
            "document.create(\"div\")", 
            "document.addElement(\"div\")", 
            "document.createElement(\"div\").appendToBody()", 
            "document.createElement(\"div\") a document.body.appendChild(novyDiv)"
          ],
          "correctAnswer": 3
        },
        {
          "question": "Jaký je správný způsob nastavení textového obsahu HTML prvku bez nebezpečí XSS útoku?",
          "options": [
            "element.innerHTML = \"<b>Text</b>\"", 
            "element.textContent = \"<b>Text</b>\"", 
            "element.value = \"<b>Text</b>\"", 
            "element.setHTML(\"<b>Text</b>\")"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Který framework NENÍ založený na JavaScriptu?",
          "options": ["React", "Vue", "Angular", "Django"],
          "correctAnswer": 3
        }
      ]
    },
    { 
      title: "12. Skriptovací jazyk pro backend webové stránky - PHP",
      questions: [
        {
          "question": "Co je PHP?",
          "options": [
            "Frontendový jazyk pro tvorbu webových stránek",
            "Skriptovací jazyk na straně serveru",
            "Jazyk používaný pouze pro databázové dotazy",
            "Nástroj pro návrh HTML šablon"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Jak se v PHP označuje proměnná?",
          "options": [
            "var jmeno = \"Matěj\";",
            "$jmeno = \"Matěj\";",
            "let jmeno = \"Matěj\";",
            "jmeno := \"Matěj\";"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Jaký je správný způsob výpisu textu v PHP?",
          "options": [
            "echo \"Ahoj, světe!\";",
            "print \"Ahoj, světe!\";",
            "console.log(\"Ahoj, světe!\");",
            "A i B jsou správně"
          ],
          "correctAnswer": 3
        },
        {
          "question": "Jaké superglobální pole se používá pro zpracování dat z formuláře odeslaného metodou POST?",
          "options": [
            "$_GET",
            "$_POST",
            "$_FORM",
            "$_REQUEST"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Která metoda slouží k bezpečnému ukládání hesel?",
          "options": [
            "md5($heslo)",
            "sha1($heslo)",
            "password_hash($heslo, PASSWORD_BCRYPT)",
            "crypt($heslo, \"salt\")"
          ],
          "correctAnswer": 2
        },
        {
          "question": "Jak se v PHP zapisuje podmínka?",
          "options": [
            "if (podmínka) { ... }",
            "if podmínka then ...",
            "if { podmínka } then ...",
            "if (podmínka): ... endif;"
          ],
          "correctAnswer": 0
        },
        {
          "question": "Jaký je správný způsob zabezpečení před SQL injekcí?",
          "options": [
            "Použití mysqli_real_escape_string()",
            "Použití připravených dotazů (prepared statements)",
            "Použití addslashes()",
            "Vkládání proměnných přímo do SQL dotazu"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Co je to superglobální proměnná?",
          "options": [
            "Proměnná dostupná pouze uvnitř jedné funkce",
            "Proměnná dostupná v celém skriptu a automaticky naplněná PHP",
            "Proměnná dostupná pouze v HTML části kódu",
            "Proměnná, kterou musíme vytvořit manuálně"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Jaký je rozdíl mezi metodami GET a POST?",
          "options": [
            "GET je rychlejší a bezpečnější než POST",
            "GET přenáší data v URL, zatímco POST je skrytě v těle požadavku",
            "POST se používá jen pro přihlašovací formuláře, GET pro ostatní",
            "Žádný, obě metody fungují stejně"
          ],
          "correctAnswer": 1
        },
        {
          "question": "Jak se v PHP bezpečně pracuje se session?",
          "options": [
            "session_start();",
            "session_start(); session_regenerate_id(true);",
            "session_save();",
            "session_open();"
          ],
          "correctAnswer": 1
        }
      ]
    },
    { 
      title: "13. Databázový model a jeho využití ve webových aplikacích",
      questions: [
        {
          "question": "Co je to databáze?",
          "options": [
            "Databáze je kolekce vzorců a algoritmů pro zpracování dat v reálném čase.",
            "Databáze je organizovaný systém pro ukládání a správu dat, který umožňuje jejich efektivní vyhledávání a manipulaci.",
            "Databáze je pouze soubor textových dokumentů, které se používají pro ukládání informací.",
            "Databáze je proces, který umožňuje analýzu a zpracování velkých datových souborů."
          ],
          "correctAnswer": 1
        },
        {
          "question": "Jaké jsou hlavní typy databází?",
          "options": [
            "Relační databáze, objektové databáze, orientované databáze.",
            "Grafové databáze, textové databáze, statické databáze.",
            "Číslicové databáze, textové databáze, analytické databáze.",
            "Data miningové databáze, XML databáze, souborové databáze."
          ],
          "correctAnswer": 0
        },
        {
          "question": "Co je to databázová tabulka?",
          "options": [
            "Tabulka obsahuje pouze jeden typ dat, například text.",
            "Tabulka je struktura, která obsahuje data organizovaná do řádků a sloupců, kde každý řádek představuje jeden záznam a každý sloupec jeden atribut.",
            "Tabulka je soubor, který ukládá všechny informace o vztazích mezi entitami v databázi.",
            "Tabulka je grafické zobrazení vztahů mezi různými databázovými objekty."
          ],
          "correctAnswer": 1
        },
        {
          "question": "Co je to entita v databázovém modelu?",
          "options": [
            "Entita je způsob, jakým se data ukládají do databáze.",
            "Entita je konkrétní hodnota, která se v databázi uchovává.",
            "Entita je vztah mezi dvěma tabulkami v databázi.",
            "Entita je objekt nebo věc, která je reprezentována v databázi, například osoba nebo produkt."
          ],
          "correctAnswer": 3
        },
        {
          "question": "Co znamená kardinalita vztahu mezi tabulkami?",
          "options": [
            "Kardinalita se týká počtu řádků v každé tabulce.",
            "Kardinalita je způsob, jakým jsou propojeny všechny tabulky ve vztahu.",
            "Kardinalita označuje počet entit, které mohou být propojeny mezi dvěma tabulkami.",
            "Kardinalita určuje, kolik sloupců bude mít tabulka."
          ],
          "correctAnswer": 2
        },
        {
          "question": "Co je primární klíč v databázi?",
          "options": [
            "Primární klíč je unikátní pouze v rámci konkrétního sloupce.",
            "Primární klíč je pole, které může obsahovat pouze čísla.",
            "Primární klíč je jednoznačný identifikátor každého záznamu v tabulce.",
            "Primární klíč je klíč, který je volitelný pro každou tabulku."
          ],
          "correctAnswer": 3
        },
        {
          "question": "Co je to normalizace databáze?",
          "options": [
            "Proces zabezpečení databáze proti vnějším útokům.",
            "Proces organizování databáze tak, aby eliminoval redundantní data a zajistil konzistenci dat.",
            "Proces přidávání nových tabulek k databázi.",
            "Proces zajištění přístupnosti databáze pro všechny uživatele."
          ],
          "correctAnswer": 2
        },
        {
          "question": "Jaké jsou první tři normální formy v normalizaci databáze?",
          "options": [
            "Eliminace redundantních dat, oddělení entit, sjednocení vztahů.",
            "Oddělení závislostí, zajištění jednoznačnosti a odstranění transakčních anomálií.",
            "Odstranění duplicitních dat, minimální závislosti mezi sloupci a zajištění referenční integrity.",
            "Odstranění duplicitních hodnot, eliminace transakčních problémů a podmínky vztahů."
          ],
          "correctAnswer": 3
        },
        {
          "question": "Jak se propojuje webová stránka s databází?",
          "options": [
            "Webová stránka nevyžaduje propojení s databází pro běžné operace.",
            "Webová stránka se propojuje s databází pomocí JavaScriptu a Ajaxu.",
            "Webová stránka se propojuje s databází pomocí PHP a SQL dotazů.",
            "Webová stránka se propojuje s databází pomocí jednoduchého HTML kódu bez jakýchkoliv serverových technologií."
          ],
          "correctAnswer": 2
        },
        {
          "question": "Jaký je účel použití databází na webových stránkách?",
          "options": [
            "Databáze na webových stránkách slouží k vytváření statických HTML souborů.",
            "Databáze na webových stránkách slouží k ukládání a správě dynamických dat, například uživatelských účtů, produktů v e-shopu nebo komentářů.",
            "Databáze na webových stránkách je určena výhradně pro analýzu velkých dat.",
            "Databáze na webových stránkách slouží pouze k ukládání souborů jako obrázky a videa."
          ],
          "correctAnswer": 3
        },
        {
          "question": "Co je to relace v databázovém modelu?",
          "options": [
            "Relace je vztah mezi dvěma nebo více tabulkami, který definuje, jak jsou data propojena.",
            "Relace je způsob, jakým jsou data organizována v tabulkách.",
            "Relace je speciální typ klíče, který propojuje tabulky.",
            "Relace je proces, při kterém se provádí zálohování databáze."
          ],
          "correctAnswer": 1
        },
        {
          "question": "Co je to záznam v databázové tabulce?",
          "options": [
            "Záznam je způsob, jakým se data ukládají v databázi.",
            "Záznam je vztah mezi dvěma tabulkami.",
            "Záznam je hodnota, která je uložena v konkrétním sloupci.",
            "Záznam je řádek v tabulce, který obsahuje všechny atributy pro jednu konkrétní entitu."
          ],
          "correctAnswer": 3
        },
        {
          "question": "Jaký je rozdíl mezi primárním a kandidátním klíčem?",
          "options": [
            "Primární klíč slouží k určení typu dat, kandidátní klíč k definici tabulek.",
            "Primární klíč je klíč, který je volitelný, zatímco kandidátní klíč je povinný.",
            "Primární klíč je klíč, který identifikuje každý záznam v tabulce, kandidátní klíč je možný alternativní klíč.",
            "Primární klíč je jen pro tabulky s číslicemi, kandidátní klíč pro textové hodnoty."
          ],
          "correctAnswer": 2
        },
        {
          "question": "Co znamená, že databáze je v první normální formě (1NF)?",
          "options": [
            "Data jsou propojena mezi tabulkami na základě cizího klíče.",
            "Data jsou zcela normalizována a neexistují žádné duplicity.",
            "Tabulka je rozdělená na menší tabulky pro lepší organizaci dat.",
            "Každý záznam v tabulce má unikátní hodnoty ve všech sloupcích a není v něm žádná opakující se data."
          ],
          "correctAnswer": 3
        },
        {
          "question": "Jaký je hlavní cíl normalizace databáze?",
          "options": [
            "Normalizace slouží k definování vztahů mezi tabulkami.",
            "Normalizace je proces analýzy dat pro jejich snadné uložení v souborech.",
            "Normalizace slouží k definování vztahů mezi tabulkami."
          ],
          "correctAnswer": 1
        },
        {
          "question": "Který z následujících příkazů by se použil pro propojení stránky s databází pomocí PHP?",
          "options": [
            "mysql_connect()",
            "db_connect()",
            "database_query()",
            "link_database()"
          ],
          "correctAnswer": 0
        },
        {
          "question": "Co znamená termín \"referenční integrita\" v kontextu databází?",
          "options": [
            "Referenční integrita se týká ochrany databáze před viry.",
            "Referenční integrita znamená, že všechny cizí klíče ve všech tabulkách musí odkazovat na existující primární klíče.",
            "Referenční integrita zajišťuje, že tabulky jsou propojeny správným počtem sloupců.",
            "Referenční integrita se týká toho, jak jsou tabulky uloženy na pevném disku."
          ],
          "correctAnswer": 1
        },
        {
          "question": "Jaký typ databáze je nejvhodnější pro webovou aplikaci, která musí rychle načítat velké objemy textových dat?",
          "options": [
            "Objektová databáze",
            "Grafová databáze",
            "Relační databáze",
            "NoSQL databáze"
          ],
          "correctAnswer": 3
        },
        {
          "question": "Co je to SQL a jaké příkazy se běžně používají k práci s databázemi?",
          "options": [
            "SQL je specifický jazyk pro programování webových aplikací a používá se pro analýzu dat.",
            "SQL je jazyk pro dotazování se na databáze a běžně se používají příkazy jako SELECT, INSERT, UPDATE, DELETE.",
            "SQL je formát pro ukládání dat v tabulkách.",
            "SQL je programovací jazyk pro správu serverů."
          ],
          "correctAnswer": 1
        },
        {
          "question": "Co je to cizí klíč v databázi?",
          "options": [
            "Cizí klíč je klíč, který je zahrnut v několika tabulkách a propojuje je mezi sebou.",
            "Cizí klíč je pouze pro textové sloupce v tabulkách.",
            "Cizí klíč je identifikátor, který je unikátní v rámci celé databáze.",
            "Cizí klíč je klíč, který slouží k určení struktury databáze."
          ],
          "correctAnswer": 0
        }
      ]
    },
    {
        title: "14. Jazyk SQL – příkazy pro manipulaci s daty",
        questions: [
            {
                question: "Co je SQL?",
                options: [
                    "Dotazovací jazyk pro práci s relačními databázemi",
                    "Skriptovací jazyk pro webové aplikace",
                    "Značkovací jazyk pro tvorbu webových stránek",
                    "Programovací jazyk pro matematické výpočty"
                ],
                correctAnswer: 0
            },
            {
                question: "Která z následujících skupin příkazů nepatří mezi základní skupiny SQL?",
                options: [
                    "DDL (Data Definition Language)",
                    "DML (Data Manipulation Language)",
                    "DQL (Data Query Language)",
                    "DPL (Data Processing Language)"
                ],
                correctAnswer: 3
            },
            {
                question: "Který příkaz se používá pro vložení dat do tabulky?",
                options: [
                    "UPDATE",
                    "INSERT",
                    "ADD",
                    "INCLUDE"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je správný způsob aktualizace dat v tabulce?",
                options: [
                    "MODIFY table_name SET column = value WHERE condition",
                    "EDIT table_name SET column = value WHERE condition",
                    "UPDATE table_name SET column = value WHERE condition",
                    "CHANGE table_name SET column = value WHERE condition"
                ],
                correctAnswer: 2
            },
            {
                question: "Který příkaz slouží k odstranění záznamů z tabulky?",
                options: [
                    "REMOVE FROM table_name WHERE condition",
                    "DROP FROM table_name WHERE condition",
                    "DELETE FROM table_name WHERE condition",
                    "ERASE FROM table_name WHERE condition"
                ],
                correctAnswer: 2
            },
            {
                question: "Která klauzule v příkazu SELECT určuje podmínku pro výběr dat?",
                options: [
                    "HAVING",
                    "WHERE",
                    "CONDITION",
                    "FILTER"
                ],
                correctAnswer: 1
            },
            {
                question: "K čemu slouží klauzule GROUP BY v příkazu SELECT?",
                options: [
                    "K seřazení výsledků dotazu",
                    "K omezení počtu vrácených záznamů",
                    "K seskupení záznamů podle zadaných sloupců pro agregační funkce",
                    "K určení sloupců, které budou ve výsledku zobrazeny"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je funkce klauzule ORDER BY?",
                options: [
                    "Slouží k filtrování dat",
                    "Řadí výsledky dotazu podle zadaných sloupců",
                    "Definuje spojení mezi tabulkami",
                    "Omezuje počet vrácených řádků"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je správná syntaxe pro výběr všech sloupců z tabulky 'zakaznici'?",
                options: [
                    "SELECT ALL FROM zakaznici",
                    "SELECT * FROM zakaznici",
                    "SELECT COLUMNS FROM zakaznici",
                    "SELECT EVERYTHING FROM zakaznici"
                ],
                correctAnswer: 1
            },
            {
                question: "Který příkaz se používá ke spojení dat z více tabulek?",
                options: [
                    "MERGE",
                    "CONNECT",
                    "JOIN",
                    "LINK"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "15. Jazyk SQL – příkazy pro definici dat a spec. příkazy",
        questions: [
            {
                question: "Co je hlavním účelem jazyka SQL?",
                options: [
                    "Správa a manipulace s daty v relačních databázích",
                    "Vytváření uživatelského rozhraní aplikací",
                    "Programování webových serverů",
                    "Návrh grafických prvků webu"
                ],
                correctAnswer: 0
            },
            {
                question: "Do které kategorie SQL příkazů patří CREATE, ALTER a DROP?",
                options: [
                    "DML (Data Manipulation Language)",
                    "DDL (Data Definition Language)",
                    "DCL (Data Control Language)",
                    "DQL (Data Query Language)"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je to pohled (VIEW) v databázi?",
                options: [
                    "Fyzická kopie tabulky pro rychlejší přístup",
                    "Virtuální tabulka založená na výsledku dotazu",
                    "Grafické rozhraní pro zobrazení dat",
                    "Funkce pro kontrolu integrity dat"
                ],
                correctAnswer: 1
            },
            {
                question: "K čemu slouží trigger v databázi?",
                options: [
                    "K automatickému spouštění kódu při určité události v databázi",
                    "K vytváření indexů pro rychlejší vyhledávání",
                    "K zálohování databázových souborů",
                    "K omezení počtu současných připojení"
                ],
                correctAnswer: 0
            },
            {
                question: "Co je transakce v SQL?",
                options: [
                    "Typ tabulky pro dočasné uložení dat",
                    "Posloupnost operací, které se provedou buď všechny, nebo žádná",
                    "Metoda pro šifrování citlivých dat",
                    "Proces optimalizace databázových dotazů"
                ],
                correctAnswer: 1
            },
            {
                question: "Který příkaz se používá pro změnu struktury existující tabulky?",
                options: [
                    "MODIFY TABLE",
                    "UPDATE TABLE",
                    "ALTER TABLE",
                    "CHANGE TABLE"
                ],
                correctAnswer: 2
            },
            {
                question: "K čemu slouží příkaz CREATE VIEW?",
                options: [
                    "K vytvoření nové fyzické tabulky",
                    "K vytvoření virtuální tabulky založené na dotazu",
                    "K zobrazení struktury databáze",
                    "K vytvoření nového uživatele databáze"
                ],
                correctAnswer: 1
            },
            {
                question: "Který příkaz patří do kategorie DCL (Data Control Language)?",
                options: [
                    "SELECT",
                    "INSERT",
                    "CREATE",
                    "GRANT"
                ],
                correctAnswer: 3
            },
            {
                question: "Jaký příkaz se používá k zahájení transakce v SQL?",
                options: [
                    "START TRANSACTION",
                    "BEGIN TRANSACTION",
                    "CREATE TRANSACTION",
                    "INIT TRANSACTION"
                ],
                correctAnswer: 0
            },
            {
                question: "Který příkaz se používá pro odstranění databázového objektu?",
                options: [
                    "DELETE",
                    "REMOVE",
                    "DROP",
                    "ERASE"
                ],
                correctAnswer: 2
            }
        ]
    },
];

const itQuestions = [
    {
        title: "1. Operační systémy, souborové systémy",
        questions: [
            {
                question: "Jaká je hlavní funkce operačního systému?",
                options: ["Řízení komunikace mezi hardwarem a softwarem", "Vytváření grafického rozhraní", "Komprese dat", "Ochrana proti virům"],
                correctAnswer: 0
            },
            {
                question: "Který souborový systém je výchozí pro moderní Windows?",
                options: ["FAT32", "NTFS", "exFAT", "Ext4"],
                correctAnswer: 1
            },
            {
                question: "Co je to journaling v souborových systémech?",
                options: ["Typ komprese dat", "Způsob šifrování souborů", "Záznam změn pro obnovení po neočekávaném vypnutí", "Nástroj pro defragmentaci"],
                correctAnswer: 2
            },
            {
                question: "Který z následujících není mobilní operační systém?",
                options: ["Android", "iOS", "Windows Server", "Chrome OS"],
                correctAnswer: 2
            },
            {
                question: "Co je hlavní charakteristikou víceúlohových OS?",
                options: ["Podporují více uživatelů", "Běží pouze na serverech", "Umožňují spuštění více procesů současně", "Mají vždy grafické rozhraní"],
                correctAnswer: 2
            },
            {
                question: "K čemu slouží symlink v souborovém systému?",
                options: ["K šifrování souborů", "K odkazování na jiná metadata", "K defragmentaci disku", "K rozdělení disku na oddíly"],
                correctAnswer: 1
            },
            {
                question: "Jaký je základní souborový systém pro Linux?",
                options: ["NTFS", "FAT32", "HFS+", "Ext4"],
                correctAnswer: 3
            },
            {
                question: "Čím se vyznačuje hardlink oproti symlinku?",
                options: ["Může být vytvořen jen pro složky", "Odkazuje přímo na data", "Je výhradně pro Windows", "Nefunguje při přesunu souboru"],
                correctAnswer: 1
            },
            {
                question: "K čemu slouží Volume mount point?",
                options: ["K vytvoření virtuálního disku", "K namontování disku do složky", "K defragmentaci souborů", "K rozšíření kapacity RAM"],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "2. Uživatelské účty, zabzpečení",
        // ... existing code ...
        questions: [
           
            {
                question: "Co je autentizace v operačních systémech?",
                options: ["Přidělování přístupových oprávnění", "Ověření identity uživatele", "Šifrování dat na disku", "Instalace aktualizací"],
                correctAnswer: 1
            },
            {
                question: "K čemu slouží User Account Control (UAC) ve Windows?",
                options: ["K šifrování souborů", "K nastavení rodičovské kontroly", "K dodatečnému ověření akcí vyžadujících administrátorská práva", "K blokování přístupu k internetu"],
                correctAnswer: 2
            },
            {
                question: "V jakém souboru v Linuxu jsou uloženy informace o uživatelích?",
                options: ["/etc/passwd", "/etc/users", "/root/accounts", "/var/users"],
                correctAnswer: 0
            },
            {
                question: "Co je to Security token v kontextu uživatelských účtů?",
                options: ["Fyzické zařízení pro dvou-faktorovou autentizaci", "Token obsahující informace o oprávněních a uživateli", "Šifrovací klíč pro přístup k souborům", "Jednorázové heslo pro přihlášení"],
                correctAnswer: 1
            },
            {
                question: "Který z následujících účtů je systémový nespravovatelný ve Windows?",
                options: ["Power Users", "Administrators", "System", "Users"],
                correctAnswer: 2
            },
            {
                question: "Co je autorizace v operačních systémech?",
                options: ["Ověření identity uživatele", "Přidělování přístupových oprávnění k systémovým prostředkům", "Šifrování hesla", "Registrace uživatelského účtu"],
                correctAnswer: 1
            },
            {
                question: "K čemu slouží příkaz 'sudo -i' v Linuxu?",
                options: ["K restartu systému", "K získání trvalých práv superuživatele (root)", "K instalaci nových balíčků", "K zobrazení informací o systému"],
                correctAnswer: 1
            },
            {
                question: "Jaký příkaz se používá v Linuxu pro změnu oprávnění k souboru?",
                options: ["chown", "chmod", "chgrp", "chaccess"],
                correctAnswer: 1
            },]

    },
    {
        title: "3. Zabezpečení souborového systému",
        questions: [
            {
                question: "Co je to Access Control List (ACL)?",
                options: ["Program pro kontrolu přístupu k internetu", "Tabulka s přístupovými právy k souborům a složkám", "Seznam instalovaných antivirových programů", "Nástroj pro šifrování souborů"],
                correctAnswer: 1
            },
            {
                question: "Jaké je jedno z hlavních pravidel správy oprávnění ve Windows?",
                options: ["Oprávnění se primárně nastavují jednotlivým uživatelům", "Zděděná oprávnění mají vyšší prioritu než explicitní", "Oprávnění se primárně nastavují skupinám, ne jednotlivým uživatelům", "Zákaz přístupu má vždy nižší prioritu než povolení"],
                correctAnswer: 2
            },
            {
                question: "Které tvrzení o prioritě oprávnění ve Windows je správné?",
                options: ["Povolení má vždy přednost před zákazem", "Zákaz přístupu má vždy přednost před povolením", "Uživatelská oprávnění mají vždy přednost před skupinovými", "Zdědená oprávnění mají vždy přednost před explicitními"],
                correctAnswer: 1
            },
            {
                question: "Co jsou ACE (Access Control Entry)?",
                options: ["Software pro správu oprávnění", "Jednotlivé záznamy v ACL tabulce", "Typ antivirové ochrany", "Nástroj pro auditování přístupů"],
                correctAnswer: 1
            },
            {
                question: "Co označuje zkratka DACL?",
                options: ["Direct Access Control List", "Document Access Control List", "Discretionary Access Control List", "Dynamic Access Control List"],
                correctAnswer: 2
            },
            {
                question: "K čemu slouží příkaz chmod v Linuxu?",
                options: ["Ke změně vlastníka souboru", "Ke změně oprávnění souboru", "K zobrazení oprávnění souboru", "K vytvoření nového souboru"],
                correctAnswer: 1
            },
            {
                question: "Co znamená zápis oprávnění 'rwxr-xr--' v Linuxu?",
                options: ["Vlastník může číst, zapisovat a spouštět; skupina může číst a spouštět; ostatní mohou jen číst", "Vlastník může číst a zapisovat; skupina může číst, zapisovat a spouštět; ostatní nemohou nic", "Vlastník může číst, zapisovat a spouštět; skupina může číst a spouštět; ostatní nemohou nic", "Vlastník může číst; skupina může číst a spouštět; ostatní mohou číst, zapisovat a spouštět"],
                correctAnswer: 0
            },
            {
                question: "Co je SACL ve Windows?",
                options: ["System Administration Control List", "Security Access Control List", "System Access Control List - používá se pro audit přístupů", "Special Access Control List"],
                correctAnswer: 2
            },
            {
                question: "Co se stane při odstranění dědičnosti v ACL s volbou 'Convert inherited permissions to explicit permissions'?",
                options: ["Všechna oprávnění budou smazána", "Zděděná oprávnění se zkopírují jako explicitní", "Přístup k objektu bude omezen pouze pro administrátory", "Objekt bude používat pouze základní oprávnění"],
                correctAnswer: 1
            },
            {
                question: "Jaký příkaz se používá v Linuxu pro změnu vlastníka souboru?",
                options: ["chmod", "chown", "chgrp", "chacl"],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "4. Adresářová služba, GPO",
        questions: [
            {
                question: "Co je hlavním účelem adresářové služby Active Directory?",
                options: [
                    "Komprese dat na disku",
                    "Centralizovaná správa uživatelů, počítačů a zdrojů v síti",
                    "Zabezpečení proti virům",
                    "Poskytování internetového připojení"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaké jsou předpoklady pro instalaci Active Directory na Windows Server?",
                options: [
                    "Funkční služba DNS, statická IP adresa a Windows Server",
                    "Linux server, dynamická IP adresa",
                    "Připojení k internetu, nejméně 10 klientských stanic",
                    "Předchozí instalace SQL Serveru"
                ],
                correctAnswer: 0
            },
            {
                question: "Jakou roli musíte nainstalovat pro zprovoznění Active Directory?",
                options: [
                    "Web Server (IIS)",
                    "Active Directory Domain Services (AD DS)",
                    "Active Directory Certificate Services",
                    "File and Storage Services"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je nejvyšší úroveň hierarchie v logické struktuře Active Directory?",
                options: [
                    "Doména",
                    "Les (Forest)",
                    "Strom domén (Domain Tree)",
                    "Organizační jednotka (OU)"
                ],
                correctAnswer: 1
            },
            {
                question: "K čemu primárně slouží organizační jednotky (OU) v Active Directory?",
                options: [
                    "K vytváření domén",
                    "K logickému rozdělení domény pro lepší správu objektů",
                    "K propojení se službou DNS",
                    "K šifrování komunikace"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je GPO (Group Policy Object)?",
                options: [
                    "Globální přístupový objekt",
                    "Generátor přístupových práv",
                    "Sada pravidel pro správu konfigurace počítačů a uživatelů",
                    "Grafické programovací rozhraní"
                ],
                correctAnswer: 2
            },
            {
                question: "Které typy konfigurací existují v Group Policy?",
                options: [
                    "Globální a lokální konfigurace",
                    "Statická a dynamická konfigurace",
                    "Konfigurace počítače a konfigurace uživatele",
                    "Síťová a bezpečnostní konfigurace"
                ],
                correctAnswer: 2
            },
            {
                question: "Co se stane, když je více GPO nastaveno na stejný parametr s různými hodnotami?",
                options: [
                    "Všechna nastavení se ignorují",
                    "Aplikuje se nastavení s nejvyšší prioritou podle precedence GPO",
                    "Aplikují se postupně všechna nastavení",
                    "Systém vybere náhodně jedno nastavení"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je to Security Filtering v GPO?",
                options: [
                    "Šifrování dat v Group Policy",
                    "Omezení aplikace GPO na konkrétní uživatele, skupiny nebo počítače",
                    "Kontrola integrity GPO",
                    "Automatická aktualizace GPO"
                ],
                correctAnswer: 1
            },
            {
                question: "Který z následujících příkladů není typickým využitím GPO?",
                options: [
                    "Nastavení bezpečnostních politik hesel",
                    "Instalace antivirového software",
                    "Řízení přístupu k určitým aplikacím",
                    "Programování nových aplikací"
                ],
                correctAnswer: 3
            }
        ]
    },
    {
        title: "5. Role serveru ❌",
        questions: [
            {
                question: "text",
                options: [
                    "text",
                    "text",
                    "text",
                    "text"
                ],
                correctAnswer: 1
            },
        ]
    },
    
    {
        title: "6. Referenční modely ISO/OSI a TCP/IP",
        questions: [
            {
                question: "Kolik vrstev má referenční model ISO/OSI?",
                options: [
                    "4 vrstvy",
                    "5 vrstev",
                    "7 vrstev",
                    "6 vrstev"
                ],
                correctAnswer: 2
            },
            {
                question: "Kolik vrstev má model TCP/IP?",
                options: [
                    "3 vrstvy",
                    "4 vrstvy",
                    "5 vrstev",
                    "7 vrstev"
                ],
                correctAnswer: 1
            },
            {
                question: "Která vrstva ISO/OSI modelu odpovídá za přenos bitů po fyzickém médiu?",
                options: [
                    "Transportní vrstva",
                    "Síťová vrstva",
                    "Spojová vrstva",
                    "Fyzická vrstva"
                ],
                correctAnswer: 3
            },
            {
                question: "Který z protokolů pracuje na transportní vrstvě?",
                options: [
                    "HTTP",
                    "IP",
                    "TCP",
                    "Ethernet"
                ],
                correctAnswer: 2
            },
            {
                question: "Která vrstva TCP/IP modelu zahrnuje funkce relační, prezentační a aplikační vrstvy z ISO/OSI modelu?",
                options: [
                    "Aplikační vrstva",
                    "Transportní vrstva",
                    "Internetová vrstva",
                    "Vrstva síťového přístupu"
                ],
                correctAnswer: 0
            },
            {
                question: "Na které vrstvě ISO/OSI modelu se používá adresace pomocí MAC adres?",
                options: [
                    "Fyzická vrstva",
                    "Spojová vrstva",
                    "Síťová vrstva",
                    "Transportní vrstva"
                ],
                correctAnswer: 1
            },
            {
                question: "Která z následujících jednotek je spojena se síťovou vrstvou ISO/OSI modelu?",
                options: [
                    "Bit",
                    "Rámec",
                    "Paket",
                    "Segment"
                ],
                correctAnswer: 2
            },
            {
                question: "Co je hlavním účelem vrstvy síťového přístupu v modelu TCP/IP?",
                options: [
                    "Adresace a směrování dat mezi sítěmi",
                    "Spolehlivý přenos dat mezi koncovými body",
                    "Poskytování aplikačních služeb",
                    "Fyzické propojení a přenos dat v rámci lokální sítě"
                ],
                correctAnswer: 3
            },
            {
                question: "Který z těchto protokolů je používán na aplikační vrstvě TCP/IP?",
                options: [
                    "TCP",
                    "IP",
                    "HTTP",
                    "ARP"
                ],
                correctAnswer: 2
            },
            {
                question: "Co je hlavním rozdílem mezi TCP a UDP protokoly?",
                options: [
                    "TCP používá IP adresy, UDP používá MAC adresy",
                    "TCP zajišťuje spolehlivý přenos dat, UDP je nespolehlivý, ale rychlejší",
                    "TCP pracuje na síťové vrstvě, UDP na transportní vrstvě",
                    "TCP je modernější protokol než UDP"
                ],
                correctAnswer: 1
            },
            {
                question: "K čemu slouží protokol ARP?",
                options: [
                    "K zjištění IP adresy na základě názvu domény",
                    "K přenosu souborů mezi zařízeními",
                    "K zjištění MAC adresy zařízení na základě IP adresy",
                    "K šifrování dat při přenosu"
                ],
                correctAnswer: 2
            },
            {
                question: "Na které vrstvě ISO/OSI modelu operuje protokol IP?",
                options: [
                    "Spojová vrstva",
                    "Síťová vrstva",
                    "Transportní vrstva",
                    "Relační vrstva"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je hlavní účel prezentační vrstvy v ISO/OSI modelu?",
                options: [
                    "Navazování a ukončování relací mezi aplikacemi",
                    "Poskytování síťových služeb pro aplikace",
                    "Šifrování, komprese a převod formátů dat",
                    "Směrování paketů mezi sítěmi"
                ],
                correctAnswer: 2
            },
            {
                question: "Který z protokolů zajišťuje šifrování dat na prezentační vrstvě?",
                options: [
                    "HTTP",
                    "FTP",
                    "TLS",
                    "ICMP"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "7. Fyzická vrstva, přenosová média, typy a vlastnosti",
        questions: [
            {
                question: "Co zajišťuje fyzická vrstva v OSI modelu?",
                options: [
                    "Směrování paketů v síti",
                    "Adresaci pomocí MAC adres",
                    "Přenos bitů mezi zařízeními prostřednictvím fyzických médií",
                    "Spolehlivý přenos dat pomocí protokolů"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaké jsou tři typy přenosového směru na fyzické vrstvě?",
                options: [
                    "Simplexní, paralelní, křížový",
                    "Simplex, half-duplex, full-duplex",
                    "Unidirectional, bidirectional, omnidirectional",
                    "Jednosměrný, dvousměrný, vícesměrný"
                ],
                correctAnswer: 1
            },
            {
                question: "Které z následujících médií není kabelovým přenosovým médiem?",
                options: [
                    "Koaxiální kabel",
                    "Wi-Fi",
                    "Optické vlákno",
                    "Kroucená dvojlinka"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je rozdíl mezi UTP a STP kabelem?",
                options: [
                    "UTP je určen pro venkovní použití, STP pro vnitřní",
                    "UTP je nestíněný kabel, STP je stíněný kabel",
                    "UTP používá optické vlákno, STP měděné vodiče",
                    "UTP podporuje vyšší rychlosti než STP"
                ],
                correctAnswer: 1
            },
            {
                question: "Která technologie využívá koaxiální kabel?",
                options: [
                    "Wi-Fi sítě",
                    "Optická páteřní síť",
                    "Kabelová televize (CATV)",
                    "Bluetooth připojení"
                ],
                correctAnswer: 2
            },
            {
                question: "Jakou hlavní výhodu mají optická vlákna oproti metalickým kabelům?",
                options: [
                    "Nižší cena a jednodušší instalace",
                    "Vyšší přenosová rychlost a odolnost proti elektromagnetickému rušení",
                    "Větší počet podporovaných zařízení",
                    "Lepší mechanická odolnost"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je rozdíl mezi single-mode a multi-mode optickým vláknem?",
                options: [
                    "Single-mode má větší přenosovou vzdálenost a používá jednu světelnou vlnu",
                    "Single-mode je levnější a používá více světelných vln",
                    "Multi-mode má větší přenosovou vzdálenost než single-mode",
                    "Multi-mode je dražší a složitější na instalaci"
                ],
                correctAnswer: 0
            },
            {
                question: "Na jaké frekvenci typicky pracuje Wi-Fi?",
                options: [
                    "900 MHz",
                    "2,4 GHz a 5 GHz",
                    "10 GHz",
                    "50 Hz"
                ],
                correctAnswer: 1
            },
            {
                question: "Která z těchto technologií pracuje na frekvenci 868 MHz?",
                options: [
                    "Wi-Fi",
                    "Bluetooth",
                    "IQRF",
                    "Infračervené spojení"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký maximální dosah má přibližně UTP kabel v Ethernetových sítích?",
                options: [
                    "10 metrů",
                    "100 metrů",
                    "1 kilometr",
                    "10 kilometrů"
                ],
                correctAnswer: 1
            },
            {
                question: "Která přenosová média se používají pro páteřní internetové sítě na dlouhé vzdálenosti?",
                options: [
                    "Kroucená dvojlinka (UTP)",
                    "Wi-Fi",
                    "Optická vlákna",
                    "Bluetooth"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký je hlavní rozdíl mezi bezdrátovými a kabelovými přenosovými médii?",
                options: [
                    "Bezdrátová média mají vždy větší dosah",
                    "Kabelová média mají vyšší přenosovou rychlost a spolehlivost",
                    "Bezdrátová média využívají elektromagnetické vlny místo vodičů",
                    "Kabelová média jsou vždy levnější"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "8. Ethernet, topologie, přístupové metody ke sdílenému médiu ",
        questions: [
            {
                question: "Co je Ethernet?",
            options: [
                "Protokol aplikační vrstvy",
                "Technologie pro připojení zařízení v počítačových sítích na datalinkové vrstvě",
                "Typ fyzické topologie",
                "Standard pro bezdrátové sítě"
            ],
            correctAnswer: 1
        },
        {
            question: "Jaký je rozdíl mezi fyzickou a logickou topologií sítě?",
            options: [
                "Fyzická topologie existuje reálně, logická je pouze teoretická",
                "Fyzická topologie určuje, jak jsou zařízení fyzicky propojena, logická jak mezi sebou komunikují",
                "Logická topologie se používá pouze v bezdrátových sítích",
                "Mezi fyzickou a logickou topologií není žádný rozdíl"
            ],
            correctAnswer: 1
        },
        {
            question: "Co je hlavním účelem protokolu ARP?",
            options: [
                "Přidělování IP adres zařízením v síti",
                "Směrování paketů mezi sítěmi",
                "Překlad IP adresy na MAC adresu v lokální síti",
                "Zabezpečení komunikace mezi zařízeními"
            ],
            correctAnswer: 2
        },
        {
            question: "Jaká je minimální rychlost moderního Ethernetu?",
            options: [
                "100 Mb/s",
                "1 Gb/s",
                "10 Mb/s",
                "10 Gb/s"
            ],
            correctAnswer: 1
        },
        {
            question: "Jak funguje přístupová metoda CSMA/CD?",
            options: [
                "Zařízení posílají data podle přiděleného tokenu",
                "Zařízení komunikují pouze ve vyhrazených časových intervalech",
                "Zařízení poslouchá, zda je médium volné, začne vysílat a detekuje případné kolize",
                "Zařízení komunikují pouze na základě povolení od centrálního prvku"
            ],
            correctAnswer: 2
        },
        {
            question: "Která topologie je v současnosti nejpoužívanější pro počítačové sítě?",
            options: [
                "Sběrnicová (bus)",
                "Kruhová (ring)",
                "Hvězdicová (star)",
                "Plně propojená (mesh)"
            ],
            correctAnswer: 2
        },
        {
            question: "Jaká je délka MAC adresy?",
            options: [
                "32 bitů",
                "48 bitů",
                "64 bitů",
                "128 bitů"
            ],
            correctAnswer: 1
        },
        {
            question: "Který typ topologie propojuje více aktivních prvků do hierarchie?",
            options: [
                "Sběrnicová (bus)",
                "Hvězdicová (star)",
                "Stromová (tree)",
                "Kruhová (ring)"
            ],
            correctAnswer: 2
        },
        {
            question: "Proč v moderním Ethernetu (s využitím switchů) již ke kolizím nedochází?",
            options: [
                "Protože se CSMA/CD již nepoužívá",
                "Protože každý port switche komunikuje full-duplexně",
                "Protože moderní Ethernet má neomezenou kapacitu",
                "Protože se používají optické kabely"
            ],
            correctAnswer: 1
        },
        {
            question: "Co je charakteristické pro mesh topologii?",
            options: [
                "Centrální prvek propojující všechna zařízení",
                "Společný kabel, ke kterému jsou připojena všechna zařízení",
                "Vysoká redundance díky vzájemnému propojení všech zařízení",
                "Kruhové propojení zařízení"
            ],
                correctAnswer: 2
            }
        ]
    }
];
    
    

const cestinaQuestions = [
    {
        title: "Staré řecké báje a pověsti",
        questions: [
            {
                question: "Kdo přinesl lidem oheň?",
                options: [
                    "Zeus",
                    "Hérakles",
                    "Prométheus",
                    "Apollo"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak potrestali bohové Tantala?",
                options: [
                    "Přikovali ho ke skále",
                    "Věčným hladem a žízní v podsvětí",
                    "Proměnili ho v kámen",
                    "Poslali ho do vyhnanství"
                ],
                correctAnswer: 1
            },
            {
                question: "Kolik dětí měla Niobé?",
                options: [
                    "5 synů a 5 dcer",
                    "7 synů a 7 dcer",
                    "6 synů a 6 dcer",
                    "2 syny a 2 dcery"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo osvobodil Prométhea?",
                options: [
                    "Zeus",
                    "Hérakles",
                    "Apollo",
                    "Persefona"
                ],
                correctAnswer: 1
            },
            {
                question: "Čím se provinila Niobé?",
                options: [
                    "Ukradla božský oheň",
                    "Posmívala se bohyni Létó",
                    "Zradila tajemství bohů",
                    "Zabila své děti"
                ],
                correctAnswer: 1
            },
            {
                question: "Z čeho vytvořil Prométheus lidi?",
                options: [
                    "Z kamene a ohně",
                    "Z hlíny a vody",
                    "Z božské krve",
                    "Z vlastního těla"
                ],
                correctAnswer: 1
            },
            {
                question: "Co udělal Tantalos na hostině pro bohy?",
                options: [
                    "Ukradl nektar a ambrózii",
                    "Urazil Dia",
                    "Předložil bohům pokrm z vlastního syna",
                    "Zaútočil na Apollóna"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký dar přinesl Prométheus lidem?",
                options: [
                    "Oheň",
                    "Víno",
                    "Písmo",
                    "Medicínu"
                ],
                correctAnswer: 0
            },
            {
                question: "V co se proměnila Niobé po smrti svých dětí?",
                options: [
                    "V řeku",
                    "V kámen",
                    "V ptáka",
                    "V květinu"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo zabil děti Niobé?",
                options: [
                    "Zeus a Héra",
                    "Poseidón a Afrodita",
                    "Apollón a Artemis",
                    "Hádes a Persefona"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Romeo a Julie",
        questions: [
            {
                question: "Kdo napsal divadelní hru Romeo a Julie?",
                options: [
                    "Charles Dickens",
                    "William Shakespeare",
                    "Oscar Wilde",
                    "Jane Austen"
                ],
                correctAnswer: 1
            },
            {
                question: "Ve kterém městě se odehrává příběh Romeo a Julie?",
                options: [
                    "Benátky",
                    "Florencie",
                    "Verona",
                    "Řím"
                ],
                correctAnswer: 2
            },
            {
                question: "Které dvě znepřátelené rodiny vystupují v díle?",
                options: [
                    "Yorkové a Lancasterové",
                    "Montekové a Kapuletové",
                    "Medicejští a Borgiové",
                    "Orsiniové a Colonnaové"
                ],
                correctAnswer: 1
            },
            {
                question: "Kde se Romeo a Julie poprvé setkali?",
                options: [
                    "Na plese u Kapuletů",
                    "V kostele",
                    "Na tržišti",
                    "V zahradě Monteků"
                ],
                correctAnswer: 0
            },
            {
                question: "Jak zemřela Julie?",
                options: [
                    "Byla zabita Tybaltem",
                    "Utopila se",
                    "Probodla se dýkou",
                    "Otrávila se jedem"
                ],
                correctAnswer: 2
            },
            {
                question: "Kdo zabil Tybalta?",
                options: [
                    "Merkucio",
                    "Paris",
                    "Romeo",
                    "Benvolio"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký nápoj dá mnich Lorenzo Julii?",
                options: [
                    "Smrtelný jed",
                    "Uspávací prostředek",
                    "Lektvar lásky",
                    "Lék na bolest"
                ],
                correctAnswer: 1
            },
            {
                question: "Z jakého důvodu Romeo nevěděl o Juliině plánu s předstíranou smrtí?",
                options: [
                    "Zradil jej mnich Lorenzo",
                    "Posel mu nedoručil dopis",
                    "Julie mu to zapomněla říct",
                    "Romeo neuměl číst"
                ],
                correctAnswer: 1
            },
            {
                question: "Co udělá Romeo, když zjistí, že Julie je (zdánlivě) mrtvá?",
                options: [
                    "Vypije jed",
                    "Probodne se mečem",
                    "Odejde do vyhnanství",
                    "Pomstí se Kapuletům"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaký byl důsledek smrti Romea a Julie?",
                options: [
                    "Válka mezi rodinami",
                    "Vyhnání mnicha Lorenza",
                    "Smír mezi znepřátelenými rodinami",
                    "Zhroucení vlády ve Veroně"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Petr a Lucie",
        questions: [
            {
                question: "Kdo je autorem novely Petr a Lucie?",
                options: [
                    "Victor Hugo",
                    "Romain Rolland",
                    "Marcel Proust",
                    "Albert Camus"
                ],
                correctAnswer: 1
            },
            {
                question: "V jakém období se odehrává děj novely Petr a Lucie?",
                options: [
                    "Během první světové války",
                    "V meziválečném období",
                    "Během druhé světové války",
                    "Po druhé světové válce"
                ],
                correctAnswer: 0
            },
            {
                question: "Kde se Petr a Lucie poprvé setkávají?",
                options: [
                    "Ve škole",
                    "V metru během bombardování",
                    "V nemocnici",
                    "Na taneční zábavě"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaké je sociální postavení Lucie?",
                options: [
                    "Pochází z bohaté rodiny",
                    "Je dcerou významného politika",
                    "Pochází z chudých poměrů",
                    "Je šlechtického původu"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký postoj má Petr k válce?",
                options: [
                    "Je zapáleným vlastencem a chce bojovat",
                    "Je proti válce a považuje ji za nesmyslnou",
                    "Je lhostejný k válečnému dění",
                    "Aktivně podporuje válečné úsilí"
                ],
                correctAnswer: 1
            },
            {
                question: "Čím se živí Lucie?",
                options: [
                    "Je studentkou",
                    "Pracuje jako zdravotní sestra",
                    "Kreslí obrázky na prodej",
                    "Pracuje v továrně na zbraně"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak dlouho trvá příběh Petra a Lucie?",
                options: [
                    "Několik let",
                    "Jeden rok",
                    "Tři měsíce",
                    "Jeden den"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká událost ukončí příběh Petra a Lucie?",
                options: [
                    "Petr musí narukovat na frontu",
                    "Lucie onemocní a zemře",
                    "Oba umírají při zřícení kostela během bombardování",
                    "Petr se vrací z fronty zraněný"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký literární směr reprezentuje dílo Petr a Lucie?",
                options: [
                    "Realismus",
                    "Naturalismus",
                    "Romantismus",
                    "Humanismus a pacifismus"
                ],
                correctAnswer: 3
            },
            {
                question: "Jaké hlavní poselství nese novela Petr a Lucie?",
                options: [
                    "Oslavu hrdinství vojáků",
                    "Kritiku války a její nesmyslnosti",
                    "Analýzu společenských tříd",
                    "Oslavu francouzské kultury"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Malý princ",
        questions: [
            {
                question: "Kdo je autorem knihy Malý princ?",
                options: [
                    "Albert Camus",
                    "Victor Hugo",
                    "Antoine de Saint-Exupéry",
                    "Jules Verne"
                ],
                correctAnswer: 2
            },
            {
                question: "Jakou profesi má vypravěč příběhu?",
                options: [
                    "Lékař",
                    "Pilot",
                    "Malíř",
                    "Učitel"
                ],
                correctAnswer: 1
            },
            {
                question: "Co požádal Malý princ vypravěče, aby mu nakreslil jako první?",
                options: [
                    "Letadlo",
                    "Beránka",
                    "Květinu",
                    "Slona"
                ],
                correctAnswer: 1
            },
            {
                question: "Z jaké planety pochází Malý princ?",
                options: [
                    "Ze Země",
                    "Z Marsu",
                    "Z asteroidu B 612",
                    "Z Venuše"
                ],
                correctAnswer: 2
            },
            {
                question: "Kterou květinu Malý princ miloval a pečoval o ni na své planetě?",
                options: [
                    "Tulipán",
                    "Růži",
                    "Baobab",
                    "Slunečnici"
                ],
                correctAnswer: 1
            },
            {
                question: "Kolik planet Malý princ navštívil během své cesty?",
                options: [
                    "4",
                    "6",
                    "7",
                    "10"
                ],
                correctAnswer: 2
            },
            {
                question: "Kterého obyvatele potkal Malý princ na první planetě?",
                options: [
                    "Lampáře",
                    "Krále",
                    "Geografa",
                    "Pijáka"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaké zvíře pomohlo Malému princi na Zemi?",
                options: [
                    "Pes",
                    "Liška",
                    "Slon",
                    "Had"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je nejznámější citace z knihy Malý princ?",
                options: [
                    "\"Hvězdy jsou krásné, protože je na nich květina, kterou není vidět...\"",
                    "\"Správně vidíme jen srdcem. Co je důležité, je očím neviditelné.\"",
                    "\"Řeč je pramenem nedorozumění.\"",
                    "\"Dospělí nikdy ničemu nerozumí sami a děti to stojí věčné vysvětlování.\""
                ],
                correctAnswer: 1
            },
            {
                question: "Jakým způsobem se Malý princ vrátil na svou planetu?",
                options: [
                    "Raketou",
                    "Pomocí hvězdného prachu",
                    "Odletem s hejnem ptáků",
                    "Nechal se uštknout hadem"
                ],
                correctAnswer: 3
            }
        ]
    },
    {
        title: "Na západní frontě klid",
        questions: [
            {
                question: "Kdo je autorem románu Na západní frontě klid?",
                options: [
                    "Ernest Hemingway",
                    "Erich Maria Remarque",
                    "Henri Barbusse",
                    "Jaroslav Hašek"
                ],
                correctAnswer: 1
            },
            {
                question: "Ve které válce se odehrává děj románu?",
                options: [
                    "V druhé světové válce",
                    "V třicetileté válce",
                    "V první světové válce",
                    "V napoleonských válkách"
                ],
                correctAnswer: 2
            },
            {
                question: "Kdo je hlavním hrdinou románu?",
                options: [
                    "Paul Bäumer",
                    "Albert Kropp",
                    "Franz Kemmerich",
                    "Stanislav Katczinský"
                ],
                correctAnswer: 0
            },
            {
                question: "Co přimělo Paula a jeho spolužáky vstoupit do armády?",
                options: [
                    "Povinný odvod",
                    "Touha po dobrodružství",
                    "Vlastenecké projevy jejich učitele Kantorerka",
                    "Finanční odměna"
                ],
                correctAnswer: 2
            },
            {
                question: "Který z Paulových přátel zemře jako první?",
                options: [
                    "Albert Kropp",
                    "Müller",
                    "Tjaden",
                    "Kemmerich"
                ],
                correctAnswer: 3
            },
            {
                question: "Jaký je hlavní postoj Paula k válce?",
                options: [
                    "Považuje ji za vlasteneckou povinnost",
                    "Je nadšený a vidí v ní smysl",
                    "Je deziluzionovaný a vidí válku jako nesmyslnou",
                    "Je lhostejný k válečnému dění"
                ],
                correctAnswer: 2
            },
            {
                question: "Co se stane s Paulem, když se vrátí domů na dovolenou?",
                options: [
                    "Je šťastný a odpočinutý",
                    "Cítí se jako cizinec a nepatřící do civilního světa",
                    "Již se nikdy nevrátí na frontu",
                    "Je uvítán jako hrdina"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo je Katczinský v románu?",
                options: [
                    "Paulův velitel",
                    "Starší voják, který se stane Paulovým mentorem",
                    "Lékař v polní nemocnici",
                    "Paulův učitel z gymnázia"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak zemře Katczinský?",
                options: [
                    "Při útoku plynem",
                    "V boji muž proti muži",
                    "Je zasažen malou střepinou při transportu zraněného",
                    "Spáchá sebevraždu"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak umírá Paul Bäumer?",
                options: [
                    "Je zastřelen ostřelovačem",
                    "Zemře nenápadně v klidný den, krátce před koncem války",
                    "Při útoku na nepřátelské zákopy",
                    "Na následky otravy plynem"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Proměna",
        questions: [
            {
                question: "Kdo je autorem povídky Proměna?",
                options: [
                    "Friedrich Nietzsche",
                    "Franz Kafka",
                    "Hermann Hesse",
                    "Thomas Mann"
                ],
                correctAnswer: 1
            },
            {
                question: "V co se promění hlavní hrdina Řehoř Samsa?",
                options: [
                    "V nestvůrný hmyz",
                    "V krysu",
                    "V hada",
                    "V netopýra"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaké povolání vykonával Řehoř Samsa před svou proměnou?",
                options: [
                    "Byl úředníkem",
                    "Byl učitelem",
                    "Byl obchodním cestujícím",
                    "Byl právníkem"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak reaguje Řehořova rodina na jeho proměnu?",
                options: [
                    "S pochopením a pomocí",
                    "Nejprve se snaží pomoci, později se ho straní",
                    "Okamžitě ho vyženou z domu",
                    "Zavolají policii"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo z rodiny se o Řehoře po proměně nejvíce stará?",
                options: [
                    "Otec",
                    "Matka",
                    "Sestra Markéta",
                    "Služka"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak Řehoř Samsa zemře?",
                options: [
                    "Je zabit otcem",
                    "Spáchá sebevraždu",
                    "Zemře hladem a vyčerpáním",
                    "Zemře na následky zranění"
                ],
                correctAnswer: 2
            },
            {
                question: "Co symbolizuje Řehořova proměna v povídce?",
                options: [
                    "Fyzickou nemoc",
                    "Odcizení a ztrátu identity v moderní společnosti",
                    "Trest za hříchy",
                    "Přirozený cyklus života"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak se změní ekonomická situace rodiny po Řehořově proměně?",
                options: [
                    "Zbohatnou díky pojistce",
                    "Musí začít pracovat, protože Řehoř byl živitelem rodiny",
                    "Nic se nezmění",
                    "Odstěhují se na venkov"
                ],
                correctAnswer: 1
            },
            {
                question: "Co udělá Řehořova rodina po jeho smrti?",
                options: [
                    "Uspořádá velký pohřeb",
                    "Udělá si výlet do přírody a plánuje budoucnost",
                    "Rozpadne se a každý jde vlastní cestou",
                    "Spáchá kolektivní sebevraždu"
                ],
                correctAnswer: 1
            },
            {
                question: "Jakým literárním stylem je napsána Proměna?",
                options: [
                    "Romantickým stylem",
                    "Realistickým stylem",
                    "Surrealistickým stylem",
                    "Naturalistickým stylem"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Stařec a moře",
        questions: [
            {
                question: "Kdo je autorem novely Stařec a moře?",
                options: [
                    "Jack London",
                    "Ernest Hemingway",
                    "Mark Twain",
                    "John Steinbeck"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak se jmenuje hlavní postava novely?",
                options: [
                    "Santiago",
                    "Manolin",
                    "Pedro",
                    "Miguel"
                ],
                correctAnswer: 0
            },
            {
                question: "Kolik dní neměl stařec žádný úlovek před začátkem příběhu?",
                options: [
                    "30 dní",
                    "84 dní",
                    "60 dní",
                    "100 dní"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je vztah mezi chlapcem Manolinem a starcem?",
                options: [
                    "Jsou otec a syn",
                    "Jsou dědeček a vnuk",
                    "Chlapec se od starce učil rybařit, později mu pomáhá",
                    "Jsou příbuzní"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký druh ryby stařec uloví?",
                options: [
                    "Tuňáka",
                    "Mečouna (Marlina)",
                    "Žraloka",
                    "Delfína"
                ],
                correctAnswer: 1
            },
            {
                question: "Kolik dní trvá starci boj s velkou rybou?",
                options: [
                    "1 den",
                    "2 dny",
                    "3 dny",
                    "5 dní"
                ],
                correctAnswer: 2
            },
            {
                question: "Co se stane s ulovenou rybou cestou zpět?",
                options: [
                    "Stařec ji ztratí v bouři",
                    "Žraloci ji postupně celou sežerou",
                    "Stařec ji prodá za vysokou cenu",
                    "Ryba obživne a uplave"
                ],
                correctAnswer: 1
            },
            {
                question: "Co zůstane starci z ryby, když se vrátí do přístavu?",
                options: [
                    "Celá ryba",
                    "Polovina ryby",
                    "Jen hlava, ocas a páteř",
                    "Nic"
                ],
                correctAnswer: 2
            },
            {
                question: "Co symbolizuje velká ryba v příběhu?",
                options: [
                    "Štěstí a bohatství",
                    "Lidský boj s přírodou",
                    "Důstojného protivníka a životní výzvu",
                    "Starcovo mládí"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký je závěr novely?",
                options: [
                    "Stařec se rozhodne již nikdy nelovit",
                    "Stařec spáchá sebevraždu",
                    "Stařec dostane za kostru ryby velkou odměnu",
                    "Stařec sní o lvech a plánuje další výpravu na moře"
                ],
                correctAnswer: 3
            }
        ]
    },
    {
        title: "Obraz Doriana Graye",
        questions: [
            {
                question: "Kdo je autorem románu Obraz Doriana Graye?",
                options: [
                    "Charles Dickens",
                    "Oscar Wilde",
                    "Emily Brontë",
                    "Edgar Allan Poe"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo namaloval portrét Doriana Graye?",
                options: [
                    "Lord Henry Wotton",
                    "Basil Hallward",
                    "Sibyla Vaneová",
                    "Alan Campbell"
                ],
                correctAnswer: 1
            },
            {
                question: "Co se děje s obrazem Doriana Graye v průběhu času?",
                options: [
                    "Bledne a ztrácí barvy",
                    "Zůstává stále stejný",
                    "Stárne a zachycuje Dorianovy hříchy a špatné skutky",
                    "Zmenšuje se"
                ],
                correctAnswer: 2
            },
            {
                question: "Co se děje s Dorianem Grayem v průběhu času?",
                options: [
                    "Stárne normálně",
                    "Zůstává stále mladý a krásný",
                    "Pomalu šediví",
                    "Mění se na zvíře"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo je Lord Henry Wotton?",
                options: [
                    "Dorianův sluha",
                    "Dorianův malíř",
                    "Cynik a hédonista, který Doriana ovlivňuje",
                    "Dorianův otec"
                ],
                correctAnswer: 2
            },
            {
                question: "Do koho se Dorian Gray zamiluje na začátku knihy?",
                options: [
                    "Lady Agatha",
                    "Sibyla Vaneová",
                    "Hetty Merton",
                    "Gladys"
                ],
                correctAnswer: 1
            },
            {
                question: "Co se stane se Sibylou Vaneovou?",
                options: [
                    "Provdá se za Doriana",
                    "Uteče s jiným mužem",
                    "Spáchá sebevraždu poté, co ji Dorian opustí",
                    "Odjede do Paříže studovat herectví"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký je hlavní filozofický problém díla?",
                options: [
                    "Vztah mezi uměním a realitou",
                    "Láska a její proměny",
                    "Křesťanská morálka",
                    "Společenské rozdíly"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaký literární směr představuje román Obraz Doriana Graye?",
                options: [
                    "Realismus",
                    "Romantismus",
                    "Estetismus a dekadence",
                    "Naturalismus"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak román končí?",
                options: [
                    "Dorian se ožení a žije šťastně",
                    "Dorian zaútočí na obraz nožem a sám zemře",
                    "Dorian odchází do kláštera činit pokání",
                    "Dorian je zavražděn Basilem Hallwardem"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Kytice - vybrané balady",
        questions: [
            {
                question: "Co vyvolá příchod Polednice v baladě Polednice?",
                options: [
                    "Úmyslné zaklínadlo staré ženy",
                    "Netrpělivost dítěte",
                    "Neopatrný slib",
                    "Matčina hrozba dítěti ve vzteku"
                ],
                correctAnswer: 3
            },
            {
                question: "Jak končí balada Polednice?",
                options: [
                    "Matka zachrání dítě, ale zemře vyčerpáním",
                    "Polednice odnese dítě pryč",
                    "Matka i dítě jsou zachráněny otcem",
                    "Matka v náručí udusí své dítě"
                ],
                correctAnswer: 3
            },
            {
                question: "Co symbolizuje Polednice v Erbenově baladě?",
                options: [
                    "Trest za porušení poledního klidu",
                    "Následky neuváženého vyslovení zlých slov",
                    "Pomstu za porušení přírodních zákonů",
                    "Nadpřirozenou bytost bez symbolického významu"
                ],
                correctAnswer: 1
            },
            {
                question: "Proč se dívka z Vodníka vrací do lidského světa?",
                options: [
                    "Stýská se jí po matce",
                    "Chce utéct od Vodníka navždy",
                    "Musí na zpověď do kostela",
                    "Hledá lékaře pro své dítě"
                ],
                correctAnswer: 0
            },
            {
                question: "Jakou podmínku dává Vodník dívce při návratu k matce?",
                options: [
                    "Nesmí se modlit",
                    "Musí se vrátit před setměním",
                    "Nesmí vstoupit do kostela",
                    "Nesmí nikomu říct o jeho říši"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak končí balada Vodník?",
                options: [
                    "Vodník zabije dívku",
                    "Vodník zabije jejich dítě",
                    "Dívka se dobrovolně vrátí k Vodníkovi",
                    "Matka s dcerou Vodníka přemůžou"
                ],
                correctAnswer: 1
            },
            {
                question: "Co přiměje dívku ve Svatební košili, aby následovala mrtvého milého?",
                options: [
                    "Příslib bohatství a pohodlného života",
                    "Její předchozí slib věrnosti",
                    "Touha po smrti a spojení s milým",
                    "Strach z jeho hrozeb"
                ],
                correctAnswer: 1
            },
            {
                question: "Kam vede mrtvý ženich dívku ve Svatební košili?",
                options: [
                    "Do svého zámku",
                    "Do lesa",
                    "Na hřbitov",
                    "K řece"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak se dívka zachrání ve Svatební košili?",
                options: [
                    "Pomocí svatého kříže",
                    "Útěkem do umrlčí komory a modlitbou do rána",
                    "Zaříkáváním proti duchům",
                    "Pomocí svého mrtvého bratra"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je společným tématem balad Vodník, Polednice a Svatební košile?",
                options: [
                    "Mateřská láska",
                    "Nadpřirozené bytosti zasahující do lidských osudů",
                    "Nevěra a její následky",
                    "Dětská nevinnost a čistota"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Křest sv. Vladimíra",
        questions: [
            {
                question: "Kdo je autorem satirické skladby Křest sv. Vladimíra?",
                options: [
                    "Josef Kajetán Tyl",
                    "Karel Havlíček Borovský",
                    "Svatopluk Čech",
                    "Josef Dobrovský"
                ],
                correctAnswer: 1
            },
            {
                question: "Kde byl Karel Havlíček Borovský, když psal Křest sv. Vladimíra?",
                options: [
                    "Ve vězení",
                    "V exilu v Brixenu",
                    "V Praze",
                    "Na Slovensku"
                ],
                correctAnswer: 1
            },
            {
                question: "Co symbolizuje car Vladimír v díle?",
                options: [
                    "Ruský lid",
                    "Křesťanství",
                    "Absolutistickou monarchii",
                    "Rakouského císaře"
                ],
                correctAnswer: 3
            },
            {
                question: "Co odmítl udělat bůh Perun v úvodu díla?",
                options: [
                    "Přestoupit na křesťanství",
                    "Hřímat na carův svátek",
                    "Vybírat daně",
                    "Bojovat proti nepřátelům"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak car Vladimír potrestal boha Peruna?",
                options: [
                    "Poslal ho do vyhnanství",
                    "Nechal ho popravit",
                    "Uvěznil ho",
                    "Nechal ho utopit v řece"
                ],
                correctAnswer: 3
            },
            {
                question: "Co nastalo v carově říši po Perunově utopení?",
                options: [
                    "Válka s okolními národy",
                    "Mor a hladomor",
                    "Anarchie, protože nebyl nikdo, kdo by hřímal",
                    "Povstání lidu"
                ],
                correctAnswer: 2
            },
            {
                question: "Co radí ministři carovi na konci díla?",
                options: [
                    "Vytvořit nového slovanského boha",
                    "Přijmout křesťanství",
                    "Obnovit Perunův kult",
                    "Abdikovat ve prospěch jiného panovníka"
                ],
                correctAnswer: 1
            },
            {
                question: "Proti čemu je Křest sv. Vladimíra především zaměřen?",
                options: [
                    "Proti ruskému národu",
                    "Proti spojení církve a státní moci",
                    "Proti pohanství",
                    "Proti českému národnímu obrození"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký literární žánr představuje Křest sv. Vladimíra?",
                options: [
                    "Epos",
                    "Satira",
                    "Tragédie",
                    "Román"
                ],
                correctAnswer: 1
            },
            {
                question: "V jaké době vznikl Křest sv. Vladimíra?",
                options: [
                    "Za husitských válek",
                    "Za národního obrození v 19. století",
                    "Po roce 1948",
                    "Po sametové revoluci"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Noc na Karlštejně",
        questions: [
            {
                question: "Kdo je autorem divadelní hry Noc na Karlštejně?",
                options: [
                    "Jaroslav Vrchlický",
                    "Josef Kajetán Tyl",
                    "Karel Čapek",
                    "Alois Jirásek"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaké pravidlo platilo na hradě Karlštejn podle hry?",
                options: [
                    "Nikdo nesměl opustit hrad po setmění",
                    "Ženy nesměly na hrad",
                    "Nikdo nesměl mluvit s císařem přímo",
                    "Všichni museli nosit zbraň"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo se jako žena převlečená za panoše dostal na Karlštejn?",
                options: [
                    "Královna Alžběta",
                    "Alena",
                    "Markéta Těšínská",
                    "Anežka"
                ],
                correctAnswer: 0
            },
            {
                question: "Kdo se vydává za muže, aby se mohla setkat s Peškem Hlavně?",
                options: [
                    "Královna Alžběta",
                    "Alena",
                    "Anežka",
                    "Markéta Těšínská"
                ],
                correctAnswer: 1
            },
            {
                question: "Jakou funkci zastává Pešek Hlavně?",
                options: [
                    "Purkrabí",
                    "Císařův šenk",
                    "Rytíř",
                    "Duchovní"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je hlavním tématem hry?",
                options: [
                    "Politické intriky u dvora",
                    "Boj o moc",
                    "Láska a žárlivost",
                    "Náboženské spory"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak Karel IV. reaguje, když zjistí, že na hradě jsou ženy?",
                options: [
                    "Nechá je uvěznit",
                    "Vyhostí je z hradu",
                    "Je pobaven a odpustí jim",
                    "Potrestá strážce hradu"
                ],
                correctAnswer: 2
            },
            {
                question: "Kdo je Arnošt z Pardubic v této hře?",
                options: [
                    "Císařův nepřítel",
                    "Pražský arcibiskup a císařův přítel",
                    "Otec Aleny",
                    "Šašek"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého období českých dějin je hra zasazena?",
                options: [
                    "Do doby vlády Karla IV.",
                    "Do husitských válek",
                    "Do třicetileté války",
                    "Do národního obrození"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaký je žánr díla Noc na Karlštejně?",
                options: [
                    "Historická tragédie",
                    "Veselohra (komedie)",
                    "Psychologické drama",
                    "Vážná historická hra"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Kalibův zločin",
        questions: [
            {
                question: "Kdo je autorem románu Kalibův zločin?",
                options: [
                    "Karel Václav Rais",
                    "Alois Jirásek",
                    "Božena Němcová",
                    "Jan Neruda"
                ],
                correctAnswer: 0
            },
            {
                question: "Do jakého literárního směru patří Kalibův zločin?",
                options: [
                    "Romantismus",
                    "Realismus",
                    "Naturalismus",
                    "Symbolismus"
                ],
                correctAnswer: 1
            },
            {
                question: "V jakém prostředí se odehrává román Kalibův zločin?",
                options: [
                    "V Praze",
                    "Na venkově v Podkrkonoší",
                    "Na šlechtickém dvoře",
                    "V horách na Slovensku"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo je hlavní postavou románu?",
                options: [
                    "Karla Kalibová",
                    "Lojzík Kalib",
                    "Fráňa Kalib",
                    "Vojtěch Kalib"
                ],
                correctAnswer: 3
            },
            {
                question: "Co je hlavním motivem románu?",
                options: [
                    "Sociální problémy venkova",
                    "Národnostní útlak",
                    "Válečné útrapy",
                    "Náboženské konflikty"
                ],
                correctAnswer: 0
            },
            {
                question: "S kým se Vojtěch Kalib oženil?",
                options: [
                    "S Boženou",
                    "S Barčou",
                    "S Terezou",
                    "S Marií"
                ],
                correctAnswer: 1
            },
            {
                question: "Co způsobilo konflikt mezi Kalibem a jeho ženou?",
                options: [
                    "Její nevěra",
                    "Věkový rozdíl a odlišné povahy",
                    "Náboženské rozdíly",
                    "Spory o peníze"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký zločin Vojtěch Kalib spáchal?",
                options: [
                    "Zabil svého souseda",
                    "Zabil svou ženu",
                    "Zabil svého syna",
                    "Zabil svého bratra"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak skončí Vojtěch Kalib na konci románu?",
                options: [
                    "Je odsouzen k trestu smrti",
                    "Je odsouzen k dlouhému vězení",
                    "Spáchá sebevraždu",
                    "Unikne spravedlnosti"
                ],
                correctAnswer: 1
            },
            {
                question: "Co bylo podle autora hlavní příčinou Kalibova zločinu?",
                options: [
                    "Alkoholismus",
                    "Žárlivost",
                    "Chudoba a sociální tlaky",
                    "Psychická porucha"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Farma zvířat",
        questions: [
            {
                question: "Kdo je autorem díla Farma zvířat?",
                options: [
                    "Charles Dickens",
                    "George Orwell",
                    "Aldous Huxley",
                    "William Golding"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký podtitul má kniha Farma zvířat?",
                options: [
                    "Bajka",
                    "Podobenství",
                    "Román",
                    "Alegorická pohádka"
                ],
                correctAnswer: 0
            },
            {
                question: "Která postava představuje symbol ruské revoluce (Lenina)?",
                options: [
                    "Boxer",
                    "Kuliš",
                    "Major",
                    "Napoleon"
                ],
                correctAnswer: 2
            },
            {
                question: "Kdo představuje Stalina v díle?",
                options: [
                    "Kuliš",
                    "Napoleon",
                    "Major",
                    "Pištík"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak zní původní sedmé přikázání zvířat?",
                options: [
                    "Všechna zvířata jsou si rovna",
                    "Žádné zvíře nezabije jiné zvíře",
                    "Žádné zvíře nebude spát v posteli",
                    "Žádné zvíře nebude pít alkohol"
                ],
                correctAnswer: 0
            },
            {
                question: "Jak je změněno sedmé přikázání na konci knihy?",
                options: [
                    "Všechna zvířata jsou si rovna, ale některá jsou si rovnější",
                    "Žádné zvíře nezabije jiné zvíře bez důvodu",
                    "Zvířata budou pracovat podle svých schopností",
                    "Zvíře se nesmí oblékat jako člověk"
                ],
                correctAnswer: 0
            },
            {
                question: "Jak se jmenuje kůň, který symbolizuje dělnickou třídu?",
                options: [
                    "Pištík",
                    "Benjamin",
                    "Boxer",
                    "Molina"
                ],
                correctAnswer: 2
            },
            {
                question: "Co se stane s Boxerem, když už nemůže pracovat?",
                options: [
                    "Je poslán do důchodu",
                    "Je prodán na jatka",
                    "Umírá přirozenou smrtí",
                    "Uprchne z farmy"
                ],
                correctAnswer: 1
            },
            {
                question: "Co symbolizuje větrný mlýn v knize?",
                options: [
                    "Industrializaci Ruska",
                    "Marnou snahu zvířat o lepší život",
                    "Technologický pokrok",
                    "Útlak zvířat"
                ],
                correctAnswer: 0
            },
            {
                question: "Jak končí kniha Farma zvířat?",
                options: [
                    "Vítězstvím zvířat nad lidmi",
                    "Zvířata se vzbouří proti prasatům",
                    "Lidé znovu převezmou farmu",
                    "Prasata se promění v lidi a zvířata je nemohou rozeznat od skutečných lidí"
                ],
                correctAnswer: 3
            }
        ]
    },
    {
        title: "Krysař",
        questions: [
            {
                question: "Kdo je autorem novely Krysař?",
                options: [
                    "Karel Čapek",
                    "Viktor Dyk",
                    "Karel Jaromír Erben",
                    "Alois Jirásek"
                ],
                correctAnswer: 1
            },
            {
                question: "Ve kterém městě se odehrává děj novely Krysař?",
                options: [
                    "Hameln",
                    "Praha",
                    "Vídeň",
                    "Norimberk"
                ],
                correctAnswer: 0
            },
            {
                question: "Kdo je Agnes?",
                options: [
                    "Krysařova píšťala",
                    "Krysařova žena",
                    "Krysařova milenka",
                    "Krysařova dcera"
                ],
                correctAnswer: 2
            },
            {
                question: "Kdo je otcem dítěte Agnes?",
                options: [
                    "Krysař",
                    "Sepp Jörgen",
                    "Dlouhý Kristián",
                    "Konšel Strumm"
                ],
                correctAnswer: 2
            },
            {
                question: "Co udělá Agnes, když zjistí pravdu o otci svého dítěte?",
                options: [
                    "Uteče s Krysařem",
                    "Požádá radní o pomoc",
                    "Spáchá sebevraždu skokem do propasti",
                    "Zabije Kristiána"
                ],
                correctAnswer: 2
            },
            {
                question: "Jakou schopnost má Krysařova píšťala?",
                options: [
                    "Léčí nemoci",
                    "Přivolává déšť",
                    "Přivádí krysy k šílenství",
                    "Ovládá lidi i zvířata svou melodií"
                ],
                correctAnswer: 3
            },
            {
                question: "Jak se jmenuje hora, do které Krysař odvede obyvatele města?",
                options: [
                    "Hora Koppel",
                    "Hora duchů",
                    "Hora Grálu",
                    "Hora krys"
                ],
                correctAnswer: 0
            },
            {
                question: "Který obyvatel města nepodlehne Krysařově píšťale?",
                options: [
                    "Konšel Frosch",
                    "Sepp Jörgen",
                    "Dlouhý Kristián",
                    "Farář"
                ],
                correctAnswer: 1
            },
            {
                question: "Proč Sepp Jörgen nepodlehne volání Krysařovy píšťaly?",
                options: [
                    "Je hluchý",
                    "Nese Krysaři peníze",
                    "Jde za zvukem s opožděním kvůli své prostoduchosti",
                    "Má vlastní kouzelnou píšťalu"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký literární směr reprezentuje novela Krysař?",
                options: [
                    "Realismus",
                    "Naturalismus",
                    "Symbolismus a impresionismus",
                    "Klasicismus"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Osudy dobrého vojáka Švejka za světové války",
        questions: [
            {
                question: "Kdo je autorem románu Osudy dobrého vojáka Švejka za světové války?",
                options: [
                    "Karel Čapek",
                    "Jaroslav Hašek",
                    "Vladislav Vančura",
                    "Eduard Bass"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaké povolání vykonával Josef Švejk před válkou?",
                options: [
                    "Byl úředníkem",
                    "Byl učitelem",
                    "Obchodoval se psy",
                    "Byl krejčím"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká nemoc trápí Švejka podle jeho vlastních slov?",
                options: [
                    "Tuberkulóza",
                    "Revmatismus",
                    "Malárie",
                    "Blbost"
                ],
                correctAnswer: 3
            },
            {
                question: "Jaká historická událost je impulzem k začátku románu?",
                options: [
                    "Vypuknutí první světové války",
                    "Atentát na Františka Ferdinanda d'Este",
                    "Bitva u Verdunu",
                    "Vstup USA do války"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo je nadporučík Lukáš?",
                options: [
                    "Švejkův nepřítel",
                    "Švejkův nadřízený, kterému Švejk slouží jako ordonanc",
                    "Velitel celého pluku",
                    "Švejkův spolubojovník"
                ],
                correctAnswer: 1
            },
            {
                question: "Kde končí vydaná část románu?",
                options: [
                    "Švejk se vrací domů po konci války",
                    "Švejk je zajat Rusy",
                    "Švejk je na cestě na frontu",
                    "Švejk umírá v boji"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký literární prostředek je pro román Osudy dobrého vojáka Švejka typický?",
                options: [
                    "Metafora",
                    "Satira a ironie",
                    "Hyperbola",
                    "Přirovnání"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je Švejkův charakteristický rys?",
                options: [
                    "Hrdinství a odvaha",
                    "Pesimismus a melancholie",
                    "Zdánlivá hloupost a naivita, ale ve skutečnosti chytrost",
                    "Agresivita a vznětlivost"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak se Švejk dostane do blázince?",
                options: [
                    "Kvůli svým výrokům o atentátu na Ferdinanda",
                    "Protože ukradl psa",
                    "Po bitce v hospodě",
                    "Za pokus o dezerci"
                ],
                correctAnswer: 0
            },
            {
                question: "Co je hlavním tématem románu?",
                options: [
                    "Hrdinství českých vojáků",
                    "Absurdita války a rozpad Rakouska-Uherska",
                    "Milostné vztahy za války",
                    "Politická situace v Čechách"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "R.U.R.",
        questions: [
            {
                question: "Kdo je autorem dramatu R.U.R.?",
                options: [
                    "Vladislav Vančura",
                    "Karel Čapek",
                    "Josef Čapek",
                    "František Langer"
                ],
                correctAnswer: 1
            },
            {
                question: "Co znamená zkratka R.U.R.?",
                options: [
                    "Roboti Univerzální Revoluce",
                    "Rebelové Univerzální Revolty",
                    "Rossumovi Univerzální Roboti",
                    "Robotická Univerzální Říše"
                ],
                correctAnswer: 2
            },
            {
                question: "V kterém roce měla hra R.U.R. premiéru?",
                options: [
                    "1901",
                    "1921",
                    "1935",
                    "1945"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký důležitý termín se poprvé objevil v této hře?",
                options: [
                    "Robot",
                    "Android",
                    "Cyborg",
                    "Replikant"
                ],
                correctAnswer: 0
            },
            {
                question: "Kdo vymyslel slovo 'robot'?",
                options: [
                    "Karel Čapek",
                    "Josef Čapek",
                    "Isaac Asimov",
                    "Helena Gloryová"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je hlavním tématem hry R.U.R.?",
                options: [
                    "Nebezpečí jaderných zbraní",
                    "Technologický pokrok a jeho dopady na lidstvo",
                    "Politické boje v meziválečném období",
                    "Láska v době války"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak vypadají roboti v díle R.U.R.?",
                options: [
                    "Jako mechanické stroje z kovu",
                    "Jako lidé z umělé hmoty",
                    "Jako neviditelné bytosti",
                    "Jako zvířata"
                ],
                correctAnswer: 1
            },
            {
                question: "Co způsobí vzpouru robotů?",
                options: [
                    "Žádost o vyšší platy",
                    "Touha po svobodě",
                    "Schopnost cítit bolest a emoce",
                    "Naprogramovaná chyba"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak končí drama R.U.R.?",
                options: [
                    "Lidstvo vymírá, roboti získají schopnost rozmnožovat se",
                    "Lidé zvítězí nad roboty",
                    "Roboti a lidé najdou způsob mírového soužití",
                    "Všichni roboti jsou zničeni"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaký literární žánr představuje drama R.U.R.?",
                options: [
                    "Sci-fi/Vědeckofantastické drama",
                    "Historické drama",
                    "Tragická komedie",
                    "Psychologické drama"
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "Nikola Šuhaj loupežník",
        questions: [
            {
                question: "Kdo je autorem románu Nikola Šuhaj loupežník?",
                options: [
                    "Alois Jirásek",
                    "Ivan Olbracht",
                    "Karel Čapek",
                    "Vladislav Vančura"
                ],
                correctAnswer: 1
            },
            {
                question: "V jakém regionu se odehrává děj románu?",
                options: [
                    "Na Slovensku",
                    "V Polsku",
                    "Na Podkarpatské Rusi",
                    "V Čechách"
                ],
                correctAnswer: 2
            },
            {
                question: "V jakém období se odehrává děj románu?",
                options: [
                    "Za Rakouska-Uherska",
                    "V meziválečném období po 1. světové válce",
                    "Za 2. světové války",
                    "Ve středověku"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo je Eržika?",
                options: [
                    "Nikolova matka",
                    "Nikolova manželka",
                    "Nikolova sestra",
                    "Nikolova dcera"
                ],
                correctAnswer: 1
            },
            {
                question: "Proč se Nikola Šuhaj stal loupežníkem?",
                options: [
                    "Aby se pomstil za smrt svého otce",
                    "Aby nashromáždil bohatství",
                    "Aby mohl uprchnout z vězení",
                    "Aby se vyhnul službě v rakousko-uherské armádě"
                ],
                correctAnswer: 3
            },
            {
                question: "Jak nahlíží místní obyvatelé na Nikolu?",
                options: [
                    "Jako na nebezpečného kriminálníka",
                    "Jako na zbabělce",
                    "Jako na lidového hrdinu a obránce chudých",
                    "Jako na zrádce"
                ],
                correctAnswer: 2
            },
            {
                question: "Co charakterizuje baladu jako literární útvar v souvislosti s tímto románem?",
                options: [
                    "Veselá a odlehčená atmosféra",
                    "Tragický osud hlavního hrdiny a lidová pověst",
                    "Milostná zápletka jako hlavní téma",
                    "Rozsáhlé popisy krajiny"
                ],
                correctAnswer: 1
            },
            {
                question: "Jak končí osud Nikoly Šuhaje?",
                options: [
                    "Je zabit četnickou hlídkou",
                    "Je zabit svými přáteli pro odměnu",
                    "Je uvězněn a zemře ve vězení",
                    "Unikne spravedlnosti a dožije v cizině"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký literární směr reprezentuje román Nikola Šuhaj loupežník?",
                options: [
                    "Realismus",
                    "Romantismus",
                    "Expresionismus",
                    "Socialistický realismus"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaké další dílo z Podkarpatské Rusi napsal Ivan Olbracht?",
                options: [
                    "Golet v údolí",
                    "Na východě nic nového",
                    "Advent",
                    "Obrazy z dějin národa českého"
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "Smrt krásných srnců",
        questions: [
            {
                question: "Kdo je autorem sbírky povídek Smrt krásných srnců?",
                options: [
                    "Bohumil Hrabal",
                    "Ota Pavel",
                    "Arnošt Lustig",
                    "Ladislav Fuks"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo je hlavní postavou většiny povídek ve sbírce Smrt krásných srnců?",
                options: [
                    "Autor sám",
                    "Autorův strýc",
                    "Autorův otec Leo Popper",
                    "Autorův dědeček"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaké povolání vykonával Leo Popper před válkou?",
                options: [
                    "Byl učitelem",
                    "Byl obchodním cestujícím firmy Elektrolux",
                    "Byl rybářem",
                    "Byl lékařem"
                ],
                correctAnswer: 1
            },
            {
                question: "Proč je otcův vysavač \"Nejdražší ve střední Evropě\"?",
                options: [
                    "Protože ho otec koupil v luxusním obchodě",
                    "Protože ho vyrobili ve Švýcarsku",
                    "Protože jeho prodej stál otce téměř život",
                    "Protože v něm byla ukryta rodinná klenoty"
                ],
                correctAnswer: 2
            },
            {
                question: "Co se stalo s otcem (Leo Popperem) v povídce \"Nejdražší ve střední Evropě\"?",
                options: [
                    "Byl zatčen gestapem",
                    "Emigroval do zahraničí",
                    "Ukrýval se v lesích",
                    "Bojoval v odboji"
                ],
                correctAnswer: 0
            },
            {
                question: "Proč se otec v povídce \"Smrt krásných srnců\" vydává na lov?",
                options: [
                    "Kvůli sportu a zábavě",
                    "Aby zajistil potravu pro rodinu v těžké době",
                    "Aby připravil dárek k narozeninám",
                    "Aby se pomstil místnímu hajnému"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo pomáhá otci při lovu srnců v titulní povídce?",
                options: [
                    "Autorův bratr",
                    "Místní pytlák",
                    "Pes jménem Holan",
                    "Hajný"
                ],
                correctAnswer: 2
            },
            {
                question: "Proč loví otec v povídce \"Kapři pro Wehrmacht\" ryby?",
                options: [
                    "Pro vlastní potěšení",
                    "Aby je prodal na černém trhu",
                    "Aby je odevzdal německým úřadům",
                    "Aby jimi nakrmil svou rodinu před transportem do koncentračního tábora"
                ],
                correctAnswer: 3
            },
            {
                question: "Jaký žánr představuje sbírka Smrt krásných srnců?",
                options: [
                    "Dobrodružný román",
                    "Historická fikce",
                    "Autobiografické povídky",
                    "Detektivní příběhy"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaké období českých dějin zachycují povídky ve sbírce Smrt krásných srnců?",
                options: [
                    "První světovou válku",
                    "Období první republiky a druhou světovou válku",
                    "Poválečný komunistický režim",
                    "Pražské jaro a normalizaci"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Ostře sledované vlaky",
        questions: [
            {
                question: "Kdo je autorem novely Ostře sledované vlaky?",
                options: [
                    "Milan Kundera",
                    "Josef Škvorecký",
                    "Bohumil Hrabal",
                    "Václav Havel"
                ],
                correctAnswer: 2
            },
            {
                question: "Jak se jmenuje hlavní hrdina novely Ostře sledované vlaky?",
                options: [
                    "Miloš Hrma",
                    "Jan Dítě",
                    "Jiří Menzel",
                    "Václav Neckář"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaké povolání vykonává Miloš Hrma?",
                options: [
                    "Je lékařem",
                    "Je výpravčím na železniční stanici",
                    "Je vojákem",
                    "Je učitelem"
                ],
                correctAnswer: 1
            },
            {
                question: "V jakém období se odehrává děj novely?",
                options: [
                    "Za první světové války",
                    "V období první republiky",
                    "Za druhé světové války",
                    "V době komunistického režimu"
                ],
                correctAnswer: 2
            },
            {
                question: "Co trápí hlavního hrdinu v osobním životě?",
                options: [
                    "Problémy s alkoholem",
                    "Sexuální neúspěch a nejistota",
                    "Nevyléčitelná nemoc",
                    "Ztráta rodiny během války"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo je výpravčí Hubička?",
                options: [
                    "Milošův otec",
                    "Milošův nadřízený a kolega",
                    "Nepřítel hlavního hrdiny",
                    "Německý důstojník"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký skandál způsobí výpravčí Hubička?",
                options: [
                    "Opije se ve službě",
                    "Ukradne peníze ze stanice",
                    "Otiskne razítka na zadek telegrafistky",
                    "Zastřelí německého důstojníka"
                ],
                correctAnswer: 2
            },
            {
                question: "Kdo pomůže Milošovi překonat jeho osobní problém?",
                options: [
                    "Telegrafistka Máša",
                    "Výpravčí Hubička",
                    "Odbojářka Viktoria Freie",
                    "Přednosta stanice"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký čin spáchá Miloš na konci novely?",
                options: [
                    "Spáchá sebevraždu",
                    "Podílí se na atentátu na německý muniční vlak",
                    "Uprchne ze stanice",
                    "Zradí odbojáře Němcům"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo zfilmoval novelu Ostře sledované vlaky?",
                options: [
                    "Jiří Menzel",
                    "Miloš Forman",
                    "Karel Kachyňa",
                    "Jan Svěrák"
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "Postřižiny",
        questions: [
            {
                question: "Kdo je autorem novely Postřižiny?",
                options: [
                    "Karel Čapek",
                    "Josef Škvorecký",
                    "Bohumil Hrabal",
                    "Ivan Klíma"
                ],
                correctAnswer: 2
            },
            {
                question: "Kdo je hlavní postavou a vypravěčkou Postřižin?",
                options: [
                    "Francin",
                    "Maryška",
                    "Pepin",
                    "Doktor Gruntorád"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaké povolání zastává manžel hlavní hrdinky (Francin)?",
                options: [
                    "Je lékařem",
                    "Je starostou města",
                    "Je správcem pivovaru",
                    "Je učitelem"
                ],
                correctAnswer: 2
            },
            {
                question: "Kdo je strýc Pepin?",
                options: [
                    "Otec hlavní hrdinky",
                    "Bratr Francina",
                    "Soused z města",
                    "Lékař pivovaru"
                ],
                correctAnswer: 1
            },
            {
                question: "Co udělá Maryška s dlouhými vlasy, po kterých je novela pojmenována?",
                options: [
                    "Nechá si je ostříhat",
                    "Obarví je na růžovo",
                    "Splétá je do složitých účesů",
                    "Prodá je parukáři"
                ],
                correctAnswer: 0
            },
            {
                question: "Jakou povahu má Maryška?",
                options: [
                    "Je tichá a poslušná",
                    "Je temperamentní a miluje svobodu",
                    "Je vypočítavá a lstivá",
                    "Je depresivní a uzavřená"
                ],
                correctAnswer: 1
            },
            {
                question: "V jakém období se odehrává děj Postřižin?",
                options: [
                    "V období první republiky",
                    "Za druhé světové války",
                    "Za komunistického režimu",
                    "Na přelomu 19. a 20. století"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaký je vzájemný vztah mezi Francinem a jeho bratrem Pepinem?",
                options: [
                    "Hluboce se nenávidí",
                    "Jsou si velmi blízcí",
                    "Francin má ze živelného Pepina obavy a spíše ho trpí",
                    "Nikdy se nepotkali"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaký je vztah Maryšky k Pepinovi?",
                options: [
                    "Nenávidí ho a snaží se ho vyhnat",
                    "Obdivuje jeho živelnost a má ho ráda",
                    "Je k němu lhostejná",
                    "Miluje ho více než Francina"
                ],
                correctAnswer: 1
            },
            {
                question: "Kdo zfilmoval novelu Postřižiny?",
                options: [
                    "Miloš Forman",
                    "Jiří Menzel",
                    "Věra Chytilová",
                    "Jan Svěrák"
                ],
                correctAnswer: 1
            }
        ]
    }
]

const autoriQuestions = [
    {
        title: "Karel Jaromír Erben",
        questions: [
            {
                question: "Které dílo od K. J. Erbena jste četli?",
                options: [
                    "Kytice",
                    "Máj",
                    "Labyrint světa a ráj srdce",
                    "Babička"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal K. J. Erben kromě Kytice?",
                options: [
                    "Maryša",
                    "České pohádky",
                    "Slezské písně",
                    "Povídky malostranské"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba K. J. Erbena?",
                options: [
                    "Klasicismus",
                    "Romantismus a národní obrození",
                    "Realismus",
                    "Moderna"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je charakteristika romantismu a národního obrození?",
                options: [
                    "Romantismus kladl důraz na city, individualismus, přírodu a mystiku, zatímco národní obrození usilovalo o posílení národní identity, rozvoj jazyka a kultury",
                    "Oba směry se zaměřovaly na průmyslovou revoluci a technický pokrok",
                    "Romantismus byl ryze český směr, zatímco národní obrození mělo evropský kontext",
                    "Národní obrození se soustředilo pouze na poezii a romantismus pouze na drama"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem K. J. Erbena?",
                options: [
                    "Jan Neruda",
                    "Karel Čapek",
                    "Božena Němcová",
                    "Viktor Dyk"
                ],
                correctAnswer: 2
            },
            {
                question: "Který zahraniční autor byl současníkem K. J. Erbena?",
                options: [
                    "James Joyce",
                    "Charles Dickens",
                    "Ernest Hemingway",
                    "Franz Kafka"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "William Shakespeare",
        questions: [
            {
                question: "Které dílo od W. Shakespeara jste četli?",
                options: [
                    "Romeo a Julie",
                    "Othello",
                    "Malý princ",
                    "Starec a moře"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další známé dílo napsal William Shakespeare?",
                options: [
                    "Božská komedie",
                    "Hamlet",
                    "Don Quijote",
                    "Válka a mír"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba W. Shakespeara?",
                options: [
                    "Renesance a humanismus",
                    "Romantismus",
                    "Realismus",
                    "Moderna"
                ],
                correctAnswer: 0
            },
            {
                question: "Jaká je charakteristika renesance a humanismu?",
                options: [
                    "Renesance byla obdobím znovuzrození antických ideálů, důrazu na vědu a umění, zatímco humanismus zdůrazňoval hodnotu člověka, rozum a kritické myšlení",
                    "Oba směry se soustředily na náboženské reformy a odmítaly antickou kulturu",
                    "Renesance byla výhradně literární směr, zatímco humanismus ovlivnil pouze politiku",
                    "Humanismus se zabýval pouze filozofií, zatímco renesance pouze výtvarným uměním"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který autor je součastníkem?",
                options: [
                    "Jan Neruda",
                    "Kryštof Harant z Polžic a Bezdružic",
                    "Karel Havlíček Borovský",
                    "Karel Jaromír Erben"
                ],
                correctAnswer: 1
            },
            {
                question: "Který zahraniční autor byl současníkem W. Shakespeara?",
                options: [
                    "Miguel de Cervantes",
                    "Johann Wolfgang Goethe",
                    "Dante Alighieri",
                    "Victor Hugo"
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "Karel Havlíček Borovský",
        questions: [
            {
                question: "Které dílo od K. H. Borovského jste četli?",
                options: [
                    "Máj",
                    "Křest sv. Vladimíra",
                    "Kytice",
                    "Babička"
                ],
                correctAnswer: 1
            },
            {
                question: "Které další známé dílo napsal K. H. Borovský?",
                options: [
                    "Tyrolské elegie",
                    "Máj",
                    "Kytice",
                    "R.U.R."
                ],
                correctAnswer: 0
            },
            {
                question: "Do jakého literárního období patří tvorba K. H. Borovského?",
                options: [
                    "Klasicismus",
                    "Národní obrození",
                    "Moderna",
                    "Postmoderna"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je charakteristika národního obrození?",
                options: [
                    "Hnutí zaměřené na obnovu českého jazyka, kultury a identity v době germanizace, rozvoj literatury, vědy a národního povědomí",
                    "Období, kdy se Česká republika stala samostatným státem po rozpadu Rakouska-Uherska",
                    "Směr zaměřený na průmyslový pokrok a rozvoj technologií v 19. století",
                    "Literární období, ve kterém dominovala pouze poezie a divadelní hry"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem K. H. Borovského?",
                options: [
                    "Karel Čapek",
                    "Božena Němcová",
                    "Franz Kafka",
                    "Jaroslav Hašek"
                ],
                correctAnswer: 1
            },
            {
                question: "Který zahraniční autor byl současníkem K. H. Borovského?",
                options: [
                    "J. W. Goethe",
                    "Ernest Hemingway",
                    "Charles Dickens",
                    "William Shakespeare"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Oscar Wilde",
        questions: [
            {
                question: "Které dílo od O. Wildea jste četli?",
                options: [
                    "Obraz Doriana Graye",
                    "Petr a Lucie",
                    "R.U.R.",
                    "Proměna"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal Oscar Wilde?",
                options: [
                    "Romeo a Julie",
                    "Strýček Váňa",
                    "Jak je důležité míti Filipa",
                    "Farma zvířat"
                ],
                correctAnswer: 2
            },
            {
                question: "Do jakého literárního směru patří tvorba O. Wildea?",
                options: [
                    "Realismus",
                    "Romantismus",
                    "Dekadence",
                    "Existencialismus"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je charakteristika dekadence?",
                options: [
                    "Umělecký směr konce 19. století spojený s úpadkem, pesimismem, provokací a hledáním krásy v morbiditě a extravaganci",
                    "Období velkého kulturního a morálního rozkvětu spojené s optimismem",
                    "Hnutí, které kladlo důraz na realistické zobrazování každodenního života",
                    "Směr zaměřený na národní obrození a podporu vlastenectví"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem O. Wildea?",
                options: [
                    "Karel Čapek",
                    "Jaroslav Vrchlický",
                    "Božena Němcová",
                    "Karel Jaromír Erben"
                ],
                correctAnswer: 1
            },
            {
                question: "Který zahraniční autor byl současníkem O. Wildea?",
                options: [
                    "Franz Kafka",
                    "William Shakespeare",
                    "Anton Pavlovič Čechov",
                    "Ernest Hemingway"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Franz Kafka",
        questions: [
            {
                question: "Které dílo od F. Kafky jste četli?",
                options: [
                    "Malý princ",
                    "Proměna",
                    "R.U.R.",
                    "Stařec a moře"
                ],
                correctAnswer: 1
            },
            {
                question: "Které další významné dílo napsal Franz Kafka?",
                options: [
                    "Krysař",
                    "Proces",
                    "Ostře sledované vlaky",
                    "Farma zvířat"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního směru patří tvorba F. Kafky?",
                options: [
                    "Realismus",
                    "Existencialismus a expresionismus",
                    "Romantismus",
                    "Klasicismus"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je charakteristika existencialismu a expresionismu?",
                options: [
                    "Existencialismus se zaměřuje na individuální existenci, svobodu a úzkost, zatímco expresionismus vyjadřuje subjektivní pocity a vnitřní krize prostřednictvím deformace reality",
                    "Existencialismus oslavuje ideály racionalismu a vědeckého pokroku, expresionismus se soustředí na objektivní realitu",
                    "Existencialismus je zaměřen na náboženské otázky, expresionismus na technické inovace",
                    "Oba směry jsou zaměřeny na vnitřní harmonii a optimismus"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem F. Kafky?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Bohumil Hrabal",
                    "Karel Havlíček Borovský"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je charakteristické pro literární svět F. Kafky?",
                options: [
                    "Optimismus a víra v lidský pokrok",
                    "Absurdita, odcizení a bezvýchodnost",
                    "Romantická láska a vášeň",
                    "Realistické zobrazení venkova"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Karel Čapek",
        questions: [
            {
                question: "Které dílo od K. Čapka jste četli?",
                options: [
                    "R.U.R.",
                    "Proměna",
                    "Malý princ",
                    "Na západní frontě klid"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal Karel Čapek?",
                options: [
                    "Válka s mloky",
                    "Osudy dobrého vojáka Švejka",
                    "Krysař",
                    "Farma zvířat"
                ],
                correctAnswer: 0
            },
            {
                question: "Do jakého literárního období patří tvorba K. Čapka?",
                options: [
                    "Národní obrození",
                    "Romantismus",
                    "Meziválečná literatura",
                    "Postmodernismus"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je charakteristika meziválečné literatury?",
                options: [
                    "Literatura mezi dvěma světovými válkami reflektovala pocity ztráty, chaosu, existenciálních otázek a rozporů v postválečné společnosti, často se zaměřovala na kritiku totalitních režimů a úpadku tradičních hodnot",
                    "Období, kdy literatura oslavovala technický pokrok a industrializaci",
                    "Literatura se soustředila na ideály národní obrody a vlastenectví",
                    "Literární tvorba v tomto období byla převážně zaměřena na romantiku a idealizaci minulosti"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem K. Čapka?",
                options: [
                    "Karel Jaromír Erben",
                    "Jaroslav Hašek",
                    "Bohumil Hrabal",
                    "Karel Havlíček Borovský"
                ],
                correctAnswer: 1
            },
            {
                question: "Co je typické pro dílo K. Čapka?",
                options: [
                    "Vědeckofantastické prvky a humanistické poselství",
                    "Naturalistické zobrazení venkova",
                    "Popis válečných zkušeností",
                    "Kritika národního obrození"
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        title: "Ernest Hemingway",
        questions: [
            {
                question: "Které dílo od E. Hemingwaye jste četli?",
                options: [
                    "Malý princ",
                    "Stařec a moře",
                    "Na západní frontě klid",
                    "Farma zvířat"
                ],
                correctAnswer: 1
            },
            {
                question: "Které další významné dílo napsal Ernest Hemingway?",
                options: [
                    "Proces",
                    "Komu zvoní hrana",
                    "1984",
                    "Proměna"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba E. Hemingwaye?",
                options: [
                    "Renesance",
                    "Romantismus",
                    "Ztracená generace, americká moderna",
                    "Postmoderna"
                ],
                correctAnswer: 2
            },
            {
                question: "Který z těchto českých autorů byl přibližným současníkem E. Hemingwaye?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Karel Havlíček Borovský",
                    "Viktor Dyk"
                ],
                correctAnswer: 1
            },
            {
                question: "Který zahraniční autor byl současníkem E. Hemingwaye?",
                options: [
                    "Miguel de Cervantes",
                    "William Shakespeare",
                    "Exupéry",
                    "Charles Dickens"
                ],
                correctAnswer: 2
            },
            {
                question: "Co je to metoda ledovce?",
                options: [
                    "Literární technika, kdy autor odhaluje pouze část příběhu, zatímco hlubší významy zůstávají skryté",
                    "Způsob tisku na ledové povrchy",
                    "Metoda psychologie pro odhalení podvědomých motivací",
                    "Technika malby využívající vrstvení barev"
                ],
                "correctAnswer": 0
            },
            {
                question: "Co charakterizuje ztracenou generaci?",
                options: [
                    "Generace spisovatelů píšících o technologickém pokroku a budoucnosti",
                    "Literární směr zaměřený na romantické a idealizované příběhy",
                    "Skupina amerických autorů, kteří zažili trauma z první světové války a ve své tvorbě vyjadřovali deziluzi a odcizení",
                    "Generace autorů, kteří se specializovali na dětskou literaturu"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        title: "George Orwell",
        questions: [
            {
                question: "Které dílo od G. Orwella jste četli?",
                options: [
                    "Farma zvířat",
                    "Proměna",
                    "R.U.R.",
                    "Stařec a moře"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal George Orwell?",
                options: [
                    "Na západní frontě klid",
                    "1984",
                    "Malý princ",
                    "Proces"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba G. Orwella?",
                options: [
                    "Romantismus",
                    "Moderna 20. století",
                    "Renesance",
                    "Klasicismus"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je charakteristika moderny 20. století?",
                options: [
                    "Moderna 20. století zahrnovala experimenty v umění a literatuře, zaměřovala se na subjektivní prožívání světa, odklon od tradičních hodnot a forem, a vyjadřovala frustraci z moderního života a rychlých změn",
                    "Období, kdy byla literatura přísně realistická a zaměřená na každodenní život",
                    "Směr související s obrodou klasických antických ideálů a oslavou racionality",
                    "Literatura 20. století byla převážně zaměřena na duchovní a náboženské hodnoty"
                ],
                "correctAnswer": 0
            },            
            {
                question: "Který z těchto českých autorů byl přibližným současníkem G. Orwella?",
                options: [
                    "Karel Havlíček Borovský",
                    "Karel Jaromír Erben",
                    "Bohumil Hrabal",
                    "Viktor Dyk"
                ],
                correctAnswer: 2
            },
            {
                question: "Co je charakteristické pro díla G. Orwella?",
                options: [
                    "Romantická láska a vášeň",
                    "Popis španělské občanské války a kritika totalitních režimů",
                    "Naturalistické zobrazení venkova",
                    "Vědeckofantastické prvky bez politického podtextu"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Bohumil Hrabal",
        questions: [
            {
                question: "Která díla od B. Hrabala jste četli?",
                options: [
                    "R.U.R. a Proměna",
                    "Ostře sledované vlaky a Postřižiny",
                    "Krysař a Farma zvířat",
                    "Stařec a moře a Malý princ"
                ],
                correctAnswer: 1
            },
            {
                question: "Které další významné dílo napsal Bohumil Hrabal?",
                options: [
                    "Obsluhoval jsem anglického krále",
                    "R.U.R.",
                    "Nikola Šuhaj loupežník",
                    "Farma zvířat"
                ],
                correctAnswer: 0
            },
            {
                question: "Do jakého literárního období patří tvorba B. Hrabala?",
                options: [
                    "Národní obrození",
                    "Meziválečná literatura",
                    "Česká literatura 2. poloviny 20. století",
                    "Romantismus"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je charakteristika české literatury 2. poloviny 20. století?",
                options: [
                    "Literatura 2. poloviny 20. století v Československu byla silně ovlivněna totalitními režimy, cenzurou a represí, přičemž autoři často používali alegorie a symboliku k vyjádření kritiky a odporu vůči totalitní moci",
                    "Toto období se vyznačovalo především návratem k romantismu a idealizaci minulosti",
                    "Literární tvorba se zaměřovala na oslavu socialistického realismu a pokroku",
                    "Autoři této doby se soustředili výhradně na popis ideálního socialistického člověka"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem B. Hrabala?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Havlíček Borovský",
                    "Ota Pavel",
                    "Karel Čapek"
                ],
                correctAnswer: 2
            },
            {
                question: "Co je charakteristické pro dílo B. Hrabala?",
                options: [
                    "Sci-fi prvky a kritika technického pokroku",
                    "Hovorový jazyk, hospodské příběhy a poetika periferie",
                    "Národnostní tematika a vlastenectví",
                    "Naturalistické popisy přírodních scenérií"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Ota Pavel",
        questions: [
            {
                question: "Které dílo od O. Pavla jste četli?",
                options: [
                    "Smrt krásných srnců",
                    "R.U.R.",
                    "Proměna",
                    "Krysař"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal Ota Pavel?",
                options: [
                    "Nikola Šuhaj loupežník",
                    "Jak jsem potkal ryby",
                    "Postřižiny",
                    "Farma zvířat"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba O. Pavla?",
                options: [
                    "Meziválečná literatura",
                    "Národní obrození",
                    "Česká literatura 2. poloviny 20. století",
                    "Literatura České moderny"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je charakteristika české literatury 2. poloviny 20. století?",
                options: [
                    "Toto období se vyznačovalo především návratem k romantismu a idealizaci minulosti",
                    "Literatura 2. poloviny 20. století v Československu byla silně ovlivněna totalitními režimy, cenzurou a represí, přičemž autoři často používali alegorie a symboliku k vyjádření kritiky a odporu vůči totalitní moci",
                    "Literární tvorba se zaměřovala na oslavu socialistického realismu a pokroku",
                    "Autoři této doby se soustředili výhradně na popis ideálního socialistického člověka"
                ],
                "correctAnswer": 1
            },
            {
                question: "Který z těchto českých autorů byl současníkem O. Pavla?",
                options: [
                    "Karel Čapek",
                    "Karel Jaromír Erben",
                    "Bohumil Hrabal",
                    "Viktor Dyk"
                ],
                correctAnswer: 2
            },
            {
                question: "Co je charakteristické pro dílo O. Pavla?",
                options: [
                    "Kritika společnosti a satira",
                    "Autobiografické prvky, vztah k přírodě a sportovní tematika",
                    "Vědeckofantastické náměty",
                    "Vlastenecké básně a balady"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Romain Rolland",
        questions: [
            {
                question: "Které dílo od R. Rollanda jste četli?",
                options: [
                    "Petr a Lucie",
                    "Proměna",
                    "R.U.R.",
                    "Farma zvířat"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal Romain Rolland?",
                options: [
                    "Proces",
                    "Jan Kryštof",
                    "Stařec a moře",
                    "1984"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba R. Rollanda?",
                options: [
                    "Romantismus",
                    "Klasicismus",
                    "Moderna, 1. polovina 20. století",
                    "Postmoderna"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je charakteristika moderny v 1. polovině 20. století?",
                options: [
                    "Moderna v první polovině 20. století se zaměřovala na radikální experimenty v literatuře a umění, vyjádření subjektivních pocitů, odklon od tradičních form a zkoumání chaosu a nejistoty moderního života",
                    "Období, kdy literatura byla silně ovlivněna náboženskými tématy a oslavovala tradice minulých věků",
                    "Literatura tohoto období byla převážně realistická a zaměřená na sociální problémy dělnické třídy",
                    "Toto období vyzdvihovalo především historické romány a epické příběhy"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem R. Rollanda?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Karel Havlíček Borovský",
                    "Bohumil Hrabal"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaké je hlavní téma díla Petr a Lucie?",
                options: [
                    "Přátelství mezi dvěma muži během revoluce",
                    "Tragická láska mladého páru v období 1. světové války",
                    "Boj za nezávislost kolonií",
                    "Život na venkově v 19. století"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Antoine de Saint-Exupéry",
        questions: [
            {
                question: "Které dílo od A. de Saint-Exupéryho jste četli?",
                options: [
                    "Stařec a moře",
                    "Malý princ",
                    "Na západní frontě klid",
                    "Proměna"
                ],
                correctAnswer: 1
            },
            {
                question: "Které další významné dílo napsal Antoine de Saint-Exupéry?",
                options: [
                    "Noční let",
                    "Farma zvířat",
                    "1984",
                    "Petr a Lucie"
                ],
                correctAnswer: 0
            },
            {
                question: "Do jakého literárního období patří tvorba A. de Saint-Exupéryho?",
                options: [
                    "Romantismus",
                    "Mezi Válečná",
                    "Renesance",
                    "Postmoderna"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je charakteristika meziválečné literatury?",
                options: [
                    "Literatura mezi dvěma světovými válkami reflektovala pocity ztráty, chaosu, existenciálních otázek a rozporů v postválečné společnosti, často se zaměřovala na kritiku totalitních režimů a úpadku tradičních hodnot",
                    "Období, kdy literatura oslavovala technický pokrok a industrializaci",
                    "Literatura se soustředila na ideály národní obrody a vlastenectví",
                    "Literární tvorba v tomto období byla převážně zaměřena na romantiku a idealizaci minulosti"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem A. de Saint-Exupéryho?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Karel Havlíček Borovský",
                    "Viktor Dyk"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký je hlavní motiv díla Malý princ?",
                options: [
                    "Kritika společnosti",
                    "Dobrodružná cesta do vesmíru",
                    "Filosofická alegorická pohádka o hodnotách, lásce a přátelství",
                    "Historie letectví"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Erich Maria Remarque",
        questions: [
            {
                question: "Které dílo od E. M. Remarqua jste četli?",
                options: [
                    "Stařec a moře",
                    "Malý princ",
                    "Na západní frontě klid",
                    "Farma zvířat"
                ],
                correctAnswer: 2
            },
            {
                question: "Které další významné dílo napsal Erich Maria Remarque?",
                options: [
                    "Proces",
                    "Tři kamarádi",
                    "1984",
                    "Petr a Lucie"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba E. M. Remarqua?",
                options: [
                    "Romantismus",
                    "Meziválečná literatura",
                    "Klasicismus",
                    "Postmoderna"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je charakteristika meziválečné literatury?",
                options: [
                    "Literatura mezi dvěma světovými válkami reflektovala pocity ztráty, chaosu, existenciálních otázek a rozporů v postválečné společnosti, často se zaměřovala na kritiku totalitních režimů a úpadku tradičních hodnot",
                    "Období, kdy literatura oslavovala technický pokrok a industrializaci",
                    "Literatura se soustředila na ideály národní obrody a vlastenectví",
                    "Literární tvorba v tomto období byla převážně zaměřena na romantiku a idealizaci minulosti"
                ],
                "correctAnswer": 0
            },
            {
                question: "Který z těchto českých autorů byl současníkem E. M. Remarqua?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Karel Havlíček Borovský",
                    "Bohumil Hrabal"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaké hlavní téma zpracovává dílo Na západní frontě klid?",
                options: [
                    "Romantický příběh z doby napoleonských válek",
                    "Zážitky německých vojáků během 1. světové války a kritika války",
                    "Dobrodružný román o kolonizaci Ameriky",
                    "Mezilidské vztahy na aristokratickém dvoře"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Viktor Dyk",
        questions: [
            {
                question: "Které dílo od V. Dyka jste četli?",
                options: [
                    "Krysař",
                    "R.U.R.",
                    "Proměna",
                    "Farma zvířat"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal Viktor Dyk?",
                options: [
                    "Válka s mloky",
                    "Milá sedmi loupežníků",
                    "Osudy dobrého vojáka Švejka",
                    "Nikola Šuhaj loupežník"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba V. Dyka?",
                options: [
                    "Národní obrození",
                    "Romantismus",
                    "Anarchističtí buřiči",
                    "Normalizace"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je charakteristika anarchistických buřičů?",
                options: [
                    "Anarchističtí buřiči byli spisovatelé, kteří kritizovali společenské a politické normy, odmítali autoritu a byli proti konformismu, často se zaměřovali na vyjádření svobody a revolty proti systémům moci",
                    "Tito autoři se soustředili na oslavování tradičních hodnot a návrat k patriarchálním strukturám",
                    "Buřiči se zaměřovali na harmonizaci vztahů mezi jednotlivci a státem, propagovali spolupráci s vládními institucemi",
                    "Tato skupina autorů byla známá především svou romantickou vlnou a oslavou přírody"
                ],
                "correctAnswer": 0
            },            
            {
                question: "Který z těchto českých autorů byl současníkem V. Dyka?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Bohumil Hrabal",
                    "Karel Havlíček Borovský"
                ],
                correctAnswer: 1
            },
            {
                question: "Na jakém původním příběhu je založena novela Krysař?",
                options: [
                    "Na lidové pohádce o zlém černokněžníkovi",
                    "Na historických událostech z doby husitských válek",
                    "Na německé pověsti o krysaři z města Hameln",
                    "Na autobiografických zážitcích autora"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        title: "Jaroslav Hašek",
        questions: [
            {
                question: "Které dílo od J. Haška jste četli?",
                options: [
                    "R.U.R.",
                    "Osudy dobrého vojáka Švejka za světové války",
                    "Proměna",
                    "Farma zvířat"
                ],
                correctAnswer: 1
            },
            {
                question: "Kterou další povídku napsal Jaroslav Hašek?",
                options: [
                    "R.U.R.",
                    "Dějiny strany mírného pokroku v mezích zákona",
                    "Krysař",
                    "Nikola Šuhaj loupežník"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba J. Haška?",
                options: [
                    "Národní obrození",
                    "Romantismus",
                    "Meziválečná literatura",
                    "Postmoderna"
                ],
                correctAnswer: 2
            },
            {
                question: "Který z těchto českých autorů byl současníkem J. Haška?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Bohumil Hrabal",
                    "Karel Havlíček Borovský"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaký literární prostředek je charakteristický pro dílo Osudy dobrého vojáka Švejka?",
                options: [
                    "Metafora a symbolika",
                    "Satira, ironie a humor",
                    "Patetičnost a vznešenost",
                    "Lyričnost a obraznost"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Ivan Olbracht",
        questions: [
            {
                question: "Které dílo od I. Olbrachta jste četli?",
                options: [
                    "R.U.R.",
                    "Nikola Šuhaj loupežník",
                    "Krysař",
                    "Farma zvířat"
                ],
                correctAnswer: 1
            },
            {
                question: "Které další významné dílo napsal Ivan Olbracht?",
                options: [
                    "Osudy dobrého vojáka Švejka",
                    "Golet v údolí",
                    "Proměna",
                    "Stařec a moře"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba I. Olbrachta?",
                options: [
                    "Národní obrození",
                    "Romantismus",
                    "Meziválečná literatura",
                    "Normalizace"
                ],
                correctAnswer: 2
            },
            {
                question: "Který z těchto českých autorů byl současníkem I. Olbrachta?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Bohumil Hrabal",
                    "Karel Havlíček Borovský"
                ],
                correctAnswer: 1
            },
            {
                question: "V jakém prostředí se odehrává román Nikola Šuhaj loupežník?",
                options: [
                    "V Praze během 1. světové války",
                    "Na Podkarpatské Rusi (Zakarpatská Ukrajina) v meziválečném období",
                    "V jihočeském kraji během husitských válek",
                    "V Brně na přelomu 19. a 20. století"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Eduard Petiška",
        questions: [
            {
                question: "Které dílo od E. Petišky jste četli?",
                options: [
                    "Staré řecké báje a pověsti",
                    "R.U.R.",
                    "Proměna",
                    "Krysař"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal Eduard Petiška?",
                options: [
                    "Děti z Bullerbynu",
                    "Martínkova čítanka",
                    "Ferda Mravenec",
                    "Babička"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba E. Petišky?",
                options: [
                    "Národní obrození",
                    "Meziválečná literatura",
                    "Česká literatura 2. poloviny 20. století",
                    "Renesance"
                ],
                correctAnswer: 2
            },
            {
                question: "Jaká je charakteristika antiky?",
                options: [
                    "Antika je období starověkých civilizací, zejména Řecka a Říma, zaměřující se na rozvoj filozofie, vědy, umění a literatury, s důrazem na ideály harmonie, rovnováhy a rozumu",
                    "Období, kdy literatura byla převážně zaměřena na duchovní témata a náboženské texty",
                    "Literatura tohoto období se soustředila na zobrazování lidských emocí a vnitřních konfliktů",
                    "Antika byla zaměřena výhradně na realistické a praktické aspekty života"
                ],
                "correctAnswer": 0
            },            
            {
                question: "Který z těchto českých autorů byl současníkem E. Petišky?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Havlíček Borovský",
                    "Bohumil Hrabal",
                    "Karel Čapek"
                ],
                correctAnswer: 2
            },
            {
                question: "Čím je charakteristická tvorba E. Petišky?",
                options: [
                    "Experimentální poezií",
                    "Popularizací mytologie a adaptacemi klasických příběhů pro děti a mládež",
                    "Naturalistickým popisem venkova",
                    "Sci-fi příběhy"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Jaroslav Vrchlický",
        questions: [
            {
                question: "Které dílo od J. Vrchlického znáte?",
                options: [
                    "Noc na Karlštejně",
                    "R.U.R.",
                    "Proměna",
                    "Krysař"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal Jaroslav Vrchlický?",
                options: [
                    "Osudy dobrého vojáka Švejka",
                    "Bar Kochba",
                    "Nikola Šuhaj loupežník",
                    "Farma zvířat"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního období patří tvorba J. Vrchlického?",
                options: [
                    "Národní obrození",
                    "Lumírovci",
                    "Meziválečná literatura",
                    "Normalizace"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je charakteristika lumírovců?",
                options: [
                    "Lumírovci byli skupina českých literátů z konce 19. století, kteří se soustředili na obrození národního vědomí, podporovali český jazyk a kulturu a kritizovali pasivní přístup předchozích generací",
                    "Lumírovci byli autoři, kteří podporovali realistický přístup k životu a zaměřovali se na sociální problémy dělnické třídy",
                    "Tato skupina se soustředila na psaní pouze náboženských a filozofických děl",
                    "Lumírovci se zaměřovali výhradně na tvorbu v oblasti dramatu a divadla"
                ],
                "correctAnswer": 0
            },            
            {
                question: "Který z těchto českých autorů byl současníkem J. Vrchlického?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Bohumil Hrabal",
                    "Svatopluk Čech"
                ],
                correctAnswer: 3
            },
            {
                question: "Čím je charakteristická tvorba J. Vrchlického?",
                options: [
                    "Experimentální formou a futurismem",
                    "Kosmopolitismem, lyrikou a bohatou sbírkou překladů světové poezie",
                    "Politickou satirou",
                    "Venkovskou tématikou"
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        title: "Karel Václav Rais",
        questions: [
            {
                question: "Které dílo od K. V. Raise jste četli?",
                options: [
                    "Kalibův zločin",
                    "R.U.R.",
                    "Proměna",
                    "Krysař"
                ],
                correctAnswer: 0
            },
            {
                question: "Které další významné dílo napsal Karel Václav Rais?",
                options: [
                    "Osudy dobrého vojáka Švejka",
                    "Zapadlí vlastenci",
                    "Nikola Šuhaj loupežník",
                    "Farma zvířat"
                ],
                correctAnswer: 1
            },
            {
                question: "Do jakého literárního směru patří tvorba K. V. Raise?",
                options: [
                    "Romantismus",
                    "Realismus a venkovská próza",
                    "Poetismus",
                    "Existencialismus"
                ],
                correctAnswer: 1
            },
            {
                question: "Jaká je charakteristika realismu a venkovské prózy?",
                options: [
                    "Realismus se zaměřoval na objektivní zobrazení skutečnosti, často reflektoval každodenní život, sociální problémy a těžkosti obyčejných lidí. Venkovská próza byla specifickým podžánrem, který zobrazoval život na venkově a vztahy mezi lidmi v ruralních oblastech",
                    "Realismus byl směr zaměřený na idealizaci přírody a venkovského života, zatímco venkovská próza se věnovala pouze filozofickým otázkám",
                    "Obě oblasti se soustředily pouze na zobrazení městské chudiny a jejich vnitřních prožitků",
                    "Realismus se zaměřoval na idealizaci hrdinských postav a venkovská próza byla čistě náboženská"
                ],
                "correctAnswer": 0
            },            
            {
                question: "Který z těchto českých autorů byl současníkem K. V. Raise?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Bohumil Hrabal",
                    "Alois Jirásek"
                ],
                correctAnswer: 3
            },
            {
                question: "Co je charakteristické pro díla K. V. Raise?",
                options: [
                    "Sci-fi prvky a futuristické vize",
                    "Realistické zobrazení života na venkově a sociální problémy",
                    "Politická satira",
                    "Dobrodružné příběhy z kolonií"
                ],
                correctAnswer: 1
            }
        ]
    }
];



// Initialize questions in the game
document.addEventListener('DOMContentLoaded', () => {
    // First, let's add debugging to see what's available
    console.log("DOMContentLoaded - Loading questions");
    console.log("informaticaQuestions available:", typeof informaticaQuestions !== 'undefined');
    console.log("itQuestions available:", typeof itQuestions !== 'undefined');
    console.log("cestinaQuestions available:", typeof cestinaQuestions !== 'undefined');
    console.log("autoriQuestions available:", typeof autoriQuestions !== 'undefined');
    
    // Load real questions into the game (with error handling)
    try {
        if (typeof informaticaQuestions !== 'undefined') {
            loadRealQuestions('informatika', informaticaQuestions);
        }
        
        if (typeof itQuestions !== 'undefined') {
            loadRealQuestions('it', itQuestions);
        }
        
        if (typeof cestinaQuestions !== 'undefined') {
            loadRealQuestions('cestina', cestinaQuestions);
        }
        
        if (typeof autoriQuestions !== 'undefined') {
            console.log("Loading autoriQuestions:", autoriQuestions);
            loadRealQuestions('autori', autoriQuestions);
        } else {
            console.error("autoriQuestions is not defined!");
        }
    } catch (error) {
        console.error("Error loading questions:", error);
    }
}); 