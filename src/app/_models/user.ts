import { DecimalPipe } from "@angular/common";

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    description: string;
    amount: number;
    status: boolean;
    token: string;
}