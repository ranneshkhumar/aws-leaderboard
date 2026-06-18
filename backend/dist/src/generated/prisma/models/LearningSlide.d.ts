import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type LearningSlideModel = runtime.Types.Result.DefaultSelection<Prisma.$LearningSlidePayload>;
export type AggregateLearningSlide = {
    _count: LearningSlideCountAggregateOutputType | null;
    _avg: LearningSlideAvgAggregateOutputType | null;
    _sum: LearningSlideSumAggregateOutputType | null;
    _min: LearningSlideMinAggregateOutputType | null;
    _max: LearningSlideMaxAggregateOutputType | null;
};
export type LearningSlideAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type LearningSlideSumAggregateOutputType = {
    orderIndex: number | null;
};
export type LearningSlideMinAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    title: string | null;
    layoutType: string | null;
    imageUrl: string | null;
    orderIndex: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LearningSlideMaxAggregateOutputType = {
    id: string | null;
    moduleId: string | null;
    title: string | null;
    layoutType: string | null;
    imageUrl: string | null;
    orderIndex: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LearningSlideCountAggregateOutputType = {
    id: number;
    moduleId: number;
    title: number;
    layoutType: number;
    imageUrl: number;
    bullets: number;
    orderIndex: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LearningSlideAvgAggregateInputType = {
    orderIndex?: true;
};
export type LearningSlideSumAggregateInputType = {
    orderIndex?: true;
};
export type LearningSlideMinAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    layoutType?: true;
    imageUrl?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LearningSlideMaxAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    layoutType?: true;
    imageUrl?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LearningSlideCountAggregateInputType = {
    id?: true;
    moduleId?: true;
    title?: true;
    layoutType?: true;
    imageUrl?: true;
    bullets?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LearningSlideAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LearningSlideWhereInput;
    orderBy?: Prisma.LearningSlideOrderByWithRelationInput | Prisma.LearningSlideOrderByWithRelationInput[];
    cursor?: Prisma.LearningSlideWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LearningSlideCountAggregateInputType;
    _avg?: LearningSlideAvgAggregateInputType;
    _sum?: LearningSlideSumAggregateInputType;
    _min?: LearningSlideMinAggregateInputType;
    _max?: LearningSlideMaxAggregateInputType;
};
export type GetLearningSlideAggregateType<T extends LearningSlideAggregateArgs> = {
    [P in keyof T & keyof AggregateLearningSlide]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLearningSlide[P]> : Prisma.GetScalarType<T[P], AggregateLearningSlide[P]>;
};
export type LearningSlideGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LearningSlideWhereInput;
    orderBy?: Prisma.LearningSlideOrderByWithAggregationInput | Prisma.LearningSlideOrderByWithAggregationInput[];
    by: Prisma.LearningSlideScalarFieldEnum[] | Prisma.LearningSlideScalarFieldEnum;
    having?: Prisma.LearningSlideScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LearningSlideCountAggregateInputType | true;
    _avg?: LearningSlideAvgAggregateInputType;
    _sum?: LearningSlideSumAggregateInputType;
    _min?: LearningSlideMinAggregateInputType;
    _max?: LearningSlideMaxAggregateInputType;
};
export type LearningSlideGroupByOutputType = {
    id: string;
    moduleId: string;
    title: string;
    layoutType: string;
    imageUrl: string | null;
    bullets: string[];
    orderIndex: number;
    createdAt: Date;
    updatedAt: Date;
    _count: LearningSlideCountAggregateOutputType | null;
    _avg: LearningSlideAvgAggregateOutputType | null;
    _sum: LearningSlideSumAggregateOutputType | null;
    _min: LearningSlideMinAggregateOutputType | null;
    _max: LearningSlideMaxAggregateOutputType | null;
};
type GetLearningSlideGroupByPayload<T extends LearningSlideGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LearningSlideGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LearningSlideGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LearningSlideGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LearningSlideGroupByOutputType[P]>;
}>>;
export type LearningSlideWhereInput = {
    AND?: Prisma.LearningSlideWhereInput | Prisma.LearningSlideWhereInput[];
    OR?: Prisma.LearningSlideWhereInput[];
    NOT?: Prisma.LearningSlideWhereInput | Prisma.LearningSlideWhereInput[];
    id?: Prisma.StringFilter<"LearningSlide"> | string;
    moduleId?: Prisma.StringFilter<"LearningSlide"> | string;
    title?: Prisma.StringFilter<"LearningSlide"> | string;
    layoutType?: Prisma.StringFilter<"LearningSlide"> | string;
    imageUrl?: Prisma.StringNullableFilter<"LearningSlide"> | string | null;
    bullets?: Prisma.StringNullableListFilter<"LearningSlide">;
    orderIndex?: Prisma.IntFilter<"LearningSlide"> | number;
    createdAt?: Prisma.DateTimeFilter<"LearningSlide"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LearningSlide"> | Date | string;
    Module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
};
export type LearningSlideOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    layoutType?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    bullets?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Module?: Prisma.ModuleOrderByWithRelationInput;
};
export type LearningSlideWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LearningSlideWhereInput | Prisma.LearningSlideWhereInput[];
    OR?: Prisma.LearningSlideWhereInput[];
    NOT?: Prisma.LearningSlideWhereInput | Prisma.LearningSlideWhereInput[];
    moduleId?: Prisma.StringFilter<"LearningSlide"> | string;
    title?: Prisma.StringFilter<"LearningSlide"> | string;
    layoutType?: Prisma.StringFilter<"LearningSlide"> | string;
    imageUrl?: Prisma.StringNullableFilter<"LearningSlide"> | string | null;
    bullets?: Prisma.StringNullableListFilter<"LearningSlide">;
    orderIndex?: Prisma.IntFilter<"LearningSlide"> | number;
    createdAt?: Prisma.DateTimeFilter<"LearningSlide"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LearningSlide"> | Date | string;
    Module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
}, "id">;
export type LearningSlideOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    layoutType?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    bullets?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LearningSlideCountOrderByAggregateInput;
    _avg?: Prisma.LearningSlideAvgOrderByAggregateInput;
    _max?: Prisma.LearningSlideMaxOrderByAggregateInput;
    _min?: Prisma.LearningSlideMinOrderByAggregateInput;
    _sum?: Prisma.LearningSlideSumOrderByAggregateInput;
};
export type LearningSlideScalarWhereWithAggregatesInput = {
    AND?: Prisma.LearningSlideScalarWhereWithAggregatesInput | Prisma.LearningSlideScalarWhereWithAggregatesInput[];
    OR?: Prisma.LearningSlideScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LearningSlideScalarWhereWithAggregatesInput | Prisma.LearningSlideScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LearningSlide"> | string;
    moduleId?: Prisma.StringWithAggregatesFilter<"LearningSlide"> | string;
    title?: Prisma.StringWithAggregatesFilter<"LearningSlide"> | string;
    layoutType?: Prisma.StringWithAggregatesFilter<"LearningSlide"> | string;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"LearningSlide"> | string | null;
    bullets?: Prisma.StringNullableListFilter<"LearningSlide">;
    orderIndex?: Prisma.IntWithAggregatesFilter<"LearningSlide"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LearningSlide"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LearningSlide"> | Date | string;
};
export type LearningSlideCreateInput = {
    id: string;
    title: string;
    layoutType: string;
    imageUrl?: string | null;
    bullets?: Prisma.LearningSlideCreatebulletsInput | string[];
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    Module: Prisma.ModuleCreateNestedOneWithoutLearningSlideInput;
};
export type LearningSlideUncheckedCreateInput = {
    id: string;
    moduleId: string;
    title: string;
    layoutType: string;
    imageUrl?: string | null;
    bullets?: Prisma.LearningSlideCreatebulletsInput | string[];
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LearningSlideUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bullets?: Prisma.LearningSlideUpdatebulletsInput | string[];
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Module?: Prisma.ModuleUpdateOneRequiredWithoutLearningSlideNestedInput;
};
export type LearningSlideUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bullets?: Prisma.LearningSlideUpdatebulletsInput | string[];
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearningSlideCreateManyInput = {
    id: string;
    moduleId: string;
    title: string;
    layoutType: string;
    imageUrl?: string | null;
    bullets?: Prisma.LearningSlideCreatebulletsInput | string[];
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LearningSlideUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bullets?: Prisma.LearningSlideUpdatebulletsInput | string[];
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearningSlideUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bullets?: Prisma.LearningSlideUpdatebulletsInput | string[];
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type LearningSlideCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    layoutType?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    bullets?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LearningSlideAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type LearningSlideMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    layoutType?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LearningSlideMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    layoutType?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LearningSlideSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type LearningSlideListRelationFilter = {
    every?: Prisma.LearningSlideWhereInput;
    some?: Prisma.LearningSlideWhereInput;
    none?: Prisma.LearningSlideWhereInput;
};
export type LearningSlideOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LearningSlideCreatebulletsInput = {
    set: string[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type LearningSlideUpdatebulletsInput = {
    set?: string[];
    push?: string | string[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type LearningSlideCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.LearningSlideCreateWithoutModuleInput, Prisma.LearningSlideUncheckedCreateWithoutModuleInput> | Prisma.LearningSlideCreateWithoutModuleInput[] | Prisma.LearningSlideUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LearningSlideCreateOrConnectWithoutModuleInput | Prisma.LearningSlideCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.LearningSlideCreateManyModuleInputEnvelope;
    connect?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
};
export type LearningSlideUncheckedCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.LearningSlideCreateWithoutModuleInput, Prisma.LearningSlideUncheckedCreateWithoutModuleInput> | Prisma.LearningSlideCreateWithoutModuleInput[] | Prisma.LearningSlideUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LearningSlideCreateOrConnectWithoutModuleInput | Prisma.LearningSlideCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.LearningSlideCreateManyModuleInputEnvelope;
    connect?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
};
export type LearningSlideUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.LearningSlideCreateWithoutModuleInput, Prisma.LearningSlideUncheckedCreateWithoutModuleInput> | Prisma.LearningSlideCreateWithoutModuleInput[] | Prisma.LearningSlideUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LearningSlideCreateOrConnectWithoutModuleInput | Prisma.LearningSlideCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.LearningSlideUpsertWithWhereUniqueWithoutModuleInput | Prisma.LearningSlideUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.LearningSlideCreateManyModuleInputEnvelope;
    set?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
    disconnect?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
    delete?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
    connect?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
    update?: Prisma.LearningSlideUpdateWithWhereUniqueWithoutModuleInput | Prisma.LearningSlideUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.LearningSlideUpdateManyWithWhereWithoutModuleInput | Prisma.LearningSlideUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.LearningSlideScalarWhereInput | Prisma.LearningSlideScalarWhereInput[];
};
export type LearningSlideUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.LearningSlideCreateWithoutModuleInput, Prisma.LearningSlideUncheckedCreateWithoutModuleInput> | Prisma.LearningSlideCreateWithoutModuleInput[] | Prisma.LearningSlideUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.LearningSlideCreateOrConnectWithoutModuleInput | Prisma.LearningSlideCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.LearningSlideUpsertWithWhereUniqueWithoutModuleInput | Prisma.LearningSlideUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.LearningSlideCreateManyModuleInputEnvelope;
    set?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
    disconnect?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
    delete?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
    connect?: Prisma.LearningSlideWhereUniqueInput | Prisma.LearningSlideWhereUniqueInput[];
    update?: Prisma.LearningSlideUpdateWithWhereUniqueWithoutModuleInput | Prisma.LearningSlideUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.LearningSlideUpdateManyWithWhereWithoutModuleInput | Prisma.LearningSlideUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.LearningSlideScalarWhereInput | Prisma.LearningSlideScalarWhereInput[];
};
export type LearningSlideCreateWithoutModuleInput = {
    id: string;
    title: string;
    layoutType: string;
    imageUrl?: string | null;
    bullets?: Prisma.LearningSlideCreatebulletsInput | string[];
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LearningSlideUncheckedCreateWithoutModuleInput = {
    id: string;
    title: string;
    layoutType: string;
    imageUrl?: string | null;
    bullets?: Prisma.LearningSlideCreatebulletsInput | string[];
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LearningSlideCreateOrConnectWithoutModuleInput = {
    where: Prisma.LearningSlideWhereUniqueInput;
    create: Prisma.XOR<Prisma.LearningSlideCreateWithoutModuleInput, Prisma.LearningSlideUncheckedCreateWithoutModuleInput>;
};
export type LearningSlideCreateManyModuleInputEnvelope = {
    data: Prisma.LearningSlideCreateManyModuleInput | Prisma.LearningSlideCreateManyModuleInput[];
    skipDuplicates?: boolean;
};
export type LearningSlideUpsertWithWhereUniqueWithoutModuleInput = {
    where: Prisma.LearningSlideWhereUniqueInput;
    update: Prisma.XOR<Prisma.LearningSlideUpdateWithoutModuleInput, Prisma.LearningSlideUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.LearningSlideCreateWithoutModuleInput, Prisma.LearningSlideUncheckedCreateWithoutModuleInput>;
};
export type LearningSlideUpdateWithWhereUniqueWithoutModuleInput = {
    where: Prisma.LearningSlideWhereUniqueInput;
    data: Prisma.XOR<Prisma.LearningSlideUpdateWithoutModuleInput, Prisma.LearningSlideUncheckedUpdateWithoutModuleInput>;
};
export type LearningSlideUpdateManyWithWhereWithoutModuleInput = {
    where: Prisma.LearningSlideScalarWhereInput;
    data: Prisma.XOR<Prisma.LearningSlideUpdateManyMutationInput, Prisma.LearningSlideUncheckedUpdateManyWithoutModuleInput>;
};
export type LearningSlideScalarWhereInput = {
    AND?: Prisma.LearningSlideScalarWhereInput | Prisma.LearningSlideScalarWhereInput[];
    OR?: Prisma.LearningSlideScalarWhereInput[];
    NOT?: Prisma.LearningSlideScalarWhereInput | Prisma.LearningSlideScalarWhereInput[];
    id?: Prisma.StringFilter<"LearningSlide"> | string;
    moduleId?: Prisma.StringFilter<"LearningSlide"> | string;
    title?: Prisma.StringFilter<"LearningSlide"> | string;
    layoutType?: Prisma.StringFilter<"LearningSlide"> | string;
    imageUrl?: Prisma.StringNullableFilter<"LearningSlide"> | string | null;
    bullets?: Prisma.StringNullableListFilter<"LearningSlide">;
    orderIndex?: Prisma.IntFilter<"LearningSlide"> | number;
    createdAt?: Prisma.DateTimeFilter<"LearningSlide"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LearningSlide"> | Date | string;
};
export type LearningSlideCreateManyModuleInput = {
    id: string;
    title: string;
    layoutType: string;
    imageUrl?: string | null;
    bullets?: Prisma.LearningSlideCreatebulletsInput | string[];
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type LearningSlideUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bullets?: Prisma.LearningSlideUpdatebulletsInput | string[];
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearningSlideUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bullets?: Prisma.LearningSlideUpdatebulletsInput | string[];
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearningSlideUncheckedUpdateManyWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    layoutType?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bullets?: Prisma.LearningSlideUpdatebulletsInput | string[];
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LearningSlideSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    layoutType?: boolean;
    imageUrl?: boolean;
    bullets?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["learningSlide"]>;
export type LearningSlideSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    layoutType?: boolean;
    imageUrl?: boolean;
    bullets?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["learningSlide"]>;
export type LearningSlideSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    layoutType?: boolean;
    imageUrl?: boolean;
    bullets?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["learningSlide"]>;
export type LearningSlideSelectScalar = {
    id?: boolean;
    moduleId?: boolean;
    title?: boolean;
    layoutType?: boolean;
    imageUrl?: boolean;
    bullets?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LearningSlideOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "moduleId" | "title" | "layoutType" | "imageUrl" | "bullets" | "orderIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["learningSlide"]>;
export type LearningSlideInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type LearningSlideIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type LearningSlideIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
};
export type $LearningSlidePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LearningSlide";
    objects: {
        Module: Prisma.$ModulePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        moduleId: string;
        title: string;
        layoutType: string;
        imageUrl: string | null;
        bullets: string[];
        orderIndex: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["learningSlide"]>;
    composites: {};
};
export type LearningSlideGetPayload<S extends boolean | null | undefined | LearningSlideDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload, S>;
export type LearningSlideCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LearningSlideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LearningSlideCountAggregateInputType | true;
};
export interface LearningSlideDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LearningSlide'];
        meta: {
            name: 'LearningSlide';
        };
    };
    findUnique<T extends LearningSlideFindUniqueArgs>(args: Prisma.SelectSubset<T, LearningSlideFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LearningSlideClient<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LearningSlideFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LearningSlideFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LearningSlideClient<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LearningSlideFindFirstArgs>(args?: Prisma.SelectSubset<T, LearningSlideFindFirstArgs<ExtArgs>>): Prisma.Prisma__LearningSlideClient<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LearningSlideFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LearningSlideFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LearningSlideClient<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LearningSlideFindManyArgs>(args?: Prisma.SelectSubset<T, LearningSlideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LearningSlideCreateArgs>(args: Prisma.SelectSubset<T, LearningSlideCreateArgs<ExtArgs>>): Prisma.Prisma__LearningSlideClient<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LearningSlideCreateManyArgs>(args?: Prisma.SelectSubset<T, LearningSlideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LearningSlideCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LearningSlideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LearningSlideDeleteArgs>(args: Prisma.SelectSubset<T, LearningSlideDeleteArgs<ExtArgs>>): Prisma.Prisma__LearningSlideClient<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LearningSlideUpdateArgs>(args: Prisma.SelectSubset<T, LearningSlideUpdateArgs<ExtArgs>>): Prisma.Prisma__LearningSlideClient<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LearningSlideDeleteManyArgs>(args?: Prisma.SelectSubset<T, LearningSlideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LearningSlideUpdateManyArgs>(args: Prisma.SelectSubset<T, LearningSlideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LearningSlideUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LearningSlideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LearningSlideUpsertArgs>(args: Prisma.SelectSubset<T, LearningSlideUpsertArgs<ExtArgs>>): Prisma.Prisma__LearningSlideClient<runtime.Types.Result.GetResult<Prisma.$LearningSlidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LearningSlideCountArgs>(args?: Prisma.Subset<T, LearningSlideCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LearningSlideCountAggregateOutputType> : number>;
    aggregate<T extends LearningSlideAggregateArgs>(args: Prisma.Subset<T, LearningSlideAggregateArgs>): Prisma.PrismaPromise<GetLearningSlideAggregateType<T>>;
    groupBy<T extends LearningSlideGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LearningSlideGroupByArgs['orderBy'];
    } : {
        orderBy?: LearningSlideGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LearningSlideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningSlideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LearningSlideFieldRefs;
}
export interface Prisma__LearningSlideClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Module<T extends Prisma.ModuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModuleDefaultArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LearningSlideFieldRefs {
    readonly id: Prisma.FieldRef<"LearningSlide", 'String'>;
    readonly moduleId: Prisma.FieldRef<"LearningSlide", 'String'>;
    readonly title: Prisma.FieldRef<"LearningSlide", 'String'>;
    readonly layoutType: Prisma.FieldRef<"LearningSlide", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"LearningSlide", 'String'>;
    readonly bullets: Prisma.FieldRef<"LearningSlide", 'String[]'>;
    readonly orderIndex: Prisma.FieldRef<"LearningSlide", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"LearningSlide", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LearningSlide", 'DateTime'>;
}
export type LearningSlideFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelect<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    include?: Prisma.LearningSlideInclude<ExtArgs> | null;
    where: Prisma.LearningSlideWhereUniqueInput;
};
export type LearningSlideFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelect<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    include?: Prisma.LearningSlideInclude<ExtArgs> | null;
    where: Prisma.LearningSlideWhereUniqueInput;
};
export type LearningSlideFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LearningSlideFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LearningSlideFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LearningSlideCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelect<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    include?: Prisma.LearningSlideInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LearningSlideCreateInput, Prisma.LearningSlideUncheckedCreateInput>;
};
export type LearningSlideCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LearningSlideCreateManyInput | Prisma.LearningSlideCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LearningSlideCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    data: Prisma.LearningSlideCreateManyInput | Prisma.LearningSlideCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LearningSlideIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LearningSlideUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelect<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    include?: Prisma.LearningSlideInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LearningSlideUpdateInput, Prisma.LearningSlideUncheckedUpdateInput>;
    where: Prisma.LearningSlideWhereUniqueInput;
};
export type LearningSlideUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LearningSlideUpdateManyMutationInput, Prisma.LearningSlideUncheckedUpdateManyInput>;
    where?: Prisma.LearningSlideWhereInput;
    limit?: number;
};
export type LearningSlideUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LearningSlideUpdateManyMutationInput, Prisma.LearningSlideUncheckedUpdateManyInput>;
    where?: Prisma.LearningSlideWhereInput;
    limit?: number;
    include?: Prisma.LearningSlideIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LearningSlideUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelect<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    include?: Prisma.LearningSlideInclude<ExtArgs> | null;
    where: Prisma.LearningSlideWhereUniqueInput;
    create: Prisma.XOR<Prisma.LearningSlideCreateInput, Prisma.LearningSlideUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LearningSlideUpdateInput, Prisma.LearningSlideUncheckedUpdateInput>;
};
export type LearningSlideDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelect<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    include?: Prisma.LearningSlideInclude<ExtArgs> | null;
    where: Prisma.LearningSlideWhereUniqueInput;
};
export type LearningSlideDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LearningSlideWhereInput;
    limit?: number;
};
export type LearningSlideDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LearningSlideSelect<ExtArgs> | null;
    omit?: Prisma.LearningSlideOmit<ExtArgs> | null;
    include?: Prisma.LearningSlideInclude<ExtArgs> | null;
};
export {};
