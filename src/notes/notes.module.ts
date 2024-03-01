import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateNoteHandler } from './commands/create-note.handler';
import { GetNoteHandler } from './query/get-note.handler';
import { NotesController } from './notes.controller';
import { NoteSagas } from './sagas/notes.saga';
import { NoteCreateHandlerEvent } from './events/create-note.handler';

const CommandHandlers = [CreateNoteHandler];
const EventHandlers = [NoteCreateHandlerEvent];
const QueryHandlers = [GetNoteHandler];
@Module({
  imports: [CqrsModule],
  controllers: [NotesController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
    NoteSagas,
  ],
})
export class NotesModule {}
