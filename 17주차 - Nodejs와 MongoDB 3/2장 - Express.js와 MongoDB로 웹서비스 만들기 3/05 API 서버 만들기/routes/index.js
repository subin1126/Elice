const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const hashPassword = require('../utils/hash-password');
const sendMail = require('../utils/send-mail');
const generateRandomPassword = require('../utils/generate-random-password')
const { User } = require('../models');

const router = Router();

router.post('/join', asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = hashPassword(password);
  const user = await User.create({
    email,
    name,
    password: hashedPassword,
  });

  //클라이언트와 서버를 분리했기 때문에 REDIRECT를 원래 바로 적어줬는데 그렇게 안함
  //분리한 경우 클라이언트가 서버의 어떤 응답을 받고 어디로 redirect할지, 또는 그 데이터를 사용할지 결정하기 때문에 분리된 경우 redirect 사용x
  //그냥 회원가입 완료된 경우 완료됐다고 결과를 보내줌
  res.json({ result: 'success' });
}));

router.post('/reset-password', asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('해당 메일로 가입된 사용자가 없습니다.');
  }
  
  const newPassword = generateRandomPassword();
  
  await User.updateOne({ email }, {
    password: hashPassword(newPassword),
    passwordReset: true,
  });
  
  await sendMail(email, '임시 비밀번호가 발급되었습니다', `회원님의 임시 비밀번호는 [${newPassword}] 입니다.`);
  
  res.json({ result: 'success' });
}));

router.post('/change-password', asyncHandler(async (req, res) => {
  const { currentPassword, password } = req.body;
  const user = await User.findOne({ shortId: req.user.shortId });
  
  if (user.password !== hashPassword(currentPassword)) {
    throw new Error('임시 비밀번호가 일치하지 않습니다.');
  }
  
  await User.updateOne({ shortId: user.shortId }, {
    password: hashPassword(password),
    passwordReset: false,
  });
  
  res.json({ result: 'success' });
}));

module.exports = router;