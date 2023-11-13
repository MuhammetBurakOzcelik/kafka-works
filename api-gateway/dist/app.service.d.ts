import { CreateOrderRequest } from './create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices/client/client-kafka';
export declare class AppService {
    private readonly billingClient;
    constructor(billingClient: ClientKafka);
    createOrder({ userId, price }: CreateOrderRequest): void;
    getHello(): string;
}
