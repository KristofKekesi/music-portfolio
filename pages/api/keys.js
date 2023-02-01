import getKeys from "@/functions/api/keys";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function handler(req, res) {
	const {
		query: {from, till},
		method,
	} = req;

	res.status(200).json(
		getKeys({from: from, till: till})
	);
}
