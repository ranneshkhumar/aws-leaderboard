"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.UserModuleProgressScalarFieldEnum = exports.UserScalarFieldEnum = exports.TopicScalarFieldEnum = exports.QuizQuestionScalarFieldEnum = exports.QuizAttemptAnswerScalarFieldEnum = exports.QuizAttemptScalarFieldEnum = exports.ModuleScalarFieldEnum = exports.LearningSlideScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/library");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "6.19.3",
    engine: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7"
};
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    LearningSlide: 'LearningSlide',
    Module: 'Module',
    QuizAttempt: 'QuizAttempt',
    QuizAttemptAnswer: 'QuizAttemptAnswer',
    QuizQuestion: 'QuizQuestion',
    Topic: 'Topic',
    User: 'User',
    UserModuleProgress: 'UserModuleProgress'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.LearningSlideScalarFieldEnum = {
    id: 'id',
    moduleId: 'moduleId',
    title: 'title',
    layoutType: 'layoutType',
    imageUrl: 'imageUrl',
    bullets: 'bullets',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ModuleScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    tier: 'tier',
    xpPoints: 'xpPoints',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    topicId: 'topicId',
    level: 'level'
};
exports.QuizAttemptScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    totalQuestions: 'totalQuestions',
    correctAnswers: 'correctAnswers',
    percentage: 'percentage',
    xpEarned: 'xpEarned',
    attemptedAt: 'attemptedAt'
};
exports.QuizAttemptAnswerScalarFieldEnum = {
    id: 'id',
    attemptId: 'attemptId',
    questionId: 'questionId',
    selectedAnswer: 'selectedAnswer',
    isCorrect: 'isCorrect'
};
exports.QuizQuestionScalarFieldEnum = {
    id: 'id',
    moduleId: 'moduleId',
    question: 'question',
    optionA: 'optionA',
    optionB: 'optionB',
    optionC: 'optionC',
    optionD: 'optionD',
    correctAnswer: 'correctAnswer',
    explanation: 'explanation',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TopicScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    slug: 'slug',
    theme: 'theme'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    xp: 'xp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    eventxp: 'eventxp'
};
exports.UserModuleProgressScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    status: 'status',
    score: 'score',
    xpEarned: 'xpEarned',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map