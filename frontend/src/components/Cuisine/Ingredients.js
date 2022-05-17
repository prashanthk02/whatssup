export default function Ingredients({ingredients}) {
  return (
    <div>
        <h3>Ingredients</h3>
        {ingredients.result.ingredients.map((item, index) => {
         return(
          <div key={index}>
             <li>
              {item.name} - {item.amount.metric.value} {item.amount.metric.unit}
            </li>
          </div>
            );
          })
        }
    </div>
  )
}