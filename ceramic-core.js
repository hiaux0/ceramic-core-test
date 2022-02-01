import { Ceramic } from '@ceramicnetwork/core'
import * as IPFS from 'ipfs-core'
import dagJose from 'dag-jose'
import { convert } from 'blockcodec-to-ipld-format'
import KeyDidResolver from 'key-did-resolver'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { DID } from 'dids'


(async () => {
  const dagJoseFormat = convert(dagJose)
  const ipfs = await IPFS.create({ ipld: { formats: [dagJoseFormat] } })
  const ceramic = await Ceramic.create(ipfs, {})
  const resolver = { ...KeyDidResolver.getResolver(),
                     ...ThreeIdResolver.getResolver(ceramic) }
  const did = new DID({ resolver })
  ceramic.did = did
})()
