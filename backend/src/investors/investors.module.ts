import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestorsService } from './investors.service';
import { Investor } from './investor.entity';
import { InvestorsController } from './investors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Investor])],
  controllers: [InvestorsController],
  providers: [InvestorsService],
})
export class InvestorsModule {}
