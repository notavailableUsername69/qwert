// Get the canvas element
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Set canvas width and height to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables to store current position
let drawing = false;

// Set up event listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("touchstart", startDrawing, { passive: false });
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchmove", draw, { passive: false });
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("touchend", endDrawing);

// Start drawing
function startDrawing(e) {
  drawing = true;
  draw(e);
}

// Draw
function draw(e) {
  if (!drawing) return;
 
  const rect = canvas.getBoundingClientRect();
  let x, y;
 
  if (e.type === "mousemove") {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  } else if (e.type === "touchmove") {
    x = e.touches[0].clientX - rect.left;
    y = e.touches[0].clientY - rect.top;
  }
 
  context.lineWidth = 5;
  context.lineCap = "round";
  context.strokeStyle = "#000";
 
  if (e.type === "mousedown" || e.type === "touchstart") {
    context.beginPath();
    context.moveTo(x, y);
  } else if (e.type === "mousemove" || e.type === "touchmove") {
    context.lineTo(x, y);
    context.stroke();
  }
}

// End drawing
function endDrawing() {
  drawing = false;
}

// Clear canvas
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

 

