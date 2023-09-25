import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';
import { create_message } from './dto/create_message/create_message';

@Controller('message')
export class MessageController {
    @Post()
    create(@Body() CreateMessage: create_message) {
        return "Message created"
    }

    @Get()
    getAll() {
        return "Message got"
    }

    @Put(":id")
    update(@Body() UpdateMessae: create_message) {
        return "Message updated"
    }

    @Delete(":id")
    delete() {
        return "Message deleted"
    }
}
