export function ExerciseList(){
    return(

        <div style={{
            border:'4px solid black',
            textAlign: 'center',
            backgroundColor: 'gray',
            padding: '20px',
            margin: '20px',
            textShadow: '1px 1px 0 black',
            fontFamily:'cursive',
            fontSize: '20px',
            display: "grid",
            columnGap: "30px",
            boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, 0.5)'

            
        }}>
            <ol>
                <ul>Agachamento Repeticoes: 10</ul>
                <ul>Flexão de braço Repeticoes: 15</ul>               
                <ul>Remada com halter Repeticoes: 8</ul>            
            </ol>
        </div>
    )




}