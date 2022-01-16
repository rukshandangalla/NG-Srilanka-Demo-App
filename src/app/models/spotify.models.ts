export interface ItemIcon {
    url: string;
    width: number;
    height: number;
}

export interface CategoryItem {
    id: string;
    name: string;
    href: string;
    icons: ItemIcon[];
}

export interface PlaylistsItem {
    id: string;
    name: string;
    href: string;
    images: ItemIcon[];
}

export interface Categories {
    href?: string;
    items?: CategoryItem[];
    limit?: number;
    next?: string;
    offset?: number,
    previous?: string;
    total?: number;
}

export interface Playlists {
    href?: string;
    items?: PlaylistsItem[];
    limit?: number;
    next?: string;
    offset?: number,
    previous?: string;
    total?: number;
}

export interface CategoriesReponse {
    categories?: Categories;
}

export interface PlaylistsReponse {
    playlists?: Playlists;
}