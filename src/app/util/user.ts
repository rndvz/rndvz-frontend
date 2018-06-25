import { Gender } from './gender.enum';

export class User {

  private _id: number;  // only one skipped in constructor | id is given by backend database
  private _login: string;
  private _password: string;
  private _birthDate: Date;
  private _description: string;
  private _sex: Gender;
  private _sexPreference: Gender;
  private _avgRate;
  private _acceptedRateDifference: number;
  private _acceptedYearDifference: number;
  private _acceptedDistance: number;
  private _latitude;
  private _longitude;
  private _photos: string[];


  constructor(id: number, login: string, password: string, birthDate: Date, description: string, sex: Gender,
              sexPreference: Gender, avgRate, acceptedRateDifference: number, acceptedYearDifference: number,
              acceptedDistance: number, latitude, longitude, photos: string[]) {
    this._id = id;
    this._login = login;
    this._password = password;
    this._birthDate = birthDate;
    this._description = description;
    this._sex = sex;
    this._sexPreference = sexPreference;
    this._avgRate = avgRate;
    this._acceptedRateDifference = acceptedRateDifference;
    this._acceptedYearDifference = acceptedYearDifference;
    this._acceptedDistance = acceptedDistance;
    this._latitude = latitude;
    this._longitude = longitude;
    this._photos = photos;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get sex(): Gender {
    return this._sex;
  }

  set sex(value: Gender) {
    this._sex = value;
  }

  get sexPreference(): Gender {
    return this._sexPreference;
  }

  set sexPreference(value: Gender) {
    this._sexPreference = value;
  }

  get avgRate() {
    return this._avgRate;
  }

  set avgRate(value) {
    this._avgRate = value;
  }

  get acceptedRateDifference(): number {
    return this._acceptedRateDifference;
  }

  set acceptedRateDifference(value: number) {
    this._acceptedRateDifference = value;
  }

  get acceptedYearDifference(): number {
    return this._acceptedYearDifference;
  }

  set acceptedYearDifference(value: number) {
    this._acceptedYearDifference = value;
  }

  get acceptedDistance(): number {
    return this._acceptedDistance;
  }

  set acceptedDistance(value: number) {
    this._acceptedDistance = value;
  }

  get latitude() {
    return this._latitude;
  }

  set latitude(value) {
    this._latitude = value;
  }

  get longitude() {
    return this._longitude;
  }

  set longitude(value) {
    this._longitude = value;
  }

  get photos(): string[] {
    return this._photos;
  }

  set photos(value: string[]) {
    this._photos = value;
  }
}

export class Bool {
  value: boolean;

  constructor(boolValue: boolean) {
    this.value = boolValue;
  }

  get boolValue(): boolean {
    return this.value;
  }

  set boolValue(value: boolean) {
    this.value = value;
  }
}

export class Liczba {

  constructor(value: number) {
    this.id = value;
  }

  get value(): number {
    return this.id;
  }

  set value(value: number) {
    this.id = value;
  }
  id: number;
}
