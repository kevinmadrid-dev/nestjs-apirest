import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { create_message } from './dto/create_message/create_message';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>
    ) {}

    async getAll() {
        return await this.messageRepository.find()
    }

    async createMessage(newMessage: create_message) {
        const nuevo = new Message()
        nuevo.message = newMessage.message
        nuevo.nick = newMessage.nick  

        return this.messageRepository.save(nuevo)
    }

    async updateMessage(idMessage: number, updateMessage: create_message) {
        const actualizado = await this.messageRepository.findOne({ where: { id: idMessage } })
        actualizado.message = updateMessage.message
        actualizado.nick = updateMessage.nick  

        return await this.messageRepository.save(actualizado)
    }

    async deleteMessage(idMessage: number) {
        return await this.messageRepository.delete(idMessage)
    }
}
