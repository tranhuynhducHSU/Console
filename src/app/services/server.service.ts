import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public endpoint = 'http://localhost:8081/v1/';
  // public endpoint = 'https://server.visionintelligence.ml/v1/';
  constructor() { }
}
