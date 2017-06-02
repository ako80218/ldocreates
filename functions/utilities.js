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

	},
	replace: function(str){	
		str = typeof str === "string" && str[0] !== undefined ? str : " ";
		return str.toUpperCase === undefined ? "" : str.replace(str[0], str[0].toUpperCase());
	},
	ucFirst: function(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
	},
	parse: function(arr, str){
		var newStr = str;
		for(var i =0; i< arr.length; i++){
			var rx = new RegExp(arr[i], "g");
			newStr = newStr.replace(rx, " ");
		}
		return newStr;
	},
	splitAndCap: function(str){
		var words = str.split(" ");
		for(var i =0; i< words.length; i++){
			words[i] = this.ucFirst(words[i]);
		}
		return words.join(" ");
	},
	format: function(arr, str){
		var newStr = this.parse(arr, str);
		return this.splitAndCap(newStr);
	},
	formatCategories: function(charArr, catArr){
		var newArr = [];
		for(var i = 0; i< catArr.length; i++){
			var newStr = this.format(charArr, catArr[i]);
			newArr.push(newStr);
		}
		return newArr;

	},
	assembleImages: function(arr, prop, param){
		if(!param && !prop){
			return arr.filter(function(elem){
				return elem["home"] === true;
			});
		}else{
			return arr.filter(function(elem){
				return elem[prop] === param;
			});
		}
	}
}
