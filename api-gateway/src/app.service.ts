import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices/client/client-kafka';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  createOrder({ userId, price }: CreateOrderRequest) {0
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price).toString(),
    );
  }
  getHello(): string {
    return 'Hello World!';
  }
}
