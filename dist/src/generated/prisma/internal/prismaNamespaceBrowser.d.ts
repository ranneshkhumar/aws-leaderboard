import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
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
