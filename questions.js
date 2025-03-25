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
                question: "Který autor je českým představitelem renesance (období Shakespeara)?",
                options: [
                    "Jan Neruda",
                    "Jan Amos Komenský",
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
                    "Estetismus a dekadence",
                    "Existencialismus"
                ],
                correctAnswer: 2
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
                    "F. Scott Fitzgerald",
                    "Charles Dickens"
                ],
                correctAnswer: 2
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
                    "Moderna, 1. polovina 20. století",
                    "Renesance",
                    "Postmoderna"
                ],
                correctAnswer: 1
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
                    "Moderna a meziválečná literatura",
                    "Klasicismus",
                    "Postmoderna"
                ],
                correctAnswer: 1
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
                    "Moderna a anarchističtí buřiči",
                    "Normalizace"
                ],
                correctAnswer: 2
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
                    "Lumírovci a ruchovci",
                    "Meziválečná literatura",
                    "Normalizace"
                ],
                correctAnswer: 1
            },
            {
                question: "Který z těchto českých autorů byl současníkem J. Vrchlického?",
                options: [
                    "Karel Jaromír Erben",
                    "Karel Čapek",
                    "Bohumil Hrabal",
                    "Josef Svatopluk Machar"
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
    // Load real questions into the game
    loadRealQuestions('informatika', informaticaQuestions);
    loadRealQuestions('it', itQuestions);
    loadRealQuestions('cestina', cestinaQuestions);
    loadRealQuestions('autori', autoriQuestions);
}); 