import { IndexerGrpcExplorerStream } from '@injectivelabs/sdk-ts'
import { getNetworkEndpoints, Network } from '@injectivelabs/networks'

const endpoints = getNetworkEndpoints(Network.Testnet)
const indexerGrpcExplorerStream = new IndexerGrpcExplorerStream(
  endpoints.indexer,
)

const streamFn = indexerGrpcExplorerStream.blocksWithTxs.bind(
  indexerGrpcExplorerStream,
)

const callback = (blocksWithTransactions) => {
  console.log(blocksWithTransactions)
}

const streamFnArgs = {
  callback,
}

streamFn(streamFnArgs)