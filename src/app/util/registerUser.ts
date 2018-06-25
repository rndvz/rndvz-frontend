export class RegisterUser {

  private login: string;
  private password: string;
  private birthDate: Date;
  private description: string;
  private sex: string;
  private sexPreference: string;
  private avgRate;
  private acceptedRateDifference: number;
  private acceptedYearDifference: number;
  private acceptedDistance: number;
  private latitude;
  private longitude;
  private photos: string[];


  constructor(login: string, password: string, birthDate: Date, description: string, sex: string,
              sexPreference: string, avgRate, acceptedRateDifference: number, acceptedYearDifference: number,
              acceptedDistance: number, latitude, longitude) {
    this.login = login;
    this.password = password;
    this.birthDate = birthDate;
    this.description = description;
    this.sex = sex;
    this.sexPreference = sexPreference;
    this.avgRate = avgRate;
    this.acceptedRateDifference = acceptedRateDifference;
    this.acceptedYearDifference = acceptedYearDifference;
    this.acceptedDistance = acceptedDistance;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
