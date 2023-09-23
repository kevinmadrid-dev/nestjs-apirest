import { CreateMessage } from './dto/create_message/create_message';
export declare class MessageController {
    create(CreateMessage: CreateMessage): string;
    getAll(): string;
    update(UpdateMessae: CreateMessage): string;
    delete(): string;
}
