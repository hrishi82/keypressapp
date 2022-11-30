import "../keypress.css"

export const Instructions = ({content}) =>{
    return (
        <div className="instructions-wrapper">
            {content.map(el=>{
                return <p key={el.id}>{`Click ${el.name} or press Shift+S to toggle ${el.name}`}</p>
            })}
        </div>
    )
}
