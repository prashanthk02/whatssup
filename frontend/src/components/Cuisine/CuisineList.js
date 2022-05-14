
import CuisineListItem from "./CuisineListItem";

export default function CuisineList({ recipe }) {

  return (
    <section>
      <h1>List</h1>
      {recipe.results.map((r) => {
        return <CuisineListItem key={r.id} singleRecipe={r} />;
      })}
      
    </section>
  );
}