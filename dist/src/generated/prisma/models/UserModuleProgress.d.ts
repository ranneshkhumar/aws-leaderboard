import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModuleProgressModel = runtime.Types.Result.DefaultSelection<Prisma.$UserModuleProgressPayload>;
export type AggregateUserModuleProgress = {
    _count: UserModuleProgressCountAggregateOutputType | null;
    _avg: UserModuleProgressAvgAggregateOutputType | null;
    _sum: UserModuleProgressSumAggregateOutputType | null;
    _min: UserModuleProgressMinAggregateOutputType | null;
    _max: UserModuleProgressMaxAggregateOutputType | null;
};
export type UserModuleProgressAvgAggregateOutputType = {
    score: number | null;
    xpEarned: number | null;
};
export type UserModuleProgressSumAggregateOutputType = {
    score: number | null;
    xpEarned: number | null;
};
export type UserModuleProgressMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    moduleId: string | null;
    status: $Enums.ProgressStatus | null;
    score: number | null;
    xpEarned: number | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserModuleProgressMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    moduleId: string | null;
    status: $Enums.ProgressStatus | null;
    score: number | null;
    xpEarned: number | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserModuleProgressCountAggregateOutputType = {
    id: number;
    userId: number;
    moduleId: number;
    status: number;
    score: number;
    xpEarned: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserModuleProgressAvgAggregateInputType = {
    score?: true;
    xpEarned?: true;
};
export type UserModuleProgressSumAggregateInputType = {
    score?: true;
    xpEarned?: true;
};
export type UserModuleProgressMinAggregateInputType = {
    id?: true;
    userId?: true;
    moduleId?: true;
    status?: true;
    score?: true;
    xpEarned?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserModuleProgressMaxAggregateInputType = {
    id?: true;
    userId?: true;
    moduleId?: true;
    status?: true;
    score?: true;
    xpEarned?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserModuleProgressCountAggregateInputType = {
    id?: true;
    userId?: true;
    moduleId?: true;
    status?: true;
    score?: true;
    xpEarned?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserModuleProgressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserModuleProgressWhereInput;
    orderBy?: Prisma.UserModuleProgressOrderByWithRelationInput | Prisma.UserModuleProgressOrderByWithRelationInput[];
    cursor?: Prisma.UserModuleProgressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserModuleProgressCountAggregateInputType;
    _avg?: UserModuleProgressAvgAggregateInputType;
    _sum?: UserModuleProgressSumAggregateInputType;
    _min?: UserModuleProgressMinAggregateInputType;
    _max?: UserModuleProgressMaxAggregateInputType;
};
export type GetUserModuleProgressAggregateType<T extends UserModuleProgressAggregateArgs> = {
    [P in keyof T & keyof AggregateUserModuleProgress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserModuleProgress[P]> : Prisma.GetScalarType<T[P], AggregateUserModuleProgress[P]>;
};
export type UserModuleProgressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserModuleProgressWhereInput;
    orderBy?: Prisma.UserModuleProgressOrderByWithAggregationInput | Prisma.UserModuleProgressOrderByWithAggregationInput[];
    by: Prisma.UserModuleProgressScalarFieldEnum[] | Prisma.UserModuleProgressScalarFieldEnum;
    having?: Prisma.UserModuleProgressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserModuleProgressCountAggregateInputType | true;
    _avg?: UserModuleProgressAvgAggregateInputType;
    _sum?: UserModuleProgressSumAggregateInputType;
    _min?: UserModuleProgressMinAggregateInputType;
    _max?: UserModuleProgressMaxAggregateInputType;
};
export type UserModuleProgressGroupByOutputType = {
    id: string;
    userId: string;
    moduleId: string;
    status: $Enums.ProgressStatus;
    score: number | null;
    xpEarned: number;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserModuleProgressCountAggregateOutputType | null;
    _avg: UserModuleProgressAvgAggregateOutputType | null;
    _sum: UserModuleProgressSumAggregateOutputType | null;
    _min: UserModuleProgressMinAggregateOutputType | null;
    _max: UserModuleProgressMaxAggregateOutputType | null;
};
type GetUserModuleProgressGroupByPayload<T extends UserModuleProgressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserModuleProgressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserModuleProgressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserModuleProgressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserModuleProgressGroupByOutputType[P]>;
}>>;
export type UserModuleProgressWhereInput = {
    AND?: Prisma.UserModuleProgressWhereInput | Prisma.UserModuleProgressWhereInput[];
    OR?: Prisma.UserModuleProgressWhereInput[];
    NOT?: Prisma.UserModuleProgressWhereInput | Prisma.UserModuleProgressWhereInput[];
    id?: Prisma.StringFilter<"UserModuleProgress"> | string;
    userId?: Prisma.StringFilter<"UserModuleProgress"> | string;
    moduleId?: Prisma.StringFilter<"UserModuleProgress"> | string;
    status?: Prisma.EnumProgressStatusFilter<"UserModuleProgress"> | $Enums.ProgressStatus;
    score?: Prisma.IntNullableFilter<"UserModuleProgress"> | number | null;
    xpEarned?: Prisma.IntFilter<"UserModuleProgress"> | number;
    completedAt?: Prisma.DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserModuleProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserModuleProgress"> | Date | string;
    Module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserModuleProgressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Module?: Prisma.ModuleOrderByWithRelationInput;
    User?: Prisma.UserOrderByWithRelationInput;
};
export type UserModuleProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_moduleId?: Prisma.UserModuleProgressUserIdModuleIdCompoundUniqueInput;
    AND?: Prisma.UserModuleProgressWhereInput | Prisma.UserModuleProgressWhereInput[];
    OR?: Prisma.UserModuleProgressWhereInput[];
    NOT?: Prisma.UserModuleProgressWhereInput | Prisma.UserModuleProgressWhereInput[];
    userId?: Prisma.StringFilter<"UserModuleProgress"> | string;
    moduleId?: Prisma.StringFilter<"UserModuleProgress"> | string;
    status?: Prisma.EnumProgressStatusFilter<"UserModuleProgress"> | $Enums.ProgressStatus;
    score?: Prisma.IntNullableFilter<"UserModuleProgress"> | number | null;
    xpEarned?: Prisma.IntFilter<"UserModuleProgress"> | number;
    completedAt?: Prisma.DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserModuleProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserModuleProgress"> | Date | string;
    Module?: Prisma.XOR<Prisma.ModuleScalarRelationFilter, Prisma.ModuleWhereInput>;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_moduleId">;
export type UserModuleProgressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserModuleProgressCountOrderByAggregateInput;
    _avg?: Prisma.UserModuleProgressAvgOrderByAggregateInput;
    _max?: Prisma.UserModuleProgressMaxOrderByAggregateInput;
    _min?: Prisma.UserModuleProgressMinOrderByAggregateInput;
    _sum?: Prisma.UserModuleProgressSumOrderByAggregateInput;
};
export type UserModuleProgressScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserModuleProgressScalarWhereWithAggregatesInput | Prisma.UserModuleProgressScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserModuleProgressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserModuleProgressScalarWhereWithAggregatesInput | Prisma.UserModuleProgressScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserModuleProgress"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserModuleProgress"> | string;
    moduleId?: Prisma.StringWithAggregatesFilter<"UserModuleProgress"> | string;
    status?: Prisma.EnumProgressStatusWithAggregatesFilter<"UserModuleProgress"> | $Enums.ProgressStatus;
    score?: Prisma.IntNullableWithAggregatesFilter<"UserModuleProgress"> | number | null;
    xpEarned?: Prisma.IntWithAggregatesFilter<"UserModuleProgress"> | number;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"UserModuleProgress"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserModuleProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserModuleProgress"> | Date | string;
};
export type UserModuleProgressCreateInput = {
    id: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    Module: Prisma.ModuleCreateNestedOneWithoutUserModuleProgressInput;
    User: Prisma.UserCreateNestedOneWithoutUserModuleProgressInput;
};
export type UserModuleProgressUncheckedCreateInput = {
    id: string;
    userId: string;
    moduleId: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type UserModuleProgressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Module?: Prisma.ModuleUpdateOneRequiredWithoutUserModuleProgressNestedInput;
    User?: Prisma.UserUpdateOneRequiredWithoutUserModuleProgressNestedInput;
};
export type UserModuleProgressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserModuleProgressCreateManyInput = {
    id: string;
    userId: string;
    moduleId: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type UserModuleProgressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserModuleProgressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserModuleProgressListRelationFilter = {
    every?: Prisma.UserModuleProgressWhereInput;
    some?: Prisma.UserModuleProgressWhereInput;
    none?: Prisma.UserModuleProgressWhereInput;
};
export type UserModuleProgressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserModuleProgressUserIdModuleIdCompoundUniqueInput = {
    userId: string;
    moduleId: string;
};
export type UserModuleProgressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserModuleProgressAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
};
export type UserModuleProgressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserModuleProgressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moduleId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserModuleProgressSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
    xpEarned?: Prisma.SortOrder;
};
export type UserModuleProgressCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutModuleInput, Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput> | Prisma.UserModuleProgressCreateWithoutModuleInput[] | Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.UserModuleProgressCreateOrConnectWithoutModuleInput | Prisma.UserModuleProgressCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.UserModuleProgressCreateManyModuleInputEnvelope;
    connect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
};
export type UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutModuleInput, Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput> | Prisma.UserModuleProgressCreateWithoutModuleInput[] | Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.UserModuleProgressCreateOrConnectWithoutModuleInput | Prisma.UserModuleProgressCreateOrConnectWithoutModuleInput[];
    createMany?: Prisma.UserModuleProgressCreateManyModuleInputEnvelope;
    connect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
};
export type UserModuleProgressUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutModuleInput, Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput> | Prisma.UserModuleProgressCreateWithoutModuleInput[] | Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.UserModuleProgressCreateOrConnectWithoutModuleInput | Prisma.UserModuleProgressCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput | Prisma.UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.UserModuleProgressCreateManyModuleInputEnvelope;
    set?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    disconnect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    delete?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    connect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    update?: Prisma.UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput | Prisma.UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.UserModuleProgressUpdateManyWithWhereWithoutModuleInput | Prisma.UserModuleProgressUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.UserModuleProgressScalarWhereInput | Prisma.UserModuleProgressScalarWhereInput[];
};
export type UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutModuleInput, Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput> | Prisma.UserModuleProgressCreateWithoutModuleInput[] | Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput[];
    connectOrCreate?: Prisma.UserModuleProgressCreateOrConnectWithoutModuleInput | Prisma.UserModuleProgressCreateOrConnectWithoutModuleInput[];
    upsert?: Prisma.UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput | Prisma.UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput[];
    createMany?: Prisma.UserModuleProgressCreateManyModuleInputEnvelope;
    set?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    disconnect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    delete?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    connect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    update?: Prisma.UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput | Prisma.UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput[];
    updateMany?: Prisma.UserModuleProgressUpdateManyWithWhereWithoutModuleInput | Prisma.UserModuleProgressUpdateManyWithWhereWithoutModuleInput[];
    deleteMany?: Prisma.UserModuleProgressScalarWhereInput | Prisma.UserModuleProgressScalarWhereInput[];
};
export type UserModuleProgressCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutUserInput, Prisma.UserModuleProgressUncheckedCreateWithoutUserInput> | Prisma.UserModuleProgressCreateWithoutUserInput[] | Prisma.UserModuleProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserModuleProgressCreateOrConnectWithoutUserInput | Prisma.UserModuleProgressCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserModuleProgressCreateManyUserInputEnvelope;
    connect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
};
export type UserModuleProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutUserInput, Prisma.UserModuleProgressUncheckedCreateWithoutUserInput> | Prisma.UserModuleProgressCreateWithoutUserInput[] | Prisma.UserModuleProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserModuleProgressCreateOrConnectWithoutUserInput | Prisma.UserModuleProgressCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserModuleProgressCreateManyUserInputEnvelope;
    connect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
};
export type UserModuleProgressUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutUserInput, Prisma.UserModuleProgressUncheckedCreateWithoutUserInput> | Prisma.UserModuleProgressCreateWithoutUserInput[] | Prisma.UserModuleProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserModuleProgressCreateOrConnectWithoutUserInput | Prisma.UserModuleProgressCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserModuleProgressUpsertWithWhereUniqueWithoutUserInput | Prisma.UserModuleProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserModuleProgressCreateManyUserInputEnvelope;
    set?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    disconnect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    delete?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    connect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    update?: Prisma.UserModuleProgressUpdateWithWhereUniqueWithoutUserInput | Prisma.UserModuleProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserModuleProgressUpdateManyWithWhereWithoutUserInput | Prisma.UserModuleProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserModuleProgressScalarWhereInput | Prisma.UserModuleProgressScalarWhereInput[];
};
export type UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutUserInput, Prisma.UserModuleProgressUncheckedCreateWithoutUserInput> | Prisma.UserModuleProgressCreateWithoutUserInput[] | Prisma.UserModuleProgressUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserModuleProgressCreateOrConnectWithoutUserInput | Prisma.UserModuleProgressCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserModuleProgressUpsertWithWhereUniqueWithoutUserInput | Prisma.UserModuleProgressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserModuleProgressCreateManyUserInputEnvelope;
    set?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    disconnect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    delete?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    connect?: Prisma.UserModuleProgressWhereUniqueInput | Prisma.UserModuleProgressWhereUniqueInput[];
    update?: Prisma.UserModuleProgressUpdateWithWhereUniqueWithoutUserInput | Prisma.UserModuleProgressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserModuleProgressUpdateManyWithWhereWithoutUserInput | Prisma.UserModuleProgressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserModuleProgressScalarWhereInput | Prisma.UserModuleProgressScalarWhereInput[];
};
export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type UserModuleProgressCreateWithoutModuleInput = {
    id: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    User: Prisma.UserCreateNestedOneWithoutUserModuleProgressInput;
};
export type UserModuleProgressUncheckedCreateWithoutModuleInput = {
    id: string;
    userId: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type UserModuleProgressCreateOrConnectWithoutModuleInput = {
    where: Prisma.UserModuleProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutModuleInput, Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput>;
};
export type UserModuleProgressCreateManyModuleInputEnvelope = {
    data: Prisma.UserModuleProgressCreateManyModuleInput | Prisma.UserModuleProgressCreateManyModuleInput[];
    skipDuplicates?: boolean;
};
export type UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput = {
    where: Prisma.UserModuleProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserModuleProgressUpdateWithoutModuleInput, Prisma.UserModuleProgressUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutModuleInput, Prisma.UserModuleProgressUncheckedCreateWithoutModuleInput>;
};
export type UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput = {
    where: Prisma.UserModuleProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserModuleProgressUpdateWithoutModuleInput, Prisma.UserModuleProgressUncheckedUpdateWithoutModuleInput>;
};
export type UserModuleProgressUpdateManyWithWhereWithoutModuleInput = {
    where: Prisma.UserModuleProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.UserModuleProgressUpdateManyMutationInput, Prisma.UserModuleProgressUncheckedUpdateManyWithoutModuleInput>;
};
export type UserModuleProgressScalarWhereInput = {
    AND?: Prisma.UserModuleProgressScalarWhereInput | Prisma.UserModuleProgressScalarWhereInput[];
    OR?: Prisma.UserModuleProgressScalarWhereInput[];
    NOT?: Prisma.UserModuleProgressScalarWhereInput | Prisma.UserModuleProgressScalarWhereInput[];
    id?: Prisma.StringFilter<"UserModuleProgress"> | string;
    userId?: Prisma.StringFilter<"UserModuleProgress"> | string;
    moduleId?: Prisma.StringFilter<"UserModuleProgress"> | string;
    status?: Prisma.EnumProgressStatusFilter<"UserModuleProgress"> | $Enums.ProgressStatus;
    score?: Prisma.IntNullableFilter<"UserModuleProgress"> | number | null;
    xpEarned?: Prisma.IntFilter<"UserModuleProgress"> | number;
    completedAt?: Prisma.DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserModuleProgress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserModuleProgress"> | Date | string;
};
export type UserModuleProgressCreateWithoutUserInput = {
    id: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    Module: Prisma.ModuleCreateNestedOneWithoutUserModuleProgressInput;
};
export type UserModuleProgressUncheckedCreateWithoutUserInput = {
    id: string;
    moduleId: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type UserModuleProgressCreateOrConnectWithoutUserInput = {
    where: Prisma.UserModuleProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutUserInput, Prisma.UserModuleProgressUncheckedCreateWithoutUserInput>;
};
export type UserModuleProgressCreateManyUserInputEnvelope = {
    data: Prisma.UserModuleProgressCreateManyUserInput | Prisma.UserModuleProgressCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserModuleProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserModuleProgressWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserModuleProgressUpdateWithoutUserInput, Prisma.UserModuleProgressUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserModuleProgressCreateWithoutUserInput, Prisma.UserModuleProgressUncheckedCreateWithoutUserInput>;
};
export type UserModuleProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserModuleProgressWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserModuleProgressUpdateWithoutUserInput, Prisma.UserModuleProgressUncheckedUpdateWithoutUserInput>;
};
export type UserModuleProgressUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserModuleProgressScalarWhereInput;
    data: Prisma.XOR<Prisma.UserModuleProgressUpdateManyMutationInput, Prisma.UserModuleProgressUncheckedUpdateManyWithoutUserInput>;
};
export type UserModuleProgressCreateManyModuleInput = {
    id: string;
    userId: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type UserModuleProgressUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutUserModuleProgressNestedInput;
};
export type UserModuleProgressUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserModuleProgressUncheckedUpdateManyWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserModuleProgressCreateManyUserInput = {
    id: string;
    moduleId: string;
    status?: $Enums.ProgressStatus;
    score?: number | null;
    xpEarned?: number;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type UserModuleProgressUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Module?: Prisma.ModuleUpdateOneRequiredWithoutUserModuleProgressNestedInput;
};
export type UserModuleProgressUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserModuleProgressUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    xpEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserModuleProgressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moduleId?: boolean;
    status?: boolean;
    score?: boolean;
    xpEarned?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userModuleProgress"]>;
