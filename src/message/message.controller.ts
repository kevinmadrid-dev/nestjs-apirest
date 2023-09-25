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
  create(@Body() create_message: create_message, @Res() response) {
    this.ServiceMessage.createMessage(create_message)
      .then((message) => {
        response.status(HttpStatus.CREATED).json(message)
      })
      .catch(
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: "Error en create message" })
      )
  }

  @Get()
  getAll(@Res() response) {
    this.ServiceMessage.getAll()
      .then((messageList) => {
        response.status(HttpStatus.OK).json(messageList)
      })
      .catch(
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: "Error en getAll message" })
      )
  }

  @Put(":id")
  update(
    @Body() updateMessage: create_message,
    @Res() response,
    @Param("id") idMessage
  ) {
    this.ServiceMessage.updateMessage(idMessage, updateMessage)
      .then((message) => {
        response.status(HttpStatus.OK).json(message)
      })
      .catch(
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: "Error en update message" })
      )
  }

  @Delete(":id")
  delete(@Res() response, @Param("id") idMessage) {
    this.ServiceMessage.deleteMessage(idMessage)
      .then((res) => {
        response.status(HttpStatus.OK).json(res)
      })
      .catch(
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: "Error en delete message" })
      )
  }
}
