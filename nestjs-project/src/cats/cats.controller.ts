import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import { Response } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';


@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // create(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send();
  // }
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  // findAll(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json([]);
  // }
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}
