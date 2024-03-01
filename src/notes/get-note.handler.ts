import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetNotesQuery } from './get-notes.query';

@QueryHandler(GetNotesQuery)
export class GetNoteHandler implements IQueryHandler<GetNoteHandler> {
  async execute(query: GetNoteHandler): Promise<any> {
    const {} = query;

    return [
      {
        id: 1,
        title: 'My first note',
        content: 'This is the content of my first note',
      },
      {
        id: 2,
        title: 'My second note',
        content: 'This is the content of my second note',
      },
    ];
  }
}
