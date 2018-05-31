export class Match {
  private readonly _nick: string;
  private readonly _miniPhoto: string;

  constructor(_nick, _miniPhoto) {
    this._nick = _nick;
    this._miniPhoto = _miniPhoto;
  }

  get miniPhoto(): string {
    return this._miniPhoto;
  }
  get nick(): string {
    return this._nick;
  }
}
