export default function Instructions({instructions}) {
  return (
    <div>
        <h3>Instructions</h3>
        {instructions.result[0].steps.map((i) => {
         return(
           <div key={i.number}>
            <li>{i.step}</li>
           </div>
         );
        })
      }
    </div>
  )
}