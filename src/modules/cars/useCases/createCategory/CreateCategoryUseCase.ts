import { ICategoriesRepository } from "../../reposirories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }


    execute({ name, description }: IRequest): void {

        const categoriesAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoriesAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase }