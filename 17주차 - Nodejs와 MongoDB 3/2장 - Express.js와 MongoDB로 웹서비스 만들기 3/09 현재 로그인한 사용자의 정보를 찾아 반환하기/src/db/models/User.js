import { UserModel } from "../schemas/user";

class User {

  static async findById({ user_id }) {
        // 입력 받은 user_id를 db에서 검색하여 사용자 추출
        const user = await UserModel.findOne({ user_id });
        return user;
    }


  static async findAll() {
    // Mongoose 모델의 find 함수를 이용하여 목록 추출 후 반환
    const users = await UserModel.find({});
    return users;
  }

  static async create({ newUser }) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }

  static async findByEmail({ email }) {
    // 입력 받은 email을 db에서 검색하여 사용자 추출
    const user = await UserModel.findOne({ email });
    return user;

  }

}

export { User };
