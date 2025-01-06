import { User } from "../user/userType";

export interface Book{
    _id: string;
    title: string;
    author:User;
    genre:string;
    coverImg:string;
    bookFile:string;
    createdAt:Date;
    updatedAt:Date;

}