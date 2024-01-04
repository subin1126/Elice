const duck = {
    name: 'duck',
    sound: 'quack',
  };
  
  // const { name, sound } = duck;
  
  // name, sound는 항상 key값과 동일하게 사용해야함
  // 이 key값과 다른 변수로 선언하고 싶으면
  
  const{name: newName, sound: newSound} = duck;
  
  console.log('name', newName);
  console.log('sound', newSound);
  
  const animals = ['duck', 'cat', 'bear'];
  
  //const [first, second, third] = animals;
  
  const[one, two, three] = animals;
  
  console.log('first', one);
  console.log('second', two);
  console.log('third', three);
  