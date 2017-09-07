#Redovisning projekt - Webapp

##krav 1

Min app har jag valt att döpa till What's around och grundtanken är att man på ett ett och samma ställe ska kunna få så mycket relevant information som möjligt om ett visst område.

####Specifikation
1. Skapa en app som visar upp information om ett visst område. Det ska gå att söka på ett område eller använda nuvarande platsinformation. Information som ska visas upp kan vara vad som helst som är specifik för olika platser såsom väder, karta, events, butiker mm.

2. Hämta min data från:
- SMHI
- Google places API
- Google geocode API
- Google maps Api
- Ett api som listar events (Ej hittat)

3. När man startar appen så får man ett val om man vill använda nuvarande plats eller söka efter en annan plats. När man valt sin plats så visas en överblicks vy där man ser en sammanfattning av butiker och restauranger, vädret, och en karta.

4. Från överblicksvyn kan man sedan välja en specifik butik eller restaurang där man får upp ytterligare information som öppettider, position på karta och recensioner. Från överblicksvyn ska man också kunna få en mer detaljerat väderprognos.

5. Designen ska vara responsiv och fungera på alla typer av skärmar. Jag vill också att appen ska kännas mer som en app och mindre som en hemsida och därför vill jag undvika att ha en fast header och footer.


##krav 2

Min app är uppdelad i vyer och modeller där varje datakälla har en egen modell.

När man start appen så har man två val. Antingen att välja nuvarande plats eller att söka efter en plats. Väljer man nvarande plats så hämtas Coordinater med hjälp av Cordovas geolocation plugin och använder man sökrutan så hämtas Coordinaterna med hjälp av googles Geocode api. När coordinaterna har hämtats så görs det tre stycken requests. Ett request till SMHI, ett till google places och ett till google maps. När detta har laddats in så renderas overview vyn där man kan se en sammanställning av vädret, information om de närmaste butikerna och restaurangerna samt en karta med din position markerad.

För att hålla vyn överskådlig så är ganska mycket information dold och man kan komma åt mer information genom klicka på respektive kategori. När man klickar för att visa mer information så har jag lagt till en animation som rullar ut en extra ruta. Denna ruta går att toggla för att visa och dölja igen.

Från vyn så kan man också klicka en specifik restaurang eller butik. Gör man det så görs ytterligare ett request görs mot Google places för att hämta extra data. Den informationen visas sedan upp en en ny vy där man ser ställets position på en karta samt får upp öppettider, adress och recensioner mm.

Min README fil har jag lagt i www-katalogen och den beskriver hur man använder appen. Jag har också lagt till en icon och splashscreen till appen.

##krav 3

Appen fungerar i det stora hela enlighet med min specifikation och jag tycker att jag har fått till ett bra interface som är lätt att använda. En sak som jag inte har lyckats med är att hitta information om events. Jag har letat på många ställen efter ett API som erbjuder den informationen men utan framgång. Av den anledningen så fick jag hoppa över det helt och hållet.

Det som jag inte lyckats med är att få appen att fungera felfritt i android och browsern. För att kunna köra appen i browsern så behövs det ett plugin som löser ett problem med Cross-Origin Resource Sharing. Till chrome heter tillägget Allow-Control-Allow-Origin: * och till firefox heter pluginet Cors everywhere. Jag har tagit upp detta i formumet och fått tummen upp att fortsätta utveckla med pluginet men detta är ju givetvis min största kritiken mot appen. Problemet har med Google place API att göra och om jag hade haft mer tid så hade jag valt att helt enkelt byta ut den datakällen till någon annan som fungerar direkt. Detta är inget som påverkar funktionen när man kör appen i android. Detta var en prioritering jag fick göra för att ha tid att färdigställa appen inom ramen för kursen.

Features som skulle kunna förbättra appen:
- Appen skulle kunna visa fler kategorier av intressanta platser. Exempelvis museum, matvarubutiker, parker mm.
- Det skulle vara trevligt om man kunde välja sin position genom att lägga ner en markör på en karta.
- Använda en datakälla för väder som kan ge prognoser även utanför sverige.


##Om projektet
Det som har tagit mest tid och varit det svåraste för mig är att komma på en vettig appidé. väldigt mycket tid i början av projektet gick till att leta APIer som är användbara och som ska fungera med varandra på ett roligt sätt. Utöver att hitta APIer så ska man också fixa nycklar, läsa dokumentation och förså vad APIet kan ge för data. Allt detta sammantaget gjorde attt jag spenderade för mycket tid på förberedelser och det gjorde att jag inte fick nog med tid för själva koden. När jag väl hittade googles APIer så kom jag ganska snabbt på min idé så jag började skriva ihop en projekt specifikation och kunde sätta igång.

Jag gillar när man har valmöjligheter i projekten men när det lämna det helt öppet som i detta fall tycker jag att det är svårt. Det är svårt att veta vad som förväntas av en och det gör att tröskln för att komma igång stiger. Visst är det en lärdom i sig att utveckla något från grunden men för min egen del så är jag mest intresserad av att lära mig kodandet och det blev lite sekundärt i detta moment.

Koden i sig har jag inte haft några problem med som jag tycker är relevanta att gå in på. Det har helt enkelt flutit på ganska bra när min idé hade kommit fram. Eftersom att jag använt APIer som är ganska stora och välanvända så har det funnits mycket exempel på hur man kan göra saker och de små problem jag har haft med datakällorna har jag enkelt löst via dokumentationen eller stackoverflow.

##Om kursen
Jag tycker kursen har varit intressant och passat in bra på programmet. Att jobba med ramverk i en javascriptmiljö var något helt nytt för mig och det känns väldigt relevant när man tittar på vad som efterfrågas av en webbprogrammerare. Att utforska hur man använder APIer på sin webbplats/app har känts roligt och det har öppnat upp många möjligheter till vilka typer av appar man kan bygga.

Det som jar tycker har varit mindre bra med kursern är att kursmomenten inte känts så genomarbetade alla gånger. Det har blivit mycket upprepning av kod och istället för att ha artiklar som beskriver hur/varför man gör en viss sak så har det varit lite väl mycket "lös det" moment. Jag hade också önskat lite mer undervisning i hur man ska tänka när det kommer till kodstrukturen. Hur byggar man en vy på bästa sätt? Vart ska jag lägga kod som inte hör till en modell? Hur löser man dom-events på bra sätt osv. Det finns mycket att prata om och det har missats enligt mig.

En annan sak som jag tycker har varit ganska tråkigt är att det tar så väldigt lång tid att testa sin kod. Vare sig jag testar min kod i browsern eller i emulatorn så får jag vänta för lång tid. Det blir väldigt frustrerande att vänta i 30 sekunder, upptäcka att man missat ett semikolon för att sedan vänta 30 sekunder igen. Om det finns andra vägar att testa sin kod så borde det implementeras i kursen enligt mig.

Av mig så får denna kurs betyget 6/10. Jag gillar verkligen grundtanken med kursen, det är relevanta tekniker som tas upp men kursmomenten kan förbättras. Jag skulle kunna rekommendera kursen till en vän.
