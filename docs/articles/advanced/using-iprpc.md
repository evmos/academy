---
sidebar_position: 11
---

# Using Evmos ipRPC

## Overview  📋

In order to provide decentralized, reliable and public RPC to all developers in the ecosystem, Evmos uses [Lava](https://www.lavanet.xyz/?utm_source=using-evmos-iprpc&utm_medium=evmos-academy&utm_campaign=evmos-iprpc) to serve RPC to its developer community. Lava aggregates and routes RPC requests to a peer-to-peer network of top-performing node providers, with built-in fraud detection, conflict resolution, and quality of service guarantees for all requests. All relays are conducted securely with no man-in-the-middle. For more details on Lava's protocol, take a look at [the Lava litepaper](https://litepaper.lavanet.xyz/?utm_source=using-evmos-iprpc&utm_medium=evmos-academy&utm_campaign=evmos-iprpc).

Lava ipRPC aggregates RPC providers and provides a unified endpoint for Evmos's entire ecosystem. Regardless of whether you're using `gRPC`, `REST`, `JSON-RPC`, `TendermintRPC`, or `Web-gRPC`, you can query Evmos or post transactions. You can also use websockets to establish a continuous connection instead of conducting a discrete handshake for each relay.


## Endpoints 🔗

A complete list of endpoints available are available [here](https://docs.evmos.org/develop/api/networks). For ipRPC, please attend only to addresses on the list which have `Lava Network` as a maintainer. A list is provided below for your convenience, as well!

### Mainnet 🌐

- **JSON-RPC** - `https://evmos.lava.build`
- **JSON-RPC Websocket** - `wss://evmos.lava.build/websocket`
- **REST** - `https://rest.evmos.lava.build`
- **Tendermint-RPC** - `https://tm.evmos.lava.build`
- **Tendermint-RPC Websocket** - `wss://tm.evmos.lava.build/websocket`
- **gRPC** - `grpc.evmos.lava.build:443`
- **Web-gRPC** - `https://grpc.evmos.lava.build`  

### Testnet 🧪

- **JSON-RPC** - `https://evmos-testnet.lava.build`
- **JSON-RPC WSS** - `wss://evmos-testnet.lava.build/websocket`
- **REST** - `https://rest.evmos-testnet.lava.build`
- **Tendermint-RPC** - `https://tm.evmos-testnet.lava.build`
- **Tendermint-RPC WSS** - `wss://tm.evmos-testnet.lava.build/websocket`
- **gRPC** - `grpc.evmos-testnet.lava.build:443`
- **Web-gRPC** - `https://grpc.evmos-testnet.lava.build`

## Setting your `evmosd` to use ipRPC by default ⚡

You can set your `evmosd` installation to use ipRPC for all calls and requests. To do so, you need to configure your default node to use the Tendermint-RPC URL for your respective network.

For `mainnet` use:
```bash
./evmosd config node https://tm.evmos.lava.build:443
```

For `testnet` use:
```bash
./evmosd config node https://tm.evmos-testnet.lava.build:443
```

To ensure that your `evmosd` is correctly setup run the following:
```bash
./evmosd status 
```

If you get a readout like the following, you're properly configured!

```
{"NodeInfo":{"protocol_version":{"p2p":"8","block":"11","app":"0"},"id":"46f6073576809bfff4f6d4f3afa2482cdc46fd4c","listen_addr":"65.109.92.240:656","network":"evmos_9001-2","version":"0.37.2","channels":"40202122233038606100","moniker":"STAVR","other":{"tx_index":"on","rpc_address":"tcp://127.0.0.1:657"}},"SyncInfo":{"latest_block_hash":"6C24441B02211424FC90F775C77F608CFB1467312012DA689FCCBB686431D8EF","latest_app_hash":"4155ABF2DAD78A96592EE6803D27D8AEF9C9BC3752A4AF4AE0361EFEC75DA450","latest_block_height":"16184253","latest_block_time":"2023-09-29T19:49:40.836168397Z","earliest_block_hash":"E6596EBE55CD8124E489FE8D844476B1B54AA9266C69993A65E42E3216735863","earliest_app_hash":"C8F8F714159B0F5F3F17691C6630C15E473C59EDD191D9212683DB5C5945CF9A","earliest_block_height":"16053048","earliest_block_time":"2023-09-23T01:29:18.519220034Z","catching_up":false},"ValidatorInfo":{"Address":"C0037EDF5519BEA3843BB2CBE25B890888390E71","PubKey":{"type":"tendermint/PubKeyEd25519","value":"3bGOvC7uiGuwcT/AlhDbD+zSE7/4ULy+2RxZ/drEwyU="},"VotingPower":"0"}}
```

Now, all `evmosd` commands which communicate with the blockchain will be carried out securely and efficiently over Lava ipRPC.


## Test Commands 🖥️

You can send requests to each endpoint directly from the command line without intervention from `evmosd`. This can be done with the use of different tools such as `curl` for HTTP-responsive protocols, `wscat` for web sockets, and `grpcurl` for gRPC. You can also use any of the endpoints programmatically. Some examples are below:


### 🟢 REST
Send get requests to the appropriate cosmos endpoints!
```bash
curl -X GET -H "Content-Type: application/json" https://rest.evmos.lava.build/cosmos/base/tendermint/v1beta1/blocks/latest
curl -X GET -H "Content-Type: application/json" https://rest.evmos-testnet.lava.build/cosmos/base/tendermint/v1beta1/blocks/latest
```

### 🟢 Tendermint
Send post requests to the Tendermint-RPC endpoint!
```bash
curl -X POST -H "Content-Type: application/json" https://tm.evmos.lava.build --data '{"jsonrpc": "2.0", "id": 1, "method": "status", "params": []}'
curl -X POST -H "Content-Type: application/json" https://tm.evmos-testnet.lava.build --data '{"jsonrpc": "2.0", "id": 1, "method": "status", "params": []}'
```

### 🟢 Tendermint/Websocket
Connect using websockets over Tendermint-RPC.
```bash
wscat -c wss://tm.evmos.lava.build/websocket -x '{"jsonrpc": "2.0", "id": 1, "method": "status", "params": []}'
wscat -c wss://tm.evmos-testnet.lava.build/websocket -x '{"jsonrpc": "2.0", "id": 1, "method": "status", "params": []}'
```

### 🟢 JSON-RPC
Send EVM-style request to JSON-RPC endpoints!
```bash
curl -X POST -H "Content-Type: application/json" https://evmos.lava.build --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
curl -X POST -H "Content-Type: application/json" https://evmos-testnet.lava.build --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

### 🟢 JSON-RPC/Websocket
Connect using websockets over JSON-RPC.
```bash
wscat -c wss://evmos.lava.build/websocket -x '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}'
wscat -c wss://evmos-testnet.lava.build/websocket -x '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}'
```

### 🟢 gRPC
Use gRPC calls directly with the Cosmos API.
```bash
grpcurl grpc.evmos.lava.build:443 cosmos.base.tendermint.v1beta1.Service/GetLatestBlock
grpcurl grpc.evmos-testnet.lava.build:443 cosmos.base.tendermint.v1beta1.Service/GetLatestBlock

```

✅ The rest is up to you! The possibilities are literally endless!