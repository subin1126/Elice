import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let cancel;
    // 포켓몬 데이터를 불러오고 cancelToken을 함께 넘겨줍니다. 그리고 state를 설정하세요.
    //cancelToken : 페이지 이동이 취소될 경우 현재 페이지를 유지할 수 있도록 설정
    axios
      .get(currentPageUrl, {
        CancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map(p => p.name));
      });

    // 페이지 이동이 취소되는 경우 현재 페이지를 유지합니다.
    // useEffect는 함수를 반환하기 때문에 익명함수를 통해 취소토큰이 저장되어져 있는 cancel 변수를 반환하는 것임
    return () => cancel();
  }, [currentPageUrl]);

  // 다음 페이지로 이동합니다.
  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  // 이전 페이지로 이동합니다.
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  // 로딩 상태인 경우 로딩중을 출력합니다.
  if (loading) return '로딩중...';

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;

// CancleToken(취소 토큰)이란?
// axios의 HTTP 요청을 취소하는 기능

// let cancel : CancelToken 을 저장하기 위해 선언된 변수
// 이 변수가 useEffect 내부에 선언되는 이유 : useEffect의 반환함수에 취소 토큰을 등록하기 위함

// useEffect는 언마운트 될때 clean-up 함수를 반환할 수 있는데,
// 이 함수는 컴포넌트가 사라질 때 실행되는 역할을 한다
// useEffect 내에서 비동기 작업을 수행할 때,
// 요청이 아직 완료되지 않았는데 컴포넌트가 언마운트되면 응답을 받지 못한 상태에서 작업을 하려는 문제가 발생할 수 있다
// 이를 방지하기 위해 CancleToken 을 사용하여 요청을 취소할 수 있다

// 이 코드의 axios.get의 두번째 인자를 전달하여 취소 토큰을 생성하고, 이를 cancel 변수에 할당
// 그러면 이후에 컴포넌트가 언마운트될 때 useEffect의 반환함수에서 cancel()을 호출하여 요청을 취소할 수 있다

// 비동기 작업을 취소하는 것은 : 컴포넌트가 마운트되어 있는 동안만 응답을 받고 필요하지 않은 상태에서 응답을 기다리는 것을 방지하여 불필요한 리소스 낭비를 막을 수 있다

//=============================================================

// useEffect : 컴포넌트가 마운트되지 않았을 때, 언마운트 될 때, 또는 의존성 배열이 변경되어 다시 렌더링되기 전에 실행된다

// useEffect 내부에서 생성한 클린업 함수는 이전에 선언된 cancel 변수를 포함하는 클로저(closure)의 형태를 갖는다
// 클로저 : 자신이 생성된 환경(스코프)에 있는 변수에 접근할 수 있으며, cancel 변수는 useEffect의 클린업 함수가 실행될 때까지 그 값을 유지한다

// return () => cancel(); 은 useEffect의 클린업 함수로서, 컴포넌트가 언마운트되거나 currentPageUrl이 변경되어 다음 요청이 이루어질 때 이전 요청의 취소가 필요할 때 실행된다
// 클린업 함수 내에서 cancel() 함수를 호출하면 이전 요청이 취소되는 작업을 수행한다
// 이로써 컴포넌트가 마운트되지 않았거나 이전 요청이 완료되기 전에 컴포넌트가 언마운트되더라도 취소 작업을 처리할 수 있게 된다

