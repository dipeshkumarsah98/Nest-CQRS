import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateNoteHandler } from './create-note.handler';
import { GetNoteHandler } from './get-note.handler';
import { NotesController } from './notes.controller';

@Module({
  imports: [CqrsModule],
  controllers: [NotesController],
  providers: [CreateNoteHandler, GetNoteHandler],
})
export class NotesModule {}
