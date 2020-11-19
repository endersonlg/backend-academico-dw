import { Injectable } from '@nestjs/common';
import { Knex } from '../../config/knex';
import { Aluno } from 'src/graphql/schemas';

@Injectable()
export class AlunoService {
    findAll(): Promise<Aluno[]> {
        return Knex('aluno').select(
            'cpf',
            'etnia',
            'sexo',
            'escola_origem as escolaOrigem',
            'renda_familiar as rendaFamiliar',
            'estado',
            'cidade',
            'data_nascimento as dataNascimento',
            'matr_situacao as matrSituacao',
        );
    }
}
