import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type QuizAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizAttemptPayload>;
export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null;
    _avg: QuizAttemptAvgAggregateOutputType | null;
    _sum: QuizAttemptSumAggregateOutputType | null;
    _min: QuizAttemptMinAggregateOutputType | null;
    _max: QuizAttemptMaxAggregateOutputType | null;
};
export type QuizAttemptAvgAggregateOutputType = {
    totalQuestions: number | null;
    correctAnswers: number | null;
    percentage: number | null;
    xpEarned: number | null;
};
export type QuizAttemptSumAggregateOutputType = {
    totalQuestions: number | null;
    correctAnswers: number | null;
    percentage: number | null;
    xpEarned: number | null;
};
export type QuizAttemptMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    moduleId: string | null;
    totalQuestions: number | null;
    correctAnswers: number | null;
    percentage: number | null;
    xpEarned: number | null;
    attemptedAt: Date | null;
};
export type QuizAttemptMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    moduleId: string | null;
    totalQuestions: number | null;
    correctAnswers: number | null;
    percentage: number | null;
    xpEarned: number | null;
    attemptedAt: Date | null;
};
export type QuizAttemptCountAggregateOutputType = {
    id: number;
    userId: number;
    moduleId: number;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt: number;
    _all: number;
};
export type QuizAttemptAvgAggregateInputType = {
    totalQuestions?: true;
    correctAnswers?: true;
    percentage?: true;
    xpEarned?: true;
};
export type QuizAttemptSumAggregateInputType = {
    totalQuestions?: true;
    correctAnswers?: true;
    percentage?: true;
    xpEarned?: true;
};
export type QuizAttemptMinAggregateInputType = {
    id?: true;
    userId?: true;
    moduleId?: true;
    totalQuestions?: true;
    correctAnswers?: true;
    percentage?: true;
    xpEarned?: true;
    attemptedAt?: true;
};
export type QuizAttemptMaxAggregateInputType = {
    id?: true;
    userId?: true;
    moduleId?: true;
    totalQuestions?: true;
    correctAnswers?: true;
    percentage?: true;
    xpEarned?: true;
    attemptedAt?: true;
};
export type QuizAttemptCountAggregateInputType = {
    id?: true;
    userId?: true;
    moduleId?: true;
    totalQuestions?: true;
    correctAnswers?: true;
    percentage?: true;
    xpEarned?: true;
    attemptedAt?: true;
    _all?: true;
};
export type QuizAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptWhereInput;
    orderBy?: Prisma.QuizAttemptOrderByWithRelationInput | Prisma.QuizAttemptOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizAttemptCountAggregateInputType;
    _avg?: QuizAttemptAvgAggregateInputType;
    _sum?: QuizAttemptSumAggregateInputType;
    _min?: QuizAttemptMinAggregateInputType;
    _max?: QuizAttemptMaxAggregateInputType;
};
export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuizAttempt[P]> : Prisma.GetScalarType<T[P], AggregateQuizAttempt[P]>;
};
export type QuizAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptWhereInput;
    orderBy?: Prisma.QuizAttemptOrderByWithAggregationInput | Prisma.QuizAttemptOrderByWithAggregationInput[];
    by: Prisma.QuizAttemptScalarFieldEnum[] | Prisma.QuizAttemptScalarFieldEnum;
    having?: Prisma.QuizAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizAttemptCountAggregateInputType | true;
    _avg?: QuizAttemptAvgAggregateInputType;
    _sum?: QuizAttemptSumAggregateInputType;
    _min?: QuizAttemptMinAggregateInputType;
    _max?: QuizAttemptMaxAggregateInputType;
};
export type QuizAttemptGroupByOutputType = {
    id: string;
    userId: string;
    moduleId: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt: Date;
    _count: QuizAttemptCountAggregateOutputType | null;
    _avg: QuizAttemptAvgAggregateOutputType | null;
    _sum: QuizAttemptSumAggregateOutputType | null;
    _min: QuizAttemptMinAggregateOutputType | null;
    _max: QuizAttemptMaxAggregateOutputType | null;
};
type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>;
}>>;
export type QuizAttemptWhereInput = {
    AND?: Prisma.QuizAttemptWhereInput | Prisma.QuizAttemptWhereInput[];
    OR?: Prisma.QuizAttemptWhereInput[];
    NOT?: Prisma.QuizAttemptWhereInput | Prisma.QuizAttemptWhereInput[];
    id?: Prisma.StringFilter<"QuizAttempt"> | string;
    userId?: Prisma.StringFilter<"QuizAttempt"> | string;
    moduleId?: Prisma.StringFilter<"QuizAttempt"> | string;
    totalQuestions?: Prisma.IntFilter<"QuizAttempt"> | number;
    correctAnswers?: Prisma.IntFilter<"QuizAttempt"> | number;
    percentage?: Prisma.FloatFilter<"QuizAttempt"> | number;
    xpEarned?: Prisma.IntFilter<"QuizAttempt"> | number;
    attemptedAt?: Prisma.DateTimeFilter<"QuizAttempt"> | Date | string;
    Module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerListRelationFilter;
};
export type QuizAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    Module?: Prisma.ModuleOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerOrderByRelationAggregateInput;
};
export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuizAttemptWhereInput | Prisma.QuizAttemptWhereInput[];
    OR?: Prisma.QuizAttemptWhereInput[];
    NOT?: Prisma.QuizAttemptWhereInput | Prisma.QuizAttemptWhereInput[];
    userId?: Prisma.StringFilter<"QuizAttempt"> | string;
    moduleId?: Prisma.StringFilter<"QuizAttempt"> | string;
    totalQuestions?: Prisma.IntFilter<"QuizAttempt"> | number;
    correctAnswers?: Prisma.IntFilter<"QuizAttempt"> | number;
    percentage?: Prisma.FloatFilter<"QuizAttempt"> | number;
    xpEarned?: Prisma.IntFilter<"QuizAttempt"> | number;
    attemptedAt?: Prisma.DateTimeFilter<"QuizAttempt"> | Date | string;
    Module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerListRelationFilter;
}, "id">;
export type QuizAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
    _count?: Prisma.QuizAttemptCountOrderByAggregateInput;
    _avg?: Prisma.QuizAttemptAvgOrderByAggregateInput;
    _max?: Prisma.QuizAttemptMaxOrderByAggregateInput;
    _min?: Prisma.QuizAttemptMinOrderByAggregateInput;
    _sum?: Prisma.QuizAttemptSumOrderByAggregateInput;
};
export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizAttemptScalarWhereWithAggregatesInput | Prisma.QuizAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizAttemptScalarWhereWithAggregatesInput | Prisma.QuizAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuizAttempt"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"QuizAttempt"> | string;
    moduleId?: Prisma.StringWithAggregatesFilter<"QuizAttempt"> | string;
    totalQuestions?: Prisma.IntWithAggregatesFilter<"QuizAttempt"> | number;
    correctAnswers?: Prisma.IntWithAggregatesFilter<"QuizAttempt"> | number;
    percentage?: Prisma.FloatWithAggregatesFilter<"QuizAttempt"> | number;
    xpEarned?: Prisma.IntWithAggregatesFilter<"QuizAttempt"> | number;
    attemptedAt?: Prisma.DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string;
};
export type QuizAttemptCreateInput = {
    id: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
    Module: Prisma.ModuleCreateNestedOneWithoutQuizAttemptInput;
    User: Prisma.UserCreateNestedOneWithoutQuizAttemptInput;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerCreateNestedManyWithoutQuizAttemptInput;
};
export type QuizAttemptUncheckedCreateInput = {
    id: string;
    userId: string;
    moduleId: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedCreateNestedManyWithoutQuizAttemptInput;
};
export type QuizAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Module?: Prisma.ModuleUpdateOneRequiredWithoutQuizAttemptNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutQuizAttemptNestedInput;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUpdateManyWithoutQuizAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedUpdateManyWithoutQuizAttemptNestedInput;
};
export type QuizAttemptCreateManyInput = {
    id: string;
    userId: string;
    moduleId: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
};
export type QuizAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizAttemptListRelationFilter = {
    every?: Prisma.QuizAttemptWhereInput;
    some?: Prisma.QuizAttemptWhereInput;
    none?: Prisma.QuizAttemptWhereInput;
};
export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuizAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
};
export type QuizAttemptAvgOrderByAggregateInput = {
    totalQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
};
export type QuizAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
};
export type QuizAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    attemptedAt?: Prisma.SortOrder;
};
export type QuizAttemptSumOrderByAggregateInput = {
    totalQuestions?: Prisma.SortOrder;
    correctAnswers?: Prisma.SortOrder;
    percentage?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
};
export type QuizAttemptScalarRelationFilter = {
    is?: Prisma.QuizAttemptWhereInput;
    isNot?: Prisma.QuizAttemptWhereInput;
};
export type QuizAttemptCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutModuleInput, Prisma.QuizAttemptUncheckedCreateWithoutModuleInput> | Prisma.QuizAttemptCreateWithoutModuleInput[] | Prisma.QuizAttemptUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutModuleInput | Prisma.QuizAttemptCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.QuizAttemptCreateManyModuleInputEnvelope;
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
};
export type QuizAttemptUncheckedCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutModuleInput, Prisma.QuizAttemptUncheckedCreateWithoutModuleInput> | Prisma.QuizAttemptCreateWithoutModuleInput[] | Prisma.QuizAttemptUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutModuleInput | Prisma.QuizAttemptCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.QuizAttemptCreateManyModuleInputEnvelope;
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
};
export type QuizAttemptUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutModuleInput, Prisma.QuizAttemptUncheckedCreateWithoutModuleInput> | Prisma.QuizAttemptCreateWithoutModuleInput[] | Prisma.QuizAttemptUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutModuleInput | Prisma.QuizAttemptCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.QuizAttemptUpsertWithWhereUniqueWithoutModuleInput | Prisma.QuizAttemptUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.QuizAttemptCreateManyModuleInputEnvelope;
    set?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    delete?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    update?: Prisma.QuizAttemptUpdateWithWhereUniqueWithoutModuleInput | Prisma.QuizAttemptUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.QuizAttemptUpdateManyWithWhereWithoutModuleInput | Prisma.QuizAttemptUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
};
export type QuizAttemptUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutModuleInput, Prisma.QuizAttemptUncheckedCreateWithoutModuleInput> | Prisma.QuizAttemptCreateWithoutModuleInput[] | Prisma.QuizAttemptUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutModuleInput | Prisma.QuizAttemptCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.QuizAttemptUpsertWithWhereUniqueWithoutModuleInput | Prisma.QuizAttemptUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.QuizAttemptCreateManyModuleInputEnvelope;
    set?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    delete?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    update?: Prisma.QuizAttemptUpdateWithWhereUniqueWithoutModuleInput | Prisma.QuizAttemptUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.QuizAttemptUpdateManyWithWhereWithoutModuleInput | Prisma.QuizAttemptUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type QuizAttemptCreateNestedOneWithoutQuizAttemptAnswerInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizAttemptAnswerInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizAttemptAnswerInput>;
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutQuizAttemptAnswerInput;
    connect?: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptUpdateOneRequiredWithoutQuizAttemptAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizAttemptAnswerInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizAttemptAnswerInput>;
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutQuizAttemptAnswerInput;
    upsert?: Prisma.QuizAttemptUpsertWithoutQuizAttemptAnswerInput;
    connect?: Prisma.QuizAttemptWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizAttemptUpdateToOneWithWhereWithoutQuizAttemptAnswerInput, Prisma.QuizAttemptUpdateWithoutQuizAttemptAnswerInput>, Prisma.QuizAttemptUncheckedUpdateWithoutQuizAttemptAnswerInput>;
};
export type QuizAttemptCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput> | Prisma.QuizAttemptCreateWithoutUserInput[] | Prisma.QuizAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutUserInput | Prisma.QuizAttemptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.QuizAttemptCreateManyUserInputEnvelope;
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
};
export type QuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput> | Prisma.QuizAttemptCreateWithoutUserInput[] | Prisma.QuizAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutUserInput | Prisma.QuizAttemptCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.QuizAttemptCreateManyUserInputEnvelope;
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
};
export type QuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput> | Prisma.QuizAttemptCreateWithoutUserInput[] | Prisma.QuizAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutUserInput | Prisma.QuizAttemptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.QuizAttemptUpsertWithWhereUniqueWithoutUserInput | Prisma.QuizAttemptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.QuizAttemptCreateManyUserInputEnvelope;
    set?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    delete?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    update?: Prisma.QuizAttemptUpdateWithWhereUniqueWithoutUserInput | Prisma.QuizAttemptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.QuizAttemptUpdateManyWithWhereWithoutUserInput | Prisma.QuizAttemptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
};
export type QuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput> | Prisma.QuizAttemptCreateWithoutUserInput[] | Prisma.QuizAttemptUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.QuizAttemptCreateOrConnectWithoutUserInput | Prisma.QuizAttemptCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.QuizAttemptUpsertWithWhereUniqueWithoutUserInput | Prisma.QuizAttemptUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.QuizAttemptCreateManyUserInputEnvelope;
    set?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    disconnect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    delete?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    connect?: Prisma.QuizAttemptWhereUniqueInput | Prisma.QuizAttemptWhereUniqueInput[];
    update?: Prisma.QuizAttemptUpdateWithWhereUniqueWithoutUserInput | Prisma.QuizAttemptUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.QuizAttemptUpdateManyWithWhereWithoutUserInput | Prisma.QuizAttemptUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
};
export type QuizAttemptCreateWithoutModuleInput = {
    id: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutQuizAttemptInput;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerCreateNestedManyWithoutQuizAttemptInput;
};
export type QuizAttemptUncheckedCreateWithoutModuleInput = {
    id: string;
    userId: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedCreateNestedManyWithoutQuizAttemptInput;
};
export type QuizAttemptCreateOrConnectWithoutModuleInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutModuleInput, Prisma.QuizAttemptUncheckedCreateWithoutModuleInput>;
};
export type QuizAttemptCreateManyModuleInputEnvelope = {
    data: Prisma.QuizAttemptCreateManyModuleInput | Prisma.QuizAttemptCreateManyModuleInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptUpsertWithWhereUniqueWithoutModuleInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutModuleInput, Prisma.QuizAttemptUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutModuleInput, Prisma.QuizAttemptUncheckedCreateWithoutModuleInput>;
};
export type QuizAttemptUpdateWithWhereUniqueWithoutModuleInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutModuleInput, Prisma.QuizAttemptUncheckedUpdateWithoutModuleInput>;
};
export type QuizAttemptUpdateManyWithWhereWithoutModuleInput = {
    where: Prisma.QuizAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateManyMutationInput, Prisma.QuizAttemptUncheckedUpdateManyWithoutModuleInput>;
};
export type QuizAttemptScalarWhereInput = {
    AND?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
    OR?: Prisma.QuizAttemptScalarWhereInput[];
    NOT?: Prisma.QuizAttemptScalarWhereInput | Prisma.QuizAttemptScalarWhereInput[];
    id?: Prisma.StringFilter<"QuizAttempt"> | string;
    userId?: Prisma.StringFilter<"QuizAttempt"> | string;
    moduleId?: Prisma.StringFilter<"QuizAttempt"> | string;
    totalQuestions?: Prisma.IntFilter<"QuizAttempt"> | number;
    correctAnswers?: Prisma.IntFilter<"QuizAttempt"> | number;
    percentage?: Prisma.FloatFilter<"QuizAttempt"> | number;
    xpEarned?: Prisma.IntFilter<"QuizAttempt"> | number;
    attemptedAt?: Prisma.DateTimeFilter<"QuizAttempt"> | Date | string;
};
export type QuizAttemptCreateWithoutQuizAttemptAnswerInput = {
    id: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
    Module: Prisma.ModuleCreateNestedOneWithoutQuizAttemptInput;
    User: Prisma.UserCreateNestedOneWithoutQuizAttemptInput;
};
export type QuizAttemptUncheckedCreateWithoutQuizAttemptAnswerInput = {
    id: string;
    userId: string;
    moduleId: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
};
export type QuizAttemptCreateOrConnectWithoutQuizAttemptAnswerInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizAttemptAnswerInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizAttemptAnswerInput>;
};
export type QuizAttemptUpsertWithoutQuizAttemptAnswerInput = {
    update: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutQuizAttemptAnswerInput, Prisma.QuizAttemptUncheckedUpdateWithoutQuizAttemptAnswerInput>;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutQuizAttemptAnswerInput, Prisma.QuizAttemptUncheckedCreateWithoutQuizAttemptAnswerInput>;
    where?: Prisma.QuizAttemptWhereInput;
};
export type QuizAttemptUpdateToOneWithWhereWithoutQuizAttemptAnswerInput = {
    where?: Prisma.QuizAttemptWhereInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutQuizAttemptAnswerInput, Prisma.QuizAttemptUncheckedUpdateWithoutQuizAttemptAnswerInput>;
};
export type QuizAttemptUpdateWithoutQuizAttemptAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Module?: Prisma.ModuleUpdateOneRequiredWithoutQuizAttemptNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutQuizAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateWithoutQuizAttemptAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizAttemptCreateWithoutUserInput = {
    id: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
    Module: Prisma.ModuleCreateNestedOneWithoutQuizAttemptInput;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerCreateNestedManyWithoutQuizAttemptInput;
};
export type QuizAttemptUncheckedCreateWithoutUserInput = {
    id: string;
    moduleId: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedCreateNestedManyWithoutQuizAttemptInput;
};
export type QuizAttemptCreateOrConnectWithoutUserInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput>;
};
export type QuizAttemptCreateManyUserInputEnvelope = {
    data: Prisma.QuizAttemptCreateManyUserInput | Prisma.QuizAttemptCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutUserInput, Prisma.QuizAttemptUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.QuizAttemptCreateWithoutUserInput, Prisma.QuizAttemptUncheckedCreateWithoutUserInput>;
};
export type QuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.QuizAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateWithoutUserInput, Prisma.QuizAttemptUncheckedUpdateWithoutUserInput>;
};
export type QuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.QuizAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateManyMutationInput, Prisma.QuizAttemptUncheckedUpdateManyWithoutUserInput>;
};
export type QuizAttemptCreateManyModuleInput = {
    id: string;
    userId: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
};
export type QuizAttemptUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutQuizAttemptNestedInput;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUpdateManyWithoutQuizAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedUpdateManyWithoutQuizAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateManyWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizAttemptCreateManyUserInput = {
    id: string;
    moduleId: string;
    totalQuestions: number;
    correctAnswers: number;
    percentage: number;
    xpEarned: number;
    attemptedAt?: Date | string;
};
export type QuizAttemptUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Module?: Prisma.ModuleUpdateOneRequiredWithoutQuizAttemptNestedInput;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUpdateManyWithoutQuizAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedUpdateManyWithoutQuizAttemptNestedInput;
};
export type QuizAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    correctAnswers?: Prisma.IntFieldUpdateOperationsInput | number;
    percentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    attemptedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizAttemptCountOutputType = {
    QuizAttemptAnswer: number;
};
export type QuizAttemptCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    QuizAttemptAnswer?: boolean | QuizAttemptCountOutputTypeCountQuizAttemptAnswerArgs;
};
export type QuizAttemptCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptCountOutputTypeSelect<ExtArgs> | null;
};
export type QuizAttemptCountOutputTypeCountQuizAttemptAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptAnswerWhereInput;
};
export type QuizAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moduleId?: boolean;
    totalQuestions?: boolean;
    correctAnswers?: boolean;
    percentage?: boolean;
    xpEarned?: boolean;
    attemptedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    QuizAttemptAnswer?: boolean | Prisma.QuizAttempt$QuizAttemptAnswerArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttempt"]>;
