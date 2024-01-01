1. Faced some challenges while implementing whiteboard.

- Don't know about how to implement whiteboard, so search how to create whiteboard and didn't bother about implementation and logic, but
  got to know that canvas of HTML5 will be used in it.
- So referred to official docs and Other pages to learn about Canvas (HTML5).
- Then added canvas and also drawn some shapes.
- Spent lot of time on implementing draw feature using pen on whiteboard.
- The position of drawn thing doesn't match with mouse. Later find that I need to subtract e.target.offsetTop from e.clientY (not e.screenY).
- First I was doing (e.screenY - e.target.offsetTop), which is wrong (know diff between e.clientY and e.screenY).
- Because context.moveTo(x, y); expects x and y relative to canvas position. So currentPosition(e.clientX) - canvasPosition(e.target.offsetLeft).
- Later got to know there is also e.offsetX and e.offsetY.. LOL!

2. Another challenge I faced is while drawing, the drawn image is much bigger than the mouse I drag and draw.

- Let say I draw context.fillRect(x, y, width, height); all co-ordinates are ok, still mouse draw bigger size image.
- The reason is the height and width set by className="h-full w-full" is not actual height/width of canvas. We need to set it using attributes.
- So, in useEffect, I had to explicity set height width.
- canvas.width = canvas.parentElement.clientWidth; canvas.height = canvas.parentElement.clientHeight;

3. If I increase penEraserSize, so If I update lineWidth in 1st useEffect, hence need to add penEraserSize as dependency.

- Since penEraserSize is added as dependency, whole canvas is loaded again and hence everything is erased.
- So I created another useEffect with penEraserSize dependency.

4. How pen is implemented?

- Event listener like 'mousedown', 'mousemove' and 'mouseup'.
- On mousemove, Draw line from [x,y] to [e.offsetX, e.offsetY].
- Also context.lineCap = "round", helpful for larger lineWidth.

5. How eraser is implemented?

-

6. How pen-erase-size and color is implemented?

- input type="color" and type="range"

7. Why thinking to use redux?

- Whiteboard can have 2 component, canvas and controls. So both is not need to render again if any 1 is changed.
- Slowly slowly many components will be there, and need to pass props/state much more, so better to use redux for state management.




## RESOURCES

React-toolkit - https://www.youtube.com/watch?v=1i04-A7kfFI