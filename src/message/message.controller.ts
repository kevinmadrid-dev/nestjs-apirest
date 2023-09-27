import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Res,
  Param,
  HttpStatus
} from "@nestjs/common"
import { create_message } from "./dto/create_message/create_message"
import { MessageService } from "./message.service"

@Controller("message")
export class MessageController {
  constructor(private ServiceMessage: MessageService) {}

  @Post()
  async create(@Body() create_message: create_message, @Res() response) {
    try {
      const message = await this.ServiceMessage.createMessage(create_message)
      response.status(HttpStatus.CREATED).json(message)
    } catch (error) {
      response
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Error en create message", error })
    }
  }

  @Get()
  async getAll(@Res() response) {
    try {
      const messageList = await this.ServiceMessage.getAll()
      response.status(HttpStatus.OK).json(messageList)
    } catch (error) {
      response
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Error en getAll message" })
    }
  }

  @Get(":id")
  async get(@Res() response, @Param("id") idMessage) {
    try {
      const message = await this.ServiceMessage.getById(idMessage)
      response.status(HttpStatus.OK).json(message)
    } catch (error) {
      response
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Error en getAll message" })
    }
  }

  @Put(":id")
  async update(
    @Body() updateMessage: create_message,
    @Res() response,
    @Param("id") idMessage
  ) {
    try {
      const message = await this.ServiceMessage.updateMessage(
        idMessage,
        updateMessage
      )
      response.status(HttpStatus.OK).json(message)
    } catch (error) {
      response
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Error en update message", error })
    }
  }

  @Delete(":id")
  delete(@Res() response, @Param("id") idMessage) {
    try {
      const res = this.ServiceMessage.deleteMessage(idMessage)
      response.status(HttpStatus.OK).json(res)
    } catch (error) {
      response
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Error en delete message", error })
    }
  }
}
