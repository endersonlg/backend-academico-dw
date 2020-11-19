
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Aluno {
    cidade?: string;
    cpf?: string;
    dataNascimento?: Date;
    escolaOrigem?: string;
    estado?: string;
    etnia?: string;
    matrSituacao?: string;
    rendaFamiliar?: string;
    sexo?: string;
}

export abstract class IQuery {
    abstract getAllAlunos(): Aluno[] | Promise<Aluno[]>;

    abstract getStatisticsAluno(): Statistic | Promise<Statistic>;
}

export class Statistic {
    statisticAge?: StatisticAge[];
    statisticCity?: StatisticCity[];
    statisticEtnia?: StatisticEtnia[];
    statisticFamilyIncome?: StatisticFamilyIncome[];
    statisticSchool?: StatisticSchool[];
    statisticSexo?: StatisticSexo[];
    statisticSituationRegistration?: StatisticSituationRegistration[];
    statisticState?: StatisticState[];
    statisticStateCity?: StatisticStateCity[];
    total?: Number;
}

export class StatisticAge {
    age?: string;
    quantity?: Number;
}

export class StatisticCity {
    city?: string;
    quantity?: Number;
}

export class StatisticEtnia {
    etnia?: string;
    quantity?: Number;
}

export class StatisticFamilyIncome {
    familyIncome?: string;
    quantity?: Number;
}

export class StatisticSchool {
    quantity?: Number;
    school?: string;
}

export class StatisticSexo {
    quantity?: Number;
    sexo?: string;
}

export class StatisticSituationRegistration {
    quantity?: Number;
    situationRegistration?: string;
}

export class StatisticState {
    quantity?: Number;
    state?: string;
}

export class StatisticStateCity {
    city?: string;
    quantity?: Number;
    state?: string;
}

export type Number = any;
