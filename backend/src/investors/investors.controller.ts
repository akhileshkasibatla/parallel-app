import { Controller, Get } from '@nestjs/common';
import { InvestorsService } from './investors.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller()
export class InvestorsController {
  constructor(private readonly investorsService: InvestorsService) {}

  @Get('investors')
  async getInvestors() {
    return this.investorsService.findAll();
  }
}
