import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
  const { name, email, lastName, location } = req.body;
  if (!name || !email || !lastName || !location) {
    next("Please Provide All Fields");
  }
  const user = await userModel.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.location = location;
<<<<<<< HEAD
=======

  await user.save();
  const token = user.createJWT();
  res.status(200).json({
    user,
    token,
  });
};
>>>>>>> 3907a04e3d9b602bbb87b7defc49d693bb290a63

  await user.save();
  const token = user.createJWT();
  res.status(200).json({
    user,
    token,
  });
};