import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { StatisticModule } from './aluno/statistic.module';

@Global()
@Module({
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
    ],
})
export class AppModule {}
