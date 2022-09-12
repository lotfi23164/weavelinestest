import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./auth/auth.module"
import { UsersModule } from "./users/users.module"
import { TodosModule } from './todos/todos.module';
import 'dotenv/config';

@Module({
  imports: [
    UsersModule, AuthModule,MongooseModule.forRoot(
     "mongodb+srv://lot32:hmWOHahU0uVj5FQz@cluster0.lpniexn.mongodb.net/?retryWrites=true&w=majority"
    ), TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}