export class CreateNoteCommand {
  constructor(
    public readonly title: string,
    public readonly content: string,
  ) {}
}
