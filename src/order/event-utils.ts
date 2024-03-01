import { Order } from './order.entity';
import { OrderCancelled, OrderCreate, OrderShipped } from './order.event';

export const replayEvents = (order: Order, events: any[]) => {
  for (const event of events) {
    if (event instanceof OrderCreate) {
      order.status = 'CREATED';
    } else if (event instanceof OrderShipped) {
      order.status = 'SHIPPED';
    } else if (event instanceof OrderCancelled) {
      order.status = 'CANCELLED';
    }
  }
};
