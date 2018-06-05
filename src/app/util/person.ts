import { Gender } from './gender.enum';

export class Person {
  private readonly _nick: string;
  private readonly _bio: string;
  private readonly _gender: Gender;
  private readonly _photos: string[];

  constructor(_nick: string, _bio: string, _gender: Gender, _photos: string[]) {
    this._nick = _nick;
    this._bio = _bio;
    this._gender = _gender;
    this._photos = _photos;
  }

  get nick(): string {
    return this._nick;
  }

  get bio(): string {
    return this._bio;
  }

  get gender(): Gender {
    return this._gender;
  }

  get photos(): string[] {
    return this._photos;
  }
}
