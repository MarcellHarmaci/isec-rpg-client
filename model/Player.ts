import { Attributes } from "./Attributes";
import { Skills } from "./Skills";

export interface Player {
  id: string;
  name: string;
  background: string;
  level: number;
  health: number;
  inspiration: number;
  willpower: number;
  ratiation: "low" | "medium" | "high";
  attributes: Attributes;
  skills: Skills;
}
