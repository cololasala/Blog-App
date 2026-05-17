export const login = (req, res) => {
  const { username, password } = req.body;
  res.json({ username, password });
};

export const register = (req, res) => {};

export const logout = (req, res) => {};
