import httpClient from "./client";

const signIn = async (data) => {
  return httpClient.post("auth/signin", data);
};

export const signInByProvider = async (providerId, uid, stsTokenManager) => {
  const res = await signIn({ providerId, uid, stsTokenManager });
  console.log(res);
};
