const main=require("accelon2017");
const corpora=window.accelon2017&&window.accelon2017.corpora;
console.log(window.accelon2017)
if (!corpora) {
	const rootele=document.getElementById("root");
	rootele.innerHTML="<h1>&nbsp;:( System failure</h1><br>&nbsp;Missing window.corpora.";
	rootele.style="margin:0px;background-color:blue;color:white;height:100%"
} else {
	main({corpora});	
}
