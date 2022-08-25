/// <reference types="jest" />
import { Repository } from "typeorm";
export declare type MockType<T> = {
    [P in keyof T]?: jest.Mock<{}>;
};
export declare const repositoryMockFactory: () => MockType<Repository<any>>;
