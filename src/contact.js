import { QUICKNODE_HTTP_URL } from './env.js';

const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(QUICKNODE_HTTP_URL);

  const code = await provider.getCode(
    '0xf6CEEc7192Ba0895fDb90343aAef82F82F37D729',
    'latest'
  );

  console.log(code);
};

main();
