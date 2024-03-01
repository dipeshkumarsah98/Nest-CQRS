import { Order } from './order.entity';
import { replayEvents } from './event-utils';

describe('Order - Event Sourcing', () => {
  it('should correctly apply and replay events', () => {
    const order = new Order();
    order.applyOrderCreated();
    order.applyOrderShipped();

    const events = order.events;
    const newOrder = new Order();
    replayEvents(newOrder, events);

    expect(newOrder.status).toBe('SHIPPED');
  });
});
