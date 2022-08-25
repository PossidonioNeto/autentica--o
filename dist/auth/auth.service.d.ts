import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    hashPassword(password: string): Promise<string>;
    validateCredentials(login: string, password: string): Promise<boolean>;
    login(createAuthDto: CreateAuthDto): Promise<Object>;
}
