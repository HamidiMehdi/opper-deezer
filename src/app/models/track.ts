import {deserialize} from "cerialize";
import {User} from "./user";

export class Track {

  @deserialize
  id: number;

  @deserialize
  title: string;

  @deserialize
  duration: number;

  @deserialize
  artist: User;
}
