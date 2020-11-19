import { Module } from '@nestjs/common';
import { AlunoResolver } from './aluno.resolver';
import { AlunoService } from './aluno.service';

@Module({
    providers: [AlunoService, AlunoResolver],
})
export class AlunoModule {}
