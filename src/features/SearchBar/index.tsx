import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import "./styles.scss";

export const SearchBar = () => (
    <div className="search-bar">
        <MagnifyingGlass className="search-bar__icon icon" size={20} />
        <input className="search-bar__input" placeholder="Поиск" />
    </div>
);
