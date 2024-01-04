import React, { useRef, useMemo, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

const initialState = {
  isRunning: false,
  startTime: 10,
  currentTime: 10,
  duration: 1000,
};

const palette = ['hotpink', 'aquamarine', 'coral', 'cyan'];

// reducers 를 완성하세요.
const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
      //createSlice 내부에 reducer 함수는 immerjs를 활용하기 때문에
      //return 문이 필요없고, state를 직접 바꿔주면 됨
    reset(state, action) {
        state.isRunning = false
        state.currentTime = state.startTime
    },

    start(state, action) {
        state.isRunning = true
    },

    stop(state, action) {
        state.isRunning = false
    },

    tick(state, action) {
        state.isRunning = state.currentTime > 0
        state.currentTime -= 1
    },

    setDuration(state, action) {
        state.duration = action.payload.duration
    },

    setStartTime(state, action) {
        const { startTime } = action.payload
        state.startTime = startTime
        state.currentTime = startTime
    }
  },
});


// reducer를 slice에서 생성한 리듀서로 변경하세요.
const store = configureStore({ reducer: timerSlice.reducer });

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const {
    start,
    stop,
    reset,
    setDuration,
    setStartTime,
    tick: tickTimer
 } = timerSlice.actions

const durationSelector = state => state.duration;
const currentTimeSelector = state => state.currentTime;
const isRunningSelector = state => state.isRunning;
const startTimeSelector = state => state.startTime;

function Counter() {
  const startTimeInputRef = useRef();
  const durationInputRef = useRef();

  const dispatch = useDispatch();

  const duration = useSelector(durationSelector);
  const currentTime = useSelector(currentTimeSelector);
  const isRunning = useSelector(isRunningSelector);
  const startTime = useSelector(startTimeSelector);

  const handleStop = () => dispatch(stop());
  const handleReset = () => dispatch(reset());
  const handleTimer = () => dispatch(start());

  useEffect(() => {
    if (!isRunning) return;
    let timerId = null;

    const tick = () => {
      timerId = setTimeout(() => {
        if (!isRunning) return;
        dispatch(tickTimer());
        tick();
      }, duration);
    };

    tick();

    return () => clearTimeout(timerId);
  }, [dispatch, duration, isRunning]);

  const isResetted = useMemo(
    () => currentTime === startTime,
    [startTime, currentTime]
  );

  const isDone = useMemo(() => currentTime === 0, [currentTime]);

  return (
    <Container>
      <Time duration={duration} currentTime={currentTime} stopped={!isRunning}>
        {currentTime}
      </Time>

      <Button onClick={handleStop} disabled={!isRunning}>
        Stop
      </Button>

      <Button onClick={handleReset} disabled={isRunning || isResetted}>
        Reset
      </Button>

      <Button onClick={handleTimer} disabled={isRunning || isDone}>
        Start
      </Button>

      <Form
        onSubmit={e => {
          e.preventDefault();
          const duration = Number(durationInputRef.current.value);
          dispatch(setDuration({duration}));
          dispatch(reset());
        }}
      >
        <label htmlFor="duration">Duration(ms)</label>
        <input
          ref={durationInputRef}
          id="duration"
          type="text"
          name="duration"
          defaultValue={duration}
        />
        <input type="submit" value="Set" disabled={isRunning} />
      </Form>

      <Form
        onSubmit={e => {
          e.preventDefault();
          const startTime = Number(startTimeInputRef.current.value);
          dispatch(setStartTime({startTime}));
          {/*  set함수에 넘길 때 actionCreator는 payload의 객체로 넘겨야하기 때문에 {startTime} 이렇게 넘김
          그냥 startTime이면 action.payload = startTime인데
          우리는 action.payload.startTime의 데이터를 넘겨줘야하기 때문에 ㅇㅇ
          action.payload.startTime === startTime */}
          dispatch(reset());
        }}
      >
        <label htmlFor="duration">Start Time(sec)</label>
        <input
          ref={startTimeInputRef}
          id="start-time"
          type="text"
          name="start-time"
          defaultValue={startTime}
        />
        <input type="submit" value="Set" disabled={isRunning} />
      </Form>
    </Container>
  );
}

const Button = styled.button`
  display: block;
  padding: 8px;
  margin: 4px 0;
`;

const Time = styled.div`
  box-sizing: border-box;

  margin: 12px 0;
  width: 400px;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 100%;

  transition: background-color ${({ duration }) => duration}ms;
  background-color: ${({ currentTime }) =>
    palette[currentTime % palette.length]};

  font-size: 2rem;
  font-weight: bold;
  color: black;

  opacity: ${({ stopped }) => (stopped ? 0.4 : 1)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  margin-top: 8px;

  label {
    display: inline-block;
    min-width: 120px;
  }

  input[type="text"] {
    margin-right: 8px;
  }
`;
