import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
//build

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://nestCrud:<nestCrud>@nestcrud.n96fl.mongodb.net/test',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
