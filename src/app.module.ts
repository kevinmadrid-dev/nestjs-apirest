import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { MessageController } from "./message/message.controller"

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "user",
        password: "123456",
        database: "sendapp_db",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
        logging: true
      })
    })
  ],
  controllers: [AppController, MessageController],
  providers: [AppService]
})
export class AppModule {}
