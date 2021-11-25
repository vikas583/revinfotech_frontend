export const environment = {
  production: true
};
export interface Environment {
  endPoint: string;
  songEndPoint: string
  // imageLink: string;
  // websiteLink: string;

}

export const PROD: Environment = {
  endPoint: 'http://localhost:3001/',
  songEndPoint: 'http://www.songsterr.com/a/ra/'

}

export const environment1: Environment = PROD;
