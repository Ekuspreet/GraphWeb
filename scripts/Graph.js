let globalIndex = 1;
var graph = [];
var source, destination;
var graphBox = document.querySelector("outerbox");
var isSrc = false;

//graph Functions

function insertNode(graph, src, dest, value) {
  graph.push({ src, dest, value });
}

// display letters on hover.

graphBox.addEventListener("click", (event) => {
  if (!isSrc) {
    if (event.target.value == "") {
      event.target.value = globalIndex;
      source = globalIndex;
      globalIndex++;
    } else {
      source = parseInt(event.target.value);
    }

    isSrc = true;
  } else if (isSrc) {
    if (event.target.value == "") {
      event.target.value = globalIndex;
      destination = globalIndex;
      globalIndex++;
    } else {
      destination = parseInt(event.target.value);
    }

    
     insertNode(
      graph,
      source,
      destination,
      parseInt(prompt(`Enter Value Of Edge From ${source} to ${destination}`))
    );
    isSrc = false;
  }
});
