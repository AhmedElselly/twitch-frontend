import axios from 'axios';

const url = 'https://api.twitch.tv/helix';

export const getChannel = async name => {
	const res = await axios.get(`${url}/users?login=${name}`, {
		headers: {
			'Authorization': 'Bearer cefablckp83vt2u1w6heb681y8pb71',
			'Client-id': 'jvhzfelho1pyo7jxd90c04htrr1l61'
		}		
	})
	return res;
}