const loadDataModule = require('./loadData');
const calcStatsFromAPI = require('./calcStatsFromAPI');

test("test calcStatsFromAPI function", async () => {
    const loadDataMock = jest.spyOn(loadDataModule, 'loadData');
    const mockOutput = [
        {
        breed: 'Turkish Van',
        country: 'UK',
        origin: 'Natural',
        coat: 'Semi-long',
        pattern: 'Van'
        },
        {
        breed: 'York Chocolate',
        country: 'USA',
        origin: 'Natural',
        coat: 'Long',
        pattern: 'Solid'
        }
    ]
    loadDataMock.mockImplementation(() => Promise.resolve(mockOutput));
    const expected = {'UK': 1, 'USA': 1};
    const stats = await calcStatsFromAPI();
    expect(loadDataMock).toHaveBeenCalledTimes(1);
    loadDataMock.mockRestore();
    expect(stats).toEqual(expected);
    });