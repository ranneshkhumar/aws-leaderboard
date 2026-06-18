import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ModuleModel = runtime.Types.Result.DefaultSelection<Prisma.$ModulePayload>;
export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null;
    _avg: ModuleAvgAggregateOutputType | null;
    _sum: ModuleSumAggregateOutputType | null;
    _min: ModuleMinAggregateOutputType | null;
    _max: ModuleMaxAggregateOutputType | null;
};
export type ModuleAvgAggregateOutputType = {
    xpPoints: number | null;
    orderIndex: number | null;
};
export type ModuleSumAggregateOutputType = {
    xpPoints: number | null;
    orderIndex: number | null;
};
export type ModuleMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    name: string | null;
    description: string | null;
    tier: string | null;
    xpPoints: number | null;
    orderIndex: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    topicId: string | null;
    level: $Enums.ModuleLevel | null;
};
export type ModuleMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    name: string | null;
    description: string | null;
    tier: string | null;
    xpPoints: number | null;
    orderIndex: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    topicId: string | null;
    level: $Enums.ModuleLevel | null;
};
export type ModuleCountAggregateOutputType = {
    id: number;
    slug: number;
    name: number;
    description: number;
    tier: number;
    xpPoints: number;
    orderIndex: number;
    createdAt: number;
    updatedAt: number;
    topicId: number;
    level: number;
    _all: number;
};
export type ModuleAvgAggregateInputType = {
    xpPoints?: true;
    orderIndex?: true;
};
export type ModuleSumAggregateInputType = {
    xpPoints?: true;
    orderIndex?: true;
};
export type ModuleMinAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    tier?: true;
    xpPoints?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
    topicId?: true;
    level?: true;
};
export type ModuleMaxAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    tier?: true;
    xpPoints?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
    topicId?: true;
    level?: true;
};
export type ModuleCountAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    tier?: true;
    xpPoints?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
    topicId?: true;
    level?: true;
    _all?: true;
};
export type ModuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithRelationInput | Prisma.ModuleOrderByWithRelationInput[];
    cursor?: Prisma.ModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ModuleCountAggregateInputType;
    _avg?: ModuleAvgAggregateInputType;
    _sum?: ModuleSumAggregateInputType;
    _min?: ModuleMinAggregateInputType;
    _max?: ModuleMaxAggregateInputType;
};
export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
    [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModule[P]> : Prisma.GetScalarType<T[P], AggregateModule[P]>;
};
export type ModuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithAggregationInput | Prisma.ModuleOrderByWithAggregationInput[];
    by: Prisma.ModuleScalarFieldEnum[] | Prisma.ModuleScalarFieldEnum;
    having?: Prisma.ModuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModuleCountAggregateInputType | true;
    _avg?: ModuleAvgAggregateInputType;
    _sum?: ModuleSumAggregateInputType;
    _min?: ModuleMinAggregateInputType;
    _max?: ModuleMaxAggregateInputType;
};
export type ModuleGroupByOutputType = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt: Date;
    updatedAt: Date;
    topicId: string | null;
    level: $Enums.ModuleLevel | null;
    _count: ModuleCountAggregateOutputType | null;
    _avg: ModuleAvgAggregateOutputType | null;
    _sum: ModuleSumAggregateOutputType | null;
    _min: ModuleMinAggregateOutputType | null;
    _max: ModuleMaxAggregateOutputType | null;
};
type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModuleGroupByOutputType[P]>;
}>>;
export type ModuleWhereInput = {
    AND?: Prisma.ModuleWhereInput | Prisma.ModuleWhereInput[];
    OR?: Prisma.ModuleWhereInput[];
    NOT?: Prisma.ModuleWhereInput | Prisma.ModuleWhereInput[];
    id?: Prisma.StringFilter<"Module"> | string;
    slug?: Prisma.StringFilter<"Module"> | string;
    name?: Prisma.StringFilter<"Module"> | string;
    description?: Prisma.StringFilter<"Module"> | string;
    tier?: Prisma.StringFilter<"Module"> | string;
    xpPoints?: Prisma.IntFilter<"Module"> | number;
    orderIndex?: Prisma.IntFilter<"Module"> | number;
    createdAt?: Prisma.DateTimeFilter<"Module"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Module"> | Date | string;
    topicId?: Prisma.StringNullableFilter<"Module"> | string | null;
    level?: Prisma.EnumModuleLevelNullableFilter<"Module"> | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideListRelationFilter;
    Topic?: Prisma.XOR<Prisma.TopicNullableScalarRelationFilter, Prisma.TopicWhereInput> | null;
    QuizAttempt?: Prisma.QuizAttemptListRelationFilter;
    QuizQuestion?: Prisma.QuizQuestionListRelationFilter;
    UserModuleProgress?: Prisma.UserModuleProgressListRelationFilter;
};
export type ModuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    xpPoints?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    topicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    level?: Prisma.SortOrderInput | Prisma.SortOrder;
    LearningSlide?: Prisma.LearningSlideOrderByRelationAggregateInput;
    Topic?: Prisma.TopicOrderByWithRelationInput;
    QuizAttempt?: Prisma.QuizAttemptOrderByRelationAggregateInput;
    QuizQuestion?: Prisma.QuizQuestionOrderByRelationAggregateInput;
    UserModuleProgress?: Prisma.UserModuleProgressOrderByRelationAggregateInput;
};
export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.ModuleWhereInput | Prisma.ModuleWhereInput[];
    OR?: Prisma.ModuleWhereInput[];
    NOT?: Prisma.ModuleWhereInput | Prisma.ModuleWhereInput[];
    name?: Prisma.StringFilter<"Module"> | string;
    description?: Prisma.StringFilter<"Module"> | string;
    tier?: Prisma.StringFilter<"Module"> | string;
    xpPoints?: Prisma.IntFilter<"Module"> | number;
    orderIndex?: Prisma.IntFilter<"Module"> | number;
    createdAt?: Prisma.DateTimeFilter<"Module"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Module"> | Date | string;
    topicId?: Prisma.StringNullableFilter<"Module"> | string | null;
    level?: Prisma.EnumModuleLevelNullableFilter<"Module"> | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideListRelationFilter;
    Topic?: Prisma.XOR<Prisma.TopicNullableScalarRelationFilter, Prisma.TopicWhereInput> | null;
    QuizAttempt?: Prisma.QuizAttemptListRelationFilter;
    QuizQuestion?: Prisma.QuizQuestionListRelationFilter;
    UserModuleProgress?: Prisma.UserModuleProgressListRelationFilter;
}, "id" | "slug">;
export type ModuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    xpPoints?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    topicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    level?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ModuleCountOrderByAggregateInput;
    _avg?: Prisma.ModuleAvgOrderByAggregateInput;
    _max?: Prisma.ModuleMaxOrderByAggregateInput;
    _min?: Prisma.ModuleMinOrderByAggregateInput;
    _sum?: Prisma.ModuleSumOrderByAggregateInput;
};
export type ModuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModuleScalarWhereWithAggregatesInput | Prisma.ModuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModuleScalarWhereWithAggregatesInput | Prisma.ModuleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Module"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Module"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Module"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Module"> | string;
    tier?: Prisma.StringWithAggregatesFilter<"Module"> | string;
    xpPoints?: Prisma.IntWithAggregatesFilter<"Module"> | number;
    orderIndex?: Prisma.IntWithAggregatesFilter<"Module"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Module"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Module"> | Date | string;
    topicId?: Prisma.StringNullableWithAggregatesFilter<"Module"> | string | null;
    level?: Prisma.EnumModuleLevelNullableWithAggregatesFilter<"Module"> | $Enums.ModuleLevel | null;
};
export type ModuleCreateInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideCreateNestedManyWithoutModuleInput;
    Topic?: Prisma.TopicCreateNestedOneWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    topicId?: string | null;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedCreateNestedManyWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptUncheckedCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUpdateManyWithoutModuleNestedInput;
    Topic?: Prisma.TopicUpdateOneWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedUpdateManyWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUncheckedUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateManyInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    topicId?: string | null;
    level?: $Enums.ModuleLevel | null;
};
export type ModuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
};
export type ModuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
};
export type ModuleScalarRelationFilter = {
    is?: Prisma.ModuleWhereInput;
    isNot?: Prisma.ModuleWhereInput;
};
export type ModuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    xpPoints?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    topicId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
};
export type ModuleAvgOrderByAggregateInput = {
    xpPoints?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type ModuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    xpPoints?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    topicId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
};
export type ModuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    xpPoints?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    topicId?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
};
export type ModuleSumOrderByAggregateInput = {
    xpPoints?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type ModuleListRelationFilter = {
    every?: Prisma.ModuleWhereInput;
    some?: Prisma.ModuleWhereInput;
    none?: Prisma.ModuleWhereInput;
};
export type ModuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ModuleCreateNestedOneWithoutLearningSlideInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutLearningSlideInput, Prisma.ModuleUncheckedCreateWithoutLearningSlideInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutLearningSlideInput;
    connect?: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateOneRequiredWithoutLearningSlideNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutLearningSlideInput, Prisma.ModuleUncheckedCreateWithoutLearningSlideInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutLearningSlideInput;
    upsert?: Prisma.ModuleUpsertWithoutLearningSlideInput;
    connect?: Prisma.ModuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuleUpdateToOneWithWhereWithoutLearningSlideInput, Prisma.ModuleUpdateWithoutLearningSlideInput>, Prisma.ModuleUncheckedUpdateWithoutLearningSlideInput>;
};
export type NullableEnumModuleLevelFieldUpdateOperationsInput = {
    set?: $Enums.ModuleLevel | null;
};
export type ModuleCreateNestedOneWithoutQuizAttemptInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutQuizAttemptInput, Prisma.ModuleUncheckedCreateWithoutQuizAttemptInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutQuizAttemptInput;
    connect?: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateOneRequiredWithoutQuizAttemptNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutQuizAttemptInput, Prisma.ModuleUncheckedCreateWithoutQuizAttemptInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutQuizAttemptInput;
    upsert?: Prisma.ModuleUpsertWithoutQuizAttemptInput;
    connect?: Prisma.ModuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuleUpdateToOneWithWhereWithoutQuizAttemptInput, Prisma.ModuleUpdateWithoutQuizAttemptInput>, Prisma.ModuleUncheckedUpdateWithoutQuizAttemptInput>;
};
export type ModuleCreateNestedOneWithoutQuizQuestionInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutQuizQuestionInput, Prisma.ModuleUncheckedCreateWithoutQuizQuestionInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutQuizQuestionInput;
    connect?: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateOneRequiredWithoutQuizQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutQuizQuestionInput, Prisma.ModuleUncheckedCreateWithoutQuizQuestionInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutQuizQuestionInput;
    upsert?: Prisma.ModuleUpsertWithoutQuizQuestionInput;
    connect?: Prisma.ModuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuleUpdateToOneWithWhereWithoutQuizQuestionInput, Prisma.ModuleUpdateWithoutQuizQuestionInput>, Prisma.ModuleUncheckedUpdateWithoutQuizQuestionInput>;
};
export type ModuleCreateNestedManyWithoutTopicInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutTopicInput, Prisma.ModuleUncheckedCreateWithoutTopicInput> | Prisma.ModuleCreateWithoutTopicInput[] | Prisma.ModuleUncheckedCreateWithoutTopicInput[];
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutTopicInput | Prisma.ModuleCreateOrConnectWithoutTopicInput[];
    createMany?: Prisma.ModuleCreateManyTopicInputEnvelope;
    connect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
};
export type ModuleUncheckedCreateNestedManyWithoutTopicInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutTopicInput, Prisma.ModuleUncheckedCreateWithoutTopicInput> | Prisma.ModuleCreateWithoutTopicInput[] | Prisma.ModuleUncheckedCreateWithoutTopicInput[];
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutTopicInput | Prisma.ModuleCreateOrConnectWithoutTopicInput[];
    createMany?: Prisma.ModuleCreateManyTopicInputEnvelope;
    connect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
};
export type ModuleUpdateManyWithoutTopicNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutTopicInput, Prisma.ModuleUncheckedCreateWithoutTopicInput> | Prisma.ModuleCreateWithoutTopicInput[] | Prisma.ModuleUncheckedCreateWithoutTopicInput[];
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutTopicInput | Prisma.ModuleCreateOrConnectWithoutTopicInput[];
    upsert?: Prisma.ModuleUpsertWithWhereUniqueWithoutTopicInput | Prisma.ModuleUpsertWithWhereUniqueWithoutTopicInput[];
    createMany?: Prisma.ModuleCreateManyTopicInputEnvelope;
    set?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    disconnect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    delete?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    connect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    update?: Prisma.ModuleUpdateWithWhereUniqueWithoutTopicInput | Prisma.ModuleUpdateWithWhereUniqueWithoutTopicInput[];
    updateMany?: Prisma.ModuleUpdateManyWithWhereWithoutTopicInput | Prisma.ModuleUpdateManyWithWhereWithoutTopicInput[];
    deleteMany?: Prisma.ModuleScalarWhereInput | Prisma.ModuleScalarWhereInput[];
};
export type ModuleUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutTopicInput, Prisma.ModuleUncheckedCreateWithoutTopicInput> | Prisma.ModuleCreateWithoutTopicInput[] | Prisma.ModuleUncheckedCreateWithoutTopicInput[];
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutTopicInput | Prisma.ModuleCreateOrConnectWithoutTopicInput[];
    upsert?: Prisma.ModuleUpsertWithWhereUniqueWithoutTopicInput | Prisma.ModuleUpsertWithWhereUniqueWithoutTopicInput[];
    createMany?: Prisma.ModuleCreateManyTopicInputEnvelope;
    set?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    disconnect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    delete?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    connect?: Prisma.ModuleWhereUniqueInput | Prisma.ModuleWhereUniqueInput[];
    update?: Prisma.ModuleUpdateWithWhereUniqueWithoutTopicInput | Prisma.ModuleUpdateWithWhereUniqueWithoutTopicInput[];
    updateMany?: Prisma.ModuleUpdateManyWithWhereWithoutTopicInput | Prisma.ModuleUpdateManyWithWhereWithoutTopicInput[];
    deleteMany?: Prisma.ModuleScalarWhereInput | Prisma.ModuleScalarWhereInput[];
};
export type ModuleCreateNestedOneWithoutUserModuleProgressInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutUserModuleProgressInput, Prisma.ModuleUncheckedCreateWithoutUserModuleProgressInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutUserModuleProgressInput;
    connect?: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateOneRequiredWithoutUserModuleProgressNestedInput = {
    create?: Prisma.XOR<Prisma.ModuleCreateWithoutUserModuleProgressInput, Prisma.ModuleUncheckedCreateWithoutUserModuleProgressInput>;
    connectOrCreate?: Prisma.ModuleCreateOrConnectWithoutUserModuleProgressInput;
    upsert?: Prisma.ModuleUpsertWithoutUserModuleProgressInput;
    connect?: Prisma.ModuleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ModuleUpdateToOneWithWhereWithoutUserModuleProgressInput, Prisma.ModuleUpdateWithoutUserModuleProgressInput>, Prisma.ModuleUncheckedUpdateWithoutUserModuleProgressInput>;
};
export type ModuleCreateWithoutLearningSlideInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    level?: $Enums.ModuleLevel | null;
    Topic?: Prisma.TopicCreateNestedOneWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutLearningSlideInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    topicId?: string | null;
    level?: $Enums.ModuleLevel | null;
    QuizAttempt?: Prisma.QuizAttemptUncheckedCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutLearningSlideInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutLearningSlideInput, Prisma.ModuleUncheckedCreateWithoutLearningSlideInput>;
};
export type ModuleUpsertWithoutLearningSlideInput = {
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutLearningSlideInput, Prisma.ModuleUncheckedUpdateWithoutLearningSlideInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutLearningSlideInput, Prisma.ModuleUncheckedCreateWithoutLearningSlideInput>;
    where?: Prisma.ModuleWhereInput;
};
export type ModuleUpdateToOneWithWhereWithoutLearningSlideInput = {
    where?: Prisma.ModuleWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutLearningSlideInput, Prisma.ModuleUncheckedUpdateWithoutLearningSlideInput>;
};
export type ModuleUpdateWithoutLearningSlideInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    Topic?: Prisma.TopicUpdateOneWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutLearningSlideInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    QuizAttempt?: Prisma.QuizAttemptUncheckedUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateWithoutQuizAttemptInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideCreateNestedManyWithoutModuleInput;
    Topic?: Prisma.TopicCreateNestedOneWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutQuizAttemptInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    topicId?: string | null;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutQuizAttemptInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutQuizAttemptInput, Prisma.ModuleUncheckedCreateWithoutQuizAttemptInput>;
};
export type ModuleUpsertWithoutQuizAttemptInput = {
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutQuizAttemptInput, Prisma.ModuleUncheckedUpdateWithoutQuizAttemptInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutQuizAttemptInput, Prisma.ModuleUncheckedCreateWithoutQuizAttemptInput>;
    where?: Prisma.ModuleWhereInput;
};
export type ModuleUpdateToOneWithWhereWithoutQuizAttemptInput = {
    where?: Prisma.ModuleWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutQuizAttemptInput, Prisma.ModuleUncheckedUpdateWithoutQuizAttemptInput>;
};
export type ModuleUpdateWithoutQuizAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUpdateManyWithoutModuleNestedInput;
    Topic?: Prisma.TopicUpdateOneWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutQuizAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateWithoutQuizQuestionInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideCreateNestedManyWithoutModuleInput;
    Topic?: Prisma.TopicCreateNestedOneWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutQuizQuestionInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    topicId?: string | null;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedCreateNestedManyWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptUncheckedCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutQuizQuestionInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutQuizQuestionInput, Prisma.ModuleUncheckedCreateWithoutQuizQuestionInput>;
};
export type ModuleUpsertWithoutQuizQuestionInput = {
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutQuizQuestionInput, Prisma.ModuleUncheckedUpdateWithoutQuizQuestionInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutQuizQuestionInput, Prisma.ModuleUncheckedCreateWithoutQuizQuestionInput>;
    where?: Prisma.ModuleWhereInput;
};
export type ModuleUpdateToOneWithWhereWithoutQuizQuestionInput = {
    where?: Prisma.ModuleWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutQuizQuestionInput, Prisma.ModuleUncheckedUpdateWithoutQuizQuestionInput>;
};
export type ModuleUpdateWithoutQuizQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUpdateManyWithoutModuleNestedInput;
    Topic?: Prisma.TopicUpdateOneWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutQuizQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedUpdateManyWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUncheckedUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateWithoutTopicInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideCreateNestedManyWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutTopicInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedCreateNestedManyWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptUncheckedCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedCreateNestedManyWithoutModuleInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutTopicInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutTopicInput, Prisma.ModuleUncheckedCreateWithoutTopicInput>;
};
export type ModuleCreateManyTopicInputEnvelope = {
    data: Prisma.ModuleCreateManyTopicInput | Prisma.ModuleCreateManyTopicInput[];
    skipDuplicates?: boolean;
};
export type ModuleUpsertWithWhereUniqueWithoutTopicInput = {
    where: Prisma.ModuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutTopicInput, Prisma.ModuleUncheckedUpdateWithoutTopicInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutTopicInput, Prisma.ModuleUncheckedCreateWithoutTopicInput>;
};
export type ModuleUpdateWithWhereUniqueWithoutTopicInput = {
    where: Prisma.ModuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutTopicInput, Prisma.ModuleUncheckedUpdateWithoutTopicInput>;
};
export type ModuleUpdateManyWithWhereWithoutTopicInput = {
    where: Prisma.ModuleScalarWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateManyMutationInput, Prisma.ModuleUncheckedUpdateManyWithoutTopicInput>;
};
export type ModuleScalarWhereInput = {
    AND?: Prisma.ModuleScalarWhereInput | Prisma.ModuleScalarWhereInput[];
    OR?: Prisma.ModuleScalarWhereInput[];
    NOT?: Prisma.ModuleScalarWhereInput | Prisma.ModuleScalarWhereInput[];
    id?: Prisma.StringFilter<"Module"> | string;
    slug?: Prisma.StringFilter<"Module"> | string;
    name?: Prisma.StringFilter<"Module"> | string;
    description?: Prisma.StringFilter<"Module"> | string;
    tier?: Prisma.StringFilter<"Module"> | string;
    xpPoints?: Prisma.IntFilter<"Module"> | number;
    orderIndex?: Prisma.IntFilter<"Module"> | number;
    createdAt?: Prisma.DateTimeFilter<"Module"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Module"> | Date | string;
    topicId?: Prisma.StringNullableFilter<"Module"> | string | null;
    level?: Prisma.EnumModuleLevelNullableFilter<"Module"> | $Enums.ModuleLevel | null;
};
export type ModuleCreateWithoutUserModuleProgressInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideCreateNestedManyWithoutModuleInput;
    Topic?: Prisma.TopicCreateNestedOneWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionCreateNestedManyWithoutModuleInput;
};
export type ModuleUncheckedCreateWithoutUserModuleProgressInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    topicId?: string | null;
    level?: $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedCreateNestedManyWithoutModuleInput;
    QuizAttempt?: Prisma.QuizAttemptUncheckedCreateNestedManyWithoutModuleInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedCreateNestedManyWithoutModuleInput;
};
export type ModuleCreateOrConnectWithoutUserModuleProgressInput = {
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutUserModuleProgressInput, Prisma.ModuleUncheckedCreateWithoutUserModuleProgressInput>;
};
export type ModuleUpsertWithoutUserModuleProgressInput = {
    update: Prisma.XOR<Prisma.ModuleUpdateWithoutUserModuleProgressInput, Prisma.ModuleUncheckedUpdateWithoutUserModuleProgressInput>;
    create: Prisma.XOR<Prisma.ModuleCreateWithoutUserModuleProgressInput, Prisma.ModuleUncheckedCreateWithoutUserModuleProgressInput>;
    where?: Prisma.ModuleWhereInput;
};
export type ModuleUpdateToOneWithWhereWithoutUserModuleProgressInput = {
    where?: Prisma.ModuleWhereInput;
    data: Prisma.XOR<Prisma.ModuleUpdateWithoutUserModuleProgressInput, Prisma.ModuleUncheckedUpdateWithoutUserModuleProgressInput>;
};
export type ModuleUpdateWithoutUserModuleProgressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUpdateManyWithoutModuleNestedInput;
    Topic?: Prisma.TopicUpdateOneWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutUserModuleProgressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    topicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedUpdateManyWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUncheckedUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleCreateManyTopicInput = {
    id: string;
    slug: string;
    name: string;
    description: string;
    tier: string;
    xpPoints: number;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    level?: $Enums.ModuleLevel | null;
};
export type ModuleUpdateWithoutTopicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUpdateManyWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateWithoutTopicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
    LearningSlide?: Prisma.LearningSlideUncheckedUpdateManyWithoutModuleNestedInput;
    QuizAttempt?: Prisma.QuizAttemptUncheckedUpdateManyWithoutModuleNestedInput;
    QuizQuestion?: Prisma.QuizQuestionUncheckedUpdateManyWithoutModuleNestedInput;
    UserModuleProgress?: Prisma.UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput;
};
export type ModuleUncheckedUpdateManyWithoutTopicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.StringFieldUpdateOperationsInput | string;
    xpPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.NullableEnumModuleLevelFieldUpdateOperationsInput | $Enums.ModuleLevel | null;
};
export type ModuleCountOutputType = {
    LearningSlide: number;
    QuizAttempt: number;
    QuizQuestion: number;
    UserModuleProgress: number;
};
export type ModuleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    LearningSlide?: boolean | ModuleCountOutputTypeCountLearningSlideArgs;
    QuizAttempt?: boolean | ModuleCountOutputTypeCountQuizAttemptArgs;
    QuizQuestion?: boolean | ModuleCountOutputTypeCountQuizQuestionArgs;
    UserModuleProgress?: boolean | ModuleCountOutputTypeCountUserModuleProgressArgs;
};
export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleCountOutputTypeSelect<ExtArgs> | null;
};
export type ModuleCountOutputTypeCountLearningSlideArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LearningSlideWhereInput;
};
export type ModuleCountOutputTypeCountQuizAttemptArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizAttemptWhereInput;
};
export type ModuleCountOutputTypeCountQuizQuestionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuizQuestionWhereInput;
};
export type ModuleCountOutputTypeCountUserModuleProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserModuleProgressWhereInput;
};
export type ModuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    tier?: boolean;
    xpPoints?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    topicId?: boolean;
    level?: boolean;
    LearningSlide?: boolean | Prisma.Module$LearningSlideArgs<ExtArgs>;
    Topic?: boolean | Prisma.Module$TopicArgs<ExtArgs>;
    QuizAttempt?: boolean | Prisma.Module$QuizAttemptArgs<ExtArgs>;
    QuizQuestion?: boolean | Prisma.Module$QuizQuestionArgs<ExtArgs>;
    UserModuleProgress?: boolean | Prisma.Module$UserModuleProgressArgs<ExtArgs>;
    _count?: boolean | Prisma.ModuleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["module"]>;
