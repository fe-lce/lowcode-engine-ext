import { event } from '@felce/lowcode-engine';
import { isJSExpression } from '@felce/lowcode-utils';
import { PureComponent } from 'react';
import './index.less';

export default class VariableSetter extends PureComponent {
  static displayName = 'SetterVariable';
  static isPopup = true;

  static show(params: any) {
    const { prop: field, ...res } = params;
    event.emit('variableBindDialog.openDialog', { field, ...res });
  }

  render() {
    return <div className="lowcode-setter-variable">Hello LowcodeSetterVariable</div>;
  }
}

export const DataVariableSetter = {
  component: VariableSetter,
  condition: (field: any) => {
    const v = field.getValue();
    return isJSExpression(v);
  },
  valueType: ['JSExpression'],
  title: '变量输入',
  recommend: true,
};
