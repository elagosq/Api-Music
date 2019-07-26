const BASE_API = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

class Api {
    async getArtist() {
        try {
            const query = await fetch(BASE_API);
            const { feed } = await query.json();          
            return feed.entry
        } catch (e) {
            console.error(e);
        }
    }
}

export default new Api();
