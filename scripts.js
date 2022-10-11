  // JavaScript for TP5


window.onload = function() {
  document.querySelector("#SteakBanner h1").classList.add("tp");
  
  document.querySelector("#SteakBanner h1").onclick = function() {
    
    this.classList.toggle("black");
  }
}
	document.querySelector("#recipeColumns #ingredients").onclick = function() {
		this.classList.toggle("tpShow");
	}
	
	document.querySelector("#recipeColumns #equipment").onclick = function() {
		this.classList.toggle("tpShow");
	}
		
	document.querySelector("#recipeColumns #directions").onclick = function() {
		this.classList.toggle("tpShow");
	}
	
	document.querySelector("#recipeColumns #ingredients ul").innerHTML += "<li>milk powder for advanced flavor!</li>";
    // JavaScript for TP5