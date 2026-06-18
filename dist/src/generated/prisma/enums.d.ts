export declare const ModuleLevel: {
    readonly BEGINNER: "BEGINNER";
    readonly INTERMEDIATE: "INTERMEDIATE";
    readonly ADVANCED: "ADVANCED";
};
export type ModuleLevel = (typeof ModuleLevel)[keyof typeof ModuleLevel];
export declare const ProgressStatus: {
    readonly LOCKED: "LOCKED";
    readonly UNLOCKED: "UNLOCKED";
    readonly COMPLETED: "COMPLETED";
};
export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus];
export declare const Role: {
    readonly CORE: "CORE";
    readonly CREW: "CREW";
    readonly ENTHUSIAST: "ENTHUSIAST";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const TopicTheme: {
    readonly TECH: "TECH";
    readonly FORGE: "FORGE";
    readonly CITADEL: "CITADEL";
    readonly HARBOR: "HARBOR";
    readonly CRYSTAL: "CRYSTAL";
};
export type TopicTheme = (typeof TopicTheme)[keyof typeof TopicTheme];
