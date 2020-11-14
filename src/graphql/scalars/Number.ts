import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('Number', (_) => Number)
export class NumberScalar implements CustomScalar<number, number> {
    description = 'Number custom scalar type';

    parseValue(value: any): number {
        return Number(value);
    }

    serialize(value: any): number {
        return Number(value);
    }

    parseLiteral(ast: any): number {
        if (ast.kind === Kind.INT) {
            return Number(ast.value);
        }
        return 0;
    }
}
