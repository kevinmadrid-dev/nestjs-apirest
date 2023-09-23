import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';
import { CreateMessage } from './dto/create_message/create_message';

@Controller('message')
export class MessageController {
    @Post()
    create(@Body() CreateMessage: CreateMessage) {
        return "Message created"
    }

    @Get()
    getAll() {
        return "Message got"
    }

    @Put(":id")
    update(@Body() UpdateMessae: CreateMessage) {
        return "Message updated"
    }

    @Delete(":id")
    delete() {
        return "Message deleted"
    }
}
