const mongoose = require("mongoose");

//userSchema는 사용자 데이터가 어떤 구성으로 들어가는지 지정합니다.

//2. 사용자의 이름, 주소, 나이 데이터를 불러올 테이블을 지정하세요.
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },
});

//3. model로 이 userSchema를 다른 파일에서 사용할 수 있게 User model을 exports하세요.
module.exports = mongoose.model('User', userSchema);