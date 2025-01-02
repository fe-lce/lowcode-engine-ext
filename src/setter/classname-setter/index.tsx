import { Select } from '@alifd/next';
import { IPublicEnumTransformStage, IPublicModelSettingField } from '@felce/lowcode-types';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import './index.less';

export interface PluginProps {
  value: string;
  onChange: any;
  field: IPublicModelSettingField;
}

interface IOption {
  label: string;
  value: string;
}

export default class ClassNameView extends PureComponent<PluginProps> {
  static display = 'ClassName';

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {},
    value: '',
  };

  state = {
    dataSource: [],
    selectValue: [],
  };

  getClassNameList = () => {
    const schema = this.props.field.node?.document?.project?.exportSchema(
      IPublicEnumTransformStage.Save,
    );
    if (!schema) {
      return [];
    }
    if (schema.componentsTree.length === 0) {
      return [];
    }
    const { css } = schema.componentsTree[0];
    const classNameList: string[] = [];
    if (css) {
      const re = /\.?\w+[^{]+\{[^}]*\}/g;
      const list = css.match(re);
      list?.map((item) => {
        if (item[0] === '.') {
          let className = item.substring(1, item.indexOf('{'));
          if (className.indexOf(':') >= 0) {
            className = item.substring(1, item.indexOf(':'));
          }
          // 移除左右两边空格
          className = className.replace(/^\s*|\s*$/g, '');
          classNameList.push(className);
        }

        return item;
      });
    }

    return classNameList;
  };

  handleChange = (value?: string[]) => {
    const { onChange } = this.props;
    onChange(value?.join(' '));
    this.setState({
      selectValue: value,
    });
  };

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { value } = this.props;
    const classnameList = this.getClassNameList();
    const dataSource: IOption[] = [];
    classnameList.map((item) => {
      dataSource.push({
        value: item,
        label: item,
      });

      return item;
    });

    let selectValue: string[] = [];
    if (value && value !== '') {
      selectValue = value.split(' ');
    }

    selectValue.forEach((current) => {
      if (!classnameList.some((cls) => cls === current)) {
        dataSource.push({
          value: current,
          label: current,
        });
      }
    });

    this.setState({
      dataSource,
      selectValue,
    });
  }

  render() {
    const { dataSource, selectValue } = this.state;
    return (
      <Select
        size="small"
        style={{ width: '100%' }}
        aria-label="tag mode"
        mode="tag"
        dataSource={dataSource}
        onChange={(value) => this.handleChange(value as string[])}
        value={selectValue}
      />
    );
  }
}
