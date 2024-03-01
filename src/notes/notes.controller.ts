import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateNoteCommand } from './commands/create-note.command';
import { GetNotesQuery } from './query/get-notes.query';

@Controller('notes')
export class NotesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly qureyBus: QueryBus,
  ) {}

  @Post()
  async createNote(
    @Body() body: { title: string; content: string },
  ): Promise<any> {
    const { title, content } = body;
    return await this.commandBus.execute(new CreateNoteCommand(title, content));
  }

  @Get()
  async getNotes(): Promise<any> {
    return await this.qureyBus.execute(new GetNotesQuery());
  }
}
