export class GlobalConstants {
  static readonly API_BASE_URL: string =
    'https://viblog.onrender.com';
  static APP_BASE_URL: string;
  constructor() {}
  static getBaseURL(): string {
    if (window) {
      return window.location.origin;
    }
    return '';
  }
}
