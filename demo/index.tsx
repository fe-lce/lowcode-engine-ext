import {
  Designer,
  DocumentModel,
  LowCodePluginManager,
  Node,
  Project,
  SettingTopEntry,
} from '@felce/lowcode-designer';
import { Editor } from '@felce/lowcode-editor-core';
import { createField } from '@felce/lowcode-editor-skeleton';
import { Component, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import LowcodeEngineExt from '../src/index';
import { setters } from '@felce/lowcode-engine';
import '@alifd/next/dist/next.css';
import './index.less';

class App extends Component {
  state = {
    value: new Map(),
  };
  settings: SettingTopEntry | null = null;

  constructor(props: any) {
    super(props);
    // const editor = new Editor();
    // const designer = new Designer({ editor });
    // const prject = new Project(designer);
    // const document = new DocumentModel(prject);
    // const innerPlugins = new LowCodePluginManager({
    //   assembleApis(context) {
    //     context.setters =
    //   }
    // });
    // const plugins = (this.settings = new SettingTopEntry({}, [document.root!]));
  }

  changeHandle(key: string, newValue: any) {
    console.log('changeHandle', key, newValue);
    this.state.value.set(key, newValue);
    this.setState({
      value: this.state.value,
    });
  }

  renderSetter() {
    const { setters, pluginMap } = LowcodeEngineExt;
    return Object.keys(setters).map((key) => {
      const component = createElement(setters[key].component || setters[key], {
        onChange: (value: any) => this.changeHandle(setters[key].name, value),
        // value: this.state.value.get(setters[key].name),
        field: {},
        options: [
          { label: 'label1', value: 'value1' },
          { label: 'label2', value: 'value2' },
        ],
      });
      return createField(
        {
          title: setters[key].name,
        },
        component,
      );
    });
  }

  render() {
    const { setters, pluginMap } = LowcodeEngineExt;
    const value = this.state.value.get(setters.StringSetter.name);
    console.log('render', value);

    return <div className="setter-container">{this.renderSetter()}</div>;
  }
}

const root = createRoot(document.getElementById('lce-container')!);

root.render(<App />);
