const get = (url: string) => {
  const requestOption = {
    method: "GET",
  };
  return fetch(url, requestOption);
};

const post = async (url: string, body: Object) => {
  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  try {
    await fetch(url, requestOption);
  } catch (error) {
    console.error("Error:", error);
  }
};

const put = async (url: string, body: Object) => {
  const requestOption = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  try {
    await fetch(url, requestOption);
  } catch (error) {
    console.error("Error:", error);
  }
};

const _delete = (url: string) => {
  const requestOption = {
    method: "DELETE",
  };
  return fetch(url, requestOption);
};

export const FetchData = {
  get,
  post,
  put,
  delete: _delete,
};
