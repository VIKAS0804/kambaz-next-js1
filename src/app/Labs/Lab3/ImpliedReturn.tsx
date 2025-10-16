export default function ImpliedReturn() {
  // Arrow function with implied return (no curly braces)
  const multiply = (a: number, b: number) => a * b;

  // Call the function
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);

  // Render output
  return (
    <div id="wd-implied-return">
      <h4>Implied Return</h4>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)}
      <hr />
    </div>
  );
}
