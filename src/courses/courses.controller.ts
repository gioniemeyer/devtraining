import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(
    @Res() res
  ) {
    return res.status(200).send('Listagem de cursos');
  };

  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {
    return `Curso #${id}`;
  };

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(
    @Body('name') body
  ) {
    return body;
  };

  @Patch(':id')
  update(
    @Param('id') id: string, @Body() body
  ) {
    return `Atualização do curso #${id}`;
  };

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remoção do curso #${id}`;
  };
}
