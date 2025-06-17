import { useEffect, useState } from "preact/hooks";

type Props = {
  characterId: string;
};

const FavButton = ({ characterId }: Props) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("favorites="));
    if (cookie) {
      const ids = cookie.split("=")[1].split(",");
      setIsFav(ids.includes(characterId));
    }
  }, [characterId]);

  const toggleFavorite = () => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("favorites="));
    let ids = cookie ? cookie.split("=")[1].split(",") : [];

    if (ids.includes(characterId)) {
      ids = ids.filter((id) => id !== characterId);
    } else {
      ids.push(characterId);
    }

    document.cookie = `favorites=${ids.join(",")}; path=/`;
    setIsFav(!isFav);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFav ? "❤️ Quitar de favoritos" : "🤍 Añadir a favoritos"}
    </button>
  );
};

export default FavButton;
