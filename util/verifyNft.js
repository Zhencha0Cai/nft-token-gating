

export default async function checkNFT(tokenId) {

	var myHeaders = new Headers();

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const { assets } = await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=0xdDFaa925d9AeDF99c6101B3F0CCd4D2CF560Ff31&asset_contract_address=0xf4910c763ed4e47a585e2d34baa9a4b611ae448c&order_direction=desc&offset=0&limit=20&include_orders=false`, requestOptions)
		.then(response => response.json())
	console.log(assets.map(({ token_id }) => token_id).includes(tokenId))
	return assets.map(({ token_id }) => token_id).includes(tokenId)
}

