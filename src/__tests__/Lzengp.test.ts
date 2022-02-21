import { GetWeek } from '../index'
test('My GetWeek', () => {
    expect(GetWeek('', true)).toBe('星期二')
})
