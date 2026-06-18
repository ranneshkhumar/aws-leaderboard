import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly LearningSlide: "LearningSlide";
    readonly Module: "Module";
    readonly QuizAttempt: "QuizAttempt";
    readonly QuizAttemptAnswer: "QuizAttemptAnswer";
    readonly QuizQuestion: "QuizQuestion";
    readonly Topic: "Topic";
    readonly User: "User";
    readonly UserModuleProgress: "UserModuleProgress";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "learningSlide" | "module" | "quizAttempt" | "quizAttemptAnswer" | "quizQuestion" | "topic" | "user" | "userModuleProgress";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        LearningSlide: {
            payload: Prisma.$LearningSlidePayload<ExtArgs>;
            fields: Prisma.LearningSlideFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LearningSlideFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LearningSlideFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>;
                };
                findFirst: {
                    args: Prisma.LearningSlideFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LearningSlideFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>;
                };
                findMany: {
                    args: Prisma.LearningSlideFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>[];
                };
                create: {
                    args: Prisma.LearningSlideCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>;
                };
                createMany: {
                    args: Prisma.LearningSlideCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LearningSlideCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>[];
                };
                delete: {
                    args: Prisma.LearningSlideDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>;
                };
                update: {
                    args: Prisma.LearningSlideUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>;
                };
                deleteMany: {
                    args: Prisma.LearningSlideDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LearningSlideUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LearningSlideUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>[];
                };
                upsert: {
                    args: Prisma.LearningSlideUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LearningSlidePayload>;
                };
                aggregate: {
                    args: Prisma.LearningSlideAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLearningSlide>;
                };
                groupBy: {
                    args: Prisma.LearningSlideGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LearningSlideGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LearningSlideCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LearningSlideCountAggregateOutputType> | number;
                };
            };
        };
        Module: {
            payload: Prisma.$ModulePayload<ExtArgs>;
            fields: Prisma.ModuleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModuleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                findFirst: {
                    args: Prisma.ModuleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                findMany: {
                    args: Prisma.ModuleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                create: {
                    args: Prisma.ModuleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                createMany: {
                    args: Prisma.ModuleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                delete: {
                    args: Prisma.ModuleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                update: {
                    args: Prisma.ModuleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                deleteMany: {
                    args: Prisma.ModuleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModuleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                upsert: {
                    args: Prisma.ModuleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                aggregate: {
                    args: Prisma.ModuleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModule>;
                };
                groupBy: {
                    args: Prisma.ModuleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModuleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuleCountAggregateOutputType> | number;
                };
            };
        };
        QuizAttempt: {
            payload: Prisma.$QuizAttemptPayload<ExtArgs>;
            fields: Prisma.QuizAttemptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                findFirst: {
                    args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                findMany: {
                    args: Prisma.QuizAttemptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[];
                };
                create: {
                    args: Prisma.QuizAttemptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                createMany: {
                    args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuizAttemptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[];
                };
                delete: {
                    args: Prisma.QuizAttemptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                update: {
                    args: Prisma.QuizAttemptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                deleteMany: {
                    args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuizAttemptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[];
                };
                upsert: {
                    args: Prisma.QuizAttemptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptPayload>;
                };
                aggregate: {
                    args: Prisma.QuizAttemptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuizAttempt>;
                };
                groupBy: {
                    args: Prisma.QuizAttemptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizAttemptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuizAttemptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizAttemptCountAggregateOutputType> | number;
                };
            };
        };
        QuizAttemptAnswer: {
            payload: Prisma.$QuizAttemptAnswerPayload<ExtArgs>;
            fields: Prisma.QuizAttemptAnswerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuizAttemptAnswerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuizAttemptAnswerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>;
                };
                findFirst: {
                    args: Prisma.QuizAttemptAnswerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuizAttemptAnswerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>;
                };
                findMany: {
                    args: Prisma.QuizAttemptAnswerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>[];
                };
                create: {
                    args: Prisma.QuizAttemptAnswerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>;
                };
                createMany: {
                    args: Prisma.QuizAttemptAnswerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuizAttemptAnswerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>[];
                };
                delete: {
                    args: Prisma.QuizAttemptAnswerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>;
                };
                update: {
                    args: Prisma.QuizAttemptAnswerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>;
                };
                deleteMany: {
                    args: Prisma.QuizAttemptAnswerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuizAttemptAnswerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuizAttemptAnswerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>[];
                };
                upsert: {
                    args: Prisma.QuizAttemptAnswerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizAttemptAnswerPayload>;
                };
                aggregate: {
                    args: Prisma.QuizAttemptAnswerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuizAttemptAnswer>;
                };
                groupBy: {
                    args: Prisma.QuizAttemptAnswerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizAttemptAnswerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuizAttemptAnswerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizAttemptAnswerCountAggregateOutputType> | number;
                };
            };
        };
        QuizQuestion: {
            payload: Prisma.$QuizQuestionPayload<ExtArgs>;
            fields: Prisma.QuizQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuizQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuizQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.QuizQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuizQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                findMany: {
                    args: Prisma.QuizQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[];
                };
                create: {
                    args: Prisma.QuizQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                createMany: {
                    args: Prisma.QuizQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuizQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[];
                };
                delete: {
                    args: Prisma.QuizQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                update: {
                    args: Prisma.QuizQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.QuizQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuizQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuizQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.QuizQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuizQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.QuizQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuizQuestion>;
                };
                groupBy: {
                    args: Prisma.QuizQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuizQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuizQuestionCountAggregateOutputType> | number;
                };
            };
        };
        Topic: {
            payload: Prisma.$TopicPayload<ExtArgs>;
            fields: Prisma.TopicFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TopicFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                findFirst: {
                    args: Prisma.TopicFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                findMany: {
                    args: Prisma.TopicFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>[];
                };
                create: {
                    args: Prisma.TopicCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                createMany: {
                    args: Prisma.TopicCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>[];
                };
                delete: {
                    args: Prisma.TopicDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                update: {
                    args: Prisma.TopicUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                deleteMany: {
                    args: Prisma.TopicDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TopicUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>[];
                };
                upsert: {
                    args: Prisma.TopicUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TopicPayload>;
                };
                aggregate: {
                    args: Prisma.TopicAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTopic>;
                };
                groupBy: {
                    args: Prisma.TopicGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TopicGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TopicCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TopicCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        UserModuleProgress: {
            payload: Prisma.$UserModuleProgressPayload<ExtArgs>;
            fields: Prisma.UserModuleProgressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserModuleProgressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserModuleProgressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>;
                };
                findFirst: {
                    args: Prisma.UserModuleProgressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserModuleProgressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>;
                };
                findMany: {
                    args: Prisma.UserModuleProgressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>[];
                };
                create: {
                    args: Prisma.UserModuleProgressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>;
                };
                createMany: {
                    args: Prisma.UserModuleProgressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserModuleProgressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>[];
                };
                delete: {
                    args: Prisma.UserModuleProgressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>;
                };
                update: {
                    args: Prisma.UserModuleProgressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>;
                };
                deleteMany: {
                    args: Prisma.UserModuleProgressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserModuleProgressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserModuleProgressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>[];
                };
                upsert: {
                    args: Prisma.UserModuleProgressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>;
                };
                aggregate: {
                    args: Prisma.UserModuleProgressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserModuleProgress>;
                };
                groupBy: {
                    args: Prisma.UserModuleProgressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserModuleProgressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserModuleProgressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserModuleProgressCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const LearningSlideScalarFieldEnum: {
    readonly id: "id";
    readonly moduleId: "moduleId";
    readonly title: "title";
    readonly layoutType: "layoutType";
    readonly imageUrl: "imageUrl";
    readonly bullets: "bullets";
    readonly orderIndex: "orderIndex";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LearningSlideScalarFieldEnum = (typeof LearningSlideScalarFieldEnum)[keyof typeof LearningSlideScalarFieldEnum];
export declare const ModuleScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly description: "description";
    readonly tier: "tier";
    readonly xpPoints: "xpPoints";
    readonly orderIndex: "orderIndex";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly topicId: "topicId";
    readonly level: "level";
};
export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum];
export declare const QuizAttemptScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly moduleId: "moduleId";
    readonly totalQuestions: "totalQuestions";
    readonly correctAnswers: "correctAnswers";
    readonly percentage: "percentage";
    readonly xpEarned: "xpEarned";
    readonly attemptedAt: "attemptedAt";
};
export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum];
export declare const QuizAttemptAnswerScalarFieldEnum: {
    readonly id: "id";
    readonly attemptId: "attemptId";
    readonly questionId: "questionId";
    readonly selectedAnswer: "selectedAnswer";
    readonly isCorrect: "isCorrect";
};
export type QuizAttemptAnswerScalarFieldEnum = (typeof QuizAttemptAnswerScalarFieldEnum)[keyof typeof QuizAttemptAnswerScalarFieldEnum];
export declare const QuizQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly moduleId: "moduleId";
    readonly question: "question";
    readonly optionA: "optionA";
    readonly optionB: "optionB";
    readonly optionC: "optionC";
    readonly optionD: "optionD";
    readonly correctAnswer: "correctAnswer";
    readonly explanation: "explanation";
    readonly orderIndex: "orderIndex";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type QuizQuestionScalarFieldEnum = (typeof QuizQuestionScalarFieldEnum)[keyof typeof QuizQuestionScalarFieldEnum];
export declare const TopicScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly orderIndex: "orderIndex";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly slug: "slug";
    readonly theme: "theme";
};
export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly xp: "xp";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly eventxp: "eventxp";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserModuleProgressScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly moduleId: "moduleId";
    readonly status: "status";
    readonly score: "score";
    readonly xpEarned: "xpEarned";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserModuleProgressScalarFieldEnum = (typeof UserModuleProgressScalarFieldEnum)[keyof typeof UserModuleProgressScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumModuleLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModuleLevel'>;
export type ListEnumModuleLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModuleLevel[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumTopicThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TopicTheme'>;
export type ListEnumTopicThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TopicTheme[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>;
export type ListEnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus[]'>;
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    datasources?: Datasources;
    datasourceUrl?: string;
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    adapter?: runtime.SqlDriverAdapterFactory | null;
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    learningSlide?: Prisma.LearningSlideOmit;
    module?: Prisma.ModuleOmit;
    quizAttempt?: Prisma.QuizAttemptOmit;
    quizAttemptAnswer?: Prisma.QuizAttemptAnswerOmit;
    quizQuestion?: Prisma.QuizQuestionOmit;
    topic?: Prisma.TopicOmit;
    user?: Prisma.UserOmit;
    userModuleProgress?: Prisma.UserModuleProgressOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
