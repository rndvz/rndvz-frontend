import { Gender } from './gender.enum';

export class User {

  get id() {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _id: number;  // only one skipped in constructor | id is given by backend database
  private readonly _login: string;
  private readonly _birthDate: Date;
  private readonly _bio: string;
  private readonly _gender: Gender;
  private readonly _preference: Gender;
  private readonly _avgRate;
  private readonly _acceptedRateDifference: number;
  private readonly _acceptedYearDifference: number;
  private readonly _acceptedDistance: number;
  private readonly _latitude;
  private readonly _longitude;
  private readonly _photos: string[];

  constructor(login: string, birthDate: Date, bio: string, gender: Gender, preference: Gender, avgRate, acceptedRateDifference: number,
              acceptedYearDifference: number, acceptedDistance: number, latitude, longitude, photos: string[]) {
    this._login = login;
    this._birthDate = birthDate;
    this._bio = bio;
    this._gender = gender;
    this._preference = preference;
    this._avgRate = avgRate;
    this._acceptedRateDifference = acceptedRateDifference;
    this._acceptedYearDifference = acceptedYearDifference;
    this._acceptedDistance = acceptedDistance;
    this._latitude = latitude;
    this._longitude = longitude;
    this._photos = photos;
  }

  get login(): string {
    return this._login;
  }

  get birthDate(): Date {
    return this._birthDate;
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

  get avgRate() {
    return this._avgRate;
  }

  get acceptedRateDifference(): number {
    return this._acceptedRateDifference;
  }

  get acceptedYearDifference(): number {
    return this._acceptedYearDifference;
  }

  get acceptedDistance(): number {
    return this._acceptedDistance;
  }

  get latitude() {
    return this._latitude;
  }

  get longitude() {
    return this._longitude;
  }

  get photos(): string[] {
    return this._photos;
  }
}
