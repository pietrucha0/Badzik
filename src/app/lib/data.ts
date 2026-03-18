import { PrismaClient, Levels, ScoutRanks } from "@prisma/client";

export const badges = [
    {
        name: 'REŻYSER TEATRALNY/REŻYSERKA TEATRALNA',
        level: Levels.czerwony,
        idea: 'Przygotowuje różne przedstawienia do wystawienia, pełniąc rolę reżysera. Opracowuje scenariusze. Dobiera rekwizyty i dekoracje.',
        tasks: [
            'Wraz z zastępem lub grupą kolegów przygotowałem/am do wystawienia (pełniąc rolę reżysera) sztukę lalkową, teatrzyk harcerski, program kabaretowy itp.',
            'Opracowałem/am scenariusz przedstawienia (własny lub adaptowany) i prowadziłem/am próby z zespołem.',
            'Dobrałem/am do przedstawienia rekwizyty i nadzorowałem/am powstanie dekoracji.'
        ]
    },
    {
        name: 'REŻYSER TEATRALNY/REŻYSERKA TEATRALNA',
        level: Levels.czarny,
        idea: 'Reżyseruje wybrane przez siebie sztuki lub inne przedstawienia. Dokonuje doboru aktorów. Udziela wskazówek aktorom.',
        tasks: [
            'Przygotowałem/am do wystawienia sztukę teatru dramatycznego (komedię lub tragedię), teatru lalek, teatru tańca lub pantomimę. Dobrałem/am aktorów i przeprowadziłem/am próby.',
            'Opracowałem/am reżyserię wybranej przez siebie sztuki lub programu, planując wykorzystanie sceny, ruch sceniczny, rolę muzyki i tańca w przedstawieniu i oczekiwania wobec scenografa.',
            'Udzieliłem/am wskazówek aktorom prezentującym się przed publicznością w jednej z form aktorskich: monologu, dialogu, pantomimie, teatrze radia, teatrze lalek, teatrze tańca.'
        ]
    },
];  