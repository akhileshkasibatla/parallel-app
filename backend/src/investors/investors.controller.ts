import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { InvestorsService } from './investors.service';
import { AddInvestor } from './add-investor.dto';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller()
export class InvestorsController {
  constructor(private readonly investorsService: InvestorsService) {}

  @Get('investors')
  async getInvestors() {
    return this.investorsService.findAll();
  }

  @Post('addInvestor')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: `./${process.env.UPLOAD_DIR}`,
        filename: (req, file, cb) => {
          const fileName = file.originalname;
          const ext = extname(file.originalname);
          const timestamp = Date.now();
          const formattedName = `${fileName}-${timestamp}${ext}`;
          cb(null, formattedName);
        },
      }),
    }),
  )
  async addInvestor(
    @Body() addInvestorInput: AddInvestor,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('File upload is required.');
    }
    const fileURL = `/${process.env.UPLOAD_DIR}/${file.filename}`; // adjust this if you expose files differently
    return this.investorsService.create(addInvestorInput, fileURL);
  }
}
