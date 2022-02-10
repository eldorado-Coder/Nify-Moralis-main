const web3 = Moralis.web3ByChain("0x13881"); // Mumbai
Moralis.Cloud.define("createNFTMetaData", async (request) => {
  try{
    const Item = Moralis.Object.extend("Item");
    const item = new Item();
    item.set("collection", request.params.collection);
    item.set("name", request.params.name);
    item.set("description", request.params.description);
    item.set("nftFilePath", request.params.ipfslink);
  //item.set("nftFileHash", nftFileHash);
  //item.set("MetaDataFilePath",  nftFileMetaDataFilePath);
  //item.set("MetaDataFileHash",  nftFileMetaDataFileHash);
    item.set("nftId", request.params.nftid);
  //item.set("nftContractAddress", TOKEN_CONTRACT_ADDRESS);
    await item.save();
    return {status: 201}
    }
  catch(error){
  return {status: 400}
  }
});
Moralis.Cloud.define("getNFTMetadata", async (request) => {
    
  const Item = Moralis.Object.extend("Item");
  const query = new Moralis.Query(Item);
  query.equalTo("nftId", request.params.nftid);
  const results = await query.find();
  return {collection: results[0].get("collection"), name: results[0].get("name"), description: results[0].get("description"), ipfslink: results[0].get("nftFilePath") };
});