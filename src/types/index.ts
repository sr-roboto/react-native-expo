export interface Character {
  id: number;
  name: string;
  bounty: string;
  job: string;
  filename: string;
}

export interface Fruit {
  id: number;
  roman_name: string;
  type: string;
  filename: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
