export type Character = {
    id: string;
    name: string;
    image: string;
    species: string;
    gender: string;
    occupation: string;
    description: string;
    location: string;
};

export const GetCharacterById = function(characters: Character[], id: string | null): Character | undefined {
    if (characters.length && id?.length) {
        return characters.find((el) => el.id == id);
    }
    return undefined;
}

