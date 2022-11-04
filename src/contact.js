const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://silent-misty-field.ethereum-goerli.discover.quiknode.pro/07a2f41a3e6d9a0f2a29063df825f11fef717021/'
  );

  const code = await provider.getCode(
    '0xf6CEEc7192Ba0895fDb90343aAef82F82F37D729',
    'latest'
  );

  console.log(code);
};

main();
