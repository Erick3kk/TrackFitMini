export interface MotivacionalProps {
  titulo:string
  mensagem: string;
  altor: string;

}
export function Motivacional(props:MotivacionalProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: "1rem" }}>
       <h2>{props.titulo}</h2>
      <p>mensagem motivacional: {props.mensagem} min</p>
      <p>autor: {props.altor}</p>
    </div>
  );
}