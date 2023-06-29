export const addUserToLC = (data, username) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existUser = users.findIndex((user) => user.username === username)
  
  if (!localStorage.getItem("users")) {
    localStorage.setItem(
      "users",
      JSON.stringify([
        {
          avatar: data.avatar_url,
          username: data.login,
          name: data.name,
          url: data.html_url,
        },
      ])
    );
    return;
  }

  if (existUser >= 0) {
    users.splice(existUser, 1)
  }

  localStorage.setItem(
    "users",
    JSON.stringify([
      {
        avatar: data.avatar_url,
        username: data.login,
        name: data.name,
        url: data.html_url,
      },
      ...users
    ])
  );
};