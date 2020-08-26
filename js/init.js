seajs.config({
	alias:{
			'm':'main'
		}
});
seajs.use('m',function (mod){
	mod.main();
});