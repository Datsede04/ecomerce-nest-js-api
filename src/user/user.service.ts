import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService extends AbstractService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async pagination(page: number = 1, relations = []): Promise<any> {
    const { data, meta } = await super.pagination(page, relations);
    return {
      data: data.map((user) => {
        const { password, ...data } = user;
        return data;
      }),
      meta,
    };
  }
}
