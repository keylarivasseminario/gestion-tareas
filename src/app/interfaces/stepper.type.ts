export interface ITask {
  title: string;
  status: string;
  description: string;
  expirationDate: string | Date;
  priority: string;
  tags: Array<string>;
}
