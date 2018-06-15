export class Match {
  constructor(private readonly _id: number,
              private readonly _nick: string,
              private readonly _miniPhoto: string) {
  }

  get id(): number {
    return this._id;
  }

  get nick(): string {
    return this._nick;
  }

  get miniPhoto(): string {
    return this._miniPhoto;
  }
}
