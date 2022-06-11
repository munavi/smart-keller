export enum CategoryType {
    PASTA ="Nudeln",
    CEREAL ="Getreide",
    OIL= "Öl",
    CANNED_FOOD = "Konserven",
    MILK_PRODUCT = "Milchprodukte",
    MEAT_PRODUCT = "Fleischprodukte",
    FRUIT = "Obst",
    VEGETABLES = "Gemüse",
    MEDICINES = "Medikamente",
    FLOUR = "Mehl",
    EGGS = "Eier"
}

export const CategoryTypeList: {
    key: string;
    value: string;
}[] = Object.entries(CategoryType)
    .map(([key, value]) => ({ key, value }));