export type ModuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    tier?: boolean;
    xpPoints?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    topicId?: boolean;
    level?: boolean;
    Topic?: boolean | Prisma.Module$TopicArgs<ExtArgs>;
}, ExtArgs["result"]["module"]>;
export type ModuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    tier?: boolean;
    xpPoints?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    topicId?: boolean;
    level?: boolean;
    Topic?: boolean | Prisma.Module$TopicArgs<ExtArgs>;
}, ExtArgs["result"]["module"]>;
export type ModuleSelectScalar = {
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    tier?: boolean;
    xpPoints?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    topicId?: boolean;
    level?: boolean;
};
export type ModuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "name" | "description" | "tier" | "xpPoints" | "orderIndex" | "createdAt" | "updatedAt" | "topicId" | "level", ExtArgs["result"]["module"]>;
export type ModuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    LearningSlide?: boolean | Prisma.Module$LearningSlideArgs<ExtArgs>;
    Topic?: boolean | Prisma.Module$TopicArgs<ExtArgs>;
    QuizAttempt?: boolean | Prisma.Module$QuizAttemptArgs<ExtArgs>;
    QuizQuestion?: boolean | Prisma.Module$QuizQuestionArgs<ExtArgs>;
    UserModuleProgress?: boolean | Prisma.Module$UserModuleProgressArgs<ExtArgs>;
    _count?: boolean | Prisma.ModuleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ModuleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Topic?: boolean | Prisma.Module$TopicArgs<ExtArgs>;
};
export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Topic?: boolean | Prisma.Module$TopicArgs<ExtArgs>;
};
export type $ModulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Module";
    objects: {
        LearningSlide: Prisma.$LearningSlidePayload<ExtArgs>[];
        Topic: Prisma.$TopicPayload<ExtArgs> | null;
        QuizAttempt: Prisma.$QuizAttemptPayload<ExtArgs>[];
        QuizQuestion: Prisma.$QuizQuestionPayload<ExtArgs>[];
        UserModuleProgress: Prisma.$UserModuleProgressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        name: string;
        description: string;
        tier: string;
        xpPoints: number;
        orderIndex: number;
        createdAt: Date;
        updatedAt: Date;
        topicId: string | null;
        level: $Enums.ModuleLevel | null;
    }, ExtArgs["result"]["module"]>;
    composites: {};
};
export type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModulePayload, S>;
export type ModuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModuleCountAggregateInputType | true;
};
export interface ModuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Module'];
        meta: {
            name: 'Module';
        };
    };
    findUnique<T extends ModuleFindUniqueArgs>(args: Prisma.SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ModuleFindFirstArgs>(args?: Prisma.SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ModuleFindManyArgs>(args?: Prisma.SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ModuleCreateArgs>(args: Prisma.SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ModuleCreateManyArgs>(args?: Prisma.SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ModuleDeleteArgs>(args: Prisma.SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ModuleUpdateArgs>(args: Prisma.SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ModuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ModuleUpdateManyArgs>(args: Prisma.SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ModuleUpsertArgs>(args: Prisma.SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ModuleCountArgs>(args?: Prisma.Subset<T, ModuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModuleCountAggregateOutputType> : number>;
    aggregate<T extends ModuleAggregateArgs>(args: Prisma.Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>;
    groupBy<T extends ModuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModuleGroupByArgs['orderBy'];
    } : {
        orderBy?: ModuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ModuleFieldRefs;
}
export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    LearningSlide<T extends Prisma.Module$LearningSlideArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Module$LearningSlideArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Topic<T extends Prisma.Module$TopicArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Module$TopicArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    QuizAttempt<T extends Prisma.Module$QuizAttemptArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Module$QuizAttemptArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    QuizQuestion<T extends Prisma.Module$QuizQuestionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Module$QuizQuestionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    UserModuleProgress<T extends Prisma.Module$UserModuleProgressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Module$UserModuleProgressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ModuleFieldRefs {
    readonly id: Prisma.FieldRef<"Module", 'String'>;
    readonly slug: Prisma.FieldRef<"Module", 'String'>;
    readonly name: Prisma.FieldRef<"Module", 'String'>;
    readonly description: Prisma.FieldRef<"Module", 'String'>;
    readonly tier: Prisma.FieldRef<"Module", 'String'>;
    readonly xpPoints: Prisma.FieldRef<"Module", 'Int'>;
    readonly orderIndex: Prisma.FieldRef<"Module", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Module", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Module", 'DateTime'>;
    readonly topicId: Prisma.FieldRef<"Module", 'String'>;
    readonly level: Prisma.FieldRef<"Module", 'ModuleLevel'>;
}
export type ModuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where: Prisma.ModuleWhereUniqueInput;
};
export type ModuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where: Prisma.ModuleWhereUniqueInput;
};
export type ModuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithRelationInput | Prisma.ModuleOrderByWithRelationInput[];
    cursor?: Prisma.ModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuleScalarFieldEnum | Prisma.ModuleScalarFieldEnum[];
};
export type ModuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithRelationInput | Prisma.ModuleOrderByWithRelationInput[];
    cursor?: Prisma.ModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuleScalarFieldEnum | Prisma.ModuleScalarFieldEnum[];
};
export type ModuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where?: Prisma.ModuleWhereInput;
    orderBy?: Prisma.ModuleOrderByWithRelationInput | Prisma.ModuleOrderByWithRelationInput[];
    cursor?: Prisma.ModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuleScalarFieldEnum | Prisma.ModuleScalarFieldEnum[];
};
export type ModuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuleCreateInput, Prisma.ModuleUncheckedCreateInput>;
};
export type ModuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ModuleCreateManyInput | Prisma.ModuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ModuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    data: Prisma.ModuleCreateManyInput | Prisma.ModuleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ModuleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ModuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuleUpdateInput, Prisma.ModuleUncheckedUpdateInput>;
    where: Prisma.ModuleWhereUniqueInput;
};
export type ModuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ModuleUpdateManyMutationInput, Prisma.ModuleUncheckedUpdateManyInput>;
    where?: Prisma.ModuleWhereInput;
    limit?: number;
};
export type ModuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModuleUpdateManyMutationInput, Prisma.ModuleUncheckedUpdateManyInput>;
    where?: Prisma.ModuleWhereInput;
    limit?: number;
    include?: Prisma.ModuleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ModuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where: Prisma.ModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModuleCreateInput, Prisma.ModuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ModuleUpdateInput, Prisma.ModuleUncheckedUpdateInput>;
};
export type ModuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
    where: Prisma.ModuleWhereUniqueInput;
};
export type ModuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuleWhereInput;
    limit?: number;
};
export type Module$LearningSlideArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelect<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    include?: Prisma.LearningSlideInclude<ExtArgs> | null;
    where?: Prisma.LearningSlideWhereInput;
    orderBy?: Prisma.LearningSlideOrderByWithRelationInput | Prisma.LearningSlideOrderByWithRelationInput[];
    cursor?: Prisma.LearningSlideWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LearningSlideScalarFieldEnum | Prisma.LearningSlideScalarFieldEnum[];
};
export type Module$TopicArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where?: Prisma.TopicWhereInput;
};
export type Module$QuizAttemptArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Module$QuizQuestionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Module$UserModuleProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    include?: Prisma.UserModuleProgressInclude<ExtArgs> | null;
    where?: Prisma.UserModuleProgressWhereInput;
    orderBy?: Prisma.UserModuleProgressOrderByWithRelationInput | Prisma.UserModuleProgressOrderByWithRelationInput[];
    cursor?: Prisma.UserModuleProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserModuleProgressScalarFieldEnum | Prisma.UserModuleProgressScalarFieldEnum[];
};
export type ModuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuleSelect<ExtArgs> | null;
    omit?: Prisma.ModuleOmit<ExtArgs> | null;
    include?: Prisma.ModuleInclude<ExtArgs> | null;
};
export {};
