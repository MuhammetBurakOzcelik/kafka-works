import { OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';
export declare class AppController implements OnModuleInit {
    private readonly appService;
    private readonly authClient;
    constructor(appService: AppService, authClient: ClientKafka);
    getHello(): string;
    handleOrderCreated(data: OrderCreatedEvent): void;
    onModuleInit(): void;
}
