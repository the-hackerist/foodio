import User from "../models/UserModel.js";

export const updateProfile = async (req, res, next) => {
  const { _id, ...newProfile } = req.body;

  const update = newProfile;

  try {
    const user = await User.findByIdAndUpdate({ _id }, update, {
      new: true,
      runValidators: true,
    });

    if (!user) next({ statusCode: 404, message: "User does not exist!" });

    res.status(200).json(user);

    // res.status(200).json({
    //   success: "OK",
    //   statusCode: 200,
    //   message: "User successfully updated!",
    //   data: user,
    // });
  } catch (error) {
    next(error);
  }
};
