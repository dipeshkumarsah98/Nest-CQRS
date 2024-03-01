import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateNoteEvent } from './create-note.event';

@EventsHandler(CreateNoteEvent)
export class NoteCreateHandlerEvent implements IEventHandler<CreateNoteEvent> {
  handle(event: CreateNoteEvent) {
    console.log('CreateNoteEvent', event.id);
  }
}
