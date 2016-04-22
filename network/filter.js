//FilterSet class (one instance for each set of elements to be filtered). Constructor requires
//number of filters that will be within set (a) and number of elements being filtered (b).
FilterSet = function(a,b) {
	
	this.num_filters = a; //number of filters within set
	this.num_elements = b; //number of elements being filtered
	this.actives = []; //array to keep track of intersection of filtered regions
	this.filters = {}; //set of filters
	
	//fill in this.actives
	for (i=0; i<this.num_elements; i++) {
		this.actives.push(this.num_filters);
	}
	
	//add a new filter to set of filters
	//a,b,c are the inputs for filter Class
	this.addFilter = function(a,b,c,slider_id) {
		this.filters[slider_id] = new Filter(a,b,c);
	}
	
	//calls filter() method on the appropriate filter
	this.filterCall = function(min,max,slider_id) {
		this.filters[slider_id].filter(min,max,this.actives);
	}
	
	//returns the keys of the elements within intersection of filtered regions
	this.returnIntersection = function() {
		var intersection = [];
		var num_filters = this.num_filters;
		this.actives.forEach(function(d,i) {
			if (d == num_filters) intersection.push(i);
		});
		return intersection;
	}
};


//Filter class (one instance for each filter). Constructor requires minimum of filter (a),
//maximum of filter (b), and an array (c). Each element in the array (c) is a pair of values.
//The first value in the pair is the value of the metric that is getting filtered. The second
//value in the pair is the key. The array must be sorted by the first value.
Filter = function(a,b,c) {
	
	this.min = a;  //current min of filter
	this.max = b; //current max of filter
	this.exclude = false; //not of the filter
	
	this.over = []; //region past max of filter
	this.under = []; //region past min of filter
	this.incl = c; //region inside of max and min
	
	//update under, included, and over regions on slider change
	this.filter = function(min,max,actives) {
		
		var length; //length of array to iterate over
		
		//LHMR - remove from beginning of included region (shift)
		//and add to end of of under region (push) until beginning
		//of included region is greater than the bound
		if (this.min < min) {
			length = this.incl.length;
			for (i=0; i<length; i++) {							
/* 							if (this.incl[i][0] >= min) {
					while (this.incl[i][0] == min) {
						this.lower.push(this.incl[i][0].shift());
						i++;
					}
					break;
				} */
				if (this.incl[0][0] >= min) break;						
				this.under.push(this.incl.shift());
				actives[this.under[this.under.length-1][1]]--;
			}
			this.min = min;
		}
		
		//RHML - remove from end of included region (pop)
		//and add to end of over region (push) until end of
		//included region is less than the bound
		else if (this.max > max) {
			length = this.incl.length;
			for (i=length; i>0; i--) {
				if (this.incl[this.incl.length-1][0] <= max) break;
				this.over.push(this.incl.pop());
				actives[this.over[this.over.length-1][1]]--;
			}						
			this.max = max;
		}
		
		//LHML - add to beginning of included region (unshift)
		//and remove from end of under region (pop) until 
		//beginning of included region is less than bound
		else if (this.min > min) {
			length = this.under.length;
			for (i=0; i<length; i++) {
				if (this.under[this.under.length-1][0] < min) break;
				this.incl.unshift(this.under.pop());
				actives[this.incl[0][1]]++;
			}						
			this.min = min;
		}
		
		//RHMR - add to end of included region (push)
		//and remove from end of over region (pop) until
		//end of included region is greater than bound
		else if (this.max < max) {
			length = this.over.length;
			for (i=0; i<length; i++) {
				if (this.over[this.over.length-1][0] > max) break;
				this.incl.push(this.over.pop());
				actives[this.incl[this.incl.length-1][1]]++;
			}						
			this.max = max;
		}
	}
	
	//return appropriate region
	this.getRegion = function() {
		
		//return included region
		if (!this.exclude) return this.incl;
		
		//return the excluded region (under + over regions)
		else if (this.exlude) {
			var union = [];
			this.under.forEach(function(d) {
				union.push(d);
			});
			this.over.forEach(function(d) {
				union.push(d);
			});
		}
	}
};