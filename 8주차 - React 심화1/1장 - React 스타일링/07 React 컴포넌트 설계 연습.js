import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: { title: 'React', sub: 'React Concept!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        {
          id: 1,
          title: 'Component',
          desc: 'React is Component based development',
        },
        {
          id: 2,
          title: 'Virtual DOM',
          desc: 'React creates a tree of custom objects representing a part of the DOM.',
        },
        {
          id: 3,
          title: 'SSR(Server Side Rendering)',
          desc: 'React server returns a ready to render HTML page and the JS scripts required to make the page interactive',
        },
      ],
    };
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  //1. state값으로 넣어준 컴포넌트를 `getContent()`함수에서 가져옵니다.
  // article에 해당하는 코드를 모두 대체하세요.
  getContent() {
    if (this.state.mode === 'welcome') {
      return (
        <ReadContent
          title={this.state.welcome.title}
          desc={this.state.welcome.desc}
        />
      );
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      return <ReadContent title={_content.title} desc={_content.desc} />;
    }
  }

  //2. 태그들을 컴포넌트화 시켜서 이를 렌더링을 위해 render() 함수 내에 코드를 작성합니다.
  render() {
    console.log('App render');
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => this.setState({ mode: 'welcome' })}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={id =>
            this.setState({ mode: 'read', selected_content_id: id })
          }
          selectedContentId={this.state.selected_content_id} // 선택된 컨텐츠의 id 전달
        ></TOC>

        {this.getContent()}
      </div>
    );
  }
}

export default App;
