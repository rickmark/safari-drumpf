var drumpfRegex = /\bTrump\b/;

function make_donald_drumpf(root){
	var n, walk = document.createTreeWalker(root, NodeFilter. SHOW_TEXT, null, false);
  	while(n = walk.nextNode()) {
	  if (n.wholeText.match(drumpfRegex)) {
		  n.replaceWholeText(n.wholeText.replace(drumpfRegex, "Drumpf"));
	  }
  	}
}

make_donald_drumpf(document);