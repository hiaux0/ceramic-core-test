import Ceramic from '@ceramicnetwork/core'
import IPFS from 'ipfs-core'
import dagJose from 'dag-jose'
import { convert } from 'blockcodec-to-ipld-format'
import KeyDidResolver from 'key-did-resolver'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { DID } from 'dids'


(async () => {
  const dagJoseFormat = convert(dagJose)
  const ipfs = await Ipfs.create({ ipld: { formats: [dagJoseFormat] } })
  const resolver = { ...KeyDidResolver.getResolver(),
                     ...ThreeIdResolver.getResolver(ceramic) }
  const did = new DID({ resolver })
  ceramic.did = did
})()
