export default interface Client {
  _id?: string;
  nom: string;
  prenom: string;
  password: string;
  num_tel: string;
  adresse: string;
  description?: string;
}
