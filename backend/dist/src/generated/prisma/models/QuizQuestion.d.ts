import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type QuizQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$QuizQuestionPayload>;
export type AggregateQuizQuestion = {
    _count: QuizQuestionCountAggregateOutputType | null;
    _avg: QuizQuestionAvgAggregateOutputType | null;
    _sum: QuizQuestionSumAggregateOutputType | null;
    _min: QuizQuestionMinAggregateOutputType | null;
    _max: QuizQuestionMaxAggregateOutputType | null;
};
export type QuizQuestionAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type QuizQuestionSumAggregateOutputType = {
    orderIndex: number | null;
};
export type QuizQuestionMinAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    question: string | null;
    optionA: string | null;
    optionB: string | null;
    optionC: string | null;
    optionD: string | null;
    correctAnswer: string | null;
    explanation: string | null;
    orderIndex: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuizQuestionMaxAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    question: string | null;
    optionA: string | null;
    optionB: string | null;
    optionC: string | null;
    optionD: string | null;
    correctAnswer: string | null;
    explanation: string | null;
    orderIndex: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QuizQuestionCountAggregateOutputType = {
    id: number;
    moduleId: number;
    question: number;
    optionA: number;
    optionB: number;
    optionC: number;
    optionD: number;
    correctAnswer: number;
    explanation: number;
    orderIndex: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type QuizQuestionAvgAggregateInputType = {
    orderIndex?: true;
};
export type QuizQuestionSumAggregateInputType = {
    orderIndex?: true;
};
export type QuizQuestionMinAggregateInputType = {
    id?: true;
    moduleId?: true;
    question?: true;
    optionA?: true;
    optionB?: true;
    optionC?: true;
    optionD?: true;
    correctAnswer?: true;
    explanation?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuizQuestionMaxAggregateInputType = {
    id?: true;
    moduleId?: true;
    question?: true;
    optionA?: true;
    optionB?: true;
    optionC?: true;
    optionD?: true;
    correctAnswer?: true;
    explanation?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QuizQuestionCountAggregateInputType = {
    id?: true;
    moduleId?: true;
    question?: true;
    optionA?: true;
    optionB?: true;
    optionC?: true;
    optionD?: true;
    correctAnswer?: true;
    explanation?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type QuizQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizQuestionWhereInput;
    orderBy?: Prisma.QuizQuestionOrderByWithRelationInput | Prisma.QuizQuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuizQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizQuestionCountAggregateInputType;
    _avg?: QuizQuestionAvgAggregateInputType;
    _sum?: QuizQuestionSumAggregateInputType;
    _min?: QuizQuestionMinAggregateInputType;
    _max?: QuizQuestionMaxAggregateInputType;
};
export type GetQuizQuestionAggregateType<T extends QuizQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuizQuestion[P]> : Prisma.GetScalarType<T[P], AggregateQuizQuestion[P]>;
};
export type QuizQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizQuestionWhereInput;
    orderBy?: Prisma.QuizQuestionOrderByWithAggregationInput | Prisma.QuizQuestionOrderByWithAggregationInput[];
    by: Prisma.QuizQuestionScalarFieldEnum[] | Prisma.QuizQuestionScalarFieldEnum;
    having?: Prisma.QuizQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizQuestionCountAggregateInputType | true;
    _avg?: QuizQuestionAvgAggregateInputType;
    _sum?: QuizQuestionSumAggregateInputType;
    _min?: QuizQuestionMinAggregateInputType;
    _max?: QuizQuestionMaxAggregateInputType;
};
export type QuizQuestionGroupByOutputType = {
    id: string;
    moduleId: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt: Date;
    updatedAt: Date;
    _count: QuizQuestionCountAggregateOutputType | null;
    _avg: QuizQuestionAvgAggregateOutputType | null;
    _sum: QuizQuestionSumAggregateOutputType | null;
    _min: QuizQuestionMinAggregateOutputType | null;
    _max: QuizQuestionMaxAggregateOutputType | null;
};
type GetQuizQuestionGroupByPayload<T extends QuizQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>;
}>>;
export type QuizQuestionWhereInput = {
    AND?: Prisma.QuizQuestionWhereInput | Prisma.QuizQuestionWhereInput[];
    OR?: Prisma.QuizQuestionWhereInput[];
    NOT?: Prisma.QuizQuestionWhereInput | Prisma.QuizQuestionWhereInput[];
    id?: Prisma.StringFilter<"QuizQuestion"> | string;
    moduleId?: Prisma.StringFilter<"QuizQuestion"> | string;
    question?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionA?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionB?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionC?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionD?: Prisma.StringFilter<"QuizQuestion"> | string;
    correctAnswer?: Prisma.StringFilter<"QuizQuestion"> | string;
    explanation?: Prisma.StringFilter<"QuizQuestion"> | string;
    orderIndex?: Prisma.IntFilter<"QuizQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerListRelationFilter;
    Module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
};
export type QuizQuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    optionA?: Prisma.SortOrder;
    optionB?: Prisma.SortOrder;
    optionC?: Prisma.SortOrder;
    optionD?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerOrderByRelationAggregateInput;
    Module?: Prisma.ModuleOrderByWithRelationInput;
};
export type QuizQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuizQuestionWhereInput | Prisma.QuizQuestionWhereInput[];
    OR?: Prisma.QuizQuestionWhereInput[];
    NOT?: Prisma.QuizQuestionWhereInput | Prisma.QuizQuestionWhereInput[];
    moduleId?: Prisma.StringFilter<"QuizQuestion"> | string;
    question?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionA?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionB?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionC?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionD?: Prisma.StringFilter<"QuizQuestion"> | string;
    correctAnswer?: Prisma.StringFilter<"QuizQuestion"> | string;
    explanation?: Prisma.StringFilter<"QuizQuestion"> | string;
    orderIndex?: Prisma.IntFilter<"QuizQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerListRelationFilter;
    Module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
}, "id">;
export type QuizQuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    optionA?: Prisma.SortOrder;
    optionB?: Prisma.SortOrder;
    optionC?: Prisma.SortOrder;
    optionD?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.QuizQuestionCountOrderByAggregateInput;
    _avg?: Prisma.QuizQuestionAvgOrderByAggregateInput;
    _max?: Prisma.QuizQuestionMaxOrderByAggregateInput;
    _min?: Prisma.QuizQuestionMinOrderByAggregateInput;
    _sum?: Prisma.QuizQuestionSumOrderByAggregateInput;
};
export type QuizQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuizQuestionScalarWhereWithAggregatesInput | Prisma.QuizQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuizQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuizQuestionScalarWhereWithAggregatesInput | Prisma.QuizQuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    moduleId?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    question?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    optionA?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    optionB?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    optionC?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    optionD?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    correctAnswer?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    explanation?: Prisma.StringWithAggregatesFilter<"QuizQuestion"> | string;
    orderIndex?: Prisma.IntWithAggregatesFilter<"QuizQuestion"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"QuizQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"QuizQuestion"> | Date | string;
};
export type QuizQuestionCreateInput = {
    id: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerCreateNestedManyWithoutQuizQuestionInput;
    Module: Prisma.ModuleCreateNestedOneWithoutQuizQuestionInput;
};
export type QuizQuestionUncheckedCreateInput = {
    id: string;
    moduleId: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedCreateNestedManyWithoutQuizQuestionInput;
};
export type QuizQuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUpdateManyWithoutQuizQuestionNestedInput;
    Module?: Prisma.ModuleUpdateOneRequiredWithoutQuizQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedUpdateManyWithoutQuizQuestionNestedInput;
};
export type QuizQuestionCreateManyInput = {
    id: string;
    moduleId: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type QuizQuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizQuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizQuestionListRelationFilter = {
    every?: Prisma.QuizQuestionWhereInput;
    some?: Prisma.QuizQuestionWhereInput;
    none?: Prisma.QuizQuestionWhereInput;
};
export type QuizQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuizQuestionScalarRelationFilter = {
    is?: Prisma.QuizQuestionWhereInput;
    isNot?: Prisma.QuizQuestionWhereInput;
};
export type QuizQuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    optionA?: Prisma.SortOrder;
    optionB?: Prisma.SortOrder;
    optionC?: Prisma.SortOrder;
    optionD?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuizQuestionAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type QuizQuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    optionA?: Prisma.SortOrder;
    optionB?: Prisma.SortOrder;
    optionC?: Prisma.SortOrder;
    optionD?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuizQuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    optionA?: Prisma.SortOrder;
    optionB?: Prisma.SortOrder;
    optionC?: Prisma.SortOrder;
    optionD?: Prisma.SortOrder;
    correctAnswer?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QuizQuestionSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type QuizQuestionCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutModuleInput, Prisma.QuizQuestionUncheckedCreateWithoutModuleInput> | Prisma.QuizQuestionCreateWithoutModuleInput[] | Prisma.QuizQuestionUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutModuleInput | Prisma.QuizQuestionCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.QuizQuestionCreateManyModuleInputEnvelope;
    connect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
};
export type QuizQuestionUncheckedCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutModuleInput, Prisma.QuizQuestionUncheckedCreateWithoutModuleInput> | Prisma.QuizQuestionCreateWithoutModuleInput[] | Prisma.QuizQuestionUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutModuleInput | Prisma.QuizQuestionCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.QuizQuestionCreateManyModuleInputEnvelope;
    connect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
};
export type QuizQuestionUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutModuleInput, Prisma.QuizQuestionUncheckedCreateWithoutModuleInput> | Prisma.QuizQuestionCreateWithoutModuleInput[] | Prisma.QuizQuestionUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutModuleInput | Prisma.QuizQuestionCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.QuizQuestionUpsertWithWhereUniqueWithoutModuleInput | Prisma.QuizQuestionUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.QuizQuestionCreateManyModuleInputEnvelope;
    set?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    disconnect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    delete?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    connect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    update?: Prisma.QuizQuestionUpdateWithWhereUniqueWithoutModuleInput | Prisma.QuizQuestionUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.QuizQuestionUpdateManyWithWhereWithoutModuleInput | Prisma.QuizQuestionUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.QuizQuestionScalarWhereInput | Prisma.QuizQuestionScalarWhereInput[];
};
export type QuizQuestionUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutModuleInput, Prisma.QuizQuestionUncheckedCreateWithoutModuleInput> | Prisma.QuizQuestionCreateWithoutModuleInput[] | Prisma.QuizQuestionUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutModuleInput | Prisma.QuizQuestionCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.QuizQuestionUpsertWithWhereUniqueWithoutModuleInput | Prisma.QuizQuestionUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.QuizQuestionCreateManyModuleInputEnvelope;
    set?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    disconnect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    delete?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    connect?: Prisma.QuizQuestionWhereUniqueInput | Prisma.QuizQuestionWhereUniqueInput[];
    update?: Prisma.QuizQuestionUpdateWithWhereUniqueWithoutModuleInput | Prisma.QuizQuestionUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.QuizQuestionUpdateManyWithWhereWithoutModuleInput | Prisma.QuizQuestionUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.QuizQuestionScalarWhereInput | Prisma.QuizQuestionScalarWhereInput[];
};
export type QuizQuestionCreateNestedOneWithoutQuizAttemptAnswerInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizAttemptAnswerInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizAttemptAnswerInput>;
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutQuizAttemptAnswerInput;
    connect?: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionUpdateOneRequiredWithoutQuizAttemptAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizAttemptAnswerInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizAttemptAnswerInput>;
    connectOrCreate?: Prisma.QuizQuestionCreateOrConnectWithoutQuizAttemptAnswerInput;
    upsert?: Prisma.QuizQuestionUpsertWithoutQuizAttemptAnswerInput;
    connect?: Prisma.QuizQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuizQuestionUpdateToOneWithWhereWithoutQuizAttemptAnswerInput, Prisma.QuizQuestionUpdateWithoutQuizAttemptAnswerInput>, Prisma.QuizQuestionUncheckedUpdateWithoutQuizAttemptAnswerInput>;
};
export type QuizQuestionCreateWithoutModuleInput = {
    id: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerCreateNestedManyWithoutQuizQuestionInput;
};
export type QuizQuestionUncheckedCreateWithoutModuleInput = {
    id: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedCreateNestedManyWithoutQuizQuestionInput;
};
export type QuizQuestionCreateOrConnectWithoutModuleInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutModuleInput, Prisma.QuizQuestionUncheckedCreateWithoutModuleInput>;
};
export type QuizQuestionCreateManyModuleInputEnvelope = {
    data: Prisma.QuizQuestionCreateManyModuleInput | Prisma.QuizQuestionCreateManyModuleInput[];
    skipDuplicates?: boolean;
};
export type QuizQuestionUpsertWithWhereUniqueWithoutModuleInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutModuleInput, Prisma.QuizQuestionUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutModuleInput, Prisma.QuizQuestionUncheckedCreateWithoutModuleInput>;
};
export type QuizQuestionUpdateWithWhereUniqueWithoutModuleInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutModuleInput, Prisma.QuizQuestionUncheckedUpdateWithoutModuleInput>;
};
export type QuizQuestionUpdateManyWithWhereWithoutModuleInput = {
    where: Prisma.QuizQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateManyMutationInput, Prisma.QuizQuestionUncheckedUpdateManyWithoutModuleInput>;
};
export type QuizQuestionScalarWhereInput = {
    AND?: Prisma.QuizQuestionScalarWhereInput | Prisma.QuizQuestionScalarWhereInput[];
    OR?: Prisma.QuizQuestionScalarWhereInput[];
    NOT?: Prisma.QuizQuestionScalarWhereInput | Prisma.QuizQuestionScalarWhereInput[];
    id?: Prisma.StringFilter<"QuizQuestion"> | string;
    moduleId?: Prisma.StringFilter<"QuizQuestion"> | string;
    question?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionA?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionB?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionC?: Prisma.StringFilter<"QuizQuestion"> | string;
    optionD?: Prisma.StringFilter<"QuizQuestion"> | string;
    correctAnswer?: Prisma.StringFilter<"QuizQuestion"> | string;
    explanation?: Prisma.StringFilter<"QuizQuestion"> | string;
    orderIndex?: Prisma.IntFilter<"QuizQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"QuizQuestion"> | Date | string;
};
export type QuizQuestionCreateWithoutQuizAttemptAnswerInput = {
    id: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    Module: Prisma.ModuleCreateNestedOneWithoutQuizQuestionInput;
};
export type QuizQuestionUncheckedCreateWithoutQuizAttemptAnswerInput = {
    id: string;
    moduleId: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type QuizQuestionCreateOrConnectWithoutQuizAttemptAnswerInput = {
    where: Prisma.QuizQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizAttemptAnswerInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizAttemptAnswerInput>;
};
export type QuizQuestionUpsertWithoutQuizAttemptAnswerInput = {
    update: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutQuizAttemptAnswerInput, Prisma.QuizQuestionUncheckedUpdateWithoutQuizAttemptAnswerInput>;
    create: Prisma.XOR<Prisma.QuizQuestionCreateWithoutQuizAttemptAnswerInput, Prisma.QuizQuestionUncheckedCreateWithoutQuizAttemptAnswerInput>;
    where?: Prisma.QuizQuestionWhereInput;
};
export type QuizQuestionUpdateToOneWithWhereWithoutQuizAttemptAnswerInput = {
    where?: Prisma.QuizQuestionWhereInput;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateWithoutQuizAttemptAnswerInput, Prisma.QuizQuestionUncheckedUpdateWithoutQuizAttemptAnswerInput>;
};
export type QuizQuestionUpdateWithoutQuizAttemptAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Module?: Prisma.ModuleUpdateOneRequiredWithoutQuizQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateWithoutQuizAttemptAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizQuestionCreateManyModuleInput = {
    id: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    explanation: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type QuizQuestionUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUpdateManyWithoutQuizQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    QuizAttemptAnswer?: Prisma.QuizAttemptAnswerUncheckedUpdateManyWithoutQuizQuestionNestedInput;
};
export type QuizQuestionUncheckedUpdateManyWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    optionA?: Prisma.StringFieldUpdateOperationsInput | string;
    optionB?: Prisma.StringFieldUpdateOperationsInput | string;
    optionC?: Prisma.StringFieldUpdateOperationsInput | string;
    optionD?: Prisma.StringFieldUpdateOperationsInput | string;
    correctAnswer?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuizQuestionCountOutputType = {
    QuizAttemptAnswer: number;
};
export type QuizQuestionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    QuizAttemptAnswer?: boolean | QuizQuestionCountOutputTypeCountQuizAttemptAnswerArgs;
};
export type QuizQuestionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionCountOutputTypeSelect<ExtArgs> | null;
};
export type QuizQuestionCountOutputTypeCountQuizAttemptAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptAnswerWhereInput;
};
export type QuizQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    question?: boolean;
    optionA?: boolean;
    optionB?: boolean;
    optionC?: boolean;
    optionD?: boolean;
    correctAnswer?: boolean;
    explanation?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    QuizAttemptAnswer?: boolean | Prisma.QuizQuestion$QuizAttemptAnswerArgs<ExtArgs>;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizQuestion"]>;
