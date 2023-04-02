import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entity/car.entity';
import { Person } from 'src/person/entity/person.entity';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Person]), PersonModule],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
