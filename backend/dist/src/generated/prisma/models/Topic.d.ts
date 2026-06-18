import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type TopicModel = runtime.Types.Result.DefaultSelection<Prisma.$TopicPayload>;
export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null;
    _avg: TopicAvgAggregateOutputType | null;
    _sum: TopicSumAggregateOutputType | null;
    _min: TopicMinAggregateOutputType | null;
    _max: TopicMaxAggregateOutputType | null;
};
export type TopicAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type TopicSumAggregateOutputType = {
    orderIndex: number | null;
};
export type TopicMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    orderIndex: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    slug: string | null;
    theme: $Enums.TopicTheme | null;
};
export type TopicMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    orderIndex: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    slug: string | null;
    theme: $Enums.TopicTheme | null;
};
export type TopicCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    orderIndex: number;
    createdAt: number;
    updatedAt: number;
    slug: number;
    theme: number;
    _all: number;
};
export type TopicAvgAggregateInputType = {
    orderIndex?: true;
};
export type TopicSumAggregateInputType = {
    orderIndex?: true;
};
export type TopicMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
    slug?: true;
    theme?: true;
};
export type TopicMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
    slug?: true;
    theme?: true;
};
export type TopicCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    orderIndex?: true;
    createdAt?: true;
    updatedAt?: true;
    slug?: true;
    theme?: true;
    _all?: true;
};
export type TopicAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithRelationInput | Prisma.TopicOrderByWithRelationInput[];
    cursor?: Prisma.TopicWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TopicCountAggregateInputType;
    _avg?: TopicAvgAggregateInputType;
    _sum?: TopicSumAggregateInputType;
    _min?: TopicMinAggregateInputType;
    _max?: TopicMaxAggregateInputType;
};
export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
    [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTopic[P]> : Prisma.GetScalarType<T[P], AggregateTopic[P]>;
};
export type TopicGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithAggregationInput | Prisma.TopicOrderByWithAggregationInput[];
    by: Prisma.TopicScalarFieldEnum[] | Prisma.TopicScalarFieldEnum;
    having?: Prisma.TopicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TopicCountAggregateInputType | true;
    _avg?: TopicAvgAggregateInputType;
    _sum?: TopicSumAggregateInputType;
    _min?: TopicMinAggregateInputType;
    _max?: TopicMaxAggregateInputType;
};
export type TopicGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    orderIndex: number;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    theme: $Enums.TopicTheme;
    _count: TopicCountAggregateOutputType | null;
    _avg: TopicAvgAggregateOutputType | null;
    _sum: TopicSumAggregateOutputType | null;
    _min: TopicMinAggregateOutputType | null;
    _max: TopicMaxAggregateOutputType | null;
};
type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TopicGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TopicGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TopicGroupByOutputType[P]>;
}>>;
export type TopicWhereInput = {
    AND?: Prisma.TopicWhereInput | Prisma.TopicWhereInput[];
    OR?: Prisma.TopicWhereInput[];
    NOT?: Prisma.TopicWhereInput | Prisma.TopicWhereInput[];
    id?: Prisma.StringFilter<"Topic"> | string;
    name?: Prisma.StringFilter<"Topic"> | string;
    description?: Prisma.StringFilter<"Topic"> | string;
    orderIndex?: Prisma.IntFilter<"Topic"> | number;
    createdAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    slug?: Prisma.StringFilter<"Topic"> | string;
    theme?: Prisma.EnumTopicThemeFilter<"Topic"> | $Enums.TopicTheme;
    Module?: Prisma.ModuleListRelationFilter;
};
export type TopicOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    theme?: Prisma.SortOrder;
    Module?: Prisma.ModuleOrderByRelationAggregateInput;
};
export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    orderIndex?: number;
    slug?: string;
    AND?: Prisma.TopicWhereInput | Prisma.TopicWhereInput[];
    OR?: Prisma.TopicWhereInput[];
    NOT?: Prisma.TopicWhereInput | Prisma.TopicWhereInput[];
    description?: Prisma.StringFilter<"Topic"> | string;
    createdAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Topic"> | Date | string;
    theme?: Prisma.EnumTopicThemeFilter<"Topic"> | $Enums.TopicTheme;
    Module?: Prisma.ModuleListRelationFilter;
}, "id" | "name" | "orderIndex" | "slug">;
export type TopicOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    theme?: Prisma.SortOrder;
    _count?: Prisma.TopicCountOrderByAggregateInput;
    _avg?: Prisma.TopicAvgOrderByAggregateInput;
    _max?: Prisma.TopicMaxOrderByAggregateInput;
    _min?: Prisma.TopicMinOrderByAggregateInput;
    _sum?: Prisma.TopicSumOrderByAggregateInput;
};
export type TopicScalarWhereWithAggregatesInput = {
    AND?: Prisma.TopicScalarWhereWithAggregatesInput | Prisma.TopicScalarWhereWithAggregatesInput[];
    OR?: Prisma.TopicScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TopicScalarWhereWithAggregatesInput | Prisma.TopicScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Topic"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Topic"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Topic"> | string;
    orderIndex?: Prisma.IntWithAggregatesFilter<"Topic"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Topic"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Topic"> | Date | string;
    slug?: Prisma.StringWithAggregatesFilter<"Topic"> | string;
    theme?: Prisma.EnumTopicThemeWithAggregatesFilter<"Topic"> | $Enums.TopicTheme;
};
export type TopicCreateInput = {
    id: string;
    name: string;
    description?: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    slug: string;
    theme?: $Enums.TopicTheme;
    Module?: Prisma.ModuleCreateNestedManyWithoutTopicInput;
};
export type TopicUncheckedCreateInput = {
    id: string;
    name: string;
    description?: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    slug: string;
    theme?: $Enums.TopicTheme;
    Module?: Prisma.ModuleUncheckedCreateNestedManyWithoutTopicInput;
};
export type TopicUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    theme?: Prisma.EnumTopicThemeFieldUpdateOperationsInput | $Enums.TopicTheme;
    Module?: Prisma.ModuleUpdateManyWithoutTopicNestedInput;
};
export type TopicUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    theme?: Prisma.EnumTopicThemeFieldUpdateOperationsInput | $Enums.TopicTheme;
    Module?: Prisma.ModuleUncheckedUpdateManyWithoutTopicNestedInput;
};
export type TopicCreateManyInput = {
    id: string;
    name: string;
    description?: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    slug: string;
    theme?: $Enums.TopicTheme;
};
export type TopicUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    theme?: Prisma.EnumTopicThemeFieldUpdateOperationsInput | $Enums.TopicTheme;
};
export type TopicUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    theme?: Prisma.EnumTopicThemeFieldUpdateOperationsInput | $Enums.TopicTheme;
};
export type TopicNullableScalarRelationFilter = {
    is?: Prisma.TopicWhereInput | null;
    isNot?: Prisma.TopicWhereInput | null;
};
export type TopicCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    theme?: Prisma.SortOrder;
};
export type TopicAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type TopicMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    theme?: Prisma.SortOrder;
};
export type TopicMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    theme?: Prisma.SortOrder;
};
export type TopicSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type TopicCreateNestedOneWithoutModuleInput = {
    create?: Prisma.XOR<Prisma.TopicCreateWithoutModuleInput, Prisma.TopicUncheckedCreateWithoutModuleInput>;
    connectOrCreate?: Prisma.TopicCreateOrConnectWithoutModuleInput;
    connect?: Prisma.TopicWhereUniqueInput;
};
export type TopicUpdateOneWithoutModuleNestedInput = {
    create?: Prisma.XOR<Prisma.TopicCreateWithoutModuleInput, Prisma.TopicUncheckedCreateWithoutModuleInput>;
    connectOrCreate?: Prisma.TopicCreateOrConnectWithoutModuleInput;
    upsert?: Prisma.TopicUpsertWithoutModuleInput;
    disconnect?: Prisma.TopicWhereInput | boolean;
    delete?: Prisma.TopicWhereInput | boolean;
    connect?: Prisma.TopicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TopicUpdateToOneWithWhereWithoutModuleInput, Prisma.TopicUpdateWithoutModuleInput>, Prisma.TopicUncheckedUpdateWithoutModuleInput>;
};
export type EnumTopicThemeFieldUpdateOperationsInput = {
    set?: $Enums.TopicTheme;
};
export type TopicCreateWithoutModuleInput = {
    id: string;
    name: string;
    description?: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    slug: string;
    theme?: $Enums.TopicTheme;
};
export type TopicUncheckedCreateWithoutModuleInput = {
    id: string;
    name: string;
    description?: string;
    orderIndex: number;
    createdAt?: Date | string;
    updatedAt: Date | string;
    slug: string;
    theme?: $Enums.TopicTheme;
};
export type TopicCreateOrConnectWithoutModuleInput = {
    where: Prisma.TopicWhereUniqueInput;
    create: Prisma.XOR<Prisma.TopicCreateWithoutModuleInput, Prisma.TopicUncheckedCreateWithoutModuleInput>;
};
export type TopicUpsertWithoutModuleInput = {
    update: Prisma.XOR<Prisma.TopicUpdateWithoutModuleInput, Prisma.TopicUncheckedUpdateWithoutModuleInput>;
    create: Prisma.XOR<Prisma.TopicCreateWithoutModuleInput, Prisma.TopicUncheckedCreateWithoutModuleInput>;
    where?: Prisma.TopicWhereInput;
};
export type TopicUpdateToOneWithWhereWithoutModuleInput = {
    where?: Prisma.TopicWhereInput;
    data: Prisma.XOR<Prisma.TopicUpdateWithoutModuleInput, Prisma.TopicUncheckedUpdateWithoutModuleInput>;
};
export type TopicUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    theme?: Prisma.EnumTopicThemeFieldUpdateOperationsInput | $Enums.TopicTheme;
};
export type TopicUncheckedUpdateWithoutModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    theme?: Prisma.EnumTopicThemeFieldUpdateOperationsInput | $Enums.TopicTheme;
};
export type TopicCountOutputType = {
    Module: number;
};
export type TopicCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | TopicCountOutputTypeCountModuleArgs;
};
export type TopicCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicCountOutputTypeSelect<ExtArgs> | null;
};
export type TopicCountOutputTypeCountModuleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModuleWhereInput;
};
export type TopicSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    slug?: boolean;
    theme?: boolean;
    Module?: boolean | Prisma.Topic$ModuleArgs<ExtArgs>;
    _count?: boolean | Prisma.TopicCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["topic"]>;
