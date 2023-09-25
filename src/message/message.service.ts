import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Message } from "./entities/message.entity"
import { Repository } from "typeorm"
import { create_message } from "./dto/create_message/create_message"

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>
  ) {}

  async createMessage(newMessage: create_message): Promise<Message> {
    const nuevo = new Message()
    nuevo.message = newMessage.message
    nuevo.nick = newMessage.nick

    return this.messageRepository.save(nuevo)
  }

  async getAll(): Promise<Message[]> {
    return await this.messageRepository.find()
  }

  async updateMessage(
    idMessage: number,
    updateMessage: create_message
  ): Promise<Message> {
    const actualizado = await this.messageRepository.findOne({
      where: { id: idMessage }
    })
    actualizado.message = updateMessage.message
    actualizado.nick = updateMessage.nick

    return await this.messageRepository.save(actualizado)
  }

  async deleteMessage(idMessage: number): Promise<any> {
    return await this.messageRepository.delete(idMessage)
  }
}
