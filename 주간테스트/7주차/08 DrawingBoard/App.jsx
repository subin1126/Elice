import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector, Provider } from 'react-redux';
import styled from 'styled-components';
import { getDiff } from './utils';
import { useBoundingRect } from './hooks';

// 1. boardSlice의 initialState를 채워 넣으세요.
const boardSlice = createSlice({
  name: 'board',
  initialState: {
    dots: [],
    meta: {
      color: 'black',
      size: 4,
    },
  },
  reducers: {
    addDot: (state, action) => {
      state.dots.push({ ...action.payload });
    },

    setColor: (state, action) => {
      state.meta.color = action.payload;
    },

    setSize: (state, action) => {
      state.meta.size = action.payload;
    },
  },
});

const reducer = boardSlice.reducer;
const actions = boardSlice.actions;
// redux-toolkit의 configureStore 함수를 이용해 store를 생성합니다.
const store = configureStore({
  reducer,
});

export default function App() {
  // react-redux Provider에 store를 제공합니다.
  return (
    <Provider store={store}>
      <div>
        <h3>그-으림판</h3>
        <SVGBoard />
      </div>
    </Provider>
  );
}

function SVGBoard() {
  // useDispatch 함수를 활용해 dispatch를 추가합니다.
  const dispatch = useDispatch();
  // dots, meta의 상태를 redux로 옮깁니다.
  const dots = useSelector(state => state.dots);
  const meta = useSelector(state => state.meta);

  const { register, rect } = useBoundingRect();

  const handleMouseUp = e => {
    // dispatch 함수를 활용하여 addDot을 구현합니다.
    const curDiff = getDiff(e, rect);
    const { x, y } = curDiff;
    const dot = {
      x,
      y,
      color: meta.color,
      size: meta.size,
    };
    dispatch(actions.addDot(dot));
    //dispatch(actions.addDot({ x, y, ...meta }));
  };
  // 2. dispatch를 이용해 setColor, setSize 액션을 추가하세요.
  const handleColorChange = e => {
    dispatch(actions.setColor(e.target.value));
  };

  const handleSizeChange = e => {
    dispatch(actions.setSize(parseInt(e.target.value, 10)));
  };

  return (
    <Container>
      <DrawingPad
        id="drawing_pad"
        xmlns="http://www.w3.org/2000/svg"
        {...register()}
        onMouseUp={handleMouseUp}
      >
        {/* 4. r 속성에 점의 size, fill 속성에 점의 color를 넣습니다. */}
        {React.Children.toArray(
          dots.map(dot => (
            <circle cx={dot.x} cy={dot.y} r={dot.size} fill={dot.color} />
          ))
        )}
      </DrawingPad>

      <Controller>
        <label htmlFor="color">
          <LabelText>Color</LabelText>
          {/* 3. 두 개의 select 컨트롤러 각각에 color, size의 상태를 반영하세요. */}
          <select
            id="color"
            name="color"
            value={meta.color}
            onChange={handleColorChange}
          >
            <option id="black" value="black">
              Black
            </option>
            <option id="red" value="red">
              Red
            </option>
            <option id="blue" value="blue">
              Blue
            </option>
            <option id="green" value="green">
              Green
            </option>
          </select>
        </label>

        <label htmlFor="size">
          <LabelText>Size</LabelText>
          <select
            id="size"
            name="size"
            value={meta.size}
            onChange={handleSizeChange}
          >
            <option id="4" value={4}>
              4
            </option>
            <option id="8" value={8}>
              8
            </option>
            <option id="12" value={12}>
              12
            </option>
            <option id="16" value={16}>
              16
            </option>
          </select>
        </label>
      </Controller>
    </Container>
  );
}

const Container = styled.div`
  background: #e9ecef;
  width: 500px;
  height: 500px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const DrawingPad = styled.svg`
  background: #fff9db;
  flex: 1;
`;

const Controller = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 12px;
  }
`;

const LabelText = styled.span`
  font-size: 12px;
  margin-right: 8px;
`;
