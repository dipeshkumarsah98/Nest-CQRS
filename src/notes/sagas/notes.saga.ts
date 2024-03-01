import { Injectable } from '@nestjs/common';
import { ICommand, Saga, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import { CreateNoteEvent } from '../events/create-note.event';

@Injectable()
export class NoteSagas {
  constructor() {}

  @Saga()
  noteCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CreateNoteEvent),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      map((event: any) => {
        console.log('Inside [UserSagas] Saga');
        return null;
      }),
    );
  };
}
