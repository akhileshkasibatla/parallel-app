// investors.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investor } from './investor.entity';
import { AddInvestor } from './add-investor.dto';

@Injectable()
export class InvestorsService {
  constructor(
    @InjectRepository(Investor)
    private investorsRepository: Repository<Investor>,
  ) {}

  async findAll(): Promise<Investor[]> {
    return this.investorsRepository.find();
  }

  async create(
    addInvestorInput: AddInvestor,
    fileURL?: string,
  ): Promise<Investor> {
    const investor = this.investorsRepository.create({
      ...addInvestorInput,
      fileURL,
      dateOfBirth: new Date(addInvestorInput.dateOfBirth),
    });
    return this.investorsRepository.save(investor);
  }
}
