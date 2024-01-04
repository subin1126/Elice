import React, { Component } from 'react';

class TOC extends Component {
  handleClick(id, e) {
    e.preventDefault();
    this.props.onChangePage(id);
  }

  render() {
    console.log('TOC render');
    var lists = [];
    var data = this.props.data;
    var selectedId = this.props.selectedContentId; // 선택된 컨텐츠의 id
    lists = data.map(item => (
      <li key={item.id}>
        <a href="/" onClick={this.handleClick.bind(this, item.id)}>
          {item.title}
        </a>
      </li>
    ));
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
