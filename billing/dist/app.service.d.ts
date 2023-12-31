import { OrderCreatedEvent } from './order-created.event';
import { ClientKafka } from '@nestjs/microservices';
export declare class AppService {
    private readonly authClient;
    constructor(authClient: ClientKafka);
    handleOrderCreated(orderCreatedEvent: OrderCreatedEvent): void;
    getHello(): string;
}
