import { IPublicModelPluginContext } from '@felce/lowcode-types';
import packagesInfo from '../package.json';
import './index.less';
import EventBindDialog from './plugin/plugin-event-bind-dialog';
import SimpleVariableBindPopup from './plugin/plugin-simple-bind-popup';
import VariableBindDialog from './plugin/plugin-variable-bind-dialog';
import { DataArraySetter } from './setter/array-setter';
import BoolSetter from './setter/bool-setter';
import ClassNameSetter from './setter/classname-setter';
import ColorSetter from './setter/color-setter';
import {
  DateMonthSetter,
  DateRangeSetter,
  DateYearSetter,
  StringDateSetter,
  StringTimePicker,
} from './setter/date-setter';
import EventsSetter from './setter/events-setter';
import ExpressionSetter, { DataExpressionSetter } from './setter/expression-setter';
import { DataFunctionSetter } from './setter/function-setter';
import I18nSetter from './setter/i18n-setter';
import IconSetter from './setter/icon-setter';
import JsonSetter, { DataJsonSetter } from './setter/json-setter';
import MixedSetter from './setter/mixed-setter';
import NumberSetter from './setter/number-setter';
import { DataObjectSetter } from './setter/object-setter';
import RadioGroupSetter from './setter/radiogroup-setter';
import SelectSetter from './setter/select-setter';
import { DataSlotSetter } from './setter/slot-setter';
import StringSetter from './setter/string-setter';
import StyleSetter from './setter/style-setter';
import TextAreaSetter from './setter/textarea-setter';
import TitleSetter from './setter/title-setter';
import { DataVariableSetter } from './setter/variable-setter';

export { EventsSetter, ExpressionSetter, IconSetter, JsonSetter };

// TODO 类型定义
const engineExt: any = {
  setters: {
    StringSetter,
    NumberSetter,
    BoolSetter,
    SelectSetter,
    VariableSetter: DataVariableSetter,
    ExpressionSetter: DataExpressionSetter,
    RadioGroupSetter,
    TextAreaSetter,
    DateSetter: StringDateSetter,
    TimePicker: StringTimePicker,
    DateYearSetter,
    DateMonthSetter,
    DateRangeSetter,
    EventsSetter,
    ColorSetter,
    JsonSetter: DataJsonSetter,
    StyleSetter,
    IconSetter,
    ClassNameSetter,
    I18nSetter,
    FunctionSetter: DataFunctionSetter,
    MixedSetter,
    SlotSetter: DataSlotSetter,
    ArraySetter: DataArraySetter,
    ObjectSetter: DataObjectSetter,
    TitleSetter,
  },

  setterMap: {
    StringSetter,
    NumberSetter,
    BoolSetter,
    SelectSetter,
    VariableSetter: DataVariableSetter,
    ExpressionSetter: DataExpressionSetter,
    RadioGroupSetter,
    TextAreaSetter,
    DateSetter: StringDateSetter,
    TimePicker: StringTimePicker,
    DateYearSetter,
    DateMonthSetter,
    DateRangeSetter,
    EventsSetter,
    ColorSetter,
    JsonSetter: DataJsonSetter,
    StyleSetter,
    IconSetter,
    ClassNameSetter,
    I18nSetter,
    FunctionSetter: DataFunctionSetter,
    MixedSetter,
    SlotSetter: DataSlotSetter,
    ArraySetter: DataArraySetter,
    ObjectSetter: DataObjectSetter,
    TitleSetter,
  },

  pluginMap: {
    EventBindDialog,
    VariableBindDialog,
    SimpleVariableBindPopup,
  },
};
engineExt.version = packagesInfo.version;
(window as any).AliLowCodeEngineExt = engineExt;
console.log(
  '%c AliLowCodeExt %c v'.concat(engineExt.version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
);

// 注册默认的 setters
export const setterRegistry = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { config } = ctx;
      if (config.get('disableDefaultSetters')) return;
      const builtinSetters = engineExt.setters;
      if (builtinSetters) {
        ctx.setters.registerSetter(builtinSetters);
      }
    },
  };
};

setterRegistry.pluginName = '___setter_registry___';

export default engineExt;
