interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium text-blue-200">{name}</span>
        <span className="text-sm font-medium text-blue-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}