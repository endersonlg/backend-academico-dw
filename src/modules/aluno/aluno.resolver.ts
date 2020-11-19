import { Query, Resolver } from '@nestjs/graphql';
import { Aluno } from 'src/graphql/schemas';
import { AlunoService } from './aluno.service';

@Resolver('Aluno')
export class AlunoResolver {
    constructor(private readonly alunoService: AlunoService) {}

    @Query()
    getAllAlunos(): Promise<Aluno[]> {
        return this.alunoService.findAll();
    }
}
