export default interface Ouvrier {
  _id?: string;
  nom: string;
  prenom: string;
  password: string;
  num_cin?: string;
  num_tel: string;
  adresse: string;
  profession: string;
  coverPath?: string;
  avis?: number;
  description?: string;
  reclamation?: string;
}
