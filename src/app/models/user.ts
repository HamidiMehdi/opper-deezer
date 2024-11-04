import {deserialize} from "cerialize";

export class User {

  @deserialize
  id: number;

  @deserialize
  name: string;

}
