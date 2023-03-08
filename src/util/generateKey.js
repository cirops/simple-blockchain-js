import EC from "elliptic";
const ec = new EC.ec("secp256k1");

export const generateKey = () => {
  const key = ec.genKeyPair();
  const publicKey = key.getPublic("hex");
  const privateKey = key.getPrivate("hex");

  return {
    publicKey,
    privateKey,
  };
};

console.log(generateKey());
