// todo: add in doc read js f/n

console.log("Game script loaded");

// https://www.w3schools.com/howto/howto_js_draggable.asp
// https://jqueryui.com/draggable/

$("#gamePiece").draggable(
  {
    containment: "#gameBoard", scroll: true,
    snap: ".gameTargets", snapMode: "inner", 
    snapTolerance: 60
  }
);

 $('.gameTargets').droppable({
    accept: '#gamePiece',
    drop: function() {
        // $( this )
        console.log("Game piece dropped on target!" + $(this).attr('class'));
      }
   
});
