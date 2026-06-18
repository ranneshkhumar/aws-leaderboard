import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type QuizAttemptAnswerModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizAttemptAnswerPayload>;
export type AggregateQuizAttemptAnswer = {
    _count: QuizAttemptAnswerCountAggregateOutputType | null;
    _min: QuizAttemptAnswerMinAggregateOutputType | null;
    _max: QuizAttemptAnswerMaxAggregateOutputType | null;
};
export type QuizAttemptAnswerMinAggregateOutputType = {
    id: string | null;
    attemptId: string | null;
    questionId: string | null;
    selectedAnswer: string | null;
    isCorrect: boolean | null;
};
export type QuizAttemptAnswerMaxAggregateOutputType = {
    id: string | null;
    attemptId: string | null;
    questionId: string | null;
    selectedAnswer: string | null;
    isCorrect: boolean | null;
};
export type QuizAttemptAnswerCountAggregateOutputType = {
    id: number;
    attemptId: number;
    questionId: number;
    selectedAnswer: number;
    isCorrect: number;
    _all: number;
};
export type QuizAttemptAnswerMinAggregateInputType = {
    id?: true;
    attemptId?: true;
    questionId?: true;
    selectedAnswer?: true;
    isCorrect?: true;
};
export type QuizAttemptAnswerMaxAggregateInputType = {
    id?: true;
    attemptId?: true;
    questionId?: true;
    selectedAnswer?: true;
    isCorrect?: true;
};
export type QuizAttemptAnswerCountAggregateInputType = {
    id?: true;
    attemptId?: true;
    questionId?: true;
    selectedAnswer?: true;
    isCorrect?: true;
    _all?: true;
};
export type QuizAttemptAnswerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptAnswerWhereInput;
    orderBy?: Prisma.QuizAttemptAnswerOrderByWithRelationInput | Prisma.QuizAttemptAnswerOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizAttemptAnswerCountAggregateInputType;
    _min?: QuizAttemptAnswerMinAggregateInputType;
    _max?: QuizAttemptAnswerMaxAggregateInputType;
};
export type GetQuizAttemptAnswerAggregateType<T extends QuizAttemptAnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizAttemptAnswer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuizAttemptAnswer[P]> : Prisma.GetScalarType<T[P], AggregateQuizAttemptAnswer[P]>;
};
export type QuizAttemptAnswerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptAnswerWhereInput;
    orderBy?: Prisma.QuizAttemptAnswerOrderByWithAggregationInput | Prisma.QuizAttemptAnswerOrderByWithAggregationInput[];
    by: Prisma.QuizAttemptAnswerScalarFieldEnum[] | Prisma.QuizAttemptAnswerScalarFieldEnum;
    having?: Prisma.QuizAttemptAnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizAttemptAnswerCountAggregateInputType | true;
    _min?: QuizAttemptAnswerMinAggregateInputType;
    _max?: QuizAttemptAnswerMaxAggregateInputType;
};
export type QuizAttemptAnswerGroupByOutputType = {
    id: string;
    attemptId: string;
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
    _count: QuizAttemptAnswerCountAggregateOutputType | null;
    _min: QuizAttemptAnswerMinAggregateOutputType | null;
    _max: QuizAttemptAnswerMaxAggregateOutputType | null;
};
type GetQuizAttemptAnswerGroupByPayload<T extends QuizAttemptAnswerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizAttemptAnswerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizAttemptAnswerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizAttemptAnswerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizAttemptAnswerGroupByOutputType[P]>;
}>>;
export type QuizAttemptAnswerWhereInput = {
    AND?: Prisma.QuizAttemptAnswerWhereInput | Prisma.QuizAttemptAnswerWhereInput[];
    OR?: Prisma.QuizAttemptAnswerWhereInput[];
    NOT?: Prisma.QuizAttemptAnswerWhereInput | Prisma.QuizAttemptAnswerWhereInput[];
    id?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    attemptId?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    questionId?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    selectedAnswer?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    isCorrect?: Prisma.BoolFilter<"QuizAttemptAnswer"> | boolean;
    QuizAttempt?: Prisma.XOR<Prisma.QuizAttemptScalarRelationFilter, Prisma.QuizAttemptWhereInput>;
    QuizQuestion?: Prisma.XOR<Prisma.QuizQuestionScalarRelationFilter, Prisma.QuizQuestionWhereInput>;
};
export type QuizAttemptAnswerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    QuizAttempt?: Prisma.QuizAttemptOrderByWithRelationInput;
    QuizQuestion?: Prisma.QuizQuestionOrderByWithRelationInput;
};
export type QuizAttemptAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuizAttemptAnswerWhereInput | Prisma.QuizAttemptAnswerWhereInput[];
    OR?: Prisma.QuizAttemptAnswerWhereInput[];
    NOT?: Prisma.QuizAttemptAnswerWhereInput | Prisma.QuizAttemptAnswerWhereInput[];
    attemptId?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    questionId?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    selectedAnswer?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    isCorrect?: Prisma.BoolFilter<"QuizAttemptAnswer"> | boolean;
    QuizAttempt?: Prisma.XOR<Prisma.QuizAttemptScalarRelationFilter, Prisma.QuizAttemptWhereInput>;
    QuizQuestion?: Prisma.XOR<Prisma.QuizQuestionScalarRelationFilter, Prisma.QuizQuestionWhereInput>;
}, "id">;
export type QuizAttemptAnswerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    _count?: Prisma.QuizAttemptAnswerCountOrderByAggregateInput;
    _max?: Prisma.QuizAttemptAnswerMaxOrderByAggregateInput;
    _min?: Prisma.QuizAttemptAnswerMinOrderByAggregateInput;
};
export type QuizAttemptAnswerScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizAttemptAnswerScalarWhereWithAggregatesInput | Prisma.QuizAttemptAnswerScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizAttemptAnswerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizAttemptAnswerScalarWhereWithAggregatesInput | Prisma.QuizAttemptAnswerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuizAttemptAnswer"> | string;
    attemptId?: Prisma.StringWithAggregatesFilter<"QuizAttemptAnswer"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"QuizAttemptAnswer"> | string;
    selectedAnswer?: Prisma.StringWithAggregatesFilter<"QuizAttemptAnswer"> | string;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"QuizAttemptAnswer"> | boolean;
};
export type QuizAttemptAnswerCreateInput = {
    id: string;
    selectedAnswer: string;
    isCorrect: boolean;
    QuizAttempt: Prisma.QuizAttemptCreateNestedOneWithoutQuizAttemptAnswerInput;
    QuizQuestion: Prisma.QuizQuestionCreateNestedOneWithoutQuizAttemptAnswerInput;
};
export type QuizAttemptAnswerUncheckedCreateInput = {
    id: string;
    attemptId: string;
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
};
export type QuizAttemptAnswerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    QuizAttempt?: Prisma.QuizAttemptUpdateOneRequiredWithoutQuizAttemptAnswerNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUpdateOneRequiredWithoutQuizAttemptAnswerNestedInput;
};
export type QuizAttemptAnswerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizAttemptAnswerCreateManyInput = {
    id: string;
    attemptId: string;
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
};
export type QuizAttemptAnswerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizAttemptAnswerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizAttemptAnswerListRelationFilter = {
    every?: Prisma.QuizAttemptAnswerWhereInput;
    some?: Prisma.QuizAttemptAnswerWhereInput;
    none?: Prisma.QuizAttemptAnswerWhereInput;
};
export type QuizAttemptAnswerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuizAttemptAnswerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type QuizAttemptAnswerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type QuizAttemptAnswerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attemptId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswer?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type QuizAttemptAnswerCreateNestedManyWithoutQuizAttemptInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput> | Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput[] | Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput[];
    connectOrCreate?: Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput[];
    createMany?: Prisma.QuizAttemptAnswerCreateManyQuizAttemptInputEnvelope;
    connect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
};
export type QuizAttemptAnswerUncheckedCreateNestedManyWithoutQuizAttemptInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput> | Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput[] | Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput[];
    connectOrCreate?: Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput[];
    createMany?: Prisma.QuizAttemptAnswerCreateManyQuizAttemptInputEnvelope;
    connect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
};
export type QuizAttemptAnswerUpdateManyWithoutQuizAttemptNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput> | Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput[] | Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput[];
    connectOrCreate?: Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput[];
    upsert?: Prisma.QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizAttemptInput[];
    createMany?: Prisma.QuizAttemptAnswerCreateManyQuizAttemptInputEnvelope;
    set?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    update?: Prisma.QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizAttemptInput[];
    updateMany?: Prisma.QuizAttemptAnswerUpdateManyWithWhereWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerUpdateManyWithWhereWithoutQuizAttemptInput[];
    deleteMany?: Prisma.QuizAttemptAnswerScalarWhereInput | Prisma.QuizAttemptAnswerScalarWhereInput[];
};
export type QuizAttemptAnswerUncheckedUpdateManyWithoutQuizAttemptNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput> | Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput[] | Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput[];
    connectOrCreate?: Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput[];
    upsert?: Prisma.QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizAttemptInput[];
    createMany?: Prisma.QuizAttemptAnswerCreateManyQuizAttemptInputEnvelope;
    set?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    update?: Prisma.QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizAttemptInput[];
    updateMany?: Prisma.QuizAttemptAnswerUpdateManyWithWhereWithoutQuizAttemptInput | Prisma.QuizAttemptAnswerUpdateManyWithWhereWithoutQuizAttemptInput[];
    deleteMany?: Prisma.QuizAttemptAnswerScalarWhereInput | Prisma.QuizAttemptAnswerScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type QuizAttemptAnswerCreateNestedManyWithoutQuizQuestionInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput> | Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput[] | Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput[];
    connectOrCreate?: Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput[];
    createMany?: Prisma.QuizAttemptAnswerCreateManyQuizQuestionInputEnvelope;
    connect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
};
export type QuizAttemptAnswerUncheckedCreateNestedManyWithoutQuizQuestionInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput> | Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput[] | Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput[];
    connectOrCreate?: Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput[];
    createMany?: Prisma.QuizAttemptAnswerCreateManyQuizQuestionInputEnvelope;
    connect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
};
export type QuizAttemptAnswerUpdateManyWithoutQuizQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput> | Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput[] | Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput[];
    connectOrCreate?: Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput[];
    upsert?: Prisma.QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizQuestionInput[];
    createMany?: Prisma.QuizAttemptAnswerCreateManyQuizQuestionInputEnvelope;
    set?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    update?: Prisma.QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizQuestionInput[];
    updateMany?: Prisma.QuizAttemptAnswerUpdateManyWithWhereWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerUpdateManyWithWhereWithoutQuizQuestionInput[];
    deleteMany?: Prisma.QuizAttemptAnswerScalarWhereInput | Prisma.QuizAttemptAnswerScalarWhereInput[];
};
export type QuizAttemptAnswerUncheckedUpdateManyWithoutQuizQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput> | Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput[] | Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput[];
    connectOrCreate?: Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput[];
    upsert?: Prisma.QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizQuestionInput[];
    createMany?: Prisma.QuizAttemptAnswerCreateManyQuizQuestionInputEnvelope;
    set?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    delete?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    connect?: Prisma.QuizAttemptAnswerWhereUniqueInput | Prisma.QuizAttemptAnswerWhereUniqueInput[];
    update?: Prisma.QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizQuestionInput[];
    updateMany?: Prisma.QuizAttemptAnswerUpdateManyWithWhereWithoutQuizQuestionInput | Prisma.QuizAttemptAnswerUpdateManyWithWhereWithoutQuizQuestionInput[];
    deleteMany?: Prisma.QuizAttemptAnswerScalarWhereInput | Prisma.QuizAttemptAnswerScalarWhereInput[];
};
export type QuizAttemptAnswerCreateWithoutQuizAttemptInput = {
    id: string;
    selectedAnswer: string;
    isCorrect: boolean;
    QuizQuestion: Prisma.QuizQuestionCreateNestedOneWithoutQuizAttemptAnswerInput;
};
export type QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput = {
    id: string;
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
};
export type QuizAttemptAnswerCreateOrConnectWithoutQuizAttemptInput = {
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput>;
};
export type QuizAttemptAnswerCreateManyQuizAttemptInputEnvelope = {
    data: Prisma.QuizAttemptAnswerCreateManyQuizAttemptInput | Prisma.QuizAttemptAnswerCreateManyQuizAttemptInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizAttemptInput = {
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateWithoutQuizAttemptInput, Prisma.QuizAttemptAnswerUncheckedUpdateWithoutQuizAttemptInput>;
    create: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizAttemptInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizAttemptInput>;
};
export type QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizAttemptInput = {
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateWithoutQuizAttemptInput, Prisma.QuizAttemptAnswerUncheckedUpdateWithoutQuizAttemptInput>;
};
export type QuizAttemptAnswerUpdateManyWithWhereWithoutQuizAttemptInput = {
    where: Prisma.QuizAttemptAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateManyMutationInput, Prisma.QuizAttemptAnswerUncheckedUpdateManyWithoutQuizAttemptInput>;
};
export type QuizAttemptAnswerScalarWhereInput = {
    AND?: Prisma.QuizAttemptAnswerScalarWhereInput | Prisma.QuizAttemptAnswerScalarWhereInput[];
    OR?: Prisma.QuizAttemptAnswerScalarWhereInput[];
    NOT?: Prisma.QuizAttemptAnswerScalarWhereInput | Prisma.QuizAttemptAnswerScalarWhereInput[];
    id?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    attemptId?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    questionId?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    selectedAnswer?: Prisma.StringFilter<"QuizAttemptAnswer"> | string;
    isCorrect?: Prisma.BoolFilter<"QuizAttemptAnswer"> | boolean;
};
export type QuizAttemptAnswerCreateWithoutQuizQuestionInput = {
    id: string;
    selectedAnswer: string;
    isCorrect: boolean;
    QuizAttempt: Prisma.QuizAttemptCreateNestedOneWithoutQuizAttemptAnswerInput;
};
export type QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput = {
    id: string;
    attemptId: string;
    selectedAnswer: string;
    isCorrect: boolean;
};
export type QuizAttemptAnswerCreateOrConnectWithoutQuizQuestionInput = {
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput>;
};
export type QuizAttemptAnswerCreateManyQuizQuestionInputEnvelope = {
    data: Prisma.QuizAttemptAnswerCreateManyQuizQuestionInput | Prisma.QuizAttemptAnswerCreateManyQuizQuestionInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptAnswerUpsertWithWhereUniqueWithoutQuizQuestionInput = {
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateWithoutQuizQuestionInput, Prisma.QuizAttemptAnswerUncheckedUpdateWithoutQuizQuestionInput>;
    create: Prisma.XOR<Prisma.QuizAttemptAnswerCreateWithoutQuizQuestionInput, Prisma.QuizAttemptAnswerUncheckedCreateWithoutQuizQuestionInput>;
};
export type QuizAttemptAnswerUpdateWithWhereUniqueWithoutQuizQuestionInput = {
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateWithoutQuizQuestionInput, Prisma.QuizAttemptAnswerUncheckedUpdateWithoutQuizQuestionInput>;
};
export type QuizAttemptAnswerUpdateManyWithWhereWithoutQuizQuestionInput = {
    where: Prisma.QuizAttemptAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateManyMutationInput, Prisma.QuizAttemptAnswerUncheckedUpdateManyWithoutQuizQuestionInput>;
};
export type QuizAttemptAnswerCreateManyQuizAttemptInput = {
    id: string;
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
};
export type QuizAttemptAnswerUpdateWithoutQuizAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    QuizQuestion?: Prisma.QuizQuestionUpdateOneRequiredWithoutQuizAttemptAnswerNestedInput;
};
export type QuizAttemptAnswerUncheckedUpdateWithoutQuizAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizAttemptAnswerUncheckedUpdateManyWithoutQuizAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizAttemptAnswerCreateManyQuizQuestionInput = {
    id: string;
    attemptId: string;
    selectedAnswer: string;
    isCorrect: boolean;
};
export type QuizAttemptAnswerUpdateWithoutQuizQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    QuizAttempt?: Prisma.QuizAttemptUpdateOneRequiredWithoutQuizAttemptAnswerNestedInput;
};
export type QuizAttemptAnswerUncheckedUpdateWithoutQuizQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizAttemptAnswerUncheckedUpdateManyWithoutQuizQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attemptId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type QuizAttemptAnswerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attemptId?: boolean;
    questionId?: boolean;
    selectedAnswer?: boolean;
    isCorrect?: boolean;
    QuizAttempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    QuizQuestion?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttemptAnswer"]>;
