export class EventStore {
  private events: any[] = [];

  public addEvent(event: any) {
    this.events.push(event);
  }

  public getEvents() {
    return this.events;
  }
}
