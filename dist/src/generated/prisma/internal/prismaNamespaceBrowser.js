"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.UserModuleProgressScalarFieldEnum = exports.UserScalarFieldEnum = exports.TopicScalarFieldEnum = exports.QuizQuestionScalarFieldEnum = exports.QuizAttemptAnswerScalarFieldEnum = exports.QuizAttemptScalarFieldEnum = exports.ModuleScalarFieldEnum = exports.LearningSlideScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
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
//# sourceMappingURL=prismaNamespaceBrowser.js.map