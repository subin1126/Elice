import { screen } from "@testing-library/react";
import App from "./App";
import React from 'react';
import { create } from 'react-test-renderer'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./App";

let container = null;
beforeEach(() => {
  // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 기존의 테스트 환경을 정리합니다.
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// App.js의 Hello 컴포넌트를 테스트해보세요.
it('정확한 이름을 렌더링 하는지 테스트', () => {
    act(() => {
        render(<Hello />, container);
    });

    expect(container.textContent).toBe("Hey, stranger");

    act(() => {
        render(<Hello name='Jenny' />, container);
    });

    expect(container.textContent).toBe('Hello, Jenny!');
})

//원래 사용하던 test와 it은 동일한 기능을 한다, 형태도 같음