import { StormGlass } from '@src/clients/stormglass'
import axios from 'axios'
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json'

jest.mock('axios')

describe('StormGlass client', () => {
  it('Should return the normalized forecast from the StormGlass service', async () => {
    const lat = -12.9249836
    const lng = -38.345232
    
    axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture)

    const stormGlass = new StormGlass(axios)
    const response = await stormGlass.fetchPoints(lat, lng)
    expect(response).toEqual({})
  })
})
