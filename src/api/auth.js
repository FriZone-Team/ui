import httpClient from "./client";

const login = async (data) => {
  return httpClient.post("auth/login", data);
};

export const loginByProvider = async (providerId, uid, stsTokenManager) => {
  const res = await login({ providerId, uid, stsTokenManager });
  console.log(res);
};
