var value;
let globalIndex = 1;
var graph = [];
var edges = [];
var source, destination;
var graphBox = document.querySelector("outerbox");
var isSrc = false;
var srcelem;
var dstelem;

//graph Functions

function insertNode(graph, src, dest, value) {
  graph.push({ src, dest, value });
}

graphBox.addEventListener("click", (event) => {
  
    if (!isSrc) {
      srcelem = event.target;
      if (event.target.value == "") {
        event.target.value = globalIndex;
        source = globalIndex;
        globalIndex++;
      } else {
        source = parseInt(event.target.value);
      }

      isSrc = true;
    } else if (isSrc) {
      dstelem = event.target;

      if (event.target.value == "") {
        event.target.value = globalIndex;
        destination = globalIndex;
        globalIndex++;
      } else {
        destination = parseInt(event.target.value);
      }
      value = parseInt(
        prompt(`Enter Value Of Edge From ${source} to ${destination}`)
      );
      insertNode(graph, source, destination, value);

      let lline = new LeaderLine(srcelem, dstelem, {
        color: "red",
        path: "straight",
        size: '1',
        middleLabel: LeaderLine.captionLabel(`${value}`, {
          color: "black",
          fontFamily: "poppins",
        }),
      });

      edges.push(lline);
      const index = graph.findIndex(
        (obj) => obj.src === destination && obj.dest === source
      );
      if (index != -1) {
        edges[index].path = "arc";
        lline.path = "arc";
      }

      isSrc = false;
    }
  
});