export type UserModuleProgressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moduleId?: boolean;
    status?: boolean;
    score?: boolean;
    xpEarned?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userModuleProgress"]>;
export type UserModuleProgressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moduleId?: boolean;
    status?: boolean;
    score?: boolean;
    xpEarned?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userModuleProgress"]>;
export type UserModuleProgressSelectScalar = {
    id?: boolean;
    userId?: boolean;
    moduleId?: boolean;
    status?: boolean;
    score?: boolean;
    xpEarned?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserModuleProgressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "moduleId" | "status" | "score" | "xpEarned" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userModuleProgress"]>;
export type UserModuleProgressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserModuleProgressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserModuleProgressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.ModuleDefaultArgs<ExtArgs>;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserModuleProgressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserModuleProgress";
    objects: {
        Module: Prisma.$ModulePayload<ExtArgs>;
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        moduleId: string;
        status: $Enums.ProgressStatus;
        score: number | null;
        xpEarned: number;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userModuleProgress"]>;
    composites: {};
};
export type UserModuleProgressGetPayload<S extends boolean | null | undefined | UserModuleProgressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload, S>;
export type UserModuleProgressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserModuleProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserModuleProgressCountAggregateInputType | true;
};
export interface UserModuleProgressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserModuleProgress'];
        meta: {
            name: 'UserModuleProgress';
        };
    };
    findUnique<T extends UserModuleProgressFindUniqueArgs>(args: Prisma.SelectSubset<T, UserModuleProgressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserModuleProgressClient<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserModuleProgressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserModuleProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserModuleProgressClient<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserModuleProgressFindFirstArgs>(args?: Prisma.SelectSubset<T, UserModuleProgressFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserModuleProgressClient<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserModuleProgressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserModuleProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserModuleProgressClient<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserModuleProgressFindManyArgs>(args?: Prisma.SelectSubset<T, UserModuleProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserModuleProgressCreateArgs>(args: Prisma.SelectSubset<T, UserModuleProgressCreateArgs<ExtArgs>>): Prisma.Prisma__UserModuleProgressClient<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserModuleProgressCreateManyArgs>(args?: Prisma.SelectSubset<T, UserModuleProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserModuleProgressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserModuleProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserModuleProgressDeleteArgs>(args: Prisma.SelectSubset<T, UserModuleProgressDeleteArgs<ExtArgs>>): Prisma.Prisma__UserModuleProgressClient<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserModuleProgressUpdateArgs>(args: Prisma.SelectSubset<T, UserModuleProgressUpdateArgs<ExtArgs>>): Prisma.Prisma__UserModuleProgressClient<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserModuleProgressDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserModuleProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserModuleProgressUpdateManyArgs>(args: Prisma.SelectSubset<T, UserModuleProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserModuleProgressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserModuleProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserModuleProgressUpsertArgs>(args: Prisma.SelectSubset<T, UserModuleProgressUpsertArgs<ExtArgs>>): Prisma.Prisma__UserModuleProgressClient<runtime.Types.Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserModuleProgressCountArgs>(args?: Prisma.Subset<T, UserModuleProgressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserModuleProgressCountAggregateOutputType> : number>;
    aggregate<T extends UserModuleProgressAggregateArgs>(args: Prisma.Subset<T, UserModuleProgressAggregateArgs>): Prisma.PrismaPromise<GetUserModuleProgressAggregateType<T>>;
    groupBy<T extends UserModuleProgressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserModuleProgressGroupByArgs['orderBy'];
    } : {
        orderBy?: UserModuleProgressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserModuleProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModuleProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserModuleProgressFieldRefs;
}
export interface Prisma__UserModuleProgressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Module<T extends Prisma.ModuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModuleDefaultArgs<ExtArgs>>): Prisma.Prisma__ModuleClient<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserModuleProgressFieldRefs {
    readonly id: Prisma.FieldRef<"UserModuleProgress", 'String'>;
    readonly userId: Prisma.FieldRef<"UserModuleProgress", 'String'>;
    readonly moduleId: Prisma.FieldRef<"UserModuleProgress", 'String'>;
    readonly status: Prisma.FieldRef<"UserModuleProgress", 'ProgressStatus'>;
    readonly score: Prisma.FieldRef<"UserModuleProgress", 'Int'>;
    readonly xpEarned: Prisma.FieldRef<"UserModuleProgress", 'Int'>;
    readonly completedAt: Prisma.FieldRef<"UserModuleProgress", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"UserModuleProgress", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserModuleProgress", 'DateTime'>;
}
export type UserModuleProgressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    include?: Prisma.UserModuleProgressInclude<ExtArgs> | null;
    where: Prisma.UserModuleProgressWhereUniqueInput;
};
export type UserModuleProgressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    include?: Prisma.UserModuleProgressInclude<ExtArgs> | null;
    where: Prisma.UserModuleProgressWhereUniqueInput;
};
export type UserModuleProgressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserModuleProgressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserModuleProgressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserModuleProgressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    include?: Prisma.UserModuleProgressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserModuleProgressCreateInput, Prisma.UserModuleProgressUncheckedCreateInput>;
};
export type UserModuleProgressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserModuleProgressCreateManyInput | Prisma.UserModuleProgressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserModuleProgressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    data: Prisma.UserModuleProgressCreateManyInput | Prisma.UserModuleProgressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserModuleProgressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserModuleProgressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    include?: Prisma.UserModuleProgressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserModuleProgressUpdateInput, Prisma.UserModuleProgressUncheckedUpdateInput>;
    where: Prisma.UserModuleProgressWhereUniqueInput;
};
export type UserModuleProgressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserModuleProgressUpdateManyMutationInput, Prisma.UserModuleProgressUncheckedUpdateManyInput>;
    where?: Prisma.UserModuleProgressWhereInput;
    limit?: number;
};
export type UserModuleProgressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserModuleProgressUpdateManyMutationInput, Prisma.UserModuleProgressUncheckedUpdateManyInput>;
    where?: Prisma.UserModuleProgressWhereInput;
    limit?: number;
    include?: Prisma.UserModuleProgressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserModuleProgressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    include?: Prisma.UserModuleProgressInclude<ExtArgs> | null;
    where: Prisma.UserModuleProgressWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserModuleProgressCreateInput, Prisma.UserModuleProgressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserModuleProgressUpdateInput, Prisma.UserModuleProgressUncheckedUpdateInput>;
};
export type UserModuleProgressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    include?: Prisma.UserModuleProgressInclude<ExtArgs> | null;
    where: Prisma.UserModuleProgressWhereUniqueInput;
};
export type UserModuleProgressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserModuleProgressWhereInput;
    limit?: number;
};
export type UserModuleProgressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserModuleProgressSelect<ExtArgs> | null;
    omit?: Prisma.UserModuleProgressOmit<ExtArgs> | null;
    include?: Prisma.UserModuleProgressInclude<ExtArgs> | null;
};
export {};
