import Datetime from 'react-datetime';
import { EnumType } from "typescript";

export enum Priority {
    LOW="LOW",
    MEDIUM="MEDIUM",
    HIGH="HIGH",
    DEFAULT="Default",
}

export interface Task {
    // id: number;
    description: string;
    started: string;
    finished: string;
    importance: Priority;
}