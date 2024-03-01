import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateNoteCommand } from './create-note.command';
import { CreateNoteEvent } from '../events/create-note.event';

@CommandHandler(CreateNoteCommand)
export class CreateNoteHandler implements ICommandHandler<CreateNoteCommand> {
  constructor(private readonly eventBus: EventBus) {}
  async execute(command: CreateNoteCommand): Promise<any> {
    const { content, title } = command;
    // Simulate note creation
    const noteId = Math.random().toString(36).substring(7);

    // const event = new NoteCreatedEvent(noteId, title, content);
    // event.commit();
    this.sendEvent(noteId, this.eventBus);
    return { id: noteId, title, content };
  }

  private async sendEvent(userId: string, eventBus: EventBus) {
    console.log('Send event UserCreatedEvent');
    eventBus.publish(new CreateNoteEvent(userId));
  }
}
