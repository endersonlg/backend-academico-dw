import { Knex } from '../../config/knex';
import { Injectable } from '@nestjs/common';
import {
    StatisticAge,
    StatisticCity,
    StatisticEtnia,
    StatisticFamilyIncome,
    StatisticSexo,
    StatisticSituationRegistration,
    StatisticState,
    StatisticStateCity,
} from 'src/graphql/schemas';

@Injectable()
export class StatisticService {
    countAll(): Promise<number> {
        return Knex('aluno').count('* as total');
    }

    groupByEtniaCount(): Promise<StatisticEtnia[]> {
        return Knex('aluno')
            .select('etnia')
            .count('* as quantity')
            .groupBy('etnia');
    }

    groupBySchoolCount(): Promise<StatisticEtnia[]> {
        return Knex('aluno')
            .select('escola_origem as school')
            .count('* as quantity')
            .groupBy('escola_origem');
    }

    groupBySexoCount(): Promise<StatisticSexo[]> {
        return Knex('aluno')
            .select('sexo')
            .count('* as quantity')
            .groupBy('sexo');
    }

    groupByFamilyIncomeCount(): Promise<StatisticFamilyIncome[]> {
        return Knex('aluno')
            .select('renda_familiar as familyIncome')
            .count('* as quantity')
            .groupBy('renda_familiar');
    }

    groupByStateCount(): Promise<StatisticState[]> {
        return Knex('aluno')
            .select('estado as state')
            .count('* as quantity')
            .groupBy('estado');
    }

    groupByCityCount(): Promise<StatisticCity[]> {
        return Knex('aluno')
            .select('cidade as city')
            .count('* as quantity')
            .groupBy('cidade');
    }

    groupByStateCityCount(): Promise<StatisticStateCity[]> {
        return Knex('aluno')
            .select('estado as state', 'cidade as city')
            .count('* as quantity')
            .groupBy('estado', 'cidade');
    }

    async groupByAgeCount(): Promise<StatisticAge[]> {
        const data: StatisticAge[] = await Knex('aluno')
            .select(Knex.raw('EXTRACT (YEAR FROM AGE(data_nascimento)) as age'))
            .count('* as quantity')
            .groupBy('age');

        const ageInterval: StatisticAge[] = [];

        for (let i = 0; i < 100; i += 10) {
            const aux = data.filter(
                (a) => parseInt(a.age) >= i && parseInt(a.age) <= i + 9,
            );
            let sumQuantity = 0;

            aux.forEach((a) => {
                sumQuantity += parseInt(a.quantity);
            });

            ageInterval.push({
                age: `${i} - ${i + 9}`,
                quantity: sumQuantity,
            });
        }

        return ageInterval;
    }

    groupBySituationRegistration(): Promise<StatisticSituationRegistration[]> {
        return Knex('aluno')
            .select('matr_situacao as situationRegistration')
            .count('* as quantity')
            .groupBy('matr_situacao');
    }
}
