import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DateScalar } from '../graphql/scalars/Date';
import { NumberScalar } from '../graphql/scalars/Number';
import { AlunoModule } from './aluno/aluno.module';

import { StatisticModule } from './statistic/statistic.module';

@Global()
@Module({
    providers: [DateScalar, NumberScalar],
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql/schemas.ts'),
                outputAs: 'class',
            },
            sortSchema: true,
            debug: true,
            introspection: true,
            useGlobalPrefix: true,
            context: ({ req, res }) => ({
                req,
                res,
            }),
            plugins: [
                {
                    serverWillStart() {
                        console.log('server starting...');
                    },
                },
            ],
        }),
        StatisticModule,
        AlunoModule,
    ],
})
export class AppModule {}