export type QuizQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    question?: boolean;
    optionA?: boolean;
    optionB?: boolean;
    optionC?: boolean;
    optionD?: boolean;
    correctAnswer?: boolean;
    explanation?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizQuestion"]>;
export type QuizQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    question?: boolean;
    optionA?: boolean;
    optionB?: boolean;
    optionC?: boolean;
    optionD?: boolean;
    correctAnswer?: boolean;
    explanation?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizQuestion"]>;
export type QuizQuestionSelectScalar = {
    id?: boolean;
    moduleId?: boolean;
    question?: boolean;
    optionA?: boolean;
    optionB?: boolean;
    optionC?: boolean;
    optionD?: boolean;
    correctAnswer?: boolean;
    explanation?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type QuizQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "moduleId" | "question" | "optionA" | "optionB" | "optionC" | "optionD" | "correctAnswer" | "explanation" | "orderIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["quizQuestion"]>;
export type QuizQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    QuizAttemptAnswer?: boolean | Prisma.QuizQuestion$QuizAttemptAnswerArgs<ExtArgs>;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuizQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type QuizQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type $QuizQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuizQuestion";
    objects: {
        QuizAttemptAnswer: Prisma.$QuizAttemptAnswerPayload<ExtArgs>[];
        Module: Prisma.$ModulePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        moduleId: string;
        question: string;
        optionA: string;
        optionB: string;
        optionC: string;
        optionD: string;
        correctAnswer: string;
        explanation: string;
        orderIndex: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["quizQuestion"]>;
    composites: {};
};
export type QuizQuestionGetPayload<S extends boolean | null | undefined | QuizQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload, S>;
export type QuizQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuizQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizQuestionCountAggregateInputType | true;
};
export interface QuizQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestion'];
        meta: {
            name: 'QuizQuestion';
        };
    };
    findUnique<T extends QuizQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, QuizQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuizQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuizQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuizQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, QuizQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuizQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuizQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuizQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, QuizQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuizQuestionCreateArgs>(args: Prisma.SelectSubset<T, QuizQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuizQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, QuizQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuizQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuizQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuizQuestionDeleteArgs>(args: Prisma.SelectSubset<T, QuizQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuizQuestionUpdateArgs>(args: Prisma.SelectSubset<T, QuizQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuizQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuizQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuizQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, QuizQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuizQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuizQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuizQuestionUpsertArgs>(args: Prisma.SelectSubset<T, QuizQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__QuizQuestionClient<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuizQuestionCountArgs>(args?: Prisma.Subset<T, QuizQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizQuestionCountAggregateOutputType> : number>;
    aggregate<T extends QuizQuestionAggregateArgs>(args: Prisma.Subset<T, QuizQuestionAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionAggregateType<T>>;
    groupBy<T extends QuizQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuizQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: QuizQuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuizQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuizQuestionFieldRefs;
}
export interface Prisma__QuizQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    QuizAttemptAnswer<T extends Prisma.QuizQuestion$QuizAttemptAnswerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuizQuestion$QuizAttemptAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Module<T extends Prisma.ModuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModuleDefaultArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuizQuestionFieldRefs {
    readonly id: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly moduleId: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly question: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly optionA: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly optionB: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly optionC: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly optionD: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly correctAnswer: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly explanation: Prisma.FieldRef<"QuizQuestion", 'String'>;
    readonly orderIndex: Prisma.FieldRef<"QuizQuestion", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"QuizQuestion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"QuizQuestion", 'DateTime'>;
}
export type QuizQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where?: Prisma.QuizQuestionWhereInput;
    orderBy?: Prisma.QuizQuestionOrderByWithRelationInput | Prisma.QuizQuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuizQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizQuestionScalarFieldEnum | Prisma.QuizQuestionScalarFieldEnum[];
};
export type QuizQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where?: Prisma.QuizQuestionWhereInput;
    orderBy?: Prisma.QuizQuestionOrderByWithRelationInput | Prisma.QuizQuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuizQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizQuestionScalarFieldEnum | Prisma.QuizQuestionScalarFieldEnum[];
};
export type QuizQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where?: Prisma.QuizQuestionWhereInput;
    orderBy?: Prisma.QuizQuestionOrderByWithRelationInput | Prisma.QuizQuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuizQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizQuestionScalarFieldEnum | Prisma.QuizQuestionScalarFieldEnum[];
};
export type QuizQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizQuestionCreateInput, Prisma.QuizQuestionUncheckedCreateInput>;
};
export type QuizQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuizQuestionCreateManyInput | Prisma.QuizQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuizQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    data: Prisma.QuizQuestionCreateManyInput | Prisma.QuizQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuizQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuizQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateInput, Prisma.QuizQuestionUncheckedUpdateInput>;
    where: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuizQuestionUpdateManyMutationInput, Prisma.QuizQuestionUncheckedUpdateManyInput>;
    where?: Prisma.QuizQuestionWhereInput;
    limit?: number;
};
export type QuizQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuizQuestionUpdateManyMutationInput, Prisma.QuizQuestionUncheckedUpdateManyInput>;
    where?: Prisma.QuizQuestionWhereInput;
    limit?: number;
    include?: Prisma.QuizQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuizQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where: Prisma.QuizQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuizQuestionCreateInput, Prisma.QuizQuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuizQuestionUpdateInput, Prisma.QuizQuestionUncheckedUpdateInput>;
};
export type QuizQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
    where: Prisma.QuizQuestionWhereUniqueInput;
};
export type QuizQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizQuestionWhereInput;
    limit?: number;
};
export type QuizQuestion$QuizAttemptAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuizQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizQuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuizQuestionOmit<ExtArgs> | null;
    include?: Prisma.QuizQuestionInclude<ExtArgs> | null;
};
export {};
