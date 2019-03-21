module.exports = function makeExchange(currency) {
	debugger;
	var H = 50;
		Q = 25;
		D = 10;
		N = 5;
		P = 1;
		dol = {};
	if( currency <= 10000 && currency >=1){
		if ( currency >= H ){
			for (var H_1 = 0; currency/H >= 1; H_1++){
				currency = currency - H;
			}
		dol.H = H_1;
		}
		
		if ( currency >= Q ){
			for (var Q_1 = 0; currency/Q >= 1; Q_1++){
				currency = currency - Q;
			}
		dol.Q = Q_1;
		}
		
		if ( currency >= D ){
			for (var D_1 = 0; currency/D >= 1; D_1++){
				currency = currency - D;
			}
		dol.D = D_1
		}
		
		if ( currency >= N ){
			for (var N_1 = 0; currency/N >= 1; N_1++){
				currency = currency - N;
			}
		dol.N = N_1
		}
		
		if ( currency >= P ){
			for (var P_1 = 0; currency/P >= 1; P_1++){
				currency = currency - P;
			}
		dol.P = P_1
		}
		
		return dol;
	}
	if( currency <= 0 ){
		return dol;
	}
	
	else {
		dol.error = "You are rich, my friend! We don't have so much coins for exchange";
		return dol
	}
		
}
