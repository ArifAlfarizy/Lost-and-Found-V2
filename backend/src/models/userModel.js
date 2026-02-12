import db from "../configs/db.js";

// DB Query untuk mencari user
export async function findUserByEmail(email) {
  const user = await db.query("SELECT * FROM users where email = $1", [email]);
  return user.rows[0];
}

// DB Query untuk membuat user
export async function createUser({email, password}) {
  const createUser = await db.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
    [email, password],
  );
  return createUser.rows[0];
}