export type QuizAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moduleId?: boolean;
    totalQuestions?: boolean;
    correctAnswers?: boolean;
    percentage?: boolean;
    xpEarned?: boolean;
    attemptedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttempt"]>;
export type QuizAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moduleId?: boolean;
    totalQuestions?: boolean;
    correctAnswers?: boolean;
    percentage?: boolean;
    xpEarned?: boolean;
    attemptedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizAttempt"]>;
export type QuizAttemptSelectScalar = {
    id?: boolean;
    userId?: boolean;
    moduleId?: boolean;
    totalQuestions?: boolean;
    correctAnswers?: boolean;
    percentage?: boolean;
    xpEarned?: boolean;
    attemptedAt?: boolean;
};
export type QuizAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "moduleId" | "totalQuestions" | "correctAnswers" | "percentage" | "xpEarned" | "attemptedAt", ExtArgs["result"]["quizAttempt"]>;
export type QuizAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    QuizAttemptAnswer?: boolean | Prisma.QuizAttempt$QuizAttemptAnswerArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizAttemptCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuizAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type QuizAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $QuizAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuizAttempt";
    objects: {
        Module: Prisma.$ModulePayload<ExtArgs>;
        User: Prisma.$UserPayload<ExtArgs>;
        QuizAttemptAnswer: Prisma.$QuizAttemptAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        moduleId: string;
        totalQuestions: number;
        correctAnswers: number;
        percentage: number;
        xpEarned: number;
        attemptedAt: Date;
    }, ExtArgs["result"]["quizAttempt"]>;
    composites: {};
};
export type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload, S>;
export type QuizAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizAttemptCountAggregateInputType | true;
};
export interface QuizAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'];
        meta: {
            name: 'QuizAttempt';
        };
    };
    findUnique<T extends QuizAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizAttemptCreateArgs>(args: Prisma.SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizAttemptDeleteArgs>(args: Prisma.SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizAttemptUpdateArgs>(args: Prisma.SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizAttemptUpsertArgs>(args: Prisma.SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizAttemptClient<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizAttemptCountArgs>(args?: Prisma.Subset<T, QuizAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizAttemptCountAggregateOutputType> : number>;
    aggregate<T extends QuizAttemptAggregateArgs>(args: Prisma.Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>;
    groupBy<T extends QuizAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizAttemptFieldRefs;
}
export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Module<T extends Prisma.ModuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModuleDefaultArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    QuizAttemptAnswer<T extends Prisma.QuizAttempt$QuizAttemptAnswerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizAttempt$QuizAttemptAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"QuizAttempt", 'String'>;
    readonly userId: Prisma.FieldRef<"QuizAttempt", 'String'>;
    readonly moduleId: Prisma.FieldRef<"QuizAttempt", 'String'>;
    readonly totalQuestions: Prisma.FieldRef<"QuizAttempt", 'Int'>;
    readonly correctAnswers: Prisma.FieldRef<"QuizAttempt", 'Int'>;
    readonly percentage: Prisma.FieldRef<"QuizAttempt", 'Float'>;
    readonly xpEarned: Prisma.FieldRef<"QuizAttempt", 'Int'>;
    readonly attemptedAt: Prisma.FieldRef<"QuizAttempt", 'DateTime'>;
}
export type QuizAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where?: Prisma.QuizAttemptWhereInput;
    orderBy?: Prisma.QuizAttemptOrderByWithRelationInput | Prisma.QuizAttemptOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizAttemptScalarFieldEnum | Prisma.QuizAttemptScalarFieldEnum[];
};
export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where?: Prisma.QuizAttemptWhereInput;
    orderBy?: Prisma.QuizAttemptOrderByWithRelationInput | Prisma.QuizAttemptOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizAttemptScalarFieldEnum | Prisma.QuizAttemptScalarFieldEnum[];
};
export type QuizAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where?: Prisma.QuizAttemptWhereInput;
    orderBy?: Prisma.QuizAttemptOrderByWithRelationInput | Prisma.QuizAttemptOrderByWithRelationInput[];
    cursor?: Prisma.QuizAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizAttemptScalarFieldEnum | Prisma.QuizAttemptScalarFieldEnum[];
};
export type QuizAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptCreateInput, Prisma.QuizAttemptUncheckedCreateInput>;
};
export type QuizAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizAttemptCreateManyInput | Prisma.QuizAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    data: Prisma.QuizAttemptCreateManyInput | Prisma.QuizAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuizAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuizAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateInput, Prisma.QuizAttemptUncheckedUpdateInput>;
    where: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizAttemptUpdateManyMutationInput, Prisma.QuizAttemptUncheckedUpdateManyInput>;
    where?: Prisma.QuizAttemptWhereInput;
    limit?: number;
};
export type QuizAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizAttemptUpdateManyMutationInput, Prisma.QuizAttemptUncheckedUpdateManyInput>;
    where?: Prisma.QuizAttemptWhereInput;
    limit?: number;
    include?: Prisma.QuizAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuizAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizAttemptCreateInput, Prisma.QuizAttemptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizAttemptUpdateInput, Prisma.QuizAttemptUncheckedUpdateInput>;
};
export type QuizAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
    where: Prisma.QuizAttemptWhereUniqueInput;
};
export type QuizAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptWhereInput;
    limit?: number;
};
export type QuizAttempt$QuizAttemptAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizAttemptSelect<ExtArgs> | null;
    omit?: Prisma.QuizAttemptOmit<ExtArgs> | null;
    include?: Prisma.QuizAttemptInclude<ExtArgs> | null;
};
export {};
