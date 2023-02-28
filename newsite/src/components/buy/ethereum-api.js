export function addNetwork(ethereum) {
  ethereum
    .request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0xA4BA",
          chainName: "Arbitrum Nova",
          nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: ["https://nova.arbitrum.io/rpc/"],
          blockExplorerUrls: ["https://nova.arbiscan.io"],
        },
      ],
    })
    .catch((error) => {
      console.log(error);
    });
}

export function addNovaDoge(ethereum) {
  ethereum
    .request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: "0x24076715552AC1bc3dE4f7cB10d1B03f77A30c85",
          symbol: "NDoge",
          decimals: 18,
          image: "https://novadoge.net/images/favicon.ico",
        },
      },
    })
    .then((success) => {
      if (success) {
        console.log("Fidan successfully added to wallet!");
      } else {
        throw new Error("Something went wrong.");
      }
    })
    .catch(console.error);
}
