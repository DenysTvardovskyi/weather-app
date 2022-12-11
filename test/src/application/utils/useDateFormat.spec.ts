import formatDate from '../../../../src/application/utils/useFormatDate';

describe('formatDate util', () => {
  it('works correctly', () => {
    const mocked_date = '2022-12-11 12:00:00';
    const mockedOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      hour: 'numeric',
    };

    const dateString = formatDate(mocked_date, mockedOptions);
    expect(dateString).toEqual('Sunday, 12 PM');
  });
});
