class Rest {
	constructor() {
		this._url = 'config/server.php?request=';
		this._property = {};
	}

	isEmpty(obj) {
	    for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	            return false;
	    }
    return true;
	}

	get options() {
		return new Request(this._url + this._property.action, this._property);
	}


	async _request() {
		
		try {
			const response = await fetch(this.options);
			return await response.json();
			
		} catch (e) {
			console.warn('Error:', e.message);
		}

	}
	
	render(action, method = 'GET', data = null) {
		
		const header = {};
		let body;
		
		if(data) {
			header['Content-Type'] = 'aplication/json';
			body = data;
		}
		
		this._property = {
			action: action,
			method: method,
			body: body,
			header: header
		}
		
		return this._request();
		
		
	}
}

const request = new Rest()