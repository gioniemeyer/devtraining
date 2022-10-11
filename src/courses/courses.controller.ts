import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {

  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  };

  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {
    const course =  this.coursesService.findOne(id);

    if (!course) {
      throw new HttpException(`Course #${id} not found`, HttpStatus.NOT_FOUND);
    }

    return course;    
  };

  @Post()
  create(
    @Body('name') CreateCourseDto: CreateCourseDto
  ) {
    return this.coursesService.create(CreateCourseDto);
  };

  @Patch(':id')
  update(
    @Param('id') id: string, @Body() UpdateCourseDto: UpdateCourseDto
  ) {
    return this.coursesService.update(id, UpdateCourseDto);
  };

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  };
}
