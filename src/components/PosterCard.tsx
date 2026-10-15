type PosterCardProps = {
  title: string;
  runtimeMinutes: number;
};

export function PosterCard({ title, runtimeMinutes }: PosterCardProps) {
  return <article>
      <h2>{title}</h2>
      <p> Runtime: {runtimeMinutes} minutes</p>
  </article>
}