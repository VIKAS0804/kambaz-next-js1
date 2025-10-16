export default function Lab3() {
  console.log("Hello World!");
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
<LegacyFunctions />
<ArrowFunctions />
{/* @ts-expect-error Server Component import ok */}
<ImpliedReturn />
{/* @ts-expect-error Server Component import ok */}
<TemplateLiterals />
{/* 3.4 Arrays & JSON */}
{/* @ts-expect-error Server Component import ok */}
<SimpleArrays />
{/* @ts-expect-error Server Component import ok */}
<ArrayIndexAndLength />
{/* @ts-expect-error Server Component import ok */}
<AddingAndRemovingToFromArrays />
{/* 3.4 Arrays */}
{/* @ts-expect-error Server Component import ok */}
<ForLoops />
{/* @ts-expect-error Server Component import ok */}
<MapFunction />
{/* @ts-expect-error Server Component import ok */}
<FindFunction />
{/* @ts-expect-error Server Component import ok */}
<FindIndex />
{/* @ts-expect-error Server Component import ok */}
<FilterFunction />
{/* @ts-expect-error Server Component import ok */}
<JsonStringify />
{/* @ts-expect-error Server Component import ok */}
<House />
{/* @ts-expect-error Server Component import ok */}
<Spreader />
{/* 3.4.12 Destructing */}
{/* @ts-expect-error Server Component import ok */}
<Destructing />

{/* 3.4.13 Function Destructing */}
{/* @ts-expect-error Server Component import ok */}
<FunctionDestructing />

{/* 3.4.14 Destructing Imports */}
{/* @ts-expect-error Server Component import ok */}
<DestructingImports />
{/* 3.5 Dynamic Styling */}
{/* @ts-expect-error Server Component import ok */}
<Classes />
{/* @ts-expect-error Server Component import ok */}
<Styles />
{/* 3.6 Parameterizing Components (props) */}
{/* @ts-expect-error Server Component import ok */}
<Add a={3} b={4} />

{/* 3.6.1 Child Components */}
<h4>Square of 4</h4>
{/* @ts-expect-error Server Component import ok */}
<Square>4</Square>
<hr />
{/* @ts-expect-error Server Component import ok */}
<Highlight>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum,
  saepe totam vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi
  maiores, provident voluptates.
</Highlight>

{/* 3.6.3 Path parameters */}
{/* @ts-expect-error Server Component import ok */}
<PathParameters />
{/* 3.7 Rendering a Data Structure */}
{/* @ts-expect-error Server Component import ok */}
<TodoList />

    </div>
  );
}


// Imports at the bottom to keep the file tidy (Next.js can handle either order)
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import Spreader from "./Spreader";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import ForLoops from "./ForLoops";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import TodoList from "./todos/TodoList";
