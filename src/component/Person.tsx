import {FC,useState,ChangeEvent} from 'react';

export enum Town{
    NewYork="New York",
    Jakarta="Jakarta",
    Bangkok="Bangkok"

}
interface Props {
    name: string;
    age: number;
    email: string;
    town: Town;
}
/*function identity<Type>(arg: Type): Type {
  return arg;
}  */
export const Person: FC<Props> = (props: Props) =>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [country,setCountry] = useState<string | null>("")

    type NameType = 13 | "Abdul"
    //type biasanya dipake buat hal simpel meskipun kebanyakan pake enum
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const name: NameType = "Abdul"
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setCountry(event.target.value)
    }
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
      <input placeholder='Negara?' onChange={handleChange}/>
      {country}
    </div>
  );
}
