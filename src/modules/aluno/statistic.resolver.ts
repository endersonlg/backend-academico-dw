import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import {
    StatisticAge,
    StatisticCity,
    StatisticEtnia,
    StatisticFamilyIncome,
    StatisticSchool,
    StatisticSexo,
    StatisticSituationRegistration,
    StatisticState,
    StatisticStateCity,
} from 'src/graphql/schemas';
import { StatisticService } from './statistic.service';

@Resolver('Statistic')
export class StatisticResolver {
    constructor(private readonly statisticService: StatisticService) {}

    @Query()
    getStatisticsAluno(): Promise<number> {
        return this.statisticService.countAll();
    }

    @ResolveField()
    statisticEtnia(): Promise<StatisticEtnia[]> {
        return this.statisticService.groupByEtniaCount();
    }

    @ResolveField()
    statisticSchool(): Promise<StatisticSchool[]> {
        return this.statisticService.groupBySchoolCount();
    }

    @ResolveField()
    statisticSexo(): Promise<StatisticSexo[]> {
        return this.statisticService.groupBySexoCount();
    }
    @ResolveField()
    statisticFamilyIncome(): Promise<StatisticFamilyIncome[]> {
        return this.statisticService.groupByFamilyIncomeCount();
    }

    @ResolveField()
    statisticState(): Promise<StatisticState[]> {
        return this.statisticService.groupByStateCount();
    }

    @ResolveField()
    statisticCity(): Promise<StatisticCity[]> {
        return this.statisticService.groupByCityCount();
    }

    @ResolveField()
    statisticStateCity(): Promise<StatisticStateCity[]> {
        return this.statisticService.groupByStateCityCount();
    }

    @ResolveField()
    statisticAge(): Promise<StatisticAge[]> {
        return this.statisticService.groupByAgeCount();
    }

    @ResolveField()
    statisticSituationRegistration(): Promise<
        StatisticSituationRegistration[]
    > {
        return this.statisticService.groupBySituationRegistration();
    }
}
