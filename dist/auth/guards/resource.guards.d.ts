import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from '../../users/entities/user.entity';
import { Repository } from 'typeorm';
export declare class ResourceGuard implements CanActivate {
    private reflector;
    private userRepo;
    constructor(reflector: Reflector, userRepo: Repository<User>);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
