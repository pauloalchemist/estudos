import { AxiosStatic } from "axios";

export class StormGlass {

  constructor(protected request: AxiosStatic) {

  }

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    this.request.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`)
    return Promise.resolve({})
  }
}