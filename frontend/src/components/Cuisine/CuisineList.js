
import CuisineListItem from "./CuisineListItem";

export default function CuisineList({ recipe }) {
  
  return (
    <section>
      <h1>List</h1>
      {recipe.result.map((r) => {
        return <CuisineListItem key={r.id} singleRecipe={r} />;
      })}
      
    </section>
  );
}