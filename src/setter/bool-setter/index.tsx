import * as React from 'react';
import { Switch } from '@alifd/next';

import './index.less';

interface BoolSetterProps {
  value: boolean;
  disabled: boolean;
  defaultValue: any;
  onChange: (val: number) => void;
}
interface BoolSetterState {
  setterValue: boolean;
}
export default class BoolSetter extends React.PureComponent<BoolSetterProps, BoolSetterState> {
  static displayName = 'BoolSetter';

  render() {
    const { onChange, value, defaultValue, disabled } = this.props;
    return (
      <Switch
        className="switch-style"
        checked={value ?? defaultValue}
        disabled={disabled}
        size="small"
        onChange={(val: any) => onChange(val)}
      />
    );
  }
}
