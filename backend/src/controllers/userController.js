import { findUserByEmail, createUser } from "../models/userModel.js";

// Controller untuk membuat user
export async function createUserController(req, res) {
  try {
    const { email, password } = req.body;
    const findUser = await findUserByEmail(email);

    if (findUser) {
      return res.status(404).json({ message: "User already exists!" });
    }

    const result = await createUser({email, password});
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

// Controller untuk mencari user
export async function findUserController(req, res) {
  try {
    const email = req.body;
    const result = await findUserByEmail(email);

    if (!result) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}