export type TopicSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    slug?: boolean;
    theme?: boolean;
}, ExtArgs["result"]["topic"]>;
export type TopicSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    slug?: boolean;
    theme?: boolean;
}, ExtArgs["result"]["topic"]>;
export type TopicSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    orderIndex?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    slug?: boolean;
    theme?: boolean;
};
export type TopicOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "orderIndex" | "createdAt" | "updatedAt" | "slug" | "theme", ExtArgs["result"]["topic"]>;
export type TopicInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Module?: boolean | Prisma.Topic$ModuleArgs<ExtArgs>;
    _count?: boolean | Prisma.TopicCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TopicIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TopicIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TopicPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Topic";
    objects: {
        Module: Prisma.$ModulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string;
        orderIndex: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        theme: $Enums.TopicTheme;
    }, ExtArgs["result"]["topic"]>;
    composites: {};
};
export type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TopicPayload, S>;
export type TopicCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TopicCountAggregateInputType | true;
};
export interface TopicDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Topic'];
        meta: {
            name: 'Topic';
        };
    };
    findUnique<T extends TopicFindUniqueArgs>(args: Prisma.SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TopicFindFirstArgs>(args?: Prisma.SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TopicFindManyArgs>(args?: Prisma.SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TopicCreateArgs>(args: Prisma.SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TopicCreateManyArgs>(args?: Prisma.SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TopicDeleteArgs>(args: Prisma.SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TopicUpdateArgs>(args: Prisma.SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TopicDeleteManyArgs>(args?: Prisma.SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TopicUpdateManyArgs>(args: Prisma.SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TopicUpsertArgs>(args: Prisma.SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma.Prisma__TopicClient<runtime.Types.Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TopicCountArgs>(args?: Prisma.Subset<T, TopicCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TopicCountAggregateOutputType> : number>;
    aggregate<T extends TopicAggregateArgs>(args: Prisma.Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>;
    groupBy<T extends TopicGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TopicGroupByArgs['orderBy'];
    } : {
        orderBy?: TopicGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TopicFieldRefs;
}
export interface Prisma__TopicClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Module<T extends Prisma.Topic$ModuleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Topic$ModuleArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TopicFieldRefs {
    readonly id: Prisma.FieldRef<"Topic", 'String'>;
    readonly name: Prisma.FieldRef<"Topic", 'String'>;
    readonly description: Prisma.FieldRef<"Topic", 'String'>;
    readonly orderIndex: Prisma.FieldRef<"Topic", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Topic", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Topic", 'DateTime'>;
    readonly slug: Prisma.FieldRef<"Topic", 'String'>;
    readonly theme: Prisma.FieldRef<"Topic", 'TopicTheme'>;
}
export type TopicFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where: Prisma.TopicWhereUniqueInput;
};
export type TopicFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where: Prisma.TopicWhereUniqueInput;
};
export type TopicFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithRelationInput | Prisma.TopicOrderByWithRelationInput[];
    cursor?: Prisma.TopicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TopicScalarFieldEnum | Prisma.TopicScalarFieldEnum[];
};
export type TopicFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithRelationInput | Prisma.TopicOrderByWithRelationInput[];
    cursor?: Prisma.TopicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TopicScalarFieldEnum | Prisma.TopicScalarFieldEnum[];
};
export type TopicFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithRelationInput | Prisma.TopicOrderByWithRelationInput[];
    cursor?: Prisma.TopicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TopicScalarFieldEnum | Prisma.TopicScalarFieldEnum[];
};
export type TopicCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TopicCreateInput, Prisma.TopicUncheckedCreateInput>;
};
export type TopicCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TopicCreateManyInput | Prisma.TopicCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TopicCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    data: Prisma.TopicCreateManyInput | Prisma.TopicCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TopicUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TopicUpdateInput, Prisma.TopicUncheckedUpdateInput>;
    where: Prisma.TopicWhereUniqueInput;
};
export type TopicUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TopicUpdateManyMutationInput, Prisma.TopicUncheckedUpdateManyInput>;
    where?: Prisma.TopicWhereInput;
    limit?: number;
};
export type TopicUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TopicUpdateManyMutationInput, Prisma.TopicUncheckedUpdateManyInput>;
    where?: Prisma.TopicWhereInput;
    limit?: number;
};
export type TopicUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where: Prisma.TopicWhereUniqueInput;
    create: Prisma.XOR<Prisma.TopicCreateInput, Prisma.TopicUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TopicUpdateInput, Prisma.TopicUncheckedUpdateInput>;
};
export type TopicDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
    where: Prisma.TopicWhereUniqueInput;
};
export type TopicDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TopicWhereInput;
    limit?: number;
};
export type Topic$ModuleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TopicDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TopicSelect<ExtArgs> | null;
    omit?: Prisma.TopicOmit<ExtArgs> | null;
    include?: Prisma.TopicInclude<ExtArgs> | null;
};
export {};
