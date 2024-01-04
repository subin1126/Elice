import React, { useState } from "react";
import axios from "axios";

function App() {
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/"; // API 주소
  var [input, setInput] = useState(""); // 검색할 ID
  var [pokemonName, setPokemonName] = useState(""); // 포켓몬 이름
  var [pokemonImage, setPokemonImage] = useState(""); // 포켓몬 이미지 URL

  // 포켓몬 번호 값을 가져오기 위한 이벤트 핸들러입니다.
  function handleChange(e) {
    setInput(e.target.value);
  }

  // 버튼 클릭 시 실행되는 이벤트 핸들러입니다.
  function getPokemonData() {
    // 위의 선언된 변수를 활용하여 지시사항에 따라 GET 요청을 해보세요.
    // https://pokeapi.co/api/v2/pokemon/input 이렇게 호출이되는거임
    axios.get(apiUrl + input)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        setPokemonName("존재하지 않는 포켓몬 번호입니다.");
        setPokemonImage('');
    })
  }
  return (
    <div>
      <h1>포켓몬 검색기</h1>
      <div>
        ID를 입력하세요:
        <input type="number" onChange={handleChange} />
      </div>
      <div>
        <span>{pokemonName}</span>
      </div>
      <img src={pokemonImage} />
      <button onClick={getPokemonData}>검색</button>
    </div>
  );
}

export default App;
