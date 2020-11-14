import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { DateTime } from 'luxon';

@Scalar('Date', (_) => Date)
export class DateScalar implements CustomScalar<number, Date | null> {
    description = 'Date custom scalar type';

    parseValue(value: number): Date {
        return new Date(value); // value from the client
    }

    serialize(value: Date): number {
        if (typeof value === 'number') {
            return DateTime.fromFormat(
                String(value),
                String(value).length === 14 ? 'yyyyMMddHHmmss' : 'yyyyMMdd',
            )
                .toJSDate()
                .getTime();
        }
        return value?.getTime(); // value sent to the client
    }

    parseLiteral(ast: ValueNode): Date | null {
        if (ast.kind === Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    }
}
