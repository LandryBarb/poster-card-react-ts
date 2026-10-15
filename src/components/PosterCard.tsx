//PosterCard.tsx
type PosterCardProps = {
    title: string;
    runtimeMinutes: number;
    rating: number;
    genres: string[];
};

export function PosterCard({ title, runtimeMinutes, rating, genres }: PosterCardProps) {
    return (
        <article>
            <h2>{title}</h2>
            <p>Runtime: {runtimeMinutes} minutes</p>
            <span className="rating">Rating: {rating} out of 5</span>
            <ul aria-label="Genres">
                {genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
        </article>

    )
}