export type QuizAttemptAnswerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attemptId?: boolean;
    questionId?: boolean;
    selectedAnswer?: boolean;
    isCorrect?: boolean;
    QuizAttempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    QuizQuestion?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttemptAnswer"]>;
export type QuizAttemptAnswerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attemptId?: boolean;
    questionId?: boolean;
    selectedAnswer?: boolean;
    isCorrect?: boolean;
    QuizAttempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    QuizQuestion?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttemptAnswer"]>;
export type QuizAttemptAnswerSelectScalar = {
    id?: boolean;
    attemptId?: boolean;
    questionId?: boolean;
    selectedAnswer?: boolean;
    isCorrect?: boolean;
};
export type QuizAttemptAnswerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "attemptId" | "questionId" | "selectedAnswer" | "isCorrect", ExtArgs["result"]["quizAttemptAnswer"]>;
export type QuizAttemptAnswerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    QuizAttempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    QuizQuestion?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
};
export type QuizAttemptAnswerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    QuizAttempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    QuizQuestion?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
};
export type QuizAttemptAnswerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    QuizAttempt?: boolean | Prisma.QuizAttemptDefaultArgs<ExtArgs>;
    QuizQuestion?: boolean | Prisma.QuizQuestionDefaultArgs<ExtArgs>;
};
export type $QuizAttemptAnswerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuizAttemptAnswer";
    objects: {
        QuizAttempt: Prisma.$QuizAttemptPayload<ExtArgs>;
        QuizQuestion: Prisma.$QuizQuestionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        attemptId: string;
        questionId: string;
        selectedAnswer: string;
        isCorrect: boolean;
    }, ExtArgs["result"]["quizAttemptAnswer"]>;
    composites: {};
};
export type QuizAttemptAnswerGetPayload<S extends boolean | null | undefined | QuizAttemptAnswerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload, S>;
export type QuizAttemptAnswerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizAttemptAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizAttemptAnswerCountAggregateInputType | true;
};
export interface QuizAttemptAnswerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuizAttemptAnswer'];
        meta: {
            name: 'QuizAttemptAnswer';
        };
    };
    findUnique<T extends QuizAttemptAnswerFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizAttemptAnswerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizAttemptAnswerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizAttemptAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizAttemptAnswerFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizAttemptAnswerFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizAttemptAnswerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizAttemptAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizAttemptAnswerFindManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizAttemptAnswerCreateArgs>(args: Prisma.SelectSubset<T, QuizAttemptAnswerCreateArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizAttemptAnswerCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizAttemptAnswerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizAttemptAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizAttemptAnswerDeleteArgs>(args: Prisma.SelectSubset<T, QuizAttemptAnswerDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizAttemptAnswerUpdateArgs>(args: Prisma.SelectSubset<T, QuizAttemptAnswerUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizAttemptAnswerDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizAttemptAnswerUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizAttemptAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizAttemptAnswerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizAttemptAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizAttemptAnswerUpsertArgs>(args: Prisma.SelectSubset<T, QuizAttemptAnswerUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptAnswerClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizAttemptAnswerCountArgs>(args?: Prisma.Subset<T, QuizAttemptAnswerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizAttemptAnswerCountAggregateOutputType> : number>;
    aggregate<T extends QuizAttemptAnswerAggregateArgs>(args: Prisma.Subset<T, QuizAttemptAnswerAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAnswerAggregateType<T>>;
    groupBy<T extends QuizAttemptAnswerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizAttemptAnswerGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizAttemptAnswerGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizAttemptAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizAttemptAnswerFieldRefs;
}
export interface Prisma__QuizAttemptAnswerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    QuizAttempt<T extends Prisma.QuizAttemptDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizAttemptDefaultArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    QuizQuestion<T extends Prisma.QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizQuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizAttemptAnswerFieldRefs {
    readonly id: Prisma.FieldRef<"QuizAttemptAnswer", 'String'>;
    readonly attemptId: Prisma.FieldRef<"QuizAttemptAnswer", 'String'>;
    readonly questionId: Prisma.FieldRef<"QuizAttemptAnswer", 'String'>;
    readonly selectedAnswer: Prisma.FieldRef<"QuizAttemptAnswer", 'String'>;
    readonly isCorrect: Prisma.FieldRef<"QuizAttemptAnswer", 'Boolean'>;
}
export type QuizAttemptAnswerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
};
export type QuizAttemptAnswerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
};
export type QuizAttemptAnswerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    where?: Prisma.QuizAttemptAnswerWhereInput;
    orderBy?: Prisma.QuizAttemptAnswerOrderByWithRelationInput | Prisma.QuizAttemptAnswerOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizAttemptAnswerScalarFieldEnum | Prisma.QuizAttemptAnswerScalarFieldEnum[];
};
export type QuizAttemptAnswerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    where?: Prisma.QuizAttemptAnswerWhereInput;
    orderBy?: Prisma.QuizAttemptAnswerOrderByWithRelationInput | Prisma.QuizAttemptAnswerOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizAttemptAnswerScalarFieldEnum | Prisma.QuizAttemptAnswerScalarFieldEnum[];
};
export type QuizAttemptAnswerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    where?: Prisma.QuizAttemptAnswerWhereInput;
    orderBy?: Prisma.QuizAttemptAnswerOrderByWithRelationInput | Prisma.QuizAttemptAnswerOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizAttemptAnswerScalarFieldEnum | Prisma.QuizAttemptAnswerScalarFieldEnum[];
};
export type QuizAttemptAnswerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptAnswerCreateInput, Prisma.QuizAttemptAnswerUncheckedCreateInput>;
};
export type QuizAttemptAnswerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizAttemptAnswerCreateManyInput | Prisma.QuizAttemptAnswerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptAnswerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    data: Prisma.QuizAttemptAnswerCreateManyInput | Prisma.QuizAttemptAnswerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuizAttemptAnswerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuizAttemptAnswerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateInput, Prisma.QuizAttemptAnswerUncheckedUpdateInput>;
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
};
export type QuizAttemptAnswerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateManyMutationInput, Prisma.QuizAttemptAnswerUncheckedUpdateManyInput>;
    where?: Prisma.QuizAttemptAnswerWhereInput;
    limit?: number;
};
export type QuizAttemptAnswerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateManyMutationInput, Prisma.QuizAttemptAnswerUncheckedUpdateManyInput>;
    where?: Prisma.QuizAttemptAnswerWhereInput;
    limit?: number;
    include?: Prisma.QuizAttemptAnswerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuizAttemptAnswerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptAnswerCreateInput, Prisma.QuizAttemptAnswerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizAttemptAnswerUpdateInput, Prisma.QuizAttemptAnswerUncheckedUpdateInput>;
};
export type QuizAttemptAnswerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptAnswerWhereUniqueInput;
};
export type QuizAttemptAnswerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptAnswerWhereInput;
    limit?: number;
};
export type QuizAttemptAnswerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptAnswerSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptAnswerOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptAnswerInclude<ExtArgs> | null;
};
export {};
