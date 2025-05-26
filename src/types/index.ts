export interface Character {
  id: number;
  name: string;
  image?: string;
  description: string;
}

export interface Fruit {
  id: number;
  name: string;
  type: string;
  description: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
