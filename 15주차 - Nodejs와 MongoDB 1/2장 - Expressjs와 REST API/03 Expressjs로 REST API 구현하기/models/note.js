let notes = [
    {
        id: 1,
        title: '첫 메모',
        content: '애니가 작성한 첫 메모입니다.',
        author: 'annie',
    },
    {
        id: 2,
        title: '두 번째는 밥이 작성했습니다.',
        content: '안녕하세요 밥입니다.',
        author: 'bob',
    },
    {
        id: 3,
        title: '밥이 한번 더 썼습니다.',
        content: '밥이 작성한 두 번째 메모입니다.',
        author: 'bob',
    },
    {
        id: 4,
        title: '크리스도 메모를 작성했습니다.',
        content: '안녕하세요 크리스입니다.',
        author: 'chris',
    },
];

exports.list = () => {
    return notes.map(({ id, title, author }) => ({
        id,
        title,
        author,
    }));
}

exports.get = (id) => {
    const note = notes.find((note) => note.id === id);
    
    if (!note) {
        throw new Error('Note not found');
    }
    
    return note;
}

// authorList와 findByAuthor를 구현합니다.
exports.authorList = () => {
    // notes 배열에서 'author' 속성만 추출하여 authors 배열에 저장
    const authors = notes.map(({ author }) => author);

     // authors 배열에서 중복된 요소를 제거한 후, 고유한 작성자(author) 목록을 반환
    return [...new Set(authors)];
}

exports.findByAuthor = (author) => {
    // 'notes' 배열에서 작성자가 주어진 'author'와 일치하는 노트들을 필터링하여 'filtered' 배열에 저장
    const filtered = notes.filter(note => note.author === author);

    // 만약 필터링된 결과가 하나도 없다면, 해당 작성자가 노트를 가지고 있지 않다는 오류를 던짐
    if(filtered.length < 1){
        throw new Error(`${author} has no note`);
    }

    return filtered;
}