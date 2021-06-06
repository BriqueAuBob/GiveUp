import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://eesteves:9HKlD58Cp2Mqwh7F@losingproject.zuoey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    ProjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
