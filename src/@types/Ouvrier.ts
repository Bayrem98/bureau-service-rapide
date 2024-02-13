export default interface Ouvrier {
  _id?: string;
  nom: string;
  prenom: string;
  password: string;
  num_cin?: number;
  num_tel: string;
  adresse: string;
  profession: string;
  coverPath?: string;
}
