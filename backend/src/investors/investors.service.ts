// investors.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investor } from './investor.entity';

@Injectable()
export class InvestorsService {
  constructor(
    @InjectRepository(Investor)
    private investorsRepository: Repository<Investor>,
  ) {}

  async findAll(): Promise<Investor[]> {
    return this.investorsRepository.find();
  }
}
