import { Gender } from './gender.enum';

export class User {
  get birthDate(): Date {
    return this._birthDate;
  }
  get id() {
    return this._id;
  }

  private readonly _id: number;  // only one skipped in constructor | id is given by backend database
  private readonly _login: string;
  private readonly _birthDate: Date;
  private readonly _bio: string;
  private readonly _gender: Gender;
  private readonly _preference: Gender;
  private readonly  avgRate;
  private readonly  acceptedRateDifference: number;
  private readonly  acceptedYearDifference: number;
  private readonly  acceptedDistance: number;
  private readonly  latitude;
  private readonly  longitude;
  private readonly _photos: string[];

  constructor(_login: string, _bio: string, _gender: Gender, _preference: Gender, _photos: string[]) {
    this._login = _login;
    this._bio = _bio;
    this._gender = _gender;
    this._preference = _preference;
    this._photos = _photos;
  }

  get login(): string {
    return this._login;
  }

  get bio(): string {
    return this._bio;
  }

  get gender(): Gender {
    return this._gender;
  }

  get preference(): Gender {
    return this._preference;
  }

  get photos(): string[] {
    return this._photos;
  }
}
