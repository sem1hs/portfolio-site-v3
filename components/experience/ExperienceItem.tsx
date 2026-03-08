type Props = {
  year: string;
  role: string;
  company: string;
  description: string[];
};

export default function ExperienceItem({
  year,
  role,
  company,
  description,
}: Props) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 w-3 h-3 bg-white rounded-full" />

      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-400">{year}</span>

        <h3 className="text-lg font-semibold">
          {role} — <span className="text-neutral-300">{company}</span>
        </h3>

        <ul className="text-sm text-neutral-400 list-disc pl-4 space-y-1">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
