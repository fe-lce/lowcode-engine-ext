import { DatePicker, TimePicker } from '@alifd/next';
import moment from 'moment';
import { Component } from 'react';

// eslint-disable-next-line react/no-multi-comp
export class StringDateSetter extends Component {
  render() {
    const { onChange, value, showTime } = this.props;
    return (
      <DatePicker
        value={moment(value)}
        showTime={showTime}
        onChange={(val) => {
          onChange(val ? val.format() : val);
        }}
      />
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
export class StringTimePicker extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <TimePicker
        value={moment(value)}
        onChange={(val) => {
          onChange(val ? val.format('HH:mm:ss') : val);
        }}
      />
    );
  }
}

export const DateSetter = DatePicker;
export const DateYearSetter = DatePicker.YearPicker;
export const DateMonthSetter = DatePicker.MonthPicker;
export const DateRangeSetter = DatePicker.RangePicker;
