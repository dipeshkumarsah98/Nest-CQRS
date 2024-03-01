import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateNoteCommand } from './create-note.command';
// import { NoteCreatedEvent } from '../events/note-created.event';

@CommandHandler(CreateNoteCommand)
export class CreateNoteHandler implements ICommandHandler<CreateNoteCommand> {
  async execute(command: CreateNoteCommand): Promise<any> {
    const { content, title } = command;
    // Simulate note creation
    const noteId = Math.random().toString(36).substring(7);

    // const event = new NoteCreatedEvent(noteId, title, content);
    // event.commit();
    return { id: noteId, title, content };
  }
}
