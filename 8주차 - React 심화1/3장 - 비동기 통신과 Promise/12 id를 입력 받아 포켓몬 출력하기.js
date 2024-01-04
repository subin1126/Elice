import React, { useState } from "react";
import axios from "axios";

function App() {
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/"; // API 주소
  var [input, setInput] = useState(""); // 검색할 ID
  var [pokemonName, setPokemonName] = useState(""); // 포켓몬 이름
  var [pokemonImage, setPokemonImage] = useState(""); // 포켓몬 사진 URL

  // 포켓몬 번호 값을 가져오기 위한 이벤트 핸들러입니다.
  function handleChange(e) {
    setInput(e.target.value);
  }

  // 버튼 클릭 시 실행되는 이벤트 핸들러입니다.
  function getPokemonData() {
    // input으로 받은 번호의 포켓몬 이름과 이미지를 출력하도록 코드를 작성하세요.
    //응답 데이터는 json 형식이기 때문에 .data를 사용하여 해당 데이터에 접근할 수 있다
    //froms는 포켓몬의 다양한 폼들을 가진 배열이므로 [0]을 사용하여 첫 번째 폼의 데이터에 접근한다
    //name은 해당 폼의 이름을 가리킨다
    //즉 response.data.forms[0].name : 포켓몬의 이름을 나타냄

    //response.data로부터 sprites 객체에 접근
    //sprites.front_default 는 포켓몬의 정면 이미지 URL을 나타냄
    //즉, response.data.sprites.front_default : 포켓몬의 이미지 URL 을 낱냄
    axios
      .get(apiUrl + input)
      .then(function (response) {
        console.log(response);
        setPokemonName(response.data.forms[0].name)
        setPokemonImage(response.data.sprites.front_default)
      })
      .catch(function (error) {
        setPokemonName("존재하지 않는 포켓몬 번호입니다.");
        setPokemonImage("");
      });
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
