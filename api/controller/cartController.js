import User from "../models/UserModel.js";

export const getCart = async (req, res, next) => {
  const { _id } = req.body;

  try {
    const user = await User.findOne({ _id });

    if (!user) next({ statusCode: 404, message: "User does not exist!" });

    const { password, access_level, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const updateCart = async (req, res, next) => {
  const { _id, ...cart } = req.body;

  const update = { cart: cart.cartList };

  try {
    const userCart = await User.findOneAndUpdate({ _id }, update, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(userCart.cart);
  } catch (error) {
    next(error);
  }
};
