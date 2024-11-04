import {deserialize, deserializeAs} from "cerialize";
import {User} from "./user";

export class Playlist {

  @deserialize
  id: number;

  @deserialize
  title: string;

  @deserialize
  duration: number;

  @deserializeAs('picture_medium')
  imageUrl: string;

  @deserialize
  creator: User;
}
