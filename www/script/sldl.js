//--All Rights Reserved.Copyright (C) Miyake_kobo.--

var n;
var jikan = 15000;
var jpg = ".jpg";
var i;
var photo;
var tid;
var t;
var fr = 0;
var d;
var myurl;

var ihayasa = 2;
var nhayasa = 5;
hayasa = new Array(
"10000","7000","5000","3000","2000"
);
hayasan = new Array(
"10ïbä‘äu","7ïbä‘äu","5ïbä‘äu","3ïbä‘äu","2ïbä‘äu"
);

function main(){
	hairetu();
	i = Math.floor(Math.random() * n);
	main2();
}

function hairetu(){
	photo = new Array();
	t = 0;
	while(t<n){
		if(t<10){
			photo[t] = "00" + t;
		}
		else{
			photo[t] = "0" + t;
		}
		t++;
	}
}

function main2(){
	if(document.myform.text2){
		document.myform.text2.value = hayasan[ihayasa];
	}
	fimg();
	tid = setInterval("fimg()",hayasa[ihayasa]);
}

function fimg(){
	if(i<(n-1)){
		i = i + 1;
	}else{
		i = 0;
	}
	hyouji();
}

function mae(){
	clearInterval(tid);
	i = i - 2;
	if(i<-1){
		i = n - 2;
	}
	main2();
}

function teisi(){
	if(fr == 0){
		clearInterval(tid);
		fr = 1;
	}
	else{
		fr = 0;
		tugi();
	}
}

function tugi(){
	clearInterval(tid);
	main2();
}

function tobu(){
	clearInterval(tid);
	i = Math.floor(Math.random() * n);
	main2();
}

function hyouji(){
	document.myimg.src = photo[i] + jpg;
	if(document.myform.text1){
		document.myform.text1.value = d + "ÅF" + n + "ñáíÜ" + (i+1) + "ñáñ⁄";
	}
}

function maehayasa(){
	clearInterval(tid);
	i = i - 1;
	ihayasa = ihayasa - 1;
	if(ihayasa<0){
		ihayasa = 0;
	}
	fr = 0;
	main2();
}

function tugihayasa(){
	clearInterval(tid);
	i = i - 1;
	if(ihayasa<(nhayasa-1)){
		ihayasa = ihayasa + 1;
	}else{
		ihayasa = nhayasa - 1;
	}
	fr = 0;
	main2();
}

function mado(){
	myurl = photo[i] + jpg;
	window.open(myurl,photo[i],"");
}
