import { v4 as uuidV4 } from 'uuid';
import { OrderCancelled, OrderCreate, OrderShipped } from './order.event';

export class Order {
  id: string;
  status: 'CREATED' | 'SHIPPED' | 'CANCELLED';
  events: any[] = [];
  constructor() {
    this.id = uuidV4();
    this.status = 'CREATED';
  }

  applyOrderCreated() {
    this.events.push(new OrderCreate(this.id));
    this.status = 'CREATED';
  }

  applyOrderShipped() {
    this.events.push(new OrderShipped(this.id));
    this.status = 'SHIPPED';
  }

  applyOrderCancelled() {
    this.events.push(new OrderCancelled(this.id));
    this.status = 'CANCELLED';
  }
}
