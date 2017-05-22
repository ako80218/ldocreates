module.exports={
	//returns filtered list of objects 
	filter: function(list, prop, val){
		if (list.constructor && list.constructor === Array){
			var filteredList = list.filter(function(el){
				return el[prop] === val;

			});
			return filteredList;
		}else{
			return;
		}

	}	
}