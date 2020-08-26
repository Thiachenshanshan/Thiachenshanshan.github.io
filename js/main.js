'use strict'
function setStyle(obj,json){
	for(var name in json){
		obj.style[name] = json[name];
	};
};
function findInArr(arr,val){
	for(var i=0;i<arr.length;i++){
		if(arr[i] == val){
			return true;
		};
	};
	return false;
};
function getByClass(obj,sClass){
	var aEle = obj.getElementsByTagName('*');
	var aResult = [];
	for(var i=0;i<aEle.length;i++){
		var aClass = aEle[i].className.split(' ');
		if(findInArr(aClass,sClass)){
			aResult.push(aEle[i]);
		};
	};
	return aResult;
};
function $(id){
	return document.getElementById(id);
};
window.onload = window.onresize = function (){
	$('load').style.display = 'none';
	$('wrap').style.display = 'block';
	var oPart1 = $('part1');
	var oPart2 = $('part2');
	var oPart3 = $('part3');
	var oPart4 = $('part4');
	var oPart5 = $('part5');
	var screenW = document.documentElement.clientWidth;
	var screenH = document.documentElement.clientHeight;
	
	var w = screenW/5;
	var h = screenH;
	setStyle(oPart1,{width:w+'px',height:h+'px',lineHeight:h+'px',left:-w+'px',top:0});
	setStyle(oPart2,{width:w+'px',height:h+'px',lineHeight:h+'px',left:w+'px',top:h+'px'});
	setStyle(oPart3,{width:w+'px',height:h+'px',lineHeight:h+'px',left:w*2+'px',top:-h+'px'});
	setStyle(oPart4,{width:w+'px',height:h+'px',lineHeight:h+'px',left:w*3+'px',top:h+'px'});
	setStyle(oPart5,{width:w+'px',height:h+'px',lineHeight:h+'px',left:w*5+'px',top:0});
	doMove(oPart1,{left:0});
	doMove(oPart2,{top:0});
	doMove(oPart3,{top:0});
	doMove(oPart4,{top:0});
	doMove(oPart5,{left:w*4});
	var aPart = getByClass(document,'part');
	var aAlpha = getByClass(document,'alphaPage');
	var aImg = getByClass(document,'title');
	for(var i=0;i<aPart.length;i++){
		(function (index){
			aPart[i].onmouseover = function (){
				startMove(aAlpha[index],{width:w*2,height:h*2,opacity:0,left:-w/2,top:-h/2});
			};
			aPart[i].onmouseout = function (){
				startMove(aAlpha[index],{width:w,height:h,opacity:1,left:0,top:0});
			};
			aPart[i].onclick = function (){
				for(var i=0;i<aPart.length;i++){
					startMove(aPart[i],{width:w,height:h});
					aPart[i].style.zIndex = 1;
				};
				this.style.zIndex = 2;
				startMove(this,{width:screenW,height:screenH,left:0,top:0,zIndex:2});
				aAlpha[index].style.display = 'none';
				aImg[index].style.display = 'none';
			};
		})(i);
	};
};