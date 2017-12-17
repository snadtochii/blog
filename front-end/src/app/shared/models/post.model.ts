import { CategoryModel } from './';

export class PostModel {
    id: number;
    title: string;
    category: CategoryModel;
    preview: string;
    body: string;
}
